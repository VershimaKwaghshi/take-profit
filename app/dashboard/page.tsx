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
      <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#EEF6FF] via-white to-[#FFF5F5]">
        <p className="text-lg text-neutral-600">
          Loading dashboard...
        </p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#EEF6FF] via-white to-[#FFF5F5]">

      <div className="flex">

        <Sidebar />

        <section className="flex-1 overflow-y-auto p-10">

          <Topbar />

          {/* HERO */}

         <div className="overflow-hidden rounded-[40px] bg-gradient-to-r from-[#071A52] via-[#1D4ED8] to-[#DC2626] px-10 py-12 text-white shadow-xl">

        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

      <div>

      <span className="inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-semibold tracking-wide">
        FOUNDING MEMBER
      </span>

      <h1 className="mt-6 text-5xl font-bold">
        Welcome{user?.first_name ? `, ${user.first_name}` : ""}.
      </h1>

      <p className="mt-6 max-w-3xl text-xl leading-9 text-blue-100">
        You're one of the first members of Take Profit.
        Learn how the platform works, unlock the Academy,
        and prepare for launch.
      </p>

      </div>

      <div className="rounded-[30px] bg-white/10 px-8 py-8 backdrop-blur">

       <p className="text-sm uppercase tracking-[0.35em] text-blue-100">
        MEMBER STATUS
       </p>

       <h2 className="mt-3 text-3xl font-bold">
        Founding Member
       </h2>

       <p className="mt-4 text-blue-100">
        Joined before public launch.
        </p>

        </div>

        </div>

        </div>

          {/* PROGRESS */}

          <div className="mt-8 rounded-[32px] bg-white p-8 shadow-sm">

            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

              <div>

                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-neutral-500">
                  YOUR PROGRESS
                </p>

                <h2 className="mt-3 text-3xl font-semibold text-black">
                  Pre-launch Journey
                </h2>

              </div>

              <span className="rounded-full bg-blue-50 px-5 py-2 text-sm font-semibold text-blue-700">
                {verifiedReferrals}/1 Referral
              </span>

            </div>

            <div className="mt-8 h-3 overflow-hidden rounded-full bg-neutral-200">

              <div
                className={`h-full rounded-full transition-all duration-500 ${
                  unlocked
                    ? "w-full bg-gradient-to-r from-blue-600 to-red-600"
                    : "w-1/2 bg-gradient-to-r from-blue-600 to-red-600"
                }`}
              />

            </div>

            <div className="mt-10 grid gap-8 md:grid-cols-4">

              <div>

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-600 font-bold text-white">
                  ✓
                </div>

                <p className="mt-4 font-semibold text-black">
                  Joined Waitlist
                </p>

              </div>

              <div>

                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full font-bold ${
                    unlocked
                      ? "bg-green-600 text-white"
                      : "bg-blue-600 text-white"
                  }`}
                >
                  {unlocked ? "✓" : "2"}
                </div>

                <p className="mt-4 font-semibold text-black">
                  Invite One Friend
                </p>

              </div>

              <div>

                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full font-bold ${
                    unlocked
                      ? "bg-green-600 text-white"
                      : "bg-neutral-200"
                  }`}
                >
                  3
                </div>

                <p
                  className={`mt-4 ${
                    unlocked
                      ? "font-semibold text-black"
                      : "text-neutral-500"
                  }`}
                >
                  Unlock Academy
                </p>

              </div>

              <div>

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-200 font-bold">
                  4
                </div>

                <p className="mt-4 text-neutral-500">
                  Platform Launch
                </p>

              </div>

            </div>

          </div>

          {/* ANNOUNCEMENTS */}

          <div className="mt-8">
            <AnnouncementCard />
          </div>

          {/* TAKE PROFIT ACADEMY */}

          <div className="mt-8 overflow-hidden rounded-[36px] bg-[#071A52] shadow-xl">

            <div className="bg-gradient-to-r from-[#071A52] via-[#0F3EA8] to-[#C1121F] p-[1px]">

              <div className="rounded-[35px] bg-[#071A52] px-10 py-12">

                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-200">
                  TAKE PROFIT ACADEMY
                </p>

                <h2 className="mt-5 text-5xl font-semibold leading-tight text-white">
                  Learn before
                  <br />
                  launch.
                </h2>

                <p className="mt-8 max-w-3xl text-xl leading-9 text-blue-100">
                  Complete short lessons designed to help you understand
                  how Take Profit works before the platform launches.
                </p>

                <div className="mt-12 grid gap-6 lg:grid-cols-3">

                  <div className="rounded-3xl bg-white/10 p-7">

                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-200">
                      LESSON ONE
                    </p>

                    <h3 className="mt-5 text-2xl font-semibold text-white">
                      Why Take Profit Exists
                    </h3>

                    <p className="mt-4 leading-8 text-blue-100">
                      Learn why Take Profit was created and the problem it
                      aims to solve for traders.
                    </p>

                  </div>

                  <div className="rounded-3xl bg-white/10 p-7">

                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-200">
                      LESSON TWO
                    </p>

                    <h3 className="mt-5 text-2xl font-semibold text-white">
                      Company Capital
                    </h3>

                    <p className="mt-4 leading-8 text-blue-100">
                      Discover how company-funded trading capital will work
                      when Take Profit launches.
                    </p>

                  </div>

                  <div className="rounded-3xl bg-white/10 p-7">

                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-200">
                      LESSON THREE
                    </p>

                    <h3 className="mt-5 text-2xl font-semibold text-white">
                      Recovery System
                    </h3>

                    <p className="mt-4 leading-8 text-blue-100">
                      Understand the thinking behind helping traders recover,
                      improve and continue after setbacks.
                    </p>

                  </div>

                </div>

                <div className="mt-12 rounded-3xl bg-white/10 p-8">

                  <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

                    <div>

                      <p className="text-sm uppercase tracking-[0.35em] text-blue-200">
                        EARLY ACCESS
                      </p>

                      <h3 className="mt-3 text-3xl font-semibold text-white">
                        Unlock the Academy
                      </h3>

                      <p className="mt-4 max-w-2xl leading-8 text-blue-100">

                        {unlocked
                          ? "Your Academy access has been unlocked. Lessons will become available before launch."
                          : "Invite one verified member to unlock early access to the Take Profit Academy."}

                      </p>

                    </div>

                    <div className="rounded-2xl bg-white px-8 py-6 text-center">

                      <p className="text-sm uppercase tracking-[0.35em] text-neutral-500">
                        STATUS
                      </p>

                      <p
                        className={`mt-3 text-2xl font-bold ${
                          unlocked
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                      >
                        {unlocked ? "Unlocked" : "Locked"}
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* REFERRAL */}

          <div className="mt-8 rounded-[32px] bg-white p-8 shadow-sm">

            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

              <div>

                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-neutral-500">
                  YOUR REFERRAL LINK
                </p>

                <h2 className="mt-3 text-3xl font-semibold text-black">
                  Invite one friend.
                </h2>

                <p className="mt-4 max-w-2xl text-lg leading-8 text-neutral-600">
                  Share your personal referral link. Once one verified member joins
                  through your invitation, your Academy access will be unlocked.
                </p>

              </div>

              <div className="rounded-3xl bg-blue-50 px-8 py-6 text-center">

                <p className="text-sm uppercase tracking-[0.35em] text-blue-700">
                  VERIFIED REFERRALS
                </p>

                <h3 className="mt-3 text-5xl font-bold text-[#071A52]">
                  {verifiedReferrals}
                </h3>

              </div>

            </div>

            <div className="mt-8">

              <ReferralLinkCard />

            </div>

          </div>

          {/* ROADMAP */}

          <div className="mt-8 rounded-[32px] bg-white p-8 shadow-sm">

            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-neutral-500">
              ROADMAP
            </p>

            <h2 className="mt-3 text-3xl font-semibold text-black">
              What happens next?
            </h2>

            <div className="mt-10 space-y-8">

              <div className="flex items-center gap-5">

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-600 text-white font-bold">
                  ✓
                </div>

                <div>

                  <h3 className="font-semibold text-black">
                    Waitlist Open
                  </h3>

                  <p className="text-neutral-500">
                    Members are joining Take Profit.
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-5">

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white font-bold">
                  2
                </div>

                <div>

                  <h3 className="font-semibold text-black">
                    Academy Access
                  </h3>

                  <p className="text-neutral-500">
                    Eligible members unlock early educational content.
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-5">

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-200 font-bold">
                  3
                </div>

                <div>

                  <h3 className="font-semibold text-black">
                    Development Updates
                  </h3>

                  <p className="text-neutral-500">
                    Follow our progress as new features are introduced.
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-5">

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-200 font-bold">
                  4
                </div>

                <div>

                  <h3 className="font-semibold text-black">
                    Early Access
                  </h3>

                  <p className="text-neutral-500">
                    Founding members receive invitations before public launch.
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-5">

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-200 font-bold">
                  5
                </div>

                <div>

                  <h3 className="font-semibold text-black">
                    Official Launch
                  </h3>

                  <p className="text-neutral-500">
                    Take Profit officially opens to the public.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>

      </div>

    </main>

  );
}