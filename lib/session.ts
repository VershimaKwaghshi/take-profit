import crypto from "crypto";

// Server-only. Requires SESSION_SECRET to be set in the environment.
// Generate one with: openssl rand -hex 32
const SECRET = process.env.SESSION_SECRET || "";

if (!SECRET && process.env.NODE_ENV === "production") {
  console.error(
    "SESSION_SECRET is not set. Sessions cannot be issued or verified securely."
  );
}

type SessionPayload = {
  id: string;
  email: string;
  is_admin: boolean;
  exp: number; // unix ms
};

function base64UrlEncode(input: Buffer): string {
  return input
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

function base64UrlDecode(input: string): Buffer {
  let base64 = input.replace(/-/g, "+").replace(/_/g, "/");
  while (base64.length % 4) base64 += "=";
  return Buffer.from(base64, "base64");
}

function sign(payload: string): string {
  return base64UrlEncode(
    crypto.createHmac("sha256", SECRET).update(payload).digest()
  );
}

const SESSION_TTL_MS = 1000 * 60 * 60 * 24 * 7; // 7 days

export function createSessionToken(user: {
  id: string;
  email: string;
  is_admin: boolean;
}): string {
  const payload: SessionPayload = {
    id: user.id,
    email: user.email,
    is_admin: !!user.is_admin,
    exp: Date.now() + SESSION_TTL_MS,
  };

  const payloadStr = base64UrlEncode(
    Buffer.from(JSON.stringify(payload), "utf8")
  );

  const signature = sign(payloadStr);

  return `${payloadStr}.${signature}`;
}

export function verifySessionToken(
  token: string | undefined | null
): SessionPayload | null {
  if (!token) return null;

  const parts = token.split(".");
  if (parts.length !== 2) return null;

  const [payloadStr, signature] = parts;

  const expectedSignature = sign(payloadStr);

  const sigBuffer = Buffer.from(signature);
  const expectedBuffer = Buffer.from(expectedSignature);

  if (
    sigBuffer.length !== expectedBuffer.length ||
    !crypto.timingSafeEqual(sigBuffer, expectedBuffer)
  ) {
    return null;
  }

  try {
    const json = base64UrlDecode(payloadStr).toString("utf8");
    const payload = JSON.parse(json) as SessionPayload;

    if (!payload.exp || payload.exp < Date.now()) {
      return null;
    }

    return payload;
  } catch {
    return null;
  }
}
