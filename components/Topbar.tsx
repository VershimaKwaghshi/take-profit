"use client";

import { useUser } from "@/app/dashboard/UserProvider";

export default function Topbar() {
  const { user, loading } = useUser();

  const initial = user?.first_name
    ? user.first_name.charAt(0).toUpperCase()
    : "?";

  const verifiedReferrals =
    (user as typeof user & { verified_referrals?: number })
      ?.verified_referrals ?? 0;

  const unlocked = verifiedReferrals >= 1;

  return (
    <header>

      <div className="flex items-start justify-between">

        <div>

          <h1 className="text-4xl font-semibold tracking-tight">

            {loading
              ? "Welcome back"
              : `Welcome back, ${user?.first_name ?? "there"} 👋`}

          </h1>

          <p className="mt-3 text-lg text-neutral-500">

            {unlocked
              ? "Your Take Profit account is unlocked."
              : "Invite one verified friend to unlock Take Profit."}

          </p>

        </div>

        <div className="flex items-center gap-4">

          <button className="rounded-full border border-neutral-300 bg-white px-6 py-3 transition hover:bg-neutral-100">

            Notifications

          </button>

          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-lg font-semibold text-white">

            {initial}

          </div>

        </div>

      </div>

      <div className="mt-8 rounded-[28px] border border-neutral-200 bg-white p-8 shadow-sm">

        <div className="flex items-center justify-between">

          <div>

            <p className="text-sm uppercase tracking-wide text-neutral-500">

              Platform Status

            </p>

            <h2 className="mt-2 text-3xl font-semibold">

              {unlocked
                ? "🟢 Unlocked"
                : "🔒 Locked"}

            </h2>

          </div>

          <div className="text-right">

            <p className="text-sm text-neutral-500">

              Verified Referrals

            </p>

            <p className="mt-2 text-3xl font-semibold">

              {verifiedReferrals}/1

            </p>

          </div>

        </div>

        <div className="mt-8 h-3 overflow-hidden rounded-full bg-neutral-200">

          <div
            className={`h-full rounded-full bg-black transition-all duration-700 ${
              unlocked ? "w-full" : "w-0"
            }`}
          />

        </div>

        <p className="mt-6 text-neutral-500">

          {unlocked
            ? "Congratulations! Your account has been unlocked."
            : "Once one invited friend verifies their email, your account will unlock automatically."}

        </p>

      </div>

    </header>
  );
}