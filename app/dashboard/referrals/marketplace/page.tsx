// app/dashboard/referrals/marketplace/page.tsx
"use client";

import { useEffect, useState } from "react";
import { Scale, Minus, Plus, ShieldAlert, RefreshCw } from "lucide-react";

type Listing = {
  id: string;
  referralCode: string;
  inactiveSince: string;
  daysInactive: number;
  myBid: number | null;
};

export default function ReferralMarketplacePage() {
  const [listings, setListings] = useState<Listing[]>([]);
  const [selected, setSelected] = useState<Listing | null>(null);
  const [bidPct, setBidPct] = useState(3);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  async function loadListings() {
    setLoading(true);
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
    if (res.ok) {
      loadListings();
    }
  }

  return (
    <div className="min-h-screen bg-deck text-ink flex flex-col">
      <header className="bg-panel border-b border-panel-line px-8 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-1.5 bg-mist rounded-lg">
            <Scale className="w-6 h-6 text-navy" />
          </div>
          <div>
            <h1 className="text-sm font-bold tracking-wider uppercase">Take Profit</h1>
            <p className="text-[10px] tracking-widest text-ash uppercase">Referral Marketplace</p>
          </div>
        </div>
      </header>

      <div className="flex-1 flex px-8 py-6 gap-6">
        <aside className="w-56 shrink-0 flex flex-col justify-between">
          <div>
            <p className="text-[10px] font-bold text-ash uppercase tracking-wider mb-2">Marketplace</p>
            <div className="w-full flex items-center gap-2.5 px-3 py-2 bg-mist rounded-md text-xs font-semibold">
              Browse Referrals
            </div>
          </div>

          <div className="bg-mist border border-panel-line rounded-lg p-3 space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold">
              <ShieldAlert className="w-4 h-4 text-navy shrink-0" />
              <span>Participation Risk</span>
            </div>
            <p className="text-[11px] text-ash leading-tight">
              Marketed returns are not guaranteed. Trading involves substantial risk and may
              result in loss of principal.
            </p>
          </div>
        </aside>

        <main className="flex-1 space-y-6">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Referral Marketplace</h2>
            <p className="text-xs text-ash mt-1">
              Browse inactive referral relationships eligible for bidding.
              <br />
              Referrals become eligible after 45 days of referrer inactivity.
            </p>
          </div>

          <div className="border border-panel-line rounded-xl bg-panel">
            <div className="p-4 flex items-center justify-between border-b border-panel-line">
              <h3 className="text-sm font-bold">Eligible Referrals</h3>
              <button onClick={loadListings} className="flex items-center gap-1 text-xs text-ash hover:text-ink">
                <RefreshCw className="w-3 h-3" />
                Refresh
              </button>
            </div>

            {loading ? (
              <p className="p-6 text-sm text-ash">Loading...</p>
            ) : listings.length === 0 ? (
              <p className="p-6 text-sm text-ash">No eligible referrals right now.</p>
            ) : (
              <table className="w-full text-xs">
                <thead className="bg-mist text-[11px] font-bold uppercase tracking-wider text-ash">
                  <tr>
                    <th className="text-left p-3">Referral Code</th>
                    <th className="text-left p-3">Inactive Since</th>
                    <th className="text-left p-3">Days Inactive</th>
                    <th className="text-right p-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {listings.map((item) => (
                    <tr
                      key={item.id}
                      className={`border-t border-panel-line ${selected?.id === item.id ? "bg-mist" : ""}`}
                    >
                      <td className="p-3 font-semibold">{item.referralCode}</td>
                      <td className="p-3">{new Date(item.inactiveSince).toLocaleDateString()}</td>
                      <td className="p-3">{item.daysInactive} days</td>
                      <td className="p-3 text-right">
                        <button
                          onClick={() => {
                            setSelected(item);
                            setBidPct(item.myBid ?? 3);
                          }}
                          className="bg-navy hover:bg-navy-dark text-paper text-xs px-3 py-1.5 rounded-md font-medium"
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
        </main>

        <aside className="w-80 shrink-0">
          <div className="border border-panel-line rounded-xl bg-panel p-5 space-y-5 sticky top-6">
            <div>
              <h3 className="text-sm font-bold">Place Your Bid</h3>
              <p className="text-xs text-ash mt-0.5">Set your share of this referral&apos;s marketplace listing.</p>
            </div>

            <div className="space-y-2 text-xs border-y border-panel-line py-3">
              <div className="flex justify-between">
                <span className="text-ash">Referral</span>
                <span className="font-semibold">{selected?.referralCode ?? "N/A"}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-ash">Days Inactive</span>
                <span className="font-semibold">{selected?.daysInactive ?? "N/A"}</span>
              </div>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-semibold">Your Bid</span>
              <div className="flex items-center justify-between bg-mist border border-panel-line rounded-lg p-1.5">
                <button
                  onClick={() => setBidPct((p) => Math.max(p - 1, 0))}
                  disabled={bidPct <= 0}
                  className="p-1 hover:bg-panel-line rounded disabled:opacity-30"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="text-lg font-bold font-mono">{bidPct}%</span>
                <button
                  onClick={() => setBidPct((p) => Math.min(p + 1, 5))}
                  disabled={bidPct >= 5}
                  className="p-1 hover:bg-panel-line rounded disabled:opacity-30"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <div className="flex justify-between text-[11px] text-ash">
                <span>Bid range: 0% to 5%</span>
                <span>1% increments</span>
              </div>
            </div>

            <div className="bg-mist p-3 rounded-lg border border-panel-line space-y-1">
              <p className="text-xs font-bold">Bid Terms</p>
              <p className="text-[11px] text-ash leading-tight">
                Your bid is a commitment to share in this referral&apos;s marketplace listing.
                Lowest bid wins the listing.
              </p>
            </div>

            <button
              onClick={submitBid}
              disabled={!selected || submitting}
              className="w-full bg-navy hover:bg-navy-dark text-paper font-semibold text-xs py-2.5 rounded-lg disabled:opacity-50"
            >
              {submitting ? "Submitting..." : "Review & Confirm Bid"}
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
}
