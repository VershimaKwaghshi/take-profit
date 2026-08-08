"use client";

import Link from "next/link";
import ReferralLinkCard from "@/components/ReferralLinkCard";
import FloorMotif from "@/components/FloorMotif";
import { useUser } from "./UserProvider";

export default function DashboardPage() {
  const { user, loading } = useUser();

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-fog">
          Loading dashboard...
        </p>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Welcome */}

      <section className="w-full border-y border-panel-line bg-panel">
        <div className="px-6 py-12 md:px-10 md:py-16 lg:px-14">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.35em] text-ember">
            Founding Member
          </p>

          <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.05] text-chalk md:text-6xl">
            Welcome {user?.first_name}
          </h1>

          <p className="mt-8 max-w-3xl text-base leading-8 text-fog md:text-lg md:leading-9">
            You joined Take Profit before launch. This is your place to
            learn how the market works, understand what we are building,
            and follow the journey toward launch.
          </p>
        </div>
      </section>

      {/* Learning Center */}

      <section className="w-full bg-[#071A52] text-white">
        <div className="px-6 py-14 md:px-10 md:py-20 lg:px-14">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.35em] text-[#D84B3F]">
            Take Profit Academy
          </p>

          <h2 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.05] md:text-6xl">
            Learn the market before you enter it.
          </h2>

          <p className="mt-8 max-w-3xl text-base leading-8 text-white/70 md:text-lg md:leading-9">
            A structured introduction to the people, systems and forces
            behind financial markets — and the ideas that shaped Take
            Profit.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <div className="border border-white/30 px-5 py-3 font-mono text-xs uppercase tracking-[0.2em]">
              12 Lessons
            </div>

            <div className="border border-white/30 px-5 py-3 font-mono text-xs uppercase tracking-[0.2em]">
              Self-Paced
            </div>
          </div>

          <Link
            href="/dashboard/learning"
            className="mt-10 inline-flex items-center bg-white px-7 py-4 font-semibold text-[#071A52] transition hover:bg-[#D8C6A3]"
          >
            Enter Learning Center
          </Link>
        </div>
      </section>

      {/* Referral */}

      <section className="w-full bg-[#B8B0A0]">
        <div className="px-6 py-12 md:px-10 md:py-16 lg:px-14">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.35em] text-[#071A52]">
            Referral Progress
          </p>

          <p className="mt-5 max-w-3xl font-mono text-4xl font-semibold leading-tight text-black md:text-5xl">
            {user?.referral_count ?? 0} Verified Referral
            {(user?.referral_count ?? 0) === 1 ? "" : "s"}
          </p>

          <p className="mt-6 max-w-2xl text-base leading-8 text-black/70">
            Invite people using your referral link. Every verified referral
            brings you closer to unlocking future platform benefits.
          </p>

          <div className="mt-8 max-w-md">
            <FloorMotif tone="paper" showLabel={false} />
          </div>

          <div className="mt-8 max-w-xl">
            <ReferralLinkCard />
          </div>
        </div>
      </section>
    </div>
  );
}