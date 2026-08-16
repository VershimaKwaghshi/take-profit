// app/dashboard/deposit/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "../UserProvider";

type Broker = { id: string; name: string };

export default function DepositPage() {
  const { loading: userLoading } = useUser();
  const router = useRouter();
  const [brokers, setBrokers] = useState<Broker[]>([]);
  const [brokerId, setBrokerId] = useState("");
  const [size, setSize] = useState("");
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function load() {
      const res = await fetch("/api/brokers");
      if (res.ok) {
        const data = await res.json();
        setBrokers(data.brokers);
        if (data.brokers.length > 0) setBrokerId(data.brokers[0].id);
      }
      setLoading(false);
    }
    load();
  }, []);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSubmitting(true);

    const res = await fetch("/api/deposits", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ brokerId, size }),
    });

    const result = await res.json();
    setSubmitting(false);

    if (!res.ok) {
      setError(result.error || "Something went wrong.");
      return;
    }

    router.push("/dashboard");
  }

  if (userLoading || loading) {
    return <p className="text-fog">Loading...</p>;
  }

  return (
    <div>
      <p className="text-xs font-bold uppercase tracking-[0.3em] text-fog">Deposit</p>
      <h1 className="mt-5 text-4xl font-extrabold text-chalk md:text-5xl">Connect your trading account.</h1>
      <p className="mt-4 text-sm text-fog font-medium max-w-2xl">
        Take Profit is not a broker, your capital stays in your own account. Tell us which
        partner broker holds it and how large it is, and your dashboard, manager selection,
        and everything else activates from there.
      </p>

      <form onSubmit={submit} className="mt-8 max-w-md rounded-lg border border-panel-line bg-panel p-6 space-y-5">
        <div>
          <label className="text-xs font-bold text-chalk block mb-2">Partner broker</label>
          <select
            required
            value={brokerId}
            onChange={(e) => setBrokerId(e.target.value)}
            className="w-full border border-panel-line rounded-md px-3 py-2.5 text-sm text-chalk font-medium bg-panel focus:outline-none focus:ring-2 focus:ring-navy"
          >
            {brokers.map((b) => (
              <option key={b.id} value={b.id}>{b.name}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="text-xs font-bold text-chalk block mb-2">Account size (USD)</label>
          <input
            required
            type="number"
            min="1"
            step="0.01"
            value={size}
            onChange={(e) => setSize(e.target.value)}
            placeholder="1000"
            className="w-full border border-panel-line rounded-md px-3 py-2.5 text-sm text-chalk font-medium focus:outline-none focus:ring-2 focus:ring-navy"
          />
        </div>

        {error && (
          <p className="text-xs font-bold text-oxblood bg-red-50 border border-red-200 rounded-md px-3 py-2">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={submitting || !brokerId}
          className="w-full bg-navy hover:bg-navy-dark text-white font-bold text-sm py-3 rounded-md disabled:opacity-50"
        >
          {submitting ? "Connecting..." : "Connect account"}
        </button>
      </form>
    </div>
  );
}
