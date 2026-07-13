"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function VerifyPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const email = searchParams.get("email") || "";

  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function verifyEmail() {
    setLoading(true);
    setMessage("");

    const response = await fetch("/api/verify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        code,
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      setMessage(result.error || "Verification failed");
      setLoading(false);
      return;
    }

    setMessage("Email verified successfully");
    setLoading(false);
    router.push("/success");
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="w-full max-w-md text-center">
        <h1 className="text-3xl font-semibold text-black">
          Verify your email
        </h1>

        <p className="mt-4 text-neutral-600">
          Enter the six digit code sent to
        </p>

        <p className="mt-1 font-medium text-black">
          {email}
        </p>

        <input
          type="text"
          inputMode="numeric"
          maxLength={6}
          value={code}
          onChange={(event) =>
            setCode(event.target.value.replace(/\D/g, ""))
          }
          placeholder="000000"
          className="mt-8 w-full rounded-xl border border-neutral-300 px-4 py-4 text-center text-2xl tracking-[0.5em] text-black outline-none"
        />

        <button
          onClick={verifyEmail}
          disabled={loading || code.length !== 6}
          className="mt-4 w-full rounded-full bg-black px-6 py-4 text-white disabled:opacity-50"
        >
          {loading ? "Verifying..." : "Verify email"}
        </button>

        {message && (
          <p className="mt-4 text-sm text-neutral-700">
            {message}
          </p>
        )}
      </div>
    </main>
  );
}