"use client";

import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import ReferralLinkCard from "@/components/ReferralLinkCard";
import AnnouncementCard from "./AnnouncementCard";
import { useUser } from "./UserProvider";

export default function DashboardPage() {
  const { user, loading } = useUser();

  const verifiedReferrals = user?.referral_count ?? 0;

  const academyUnlocked = verifiedReferrals >= 1;

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#EEF6FF] via-white to-[#FFF5F5]">
        <p className="text-lg text-neutral-600">
          Loading dashboard
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

          <div className="mt-10 rounded-[40px] bg-[#071A52] p-10 shadow-2xl">

            <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">

              <div className="max-w-3xl">

                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-200">
                  FOUNDING MEMBER
                </p>

                <h1 className="mt-6 text-5xl font-bold text-white">

                  Welcome {user?.first_name}

                </h1>

                <p className="mt-6 text-xl leading-9 text-blue-100">

                  You joined Take Profit before launch. Learn how the platform works, unlock the Academy and follow development as we prepare for launch.

                </p>

              </div>

              <div className="rounded-[32px] bg-white p-8 shadow-lg">

                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-neutral-500">
                  MEMBER STATUS
                </p>

                <h2 className="mt-4 text-3xl font-bold text-black">
                  Founding Member
                </h2>

                <p className="mt-3 text-neutral-600">
                  Waiting for launch
                </p>

              </div>

            </div>

          </div>

          <div className="mt-8 rounded-[32px] bg-white p-8 shadow-sm">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-neutral-500">
                  YOUR PROGRESS
                </p>

                <h2 className="mt-3 text-3xl font-bold text-black">
                  Progress before launch
                </h2>

              </div>

              <div className="rounded-full bg-black px-6 py-3">

                <span className="text-white font-semibold">

                  {verifiedReferrals} of 1 Referral

                </span>

              </div>

            </div>

            <div className="mt-8 h-3 overflow-hidden rounded-full bg-neutral-200">

              <div
                className={`h-full rounded-full transition-all duration-500 ${
                  academyUnlocked
                    ? "w-full bg-gradient-to-r from-[#1D4ED8] to-[#DC2626]"
                    : "w-1/2 bg-gradient-to-r from-[#1D4ED8] to-[#DC2626]"
                }`}
              />

            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

              <div className="rounded-[28px] border border-neutral-200 p-6">

                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-neutral-500">
                  WAITLIST
                </p>

                <h3 className="mt-4 text-2xl font-bold text-black">
                  Joined
                </h3>

                <p className="mt-3 text-neutral-600">
                  Your account is active.
                </p>

              </div>

              <div className="rounded-[28px] border border-neutral-200 p-6">

                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-neutral-500">
                  REFERRALS
                </p>

                <h3 className="mt-4 text-2xl font-bold text-black">

                  {verifiedReferrals} Verified

                </h3>

                <p className="mt-3 text-neutral-600">

                  {academyUnlocked
                    ? "Requirement completed."
                    : "Invite one verified member."}

                </p>

              </div>

              <div className="rounded-[28px] border border-neutral-200 p-6">

                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-neutral-500">
                  ACADEMY
                </p>

                <h3 className="mt-4 text-2xl font-bold text-black">

                  {academyUnlocked ? "Unlocked" : "Locked"}

                </h3>

                <p className="mt-3 text-neutral-600">

                  {academyUnlocked
                    ? "Content will appear here."
                    : "Unlock with one verified referral."}

                </p>

              </div>

              <div className="rounded-[28px] border border-neutral-200 p-6">

                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-neutral-500">
                  LAUNCH
                </p>

                <h3 className="mt-4 text-2xl font-bold text-black">
                  Preparing
                </h3>

                <p className="mt-3 text-neutral-600">
                  More updates coming soon.
                </p>

              </div>

            </div>

          </div>

          <div className="mt-8">
            <AnnouncementCard />
          </div>

                    <div className="mt-8 rounded-[40px] bg-black p-10 shadow-xl">

            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

              <div className="max-w-3xl">

                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-neutral-400">
                  TAKE PROFIT ACADEMY
                </p>

                <h2 className="mt-5 text-5xl font-bold text-white">
                  Learn before launch
                </h2>

                <p className="mt-6 text-xl leading-9 text-neutral-300">
                  The Academy will teach you how Take Profit works before the platform becomes available.
                </p>

              </div>

              <div
                className={`rounded-[28px] px-8 py-6 ${
                  academyUnlocked
                    ? "bg-blue-600 text-white"
                    : "bg-red-600 text-white"
                }`}
              >

                <p className="text-sm font-semibold uppercase tracking-[0.35em]">
                  STATUS
                </p>

                <h3 className="mt-3 text-3xl font-bold">

                  {academyUnlocked ? "Unlocked" : "Locked"}

                </h3>

              </div>

            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-3">

              <div className="rounded-[30px] bg-white p-8">

                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-neutral-500">
                  LESSON ONE
                </p>

                <h3 className="mt-5 text-2xl font-bold text-black">
                  Why Take Profit Exists
                </h3>

                <p className="mt-4 leading-8 text-neutral-600">
                  Understand the problem Take Profit was built to solve.
                </p>

              </div>

              <div className="rounded-[30px] bg-white p-8">

                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-neutral-500">
                  LESSON TWO
                </p>

                <h3 className="mt-5 text-2xl font-bold text-black">
                  Company Capital
                </h3>

                <p className="mt-4 leading-8 text-neutral-600">
                  Learn how members gain access to company funded trading capital.
                </p>

              </div>

              <div className="rounded-[30px] bg-white p-8">

                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-neutral-500">
                  LESSON THREE
                </p>

                <h3 className="mt-5 text-2xl font-bold text-black">
                  Recovery System
                </h3>

                <p className="mt-4 leading-8 text-neutral-600">
                  Learn how Take Profit is designed to help traders continue after significant setbacks.
                </p>

              </div>

            </div>

            <div className="mt-10">

              {academyUnlocked ? (

                <button className="rounded-full bg-white px-8 py-4 font-semibold text-black transition hover:bg-neutral-200">

                  Open Academy

                </button>

              ) : (

                <button
                  disabled
                  className="cursor-not-allowed rounded-full bg-neutral-700 px-8 py-4 font-semibold text-neutral-300"
                >

                  Unlock With One Verified Referral

                </button>

              )}

            </div>

          </div>

                    <div className="mt-8 rounded-[32px] bg-white p-8 shadow-sm">

            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

              <div>

                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-neutral-500">
                  YOUR REFERRAL LINK
                </p>

                <h2 className="mt-3 text-3xl font-bold text-black">
                  Invite one verified member
                </h2>

                <p className="mt-4 max-w-2xl text-lg leading-8 text-neutral-600">
                  Once one verified member joins through your referral link your Academy unlocks automatically.
                </p>

              </div>

              <div className="rounded-[28px] bg-black px-8 py-6 text-center">

                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-neutral-400">
                  VERIFIED REFERRALS
                </p>

                <h3 className="mt-3 text-5xl font-bold text-white">
                  {verifiedReferrals}
                </h3>

              </div>

            </div>

            <div className="mt-8">

              <ReferralLinkCard />

            </div>

          </div>

          <div className="mt-8 rounded-[32px] bg-[#8B1111] p-8 shadow-xl">

            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-red-200">
              LATEST UPDATES
            </p>

            <h2 className="mt-4 text-3xl font-bold text-white">
              Stay informed
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-9 text-red-100">
              Development updates, new Academy lessons and launch announcements will appear here as they become available.
            </p>

            <div className="mt-8 rounded-[24px] bg-white p-6">

              <p className="font-semibold text-black">
                No new updates today
              </p>

              <p className="mt-3 leading-8 text-neutral-600">
                We are actively building Take Profit. Check back regularly for product updates and new learning content.
              </p>

            </div>

          </div>

        </section>

      </div>

    </main>

  );
}