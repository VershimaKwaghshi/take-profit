"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  async function continueLogin() {
    if (!email.trim()) {
      alert("Please enter your email.");
      return;
    }

    setLoading(true);

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
        alert(result.error || "Unable to continue.");
        return;
      }

      // SAVE EMAIL FOR DASHBOARD
      localStorage.setItem("tp-email", email);

      router.push(
        `/verify?email=${encodeURIComponent(email)}`
      );
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
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

        <button
          onClick={() => router.push("/")}
          className="mt-6 text-sm text-neutral-500 transition hover:text-black"
        >
          ← Back to Home
        </button>

        <h1 className="mt-6 text-4xl font-semibold tracking-tight">
          Welcome back
        </h1>

        <p className="mt-3 text-neutral-500 leading-7">
          Enter the email address you used to join the Take Profit waitlist.
          We'll send you a fresh verification code.
        </p>

        <input
          type="email"
          placeholder="Email address"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              continueLogin();
            }
          }}
          className="mt-10 w-full rounded-2xl border border-neutral-300 bg-white px-5 py-4 outline-none transition focus:border-black focus:ring-2 focus:ring-black/10"
        />

        <button
          onClick={continueLogin}
          disabled={loading}
          className="mt-8 w-full rounded-full bg-black py-4 font-medium text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? "Sending verification code..." : "Continue"}
        </button>

      </div>

    </main>
  );
}