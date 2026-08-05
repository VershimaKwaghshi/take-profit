"use client";

import ReferralLinkCard from "@/components/ReferralLinkCard";
import FloorMotif from "@/components/FloorMotif";
import AnnouncementCard from "./AnnouncementCard";
import { useUser } from "./UserProvider";

export default function DashboardPage() {
  const { user, loading } = useUser();

  if (loading) {
    return <p className="text-fog">Loading dashboard...</p>;
  }

  return (
    <div>
      <div className="overflow-hidden rounded-lg border border-panel-line bg-panel">
        <div className="p-10 md:p-14">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.3em] text-ember">
            Founding Member
          </p>

          <h1 className="mt-6 text-4xl font-semibold leading-tight text-chalk md:text-5xl">
            Welcome {user?.first_name}
          </h1>

          <p className="mt-6 max-w-2xl leading-8 text-fog">
            You joined Take Profit before launch. This dashboard is where you
            will receive every lesson, announcement and platform update as we
            prepare for launch.
          </p>
        </div>
      </div>

      <div className="mt-8 rounded-lg border border-panel-line bg-panel p-8 md:p-10">
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.3em] text-fog">
          Referral progress
        </p>

        <p className="mt-4 font-mono text-4xl font-semibold tabular-nums text-chalk">
          {user?.referral_count ?? 0} Verified Referral
          {(user?.referral_count ?? 0) === 1 ? "" : "s"}
        </p>

        <p className="mt-5 leading-7 text-fog">
          Invite people using your referral link. Every verified referral
          brings you closer to unlocking future platform benefits.
        </p>

        <div className="mt-6 max-w-md opacity-70">
          <FloorMotif tone="paper" showLabel={false} />
        </div>

        <div className="mt-6">
          <ReferralLinkCard />
        </div>
      </div>

      <div className="mt-8">
        <AnnouncementCard />
      </div>
    </div>
  );
}