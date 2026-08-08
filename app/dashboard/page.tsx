"use client";

import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";

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
      {/* Welcome */}

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

      {/* Referral */}

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

      {/* Learning Center */}

      <div className="mt-8">
        <Link
          href="/dashboard/learning"
          className="group block overflow-hidden rounded-lg border border-[#071A52] bg-[#071A52] text-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          <div className="border-b border-white/10 p-8 md:p-10">
            <div className="flex items-start justify-between gap-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#D94A3D]">
                <BookOpen size={21} />
              </div>

              <span className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-white/50">
                Take Profit Academy
              </span>
            </div>

            <p className="mt-8 font-mono text-xs font-semibold uppercase tracking-[0.3em] text-[#D94A3D]">
              Learning Center
            </p>

            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">
              Understand the market before you enter it.
            </h2>

            <p className="mt-5 max-w-2xl leading-8 text-white/70">
              Explore the people, systems and forces behind financial markets,
              and learn the ideas that shaped Take Profit.
            </p>
          </div>

          <div className="flex items-center justify-between gap-6 bg-white px-8 py-5 text-[#071A52] md:px-10">
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em]">
              12 Lessons · Self-paced
            </span>

            <span className="flex shrink-0 items-center gap-2 font-semibold">
              Enter Learning Center
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </span>
          </div>
        </Link>
      </div>

      {/* Announcements */}

      <div className="mt-8">
        <AnnouncementCard />
      </div>
    </div>
  );
}