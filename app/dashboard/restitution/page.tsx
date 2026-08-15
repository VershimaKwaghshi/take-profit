// app/dashboard/restitution/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useUser } from "../UserProvider";

type RestitutionEvent = {
  id: string;
  status: string;
  queuePosition: number | null;
  drawdownPctAtTrigger: string;
  triggeredAt: string;
  restoredAt: string | null;
};

export default function RestitutionPage() {
  const { loading: userLoading } = useUser();
  const [events, setEvents] = useState<RestitutionEvent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const res = await fetch("/api/restitution");
      if (res.ok) {
        const data = await res.json();
        setEvents(data.events);
      }
      setLoading(false);
    }
    load();
  }, []);

  if (userLoading || loading) {
    return <p className="text-fog">Loading...</p>;
  }

  const active = events.find((e) => e.status !== "restored");

  return (
    <div>
      <p className="text-xs font-bold uppercase tracking-[0.3em] text-ember">Restitution</p>
      <h1 className="mt-5 text-4xl font-extrabold text-chalk md:text-5xl">Your restoration path.</h1>
      <p className="mt-6 max-w-2xl leading-8 text-fog font-medium">
        If a qualifying loss ever happens on one of your accounts, this is where you track it.
      </p>

      {!active ? (
        <div className="mt-10 rounded-lg border border-panel-line bg-panel p-8 md:p-10">
          <p className="text-sm font-bold text-chalk">No active restitution event.</p>
          <p className="mt-2 text-sm text-fog font-medium">
            Nothing is currently in the restitution queue on your account.
          </p>
        </div>
      ) : (
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="rounded-lg border border-panel-line bg-panel p-6">
            <p className="text-[10px] uppercase tracking-wider text-fog font-bold">Queue Position</p>
            <p className="mt-2 text-3xl font-extrabold text-chalk">
              {active.queuePosition ? `#${active.queuePosition.toLocaleString()}` : "Pending"}
            </p>
          </div>
          <div className="rounded-lg border border-panel-line bg-panel p-6">
            <p className="text-[10px] uppercase tracking-wider text-fog font-bold">Status</p>
            <p className="mt-2 text-3xl font-extrabold text-signal-green capitalize">{active.status}</p>
          </div>
          <div className="rounded-lg border border-panel-line bg-panel p-6">
            <p className="text-[10px] uppercase tracking-wider text-fog font-bold">Recorded</p>
            <p className="mt-2 text-lg font-extrabold text-chalk">
              {new Date(active.triggeredAt).toLocaleDateString()}
            </p>
          </div>
        </div>
      )}

      <div className="mt-6 rounded-lg border border-panel-line bg-panel p-6">
        <p className="text-xs font-bold text-chalk">Your place is held while you stay active.</p>
      </div>
    </div>
  );
}
