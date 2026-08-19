// app/admin/restitution/page.tsx
"use client";

import { useEffect, useState } from "react";

type Event = {
  id: string;
  queuePosition: number | null;
  drawdownPctAtTrigger: string;
  triggeredAt: string;
  tradingAccount: {
    id: string;
    size: string;
    owner: { firstName: string; lastName: string; email: string };
  };
};

export default function AdminRestitutionPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [restoring, setRestoring] = useState<string | null>(null);
  const [error, setError] = useState("");

  async function load() {
    const res = await fetch("/api/admin/restitution");
    if (res.ok) {
      const data = await res.json();
      setEvents(data.events);
    }
    setLoading(false);
  }

  useEffect(() => {
    load();
  }, []);

  async function restore(id: string) {
    setError("");
    setRestoring(id);

    const res = await fetch(`/api/admin/restitution/${id}/restore`, { method: "POST" });
    const result = await res.json();
    setRestoring(null);

    if (!res.ok) {
      setError(result.error || "Something went wrong.");
      return;
    }

    load();
  }

  return (
    <main className="min-h-screen bg-neutral-100 p-8">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-3xl font-semibold text-black">Restitution Queue</h1>
        <p className="mt-2 text-sm text-neutral-600">
          First come first served. Only the earliest position can be restored next.
        </p>

        {error && (
          <p className="mt-4 text-sm font-bold text-red-700 bg-red-50 border border-red-200 rounded-md px-3 py-2">
            {error}
          </p>
        )}

        <div className="mt-6 rounded-2xl bg-white overflow-hidden shadow-sm">
          {loading ? (
            <p className="p-6 text-sm text-neutral-500">Loading...</p>
          ) : events.length === 0 ? (
            <p className="p-6 text-sm text-neutral-500">No accounts currently queued for restitution.</p>
          ) : (
            <table className="w-full text-sm">
              <thead className="bg-neutral-50 text-xs uppercase tracking-wider text-neutral-500">
                <tr>
                  <th className="text-left p-4">Position</th>
                  <th className="text-left p-4">Trader</th>
                  <th className="text-left p-4">Account Size</th>
                  <th className="text-left p-4">Drawdown</th>
                  <th className="text-left p-4">Triggered</th>
                  <th className="text-right p-4">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100">
                {events.map((e, i) => (
                  <tr key={e.id}>
                    <td className="p-4 font-bold">#{e.queuePosition}</td>
                    <td className="p-4">
                      {e.tradingAccount.owner.firstName} {e.tradingAccount.owner.lastName}
                      <div className="text-xs text-neutral-400">{e.tradingAccount.owner.email}</div>
                    </td>
                    <td className="p-4">${Number(e.tradingAccount.size).toLocaleString()}</td>
                    <td className="p-4">{Number(e.drawdownPctAtTrigger).toFixed(1)}%</td>
                    <td className="p-4">{new Date(e.triggeredAt).toLocaleDateString()}</td>
                    <td className="p-4 text-right">
                      {i === 0 ? (
                        <button
                          onClick={() => restore(e.id)}
                          disabled={restoring === e.id}
                          className="bg-black text-white text-xs font-bold px-4 py-2 rounded-full disabled:opacity-50"
                        >
                          {restoring === e.id ? "Restoring..." : "Restore"}
                        </button>
                      ) : (
                        <span className="text-xs text-neutral-400">Waiting</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </main>
  );
}
