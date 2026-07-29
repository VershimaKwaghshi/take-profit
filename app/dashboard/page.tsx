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

        <section className="flex-1 p-10">

          <Topbar />

          <div className="mt-10">

            <h1 className="text-5xl font-semibold text-black">
              Welcome back.
            </h1>

            <p className="mt-4 text-xl text-neutral-500">
              Your Take Profit journey continues here.
            </p>

          </div>

          <div className="mt-10">
            <AnnouncementCard />
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-2">

            <div className="rounded-[32px] bg-white p-8 shadow-sm">

              <p className="text-sm uppercase tracking-[0.35em] text-neutral-500">
                ACCOUNT STATUS
              </p>

              <h2 className="mt-5 text-4xl font-semibold">

                {unlocked ? "Ready for Launch" : "Preparing for Launch"}

              </h2>

              <p className="mt-6 text-lg leading-8 text-neutral-600">

                {unlocked
                  ? "Your account has been unlocked and is ready for launch."
                  : "Complete one verified referral to unlock your account before launch."}

              </p>

            </div>

            <div className="rounded-[32px] bg-white p-8 shadow-sm">

              <p className="text-sm uppercase tracking-[0.35em] text-neutral-500">
                REFERRAL PROGRESS
              </p>

              <h2 className="mt-5 text-6xl font-semibold">

                {verifiedReferrals} / 1

              </h2>

              <div className="mt-8 h-3 overflow-hidden rounded-full bg-neutral-200">

                <div
                  className={`h-full rounded-full transition-all ${
                    unlocked ? "w-full" : "w-1/2"
                  } bg-red-600`}
                />

              </div>

            </div>

          </div>

          <div className="mt-8 rounded-[32px] bg-white p-8 shadow-sm">

            <p className="text-sm uppercase tracking-[0.35em] text-neutral-500">

              YOUR REFERRAL LINK

            </p>

            <div className="mt-8">

              <ReferralLinkCard />

            </div>

          </div>

          <div className="mt-8 rounded-[32px] bg-white p-8 shadow-sm">

            <p className="text-sm uppercase tracking-[0.35em] text-neutral-500">

              LATEST UPDATE

            </p>

            <p className="mt-6 text-lg leading-9 text-neutral-600">

              Take Profit is preparing for launch.
              New updates will appear here as they become available.

            </p>

          </div>

        </section>

      </div>

    </main>
  );
}