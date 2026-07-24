"use client";

import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import ReferralLinkCard from "@/components/ReferralLinkCard";
import { Lock } from "lucide-react";
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
                <div className="mt-6 flex items-center gap-3">

                  <Lock size={24} />

                  <h2 className="text-4xl font-semibold">
                    Locked
                  </h2>

                </div>

                <p className="mt-5 max-w-xl leading-8 text-neutral-500">
                  Unlock your portfolio by inviting
                  one verified friend.
                </p>
              </>
            )}

          </div>

          {/* Referral */}

          <div className="mt-8">

            <ReferralLinkCard />

          </div>

          {/* Learning Centre */}

          <div className="mt-8 rounded-[32px] border border-neutral-200 bg-white p-8 shadow-sm">

            <p className="text-sm font-medium uppercase tracking-wide text-neutral-500">
              Learning Centre
            </p>

            {unlocked ? (
              <>
                <h2 className="mt-4 text-4xl font-semibold">
                  Coming Soon
                </h2>

                <p className="mt-5 max-w-xl leading-8 text-neutral-500">
                  The first Take Profit learning
                  experience is currently being
                  prepared.

                  You'll automatically receive
                  access once it's published.
                </p>
              </>
            ) : (
              <>
                <div className="mt-6 flex items-center gap-3">

                  <Lock size={24} />

                  <h2 className="text-4xl font-semibold">
                    Locked
                  </h2>

                </div>

                <p className="mt-5 max-w-xl leading-8 text-neutral-500">
                  Complete your referral mission
                  to unlock the Learning Centre.
                </p>
              </>
            )}

          </div>

        </section>

      </div>

    </main>
  );
}