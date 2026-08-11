import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { verifySessionToken } from "./session";

export const SESSION_COOKIE_NAME = "tp_session";

export async function getSessionFromCookies() {
  const cookieStore = await cookies();

  const raw = cookieStore.get(SESSION_COOKIE_NAME)?.value;

  if (!raw) return null;

  return verifySessionToken(raw);
}

export function getSessionFromRequest(request: Request) {
  const cookieHeader = request.headers.get("cookie") || "";

  const match = cookieHeader
    .split(";")
    .map((c) => c.trim())
    .find((c) => c.startsWith(`${SESSION_COOKIE_NAME}=`));

  if (!match) return null;

  const raw = match.slice(SESSION_COOKIE_NAME.length + 1);

  let token: string;
  try {
    token = decodeURIComponent(raw);
  } catch {
    token = raw;
  }

  return verifySessionToken(token);
}

export function requireSession(request: Request) {
  const session = getSessionFromRequest(request);

  if (!session) {
    return {
      session: null,
      response: NextResponse.json(
        { error: "Not authenticated." },
        { status: 401 }
      ),
    };
  }

  return { session, response: null as NextResponse | null };
}

export function requireAdmin(request: Request) {
  const session = getSessionFromRequest(request);

  if (!session) {
    return {
      session: null,
      response: NextResponse.json(
        { error: "Not authenticated." },
        { status: 401 }
      ),
    };
  }

  if (!session.is_admin) {
    return {
      session: null,
      response: NextResponse.json(
        { error: "Forbidden." },
        { status: 403 }
      ),
    };
  }

  return { session, response: null as NextResponse | null };
}
