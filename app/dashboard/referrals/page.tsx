"use client";

import ReferralLinkCard from "@/components/ReferralLinkCard";
import FloorMotif from "@/components/FloorMotif";
import { useUser } from "../UserProvider";

export default function ReferralsPage() {
  const { user, loading } = useUser();

  if (loading) {
    return <p className="text-fog">Loading...</p>;
  }

  return (
    <div>
      <p className="font-mono text-xs font-semibold uppercase tracking-[0.3em] text-ember">
        Referrals
      </p>

      <h1 className="mt-5 text-4xl font-semibold text-chalk md:text-5xl">
        Grow your network.
      </h1>

      <p className="mt-6 max-w-2xl leading-8 text-fog">
        Every verified referral brings you closer to unlocking future
        platform benefits. Share your link and we&apos;ll notify you as
        people join.
      </p>

      <div className="mt-10 rounded-lg border border-panel-line bg-panel p-8 md:p-10">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-fog">
          Verified referrals
        </p>

        <p className="mt-4 font-mono text-5xl font-semibold tabular-nums text-chalk">
          {user?.referral_count ?? 0}
        </p>

        <div className="mt-8 max-w-md opacity-70">
          <FloorMotif tone="paper" showLabel={false} />
        </div>

        <div className="mt-8">
          <ReferralLinkCard />
        </div>
      </div>
    </div>
  );
}
