// app/dashboard/capital-building/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useUser } from "../UserProvider";
import ReferralGate from "@/components/ReferralGate";

type Plan = {
  id: string;
  requestedSize: string;
  dayCount: number;
  status: string;
  fundedAt: string | null;
};

export default function CapitalBuildingPage() {
  const { loading: userLoading } = useUser();
  const [plan, setPlan] = useState<Plan | null>(null);
  const [loading, setLoading] = useState(true);
  const [targetSize, setTargetSize] = useState("");
  const [starting, setStarting] = useState(false);
  const [error, setError] = useState("");

  async function load() {
    const res = await fetch("/api/capital-building");
    if (res.ok) {
      const data = await res.json();
      setPlan(data.plan);
    }
    setLoading(false);
  }

  useEffect(() => {
    load();
  }, []);

  async function startPlan(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setStarting(true);

    const res = await fetch("/api/capital-building/start", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ requestedSize: targetSize }),
    });

    const result = await res.json();
    setStarting(false);

    if (!res.ok) {
      setError(result.error || "Something went wrong.");
      return;
    }

    setTargetSize("");
    load();
  }

  if (userLoading || loading) {
    return <p className="text-fog">Loading...</p>;
  }

  return (
    <ReferralGate>
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-ember">Capital Building</p>
        <h1 className="mt-5 text-4xl font-extrabold text-chalk md:text-5xl">Build toward a funded account.</h1>
        <p className="mt-6 max-w-2xl leading-8 text-fog font-medium">
          Request the account size you want and make a small payment toward it every day.
          Take Profit funds the full amount into a live account any time between day eleven
          and day one hundred, funding by day one hundred is guaranteed.
        </p>

        {!plan ? (
          <div className="mt-10 rounded-lg border border-panel-line bg-panel p-8 md:p-10 max-w-md">
            <p className="text-sm font-bold text-chalk">No active capital building plan.</p>
            <form onSubmit={startPlan} className="mt-4 space-y-3">
              <div>
                <label className="text-xs font-bold text-chalk block mb-2">Target account size (USD)</label>
                <input
                  required
                  type="number"
                  min="1"
                  step="0.01"
                  value={targetSize}
                  onChange={(e) => setTargetSize(e.target.value)}
                  placeholder="10000"
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
                disabled={starting}
                className="bg-navy hover:bg-navy-dark text-white text-sm font-bold px-5 py-2.5 rounded-md transition-colors disabled:opacity-50"
              >
                {starting ? "Starting..." : "Start a plan"}
              </button>
            </form>
          </div>
        ) : (
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="rounded-lg border border-panel-line bg-panel p-6">
              <p className="text-[10px] uppercase tracking-wider text-fog font-bold">Target Account</p>
              <p className="mt-2 text-3xl font-extrabold text-chalk">
                ${Number(plan.requestedSize).toLocaleString()}
              </p>
            </div>
            <div className="rounded-lg border border-panel-line bg-panel p-6">
              <p className="text-[10px] uppercase tracking-wider text-fog font-bold">Day</p>
              <p className="mt-2 text-3xl font-extrabold text-chalk">{plan.dayCount} of 100</p>
            </div>
            <div className="rounded-lg border border-panel-line bg-panel p-6">
              <p className="text-[10px] uppercase tracking-wider text-fog font-bold">Status</p>
              <p className="mt-2 text-3xl font-extrabold text-signal-green capitalize">
                {plan.status.replace("_", " ")}
              </p>
            </div>
          </div>
        )}
      </div>
    </ReferralGate>
  );
}
