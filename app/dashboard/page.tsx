"use client";

import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import ReferralLinkCard from "@/components/ReferralLinkCard";
import AnnouncementCard from "./AnnouncementCard";
import { useUser } from "./UserProvider";

export default function DashboardPage() {
  const { user, loading } = useUser();

  const verifiedReferrals = user?.referral_count ?? 0;

  const unlocked = verifiedReferrals >= 1;

  if (loading) {
    return (
      <main className="min-h-screen bg-neutral-100 flex items-center justify-center">
        <p className="text-neutral-500 text-lg">
          Loading dashboard...
        </p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-neutral-100">

      <div className="flex">

        <Sidebar />

        <section className="flex-1 p-8">

          <Topbar />

          {/* Announcements */}

          <div className="mt-8">
            <AnnouncementCard />
          </div>


          {/* Take Profit Journey */}

          <div className="mt-8 rounded-[36px] bg-white p-10 shadow-sm">

            <p className="text-sm uppercase tracking-widest text-neutral-500">
              TAKE PROFIT JOURNEY
            </p>

            <h2 className="mt-4 text-5xl font-semibold text-black">
              🔓 Unlock Everything
            </h2>

            <p className="mt-6 text-xl leading-9 text-neutral-600">
              Before Take Profit launches, you'll receive complete education on how the
              platform works through carefully prepared articles, videos, visual
              demonstrations and practical explanations.
            </p>

            <p className="mt-6 text-xl leading-9 text-neutral-600">
              <strong>Invite just one verified member.</strong>
              Once your referral verifies their email, your entire Take Profit account
              unlocks permanently, giving you access to every feature available at launch.
            </p>

          </div>


          {/* Portfolio */}

          <div className="mt-8 rounded-[32px] border border-neutral-200 bg-white p-8 shadow-sm">

            <p className="text-sm font-medium uppercase tracking-wide text-neutral-500">
              Portfolio
            </p>

            {unlocked ? (
              <>
                <h2 className="mt-4 text-5xl font-semibold">
                  Coming Soon
                </h2>

                <p className="mt-5 max-w-xl leading-8 text-neutral-500">
                  Your financial balances, funding,
                  rewards and future assets will appear
                  here once the Take Profit platform
                  launches.
                </p>
              </>
            ) : (
              <>
                <h2 className="mt-6 text-4xl font-semibold">
                  Getting Ready
                </h2>

                <p className="mt-5 max-w-xl leading-8 text-neutral-500">
                  Your portfolio will become available
                  when Take Profit launches.
                </p>
              </>
            )}

          </div>


          {/* Referral */}

          <div className="mt-8 rounded-[32px] border border-neutral-200 bg-white p-8 shadow-sm">

            <h2 className="text-5xl font-semibold">
              Invite 1 Verified Member
            </h2>

            <p className="mt-4 text-neutral-600 leading-8">
              One verified referral unlocks your complete Take Profit experience.
            </p>

            <div className="mt-8">
              <ReferralLinkCard />
            </div>

          </div>


          {/* Learning Centre */}

          <div className="mt-8 rounded-[32px] border border-neutral-200 bg-white p-8 shadow-sm">

            <p className="text-sm font-medium uppercase tracking-wide text-neutral-500">
              Learning Centre
            </p>

            <h2 className="mt-4 text-4xl font-semibold">
              Coming Soon
            </h2>

            <p className="mt-5 max-w-xl leading-8 text-neutral-500">
              The Take Profit education experience will guide you step by step
              through articles, videos, visual demonstrations and practical
              explanations before launch.
            </p>

          </div>

        </section>

      </div>

    </main>
  );
}