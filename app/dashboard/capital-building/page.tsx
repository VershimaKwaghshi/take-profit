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

type Payment = {
  dayNumber: number;
  amount: string;
  paidAt: string;
};

type Broker = { id: string; name: string };

export default function CapitalBuildingPage() {
  const { loading: userLoading } = useUser();
  const [plan, setPlan] = useState<Plan | null>(null);
  const [payments, setPayments] = useState<Payment[]>([]);
  const [brokers, setBrokers] = useState<Broker[]>([]);
  const [brokerId, setBrokerId] = useState("");
  const [loading, setLoading] = useState(true);
  const [targetSize, setTargetSize] = useState("");
  const [starting, setStarting] = useState(false);
  const [paying, setPaying] = useState(false);
  const [error, setError] = useState("");
  const [justCompleted, setJustCompleted] = useState(false);

  async function load() {
    const [planRes, brokersRes] = await Promise.all([
      fetch("/api/capital-building"),
      fetch("/api/brokers"),
    ]);

    if (planRes.ok) {
      const data = await planRes.json();
      setPlan(data.plan);
      setPayments(data.payments);
    }

    if (brokersRes.ok) {
      const data = await brokersRes.json();
      setBrokers(data.brokers);
      if (data.brokers.length > 0) setBrokerId((prev) => prev || data.brokers[0].id);
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
      body: JSON.stringify({ requestedSize: targetSize, brokerId }),
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

  async function makePayment() {
    setError("");
    setPaying(true);

    const res = await fetch("/api/capital-building/pay", { method: "POST" });
    const result = await res.json();
    setPaying(false);

    if (!res.ok) {
      setError(result.error || "Something went wrong.");
      return;
    }

    if (result.tradingAccount) {
      setJustCompleted(true);
    }

    load();
  }

  if (userLoading || loading) {
    return <p className="text-fog">Loading...</p>;
  }

  if (!plan) {
    return (
      <ReferralGate>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-ember">Capital Access, Ownership Path</p>
          <h1 className="mt-5 text-4xl font-extrabold text-chalk md:text-5xl">Capital Building</h1>
          <p className="mt-4 text-sm text-fog font-medium max-w-2xl">
            Build toward a fully funded live account through a daily contribution schedule.
          </p>

          <div className="mt-10 rounded-lg border border-panel-line bg-panel p-8 md:p-10 max-w-md">
            <p className="text-sm font-bold text-chalk">No active capital building plan.</p>
            <form onSubmit={startPlan} className="mt-4 space-y-3">
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
                disabled={starting || !brokerId}
                className="bg-navy hover:bg-navy-dark text-white text-sm font-bold px-5 py-2.5 rounded-md transition-colors disabled:opacity-50"
              >
                {starting ? "Starting..." : "Start a plan"}
              </button>
            </form>
          </div>
        </div>
      </ReferralGate>
    );
  }

  const target = Number(plan.requestedSize);
  const totalDailyPayment = Math.round(target * 0.011 * 100) / 100;
  const percentComplete = Math.round((plan.dayCount / 100) * 100);
  const isComplete = plan.status === "completed";

  return (
    <ReferralGate>
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-ember">Capital Access, Ownership Path</p>
        <h1 className="mt-5 text-4xl font-extrabold text-chalk md:text-5xl">Capital Building</h1>
        <p className="mt-4 text-sm text-fog font-medium max-w-2xl">
          Build toward a fully funded live account through a daily contribution schedule.
        </p>

        {justCompleted && (
          <div className="mt-6 rounded-lg border border-emerald-200 bg-emerald-50 p-5">
            <p className="text-sm font-bold text-emerald-700">Schedule complete. Your account is funded.</p>
            <p className="mt-1 text-xs text-emerald-700/80 font-medium">
              A live trading account for ${target.toLocaleString()} now belongs to you in full.
              Head to Manager Selection to get matched.
            </p>
          </div>
        )}

        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-5">
          <div className="rounded-lg border border-panel-line bg-panel p-5">
            <p className="text-[10px] uppercase tracking-wider text-fog font-bold">Target Account Size</p>
            <p className="mt-2 text-2xl font-extrabold text-chalk">${target.toLocaleString()}</p>
            <p className="mt-1 text-[11px] text-fog font-medium">Requested target</p>
          </div>
          <div className="rounded-lg border border-panel-line bg-panel p-5">
            <p className="text-[10px] uppercase tracking-wider text-fog font-bold">Total Daily Payment</p>
            <p className="mt-2 text-2xl font-extrabold text-chalk">${totalDailyPayment.toFixed(2)}</p>
            <p className="mt-1 text-[11px] text-fog font-medium">1.1% of target per day</p>
          </div>
          <div className="rounded-lg border border-panel-line bg-panel p-5">
            <p className="text-[10px] uppercase tracking-wider text-fog font-bold">Current Progress</p>
            <p className="mt-2 text-2xl font-extrabold text-chalk">Day {plan.dayCount} <span className="text-fog text-base">/ 100</span></p>
            <p className="mt-1 text-[11px] text-signal-green font-bold">
              {isComplete ? "Schedule complete" : "Schedule active"}
            </p>
          </div>
          <div className="rounded-lg border border-panel-line bg-panel p-5">
            <p className="text-[10px] uppercase tracking-wider text-fog font-bold">Funding Window</p>
            <p className="mt-2 text-2xl font-extrabold text-chalk">Day 11–100</p>
            <p className="mt-1 text-[11px] text-fog font-medium">Funding by day 100 guaranteed</p>
          </div>
        </div>

        <div className="mt-6 rounded-lg border border-panel-line bg-panel p-6">
          <div className="flex items-center justify-between mb-3">
            <p className="text-sm font-bold text-chalk">Your path to ownership</p>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-deck border border-panel-line text-fog">
              {percentComplete}% COMPLETE
            </span>
          </div>
          <div className="h-2 rounded-full bg-deck overflow-hidden">
            <div
              className="h-full bg-navy rounded-full transition-all"
              style={{ width: `${percentComplete}%` }}
            />
          </div>
        </div>

        <div className="mt-6 rounded-lg border border-panel-line bg-panel p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-sm font-bold text-chalk">Contribution schedule</p>
              <p className="text-xs text-fog font-medium mt-0.5">Your payment history. Each payment is 1.1% of your target.</p>
            </div>
            {!isComplete && (
              <button
                onClick={makePayment}
                disabled={paying}
                className="bg-navy hover:bg-navy-dark text-white text-xs font-bold px-4 py-2.5 rounded-md disabled:opacity-50"
              >
                {paying ? "Processing..." : "Make today's payment"}
              </button>
            )}
          </div>

          {error && (
            <p className="mb-4 text-xs font-bold text-oxblood bg-red-50 border border-red-200 rounded-md px-3 py-2">
              {error}
            </p>
          )}

          {payments.length === 0 ? (
            <p className="text-sm text-fog font-medium">No payments made yet.</p>
          ) : (
            <table className="w-full text-xs">
              <thead className="bg-deck text-[10px] font-bold uppercase tracking-wider text-fog">
                <tr>
                  <th className="text-left p-3">Date</th>
                  <th className="text-left p-3">Day</th>
                  <th className="text-left p-3">Total Due</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-panel-line">
                {payments.map((p) => (
                  <tr key={p.dayNumber}>
                    <td className="p-3 font-bold text-chalk">{new Date(p.paidAt).toLocaleDateString()}</td>
                    <td className="p-3 font-medium text-fog">{p.dayNumber}</td>
                    <td className="p-3 font-medium text-fog">${Number(p.amount).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        <div className="mt-6 rounded-lg bg-chalk p-6 text-deck">
          <p className="text-sm font-bold">Ownership is earned at completion.</p>
          <p className="mt-1 text-xs text-deck/70 font-medium">
            Complete the full 100 day schedule and you take full ownership of the funded account
            and everything in it.
          </p>
        </div>
      </div>
    </ReferralGate>
  );
}
