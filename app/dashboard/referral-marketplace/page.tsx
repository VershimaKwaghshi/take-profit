// app/dashboard/referral-marketplace/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useUser } from "../UserProvider";
import ReferralGate from "@/components/ReferralGate";

type Listing = {
  id: string;
  referralCode: string;
  inactiveSince: string;
  daysInactive: number;
  myBid: number | null;
};

export default function ReferralMarketplacePage() {
  const { loading: userLoading } = useUser();
  const [listings, setListings] = useState<Listing[]>([]);
  const [selected, setSelected] = useState<Listing | null>(null);
  const [bidPct, setBidPct] = useState(3);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  async function loadListings() {
    const res = await fetch("/api/referrals/marketplace");
    if (res.ok) {
      const data = await res.json();
      setListings(data.listings);
      if (data.listings.length > 0 && !selected) {
        setSelected(data.listings[0]);
      }
    }
    setLoading(false);
  }

  useEffect(() => {
    loadListings();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function submitBid() {
    if (!selected) return;
    setSubmitting(true);
    const res = await fetch("/api/referrals/bid", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ listingId: selected.id, bidCutPct: bidPct }),
    });
    setSubmitting(false);
    if (res.ok) loadListings();
  }

  if (userLoading || loading) {
    return <p className="text-fog">Loading...</p>;
  }

  return (
    <ReferralGate>
    {/* existing page content stays exactly as is */}
  </ReferralGate>
);
    <div>
      <p className="text-xs font-bold uppercase tracking-[0.3em] text-ember">Referral Marketplace</p>
      <h1 className="mt-5 text-4xl font-extrabold text-chalk md:text-5xl">Every account starts with a referral.</h1>
      <p className="mt-6 max-w-2xl leading-8 text-fog font-medium">
        Browse referral relationships eligible for a new referrer, and bid what you would take
        for taking one over.
      </p>

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">
        <div className="rounded-lg border border-panel-line bg-panel overflow-hidden">
          {listings.length === 0 ? (
            <p className="p-6 text-sm text-fog font-medium">No eligible referrals right now.</p>
          ) : (
            <table className="w-full text-xs">
              <thead className="bg-deck text-[10px] font-bold uppercase tracking-wider text-fog">
                <tr>
                  <th className="text-left p-3">Referral Code</th>
                  <th className="text-left p-3">Inactive Since</th>
                  <th className="text-left p-3">Days Inactive</th>
                  <th className="text-right p-3">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-panel-line">
                {listings.map((item) => (
                  <tr key={item.id} className={selected?.id === item.id ? "bg-deck" : ""}>
                    <td className="p-3 font-bold text-chalk">{item.referralCode}</td>
                    <td className="p-3 font-medium text-fog">{new Date(item.inactiveSince).toLocaleDateString()}</td>
                    <td className="p-3 font-medium text-fog">{item.daysInactive} days</td>
                    <td className="p-3 text-right">
                      <button
                        onClick={() => {
                          setSelected(item);
                          setBidPct(item.myBid ?? 3);
                        }}
                        className="bg-navy hover:bg-navy-dark text-white text-xs px-3 py-1.5 rounded-md font-bold"
                      >
                        {item.myBid !== null ? "Update Bid" : "Place Bid"}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        <div className="rounded-lg border border-panel-line bg-panel p-6 space-y-5">
          <div>
            <p className="text-sm font-bold text-chalk">Place Your Bid</p>
            <p className="text-xs text-fog font-medium mt-0.5">Set your share of this listing.</p>
          </div>

          <div className="space-y-2 text-xs border-y border-panel-line py-3">
            <div className="flex justify-between">
              <span className="text-fog font-medium">Referral</span>
              <span className="font-bold text-chalk">{selected?.referralCode ?? "N/A"}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-fog font-medium">Days Inactive</span>
              <span className="font-bold text-chalk">{selected?.daysInactive ?? "N/A"}</span>
            </div>
          </div>

          <div className="flex items-center justify-between bg-deck border border-panel-line rounded-lg p-1.5">
            <button
              onClick={() => setBidPct((p) => Math.max(p - 1, 0))}
              disabled={bidPct <= 0}
              className="p-1 hover:bg-panel-line rounded disabled:opacity-30"
            >
              −
            </button>
            <span className="text-lg font-extrabold text-chalk">{bidPct}%</span>
            <button
              onClick={() => setBidPct((p) => Math.min(p + 1, 5))}
              disabled={bidPct >= 5}
              className="p-1 hover:bg-panel-line rounded disabled:opacity-30"
            >
              +
            </button>
          </div>
          <div className="flex justify-between text-[11px] text-fog font-medium">
            <span>Bid range: 0% to 5%</span>
            <span>1% increments</span>
          </div>

          <button
            onClick={submitBid}
            disabled={!selected || submitting}
            className="w-full bg-navy hover:bg-navy-dark text-white font-bold text-xs py-2.5 rounded-lg disabled:opacity-50"
          >
            {submitting ? "Submitting..." : "Review & Confirm Bid"}
          </button>
        </div>
      </div>
    </div>
  );
}
