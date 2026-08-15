// app/dashboard/social-bonds/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useUser } from "../UserProvider";

type LiquidityRequest = {
  id: string;
  requestedAmount: string;
  status: string;
  lienExpiresAt: string | null;
};

export default function SocialBondsPage() {
  const { loading: userLoading } = useUser();
  const [requests, setRequests] = useState<LiquidityRequest[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const res = await fetch("/api/social-bonds");
      if (res.ok) {
        const data = await res.json();
        setRequests(data.requests);
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
      <p className="text-xs font-bold uppercase tracking-[0.3em] text-ember">Social Bond</p>
      <h1 className="mt-5 text-4xl font-extrabold text-chalk md:text-5xl">Access liquidity without losing momentum.</h1>
      <p className="mt-6 max-w-2xl leading-8 text-fog font-medium">
        Request an amount against your existing account value, other members fund it,
        and your capital stays right where it is, still working.
      </p>

      <div className="mt-10 rounded-lg border border-panel-line bg-panel overflow-hidden">
        <div className="p-6 flex items-center justify-between border-b border-panel-line">
          <p className="text-sm font-bold text-chalk">Your requests</p>
          <button className="bg-navy hover:bg-navy-dark text-white text-xs font-bold px-4 py-2 rounded-md transition-colors">
            New request
          </button>
        </div>
        {requests.length === 0 ? (
          <p className="p-6 text-sm text-fog font-medium">No liquidity requests yet.</p>
        ) : (
          <table className="w-full text-xs">
            <thead className="bg-deck text-[10px] font-bold uppercase tracking-wider text-fog">
              <tr>
                <th className="text-left p-3">Amount</th>
                <th className="text-left p-3">Status</th>
                <th className="text-left p-3">Lien Expires</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-panel-line">
              {requests.map((r) => (
                <tr key={r.id}>
                  <td className="p-3 font-bold text-chalk">${Number(r.requestedAmount).toLocaleString()}</td>
                  <td className="p-3 font-medium text-fog capitalize">{r.status.replace("_", " ")}</td>
                  <td className="p-3 font-medium text-fog">
                    {r.lienExpiresAt ? new Date(r.lienExpiresAt).toLocaleDateString() : "—"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
