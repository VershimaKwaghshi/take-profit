// app/dashboard/managers/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useUser } from "../UserProvider";

type PoolManager = {
  id: string;
  alias: string;
  region: string;
};

type ActiveAssignment = {
  id: string;
  splitType: string;
  assignedAt: string;
  managerProfile: { alias: string; region: string };
} | null;

export default function ManagerSelectionPage() {
  const { loading: userLoading } = useUser();
  const [account, setAccount] = useState<{ id: string } | null>(null);
  const [activeAssignment, setActiveAssignment] = useState<ActiveAssignment>(null);
  const [pool, setPool] = useState<PoolManager[]>([]);
  const [loading, setLoading] = useState(true);
  const [selecting, setSelecting] = useState<string | null>(null);

  async function load() {
    const res = await fetch("/api/managers/pool");
    if (res.ok) {
      const data = await res.json();
      setAccount(data.account);
      setActiveAssignment(data.activeAssignment);
      setPool(data.pool);
    }
    setLoading(false);
  }

  useEffect(() => {
    load();
  }, []);

  async function select(managerProfileId: string) {
    setSelecting(managerProfileId);
    await fetch("/api/managers/select", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ managerProfileId }),
    });
    setSelecting(null);
    load();
  }

  if (userLoading || loading) {
    return <p className="text-fog">Loading...</p>;
  }

  if (!account) {
    return (
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-fog">Manager Selection</p>
        <h1 className="mt-5 text-4xl font-extrabold text-chalk md:text-5xl">No active trading account.</h1>
        <div className="mt-8 rounded-lg border border-panel-line bg-panel p-8">
          <p className="text-sm text-fog font-medium">
            A manager can only be selected once you have a funded or deposited trading account.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <p className="text-xs font-bold uppercase tracking-[0.3em] text-fog">Manager Selection</p>
      <h1 className="mt-5 text-4xl font-extrabold text-chalk md:text-5xl">Choose your manager.</h1>
      <p className="mt-4 text-sm text-fog font-medium max-w-2xl">
        Three vetted managers, one from each of three regions. Your choice stays assigned until
        you switch, no need to wait for a loss.
      </p>

      {activeAssignment && (
        <div className="mt-8 rounded-lg border border-panel-line bg-panel p-6">
          <p className="text-[10px] uppercase tracking-wider text-fog font-bold">Currently Assigned</p>
          <p className="mt-2 text-2xl font-extrabold text-chalk flex items-center gap-2 flex-wrap">
            {activeAssignment.managerProfile.alias}
            <span className="text-xs font-bold px-2 py-1 rounded bg-deck border border-panel-line text-fog">
              {activeAssignment.managerProfile.region}
            </span>
          </p>
          <p className="mt-2 text-xs text-fog font-medium">
            Assigned {new Date(activeAssignment.assignedAt).toLocaleDateString()}
          </p>
        </div>
      )}

      <div className="mt-8">
        <p className="text-sm font-bold text-chalk mb-4">
          {activeAssignment ? "Switch to a new manager" : "Today's pool"}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {pool.map((manager) => (
            <div key={manager.id} className="rounded-lg border border-panel-line bg-panel p-6">
              <p className="text-[10px] uppercase tracking-wider text-fog font-bold">{manager.region}</p>
              <p className="mt-2 text-xl font-extrabold text-chalk">{manager.alias}</p>
              <button
                onClick={() => select(manager.id)}
                disabled={selecting === manager.id}
                className="mt-4 w-full bg-navy hover:bg-navy-dark text-white text-xs font-bold py-2.5 rounded-md disabled:opacity-50"
              >
                {selecting === manager.id ? "Assigning..." : "Select"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
