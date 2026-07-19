"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  async function continueLogin() {
    if (!email) return;

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
        alert(result.error || "Unable to continue");
        return;
      }

      router.push(
        `/verify?email=${encodeURIComponent(email)}`
      );
    } catch {
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-neutral-100 flex items-center justify-center px-6">

      <div className="w-full max-w-md rounded-[36px] border border-neutral-200 bg-white p-10 shadow-sm">

        <Image
          src="/logo.svg"
          alt="Take Profit"
          width={40}
          height={40}
        />

        <h1 className="mt-6 text-4xl font-semibold">
          Welcome back
        </h1>

        <p className="mt-3 text-neutral-500">
          Enter your email to continue.
        </p>

        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-10 w-full rounded-2xl border border-neutral-300 px-5 py-4 outline-none"
        />

        <button
          onClick={continueLogin}
          disabled={loading}
          className="mt-8 w-full rounded-full bg-black py-4 text-white transition hover:opacity-90 disabled:opacity-50"
        >
          {loading ? "Sending..." : "Continue"}
        </button>

      </div>

    </main>
  );
}
