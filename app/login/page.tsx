"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function continueLogin() {
    if (!email.trim()) {
      setError("Please enter your email.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/resend-code", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();

      if (!response.ok) {
        setError(result.error || "Unable to continue.");
        return;
      }

      router.push(`/verify?email=${encodeURIComponent(email)}`);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-mist px-6">
      <div className="w-full max-w-md rounded-lg border border-line bg-paper p-10">

        <div className="flex items-center gap-3">
          <Image src="/logo.svg" alt="Take Profit" width={40} height={40} />
          <span className="text-lg font-semibold text-ink">Take Profit</span>
        </div>

        <button
          onClick={() => router.push("/")}
          className="mt-6 text-sm text-ash transition hover:text-ink"
        >
          ← Back to home
        </button>

        <h1 className="mt-6 text-3xl font-semibold tracking-tight text-ink">
          Welcome back
        </h1>

        <p className="mt-3 leading-7 text-ash">
          Enter the email address you used to join the Take Profit waitlist.
          We&apos;ll send you a fresh verification code.
        </p>

        <input
          type="email"
          placeholder="Email address"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") continueLogin();
          }}
          className="mt-10 w-full rounded-md border border-line bg-paper px-5 py-4 text-ink outline-none transition focus:border-ink"
        />

        {error && <p className="mt-3 text-sm text-oxblood">{error}</p>}

        <button
          onClick={continueLogin}
          disabled={loading}
          className="mt-8 w-full rounded-full bg-ink py-4 font-medium text-paper transition hover:bg-oxblood disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? "Sending verification code..." : "Continue"}
        </button>

      </div>
    </main>
  );
}