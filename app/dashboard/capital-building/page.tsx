// app/dashboard/capital-building/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useUser } from "../UserProvider";

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

  useEffect(() => {
    async function load() {
      const res = await fetch("/api/capital-building");
      if (res.ok) {
        const data = await res.json();
        setPlan(data.plan);
      }
      setLoading(false);
    }
    load();
  }, []);

  if (userLoading || loading) {
    return <p className="text-fog">Loading...</p>;
  }

  return (
    <div>
      <p className="text-xs font-bold uppercase tracking-[0.3em] text-ember">Capital Building</p>
      <h1 className="mt-5 text-4xl font-extrabold text-chalk md:text-5xl">Build toward a funded account.</h1>
      <p className="mt-6 max-w-2xl leading-8 text-fog font-medium">
        Request the account size you want and make a small payment toward it every day.
        Take Profit funds the full amount into a live account any time between day eleven
        and day one hundred, funding by day one hundred is guaranteed.
      </p>

      {!plan ? (
        <div className="mt-10 rounded-lg border border-panel-line bg-panel p-8 md:p-10">
          <p className="text-sm font-bold text-chalk">No active capital building plan.</p>
          <button className="mt-4 bg-navy hover:bg-navy-dark text-white text-sm font-bold px-5 py-2.5 rounded-md transition-colors">
            Start a plan
          </button>
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
  );
}
