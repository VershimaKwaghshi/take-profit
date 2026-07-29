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

          {/* Education */}

          <div
            className="mt-8 overflow-hidden rounded-[40px] p-[1px]"
            style={{
              background:
                "linear-gradient(135deg,#000000 0%,#1d4ed8 35%,#dc2626 68%,#ffffff 100%)",
            }}
          >
            <div
              className="rounded-[39px] px-10 py-12 text-white"
              style={{
                background:
                  "radial-gradient(circle at top left, rgba(59,130,246,.22), transparent 40%), radial-gradient(circle at bottom right, rgba(220,38,38,.18), transparent 40%), #090909",
              }}
            >

              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-neutral-300">
                TAKE PROFIT ACADEMY
              </p>

              <h2 className="mt-6 text-5xl font-semibold leading-tight">
                Learn Take Profit
                <br />
                before launch.
              </h2>

              <p className="mt-8 max-w-3xl text-xl leading-10 text-neutral-300">
                Structured education covering restitution, capital,
                risk management and every feature of the Take Profit ecosystem.
              </p>

              <div className="mt-10 h-2 overflow-hidden rounded-full bg-white/10">

                <div
                  className={`h-full rounded-full transition-all duration-500 ${
                    unlocked ? "w-full bg-blue-500" : "w-1/2 bg-red-500"
                  }`}
                />

              </div>

              <p className="mt-6 text-neutral-300">

                {unlocked
                  ? "Education unlocked. Available at launch."
                  : "Complete one verified referral to unlock your education before launch."}

              </p>

            </div>

          </div>

          {/* Referral */}

          <div className="mt-8 rounded-[32px] bg-white p-8 shadow-sm">

            <p className="text-sm uppercase tracking-[0.35em] text-neutral-500">
              YOUR REFERRAL LINK
            </p>

            <div className="mt-8">
              <ReferralLinkCard />
            </div>

          </div>

          {/* Latest Update */}

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