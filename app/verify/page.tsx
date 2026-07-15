"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function VerifyPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email") || "";

  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false);

  async function verifyEmail() {
    setLoading(true);
    setMessage("");

    try {
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
        return;
      }

      router.push("/success");
    } catch (error) {
      console.error("Verification error:", error);
      setMessage("Unable to verify email");
    } finally {
      setLoading(false);
    }
  }

  async function resendCode() {
    setResending(true);
    setMessage("");

    try {
      const response = await fetch("/api/resend-code", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        setMessage(result.error || "Unable to resend code");
        return;
      }

      setMessage("A new verification code has been sent");
    } catch (error) {
      console.error("Resend code error:", error);
      setMessage("Unable to resend code");
    } finally {
      setResending(false);
    }
  }

  return (
    <main className="min-h-screen bg-white text-black flex items-center justify-center px-6">
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
          className="mt-8 w-full rounded-xl border border-neutral-300 bg-white text-black"
        />

        <button
          onClick={verifyEmail}
          disabled={loading || code.length !== 6}
          className="mt-4 w-full rounded-full bg-black px-6 py-4 text-white disabled:bg-neutral-400"
        >
          {loading ? "Verifying..." : "Verify email"}
        </button>

        <button
          onClick={resendCode}
          disabled={resending}
          className="mt-5 text-sm text-neutral-600 underline disabled:text-neutral-400"
        >
          {resending ? "Sending..." : "Resend code"}
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