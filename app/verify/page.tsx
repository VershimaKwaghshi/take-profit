"use client";

import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";

function VerifyContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const email = searchParams.get("email") || "";

  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");

  async function verifyCode() {
    if (code.length !== 6) {
      setError("Enter the 6-digit verification code.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, code }),
      });

      const result = await response.json();

      if (!response.ok) {
        setError(result.error || "Invalid verification code.");
        setLoading(false);
        return;
      }

      router.push("/dashboard");
    } catch {
      setError("Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  async function resendCode() {
    setError("");
    setNotice("");

    try {
      await fetch("/api/resend-code", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      setNotice("A new verification code has been sent.");
    } catch {
      setError("Unable to resend code.");
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-mist px-6">
      <div className="w-full max-w-md rounded-lg border border-line bg-paper p-10">

        <div className="flex items-center gap-3">
          <Image src="/logo.svg" alt="Take Profit" width={40} height={40} />
          <span className="text-lg font-semibold text-ink">Take Profit</span>
        </div>

        <div className="mt-8 inline-flex rounded-full border border-oxblood/25 bg-oxblood/5 px-5 py-2">
          <span className="font-mono text-xs font-semibold tracking-[0.2em] text-oxblood">
            STEP 2 OF 4
          </span>
        </div>

        <h1 className="mt-8 text-3xl font-semibold text-ink">
          Verify your email
        </h1>

        <p className="mt-4 leading-7 text-ash">
          We&apos;ve sent a 6-digit verification code to:
        </p>

        <p className="mt-3 break-all font-semibold text-ink">{email}</p>

        <input
          type="text"
          inputMode="numeric"
          maxLength={6}
          value={code}
          onChange={(e) => setCode(e.target.value.replace(/\D/g, ""))}
          placeholder="000000"
          className="mt-10 w-full rounded-md border border-line px-5 py-4 text-center font-mono text-3xl tracking-[12px] text-ink outline-none transition focus:border-ink"
        />

        {error && <p className="mt-3 text-sm text-oxblood">{error}</p>}
        {notice && !error && (
          <p className="mt-3 text-sm text-ash">{notice}</p>
        )}

        <button
          onClick={verifyCode}
          disabled={loading}
          className="mt-8 w-full rounded-full bg-ink py-4 font-medium text-paper transition hover:bg-oxblood disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? "Verifying..." : "Verify code"}
        </button>

        <button
          onClick={resendCode}
          className="mt-5 w-full rounded-full border border-line py-4 text-ink transition hover:border-ink"
        >
          Resend code
        </button>
      </div>
    </main>
  );
}

export default function VerifyPage() {
  return (
    <Suspense fallback={null}>
      <VerifyContent />
    </Suspense>
  );
}