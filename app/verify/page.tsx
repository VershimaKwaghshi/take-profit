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

  async function verifyCode() {
    if (code.length !== 6) {
      alert("Enter the 6-digit verification code.");
      return;
    }

    setLoading(true);

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
        alert(result.error || "Invalid verification code.");
        setLoading(false);
        return;
      }

      router.push("/dashboard");
    } catch {
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  async function resendCode() {
    try {
      await fetch("/api/resend-code", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
        }),
      });

      alert("A new verification code has been sent.");
    } catch {
      alert("Unable to resend code.");
    }
  }

  return (
    <main className="min-h-screen bg-neutral-100 flex items-center justify-center px-6">
      <div className="w-full max-w-md rounded-[36px] border border-neutral-200 bg-white p-10 shadow-sm">

        <div className="flex items-center gap-3">
          <Image
            src="/logo.svg"
            alt="Take Profit"
            width={42}
            height={42}
          />

          <span className="text-lg font-semibold">
            Take Profit
          </span>
        </div>

        <div className="mt-8 inline-flex rounded-full bg-blue-100 px-5 py-2">
          <span className="text-sm font-semibold text-blue-700">
            STEP 2 OF 4
          </span>
        </div>

        <h1 className="mt-8 text-4xl font-semibold">
          Verify Your Email
        </h1>

        <p className="mt-4 leading-7 text-neutral-500">
          We've sent a 6-digit verification code to:
        </p>

        <p className="mt-3 font-semibold break-all">
          {email}
        </p>

        <input
          type="text"
          inputMode="numeric"
          maxLength={6}
          value={code}
          onChange={(e) =>
            setCode(
              e.target.value.replace(/\D/g, "")
            )
          }
          placeholder="Enter 6-digit code"
          className="mt-10 w-full rounded-2xl border border-neutral-300 px-5 py-4 text-center text-3xl tracking-[12px] outline-none focus:border-black"
        />

        <button
          onClick={verifyCode}
          disabled={loading}
          className="mt-8 w-full rounded-full bg-black py-4 font-medium text-white"
        >
          {loading ? "Verifying..." : "Verify Code"}
        </button>

        <button
          onClick={resendCode}
          className="mt-5 w-full rounded-full border border-neutral-300 py-4"
        >
          Resend Code
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