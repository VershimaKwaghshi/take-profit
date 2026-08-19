// app/dashboard/managers/apply/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useUser } from "../../UserProvider";
import ReferralGate from "@/components/ReferralGate";

type Status = {
  hasProfile: boolean;
  profile: { alias: string; region: string; qualifiedAt: string } | null;
  qualifies: boolean;
  qualifyingAccount: { id: string; size: string } | null;
};

const REGIONS = ["EU-WEST", "NA-EAST", "APAC"];

export default function ManagerApplyPage() {
  const { loading: userLoading } = useUser();
  const [status, setStatus] = useState<Status | null>(null);
  const [loading, setLoading] = useState(true);
  const [alias, setAlias] = useState("");
  const [region, setRegion] = useState(REGIONS[0]);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function load() {
    const res = await fetch("/api/managers/apply");
    if (res.ok) {
      const data = await res.json();
      setStatus(data);
    }
    setLoading(false);
  }

  useEffect(() => {
    load();
  }, []);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSubmitting(true);

    const res = await fetch("/api/managers/apply", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ alias, region }),
    });

    const result = await res.json();
    setSubmitting(false);

    if (!res.ok) {
      setError(result.error || "Something went wrong.");
      return;
    }

    load();
  }

  if (userLoading || loading) {
    return <p className="text-fog">Loading...</p>;
  }

  return (
    <ReferralGate>
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-ember">Become a Manager</p>
        <h1 className="mt-5 text-4xl font-extrabold text-chalk md:text-5xl">Manage other accounts.</h1>
        <p className="mt-4 text-sm text-fog font-medium max-w-2xl">
          There is no separate evaluation. To manage other traders, you need an account of your
          own actively managed by another manager, that mutual exposure is the qualification.
        </p>

        {status?.hasProfile ? (
          <div className="mt-10 rounded-lg border border-emerald-200 bg-emerald-50 p-6 max-w-md">
            <p className="text-sm font-bold text-emerald-700">You are an approved manager.</p>
            <p className="mt-2 text-sm text-emerald-700/80 font-medium">
              Alias {status.profile?.alias}, region {status.profile?.region}.
            </p>
          </div>
        ) : !status?.qualifies ? (
          <div className="mt-10 rounded-lg border border-panel-line bg-panel p-8 max-w-md">
            <p className="text-sm font-bold text-chalk">You do not qualify yet.</p>
            <p className="mt-2 text-sm text-fog font-medium leading-relaxed">
              You need an active trading account that is currently being managed by another
              manager before you can apply. Deposit or fund an account, then assign a manager
              to it from Manager Selection.
            </p>
          </div>
        ) : (
          <form onSubmit={submit} className="mt-10 max-w-md rounded-lg border border-panel-line bg-panel p-6 space-y-4">
            <div>
              <p className="text-[10px] uppercase tracking-wider text-fog font-bold mb-1">Qualifying Account</p>
              <p className="text-sm font-bold text-chalk">
                ${Number(status.qualifyingAccount?.size).toLocaleString()}, actively managed
              </p>
            </div>

            <div>
              <label className="text-xs font-bold text-chalk block mb-2">Manager alias</label>
              <input
                required
                value={alias}
                onChange={(e) => setAlias(e.target.value.toUpperCase())}
                placeholder="MGR-ALIAS-42"
                className="w-full border border-panel-line rounded-md px-3 py-2.5 text-sm text-chalk font-bold uppercase tracking-wide focus:outline-none focus:ring-2 focus:ring-navy"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-chalk block mb-2">Region</label>
              <select
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                className="w-full border border-panel-line rounded-md px-3 py-2.5 text-sm text-chalk font-medium bg-panel focus:outline-none focus:ring-2 focus:ring-navy"
              >
                {REGIONS.map((r) => (
                  <option key={r} value={r}>{r}</option>
                ))}
              </select>
            </div>

            {error && (
              <p className="text-xs font-bold text-oxblood bg-red-50 border border-red-200 rounded-md px-3 py-2">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-navy hover:bg-navy-dark text-white font-bold text-sm py-3 rounded-md disabled:opacity-50"
            >
              {submitting ? "Applying..." : "Apply to become a manager"}
            </button>
          </form>
        )}
      </div>
    </ReferralGate>
  );
}
