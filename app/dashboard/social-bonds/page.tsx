// app/dashboard/social-bonds/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useUser } from "../UserProvider";

type Bond = {
  id: string;
  bondCode: string;
  location: string;
  bondType: string;
  targetReturnPct: string;
  status: string;
};

type Summary = {
  totalBondsFunded: number;
  totalValue: number;
  weightedYield: number;
};

export default function SocialBondsPage() {
  const { loading: userLoading } = useUser();
  const [bonds, setBonds] = useState<Bond[]>([]);
  const [summary, setSummary] = useState<Summary | null>(null);
  const [loading, setLoading] = useState(true);
  const [funding, setFunding] = useState<string | null>(null);

  async function load() {
    const res = await fetch("/api/social-bonds");
    if (res.ok) {
      const data = await res.json();
      setBonds(data.bonds);
      setSummary(data.summary);
    }
    setLoading(false);
  }

  useEffect(() => {
    load();
  }, []);

  async function fund(bondId: string, minInvestment: number) {
    setFunding(bondId);
    await fetch("/api/social-bonds/fund", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ bondId, amount: minInvestment || 1000 }),
    });
    setFunding(null);
    load();
  }

  if (userLoading || loading) {
    return <p className="text-fog">Loading...</p>;
  }

  return (
    <div>
      <p className="text-xs font-bold uppercase tracking-[0.3em] text-fog">Social Bonds</p>
      <h1 className="mt-5 text-4xl font-extrabold text-chalk md:text-5xl">Available Social Bond Opportunities</h1>
      <p className="mt-4 text-sm text-fog font-medium max-w-2xl">
        Secure yield by supporting accredited community infrastructure projects.
      </p>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">
        <div className="rounded-lg border border-panel-line bg-panel overflow-hidden">
          <table className="w-full text-xs">
            <thead className="bg-deck text-[10px] font-bold uppercase tracking-wider text-fog">
              <tr>
                <th className="text-left p-3">Bond ID</th>
                <th className="text-left p-3">Location</th>
                <th className="text-left p-3">Bond Type</th>
                <th className="text-left p-3">Target Return</th>
                <th className="text-left p-3">Status</th>
                <th className="text-right p-3">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-panel-line">
              {bonds.map((bond) => (
                <tr key={bond.id}>
                  <td className="p-3 font-bold text-chalk">{bond.bondCode}</td>
                  <td className="p-3 font-medium text-fog">{bond.location}</td>
                  <td className="p-3 font-medium text-fog">{bond.bondType}</td>
                  <td className="p-3 font-bold text-chalk">{Number(bond.targetReturnPct).toFixed(1)}% per annum</td>
                  <td className="p-3">
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase ${
                        bond.status === "eligible"
                          ? "bg-red-50 text-oxblood border border-red-200"
                          : bond.status === "funded"
                          ? "bg-deck text-fog border border-panel-line"
                          : "bg-amber-50 text-amber-700 border border-amber-200"
                      }`}
                    >
                      {bond.status.replace("_", " ")}
                    </span>
                  </td>
                  <td className="p-3 text-right">
                    {bond.status === "eligible" ? (
                      <button
                        onClick={() => fund(bond.id, 1000)}
                        disabled={funding === bond.id}
                        className="bg-navy hover:bg-navy-dark text-white text-xs px-3 py-1.5 rounded-md font-bold disabled:opacity-50"
                      >
                        {funding === bond.id ? "Funding..." : "Fund"}
                      </button>
                    ) : (
                      <button className="border border-panel-line text-fog text-xs px-3 py-1.5 rounded-md font-bold">
                        View Details
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="rounded-lg border border-panel-line bg-panel p-6 space-y-5">
          <p className="text-sm font-bold text-chalk">Your Investment Summary</p>
          <div>
            <p className="text-[10px] uppercase tracking-wider text-fog font-bold">Total</p>
            <p className="text-2xl font-extrabold text-chalk">{summary?.totalBondsFunded ?? 0}</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-wider text-fog font-bold">Total Social Bonds Funded</p>
            <p className="text-2xl font-extrabold text-chalk">{summary?.totalBondsFunded ?? 0}</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-wider text-fog font-bold">Total Value</p>
            <p className="text-2xl font-extrabold text-chalk">
              ${(summary?.totalValue ?? 0).toLocaleString()}
            </p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-wider text-fog font-bold">Overall Weighted Yield</p>
            <p className="text-2xl font-extrabold text-signal-green">
              {(summary?.weightedYield ?? 0).toFixed(1)}%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
