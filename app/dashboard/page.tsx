// app/dashboard/page.tsx
"use client";

import { useEffect, useState } from "react";
import { User, ShieldCheck, Diamond, Lock, Eye, BarChart3, Clock } from "lucide-react";
import { useUser } from "./UserProvider";

type Summary = {
  balance: string;
  status: string;
  managerAlias: string | null;
  region: string | null;
  splitType: string | null;
} | null;

export default function DashboardPage() {
  const { loading: userLoading } = useUser();
  const [account, setAccount] = useState<Summary>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const res = await fetch("/api/dashboard-summary");
      if (res.ok) {
        const data = await res.json();
        setAccount(data.account);
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
      <p className="text-xs font-bold uppercase tracking-[0.3em] text-fog">Dashboard</p>

      {!account ? (
        <div className="mt-8 rounded-lg border border-panel-line bg-panel p-8 md:p-10">
          <p className="text-sm font-bold text-chalk">No active trading account yet.</p>
          <p className="mt-2 text-sm text-fog font-medium">
            Once you have a funded or deposited account, your balance, manager, and split show up here.
          </p>
        </div>
      ) : (
        <>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="rounded-lg border border-panel-line bg-panel p-6">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm font-bold text-chalk">Account Balance (USD)</p>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 uppercase">
                  {account.status}
                </span>
              </div>
              <p className="text-3xl font-extrabold text-chalk">
                ${Number(account.balance).toLocaleString(undefined, { minimumFractionDigits: 2 })}
              </p>
              <p className="mt-3 text-xs text-fog font-medium">Partner Broker Custody · Real-time settlement</p>
            </div>

            <div className="rounded-lg border border-panel-line bg-panel p-6">
              <p className="text-sm font-bold text-chalk mb-2">Assigned Manager</p>
              <p className="text-3xl font-extrabold text-chalk flex items-center gap-2 flex-wrap">
                {account.managerAlias ?? "Not yet assigned"}
                {account.region && (
                  <span className="text-xs font-bold px-2 py-1 rounded bg-deck border border-panel-line text-fog">
                    {account.region}
                  </span>
                )}
              </p>
              {account.managerAlias && (
                <span className="mt-3 inline-block text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 uppercase">
                  Rotating alias active
                </span>
              )}
              <p className="mt-3 text-xs text-fog font-medium">Zero favoritism</p>
            </div>

            <div className="rounded-lg border border-panel-line bg-panel p-6">
              <p className="text-sm font-bold text-chalk mb-2">Profit Split</p>
              <p className="text-3xl font-extrabold text-chalk">
                {account.splitType === "three_way" ? "Three way" : "50 / 50"}
              </p>
              <div className="mt-1 flex justify-between text-[10px] font-bold uppercase text-fog">
                <span>Trader</span>
                <span>Manager</span>
              </div>
              <p className="mt-3 text-xs text-fog font-medium">Equally split between trader and manager</p>
            </div>
          </div>

          <div className="mt-6 rounded-lg border border-panel-line bg-panel p-6 md:p-8">
            <p className="text-xl font-extrabold text-chalk">TP Profit Split &amp; Protection Engine</p>
            <p className="mt-1 text-sm text-fog font-medium">Transparent 50/50 distribution backed by automated restitution</p>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="rounded-lg bg-deck p-5 flex gap-4">
                <div className="w-10 h-10 rounded-full bg-navy/10 flex items-center justify-center shrink-0 text-navy">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-chalk mb-2">Trader Share (50%)</p>
                  <p className="text-xs text-fog font-medium leading-relaxed">
                    All profits generated are split equally. You retain full ownership of your
                    capital sitting in partner broker custody.
                  </p>
                </div>
              </div>
              <div className="rounded-lg bg-deck p-5 flex gap-4">
                <div className="w-10 h-10 rounded-full bg-panel-line flex items-center justify-center shrink-0 text-fog">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-chalk mb-2">Manager Share (50%)</p>
                  <p className="text-xs text-fog font-medium leading-relaxed">
                    Assigned via 24 hour rotating regional pools. Protected by automatic 50%{" "}
                    <span className="font-bold text-ember">drawdown lockouts</span> and{" "}
                    <span className="font-bold text-ember">restitution guarantees</span>.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-lg border border-panel-line bg-panel p-6 grid grid-cols-2 md:grid-cols-5 gap-5 divide-x divide-panel-line">
            <div className="pl-0"><Diamond className="w-4 h-4 text-navy mb-2" /><p className="text-xs font-bold text-chalk">Risk-First</p><p className="text-[11px] text-fog font-medium mt-1">Strict risk layering to protect your drawdown.</p></div>
            <div className="pl-4"><Lock className="w-4 h-4 text-navy mb-2" /><p className="text-xs font-bold text-chalk">No Elimination</p><p className="text-[11px] text-fog font-medium mt-1">No prop firm elimination rules. You stay in control.</p></div>
            <div className="pl-4"><Eye className="w-4 h-4 text-navy mb-2" /><p className="text-xs font-bold text-chalk">Transparent</p><p className="text-[11px] text-fog font-medium mt-1">Clear rules. Clear process. Clear expectations.</p></div>
            <div className="pl-4"><BarChart3 className="w-4 h-4 text-navy mb-2" /><p className="text-xs font-bold text-chalk">Performance</p><p className="text-[11px] text-fog font-medium mt-1">Funding is based on consistency, not luck.</p></div>
            <div className="pl-4"><Clock className="w-4 h-4 text-navy mb-2" /><p className="text-xs font-bold text-chalk">24H Matching</p><p className="text-[11px] text-fog font-medium mt-1">We match you with qualified managers within 24 hours.</p></div>
          </div>
        </>
      )}
    </div>
  );
}
