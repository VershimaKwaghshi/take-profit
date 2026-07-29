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

          {/* EDUCATION */}

          <div className="mt-8 overflow-hidden rounded-[36px] shadow-sm">

            <div className="grid lg:grid-cols-2">

              <div className="bg-black p-10 text-white">

                <p className="text-sm uppercase tracking-[0.35em] text-red-500">
                  TAKE PROFIT ACADEMY
                </p>

                <h2 className="mt-6 text-5xl font-semibold leading-tight">
                  Learn.
                  <br />
                  Prepare.
                  <br />
                  Launch.
                </h2>

                <p className="mt-8 text-lg leading-9 text-neutral-300">
                  Before Take Profit launches you'll receive structured
                  education covering every part of the platform,
                  including restitution, capital access,
                  risk management and platform navigation.
                </p>

              </div>

              <div className="bg-white p-10">

                <div className="grid grid-cols-2 gap-4">

                  <div className="rounded-3xl bg-neutral-100 p-6">

                    <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
                      Status
                    </p>

                    <h3 className="mt-5 text-3xl font-semibold">
                      Coming Soon
                    </h3>

                  </div>

                  <div className="rounded-3xl bg-blue-600 p-6 text-white">

                    <p className="text-sm uppercase tracking-[0.3em]">
                      Lessons
                    </p>

                    <h3 className="mt-5 text-4xl font-semibold">
                      6+
                    </h3>

                  </div>

                  <div className="rounded-3xl bg-red-600 p-6 text-white">

                    <p className="text-sm uppercase tracking-[0.3em]">
                      Videos
                    </p>

                    <h3 className="mt-5 text-4xl font-semibold">
                      HD
                    </h3>

                  </div>

                  <div className="rounded-3xl bg-neutral-900 p-6 text-white">

                    <p className="text-sm uppercase tracking-[0.3em]">
                      Access
                    </p>

                    <h3 className="mt-5 text-3xl font-semibold">
                      Launch
                    </h3>

                  </div>

                </div>

                <p className="mt-8 text-lg leading-9 text-neutral-600">
                  Complete one verified referral to prepare your account.
                  Your Academy becomes available at launch.
                </p>

              </div>

            </div>

          </div>

          {/* ACCOUNT */}

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
                  ? "Your account has been successfully prepared for launch."
                  : "Complete one verified referral to prepare your account before launch."}

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
                  className={`h-full rounded-full transition-all duration-500 ${
                    unlocked
                      ? "w-full bg-blue-600"
                      : "w-1/2 bg-red-600"
                  }`}
                />

              </div>

            </div>

          </div>

          {/* REFERRAL */}

          <div className="mt-8 rounded-[32px] bg-white p-8 shadow-sm">

            <p className="text-sm uppercase tracking-[0.35em] text-neutral-500">

              YOUR REFERRAL LINK

            </p>

            <div className="mt-8">

              <ReferralLinkCard />

            </div>

          </div>

          {/* UPDATE */}

          <div className="mt-8 rounded-[32px] bg-white p-8 shadow-sm">

            <p className="text-sm uppercase tracking-[0.35em] text-neutral-500">

              LATEST UPDATE

            </p>

            <p className="mt-6 text-lg leading-9 text-neutral-600">

              Development is progressing steadily.
              Future announcements will appear here before launch.

            </p>

          </div>

        </section>

      </div>

    </main>
  );
}