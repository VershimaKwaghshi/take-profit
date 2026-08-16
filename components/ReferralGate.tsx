"use client";

import { useState } from "react";
import { useUser } from "@/app/dashboard/UserProvider";

export default function ReferralGate({ children }: { children: React.ReactNode }) {
  const { user, loading, refresh } = useUser();
  const [code, setCode] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  if (loading) {
    return <p className="text-fog">Loading...</p>;
  }

  if (user?.has_referrer) {
    return <>{children}</>;
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSubmitting(true);

    const res = await fetch("/api/referrals/link", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ referralCode: code }),
    });

    const result = await res.json();
    setSubmitting(false);

    if (!res.ok) {
      setError(result.error || "Something went wrong.");
      return;
    }

    refresh();
  }

  return (
    <div className="rounded-lg border border-panel-line bg-panel p-8 max-w-md">
      <p className="text-sm font-bold text-chalk">A referral is required for this feature.</p>
      <p className="mt-2 text-sm text-fog font-medium leading-relaxed">
        Enter a referral code from someone already active on Take Profit to unlock manager
        selection, capital building, social bonds, and the referral marketplace.
      </p>

      <form onSubmit={submit} className="mt-5 space-y-3">
        <input
          required
          value={code}
          onChange={(e) => setCode(e.target.value.toUpperCase())}
          placeholder="Referral code"
          className="w-full border border-panel-line rounded-md px-3 py-2.5 text-sm text-chalk font-bold uppercase tracking-wide focus:outline-none focus:ring-2 focus:ring-navy"
        />

        {error && (
          <p className="text-xs font-bold text-oxblood bg-red-50 border border-red-200 rounded-md px-3 py-2">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={submitting}
          className="w-full bg-navy hover:bg-navy-dark text-white font-bold text-sm py-2.5 rounded-md disabled:opacity-50"
        >
          {submitting ? "Linking..." : "Unlock features"}
        </button>
      </form>
    </div>
  );
}
