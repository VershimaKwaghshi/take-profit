"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useUser } from "@/app/dashboard/UserProvider";

export default function Topbar() {
  const { user, loading } = useUser();
  const router = useRouter();

  const [menuOpen, setMenuOpen] = useState(false);

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

        <div className="relative">

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-lg font-semibold text-white"
          >

            {initial}

          </button>

          {menuOpen && (

            <div className="absolute right-0 mt-4 w-72 overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-xl">

              <div className="border-b border-neutral-200 p-6">

                <h3 className="text-lg font-semibold">

                  {user?.first_name} {user?.last_name}

                </h3>

                <p className="mt-1 text-sm text-neutral-500">

                  {user?.email}

                </p>

              </div>

              <div className="py-2">

                <Link
                  href="/dashboard/referrals"
                  className="block px-6 py-4 hover:bg-neutral-100"
                >
                  👥 Referrals
                </Link>

                <Link
                  href="/dashboard/notifications"
                  className="block px-6 py-4 hover:bg-neutral-100"
                >
                  🔔 Notifications
                </Link>

                <Link
                  href="/dashboard/profile"
                  className="block px-6 py-4 hover:bg-neutral-100"
                >
                  👤 Profile
                </Link>

                <Link
                  href="/dashboard/settings"
                  className="block px-6 py-4 hover:bg-neutral-100"
                >
                  ⚙️ Settings
                </Link>

                <Link
                  href="/dashboard/help"
                  className="block px-6 py-4 hover:bg-neutral-100"
                >
                  ❓ Help & Contact
                </Link>

              </div>

              <div className="border-t border-neutral-200 p-2">

                <button
                  onClick={() => router.push("/login")}
                  className="w-full rounded-2xl px-5 py-4 text-left text-red-600 transition hover:bg-red-50"
                >

                  🚪 Sign Out

                </button>

              </div>

            </div>

          )}

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