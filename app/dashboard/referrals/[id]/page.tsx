"use client";

import Link from "next/link";
import { ArrowLeft, Calendar } from "lucide-react";

export default function ReferralProfilePage() {
  return (
    <main className="min-h-screen bg-neutral-100 p-10">

      <div className="max-w-6xl mx-auto">

        <Link
          href="/dashboard/referrals"
          className="inline-flex items-center gap-2 text-neutral-600 hover:text-black mb-8"
        >
          <ArrowLeft size={18} />
          Back
        </Link>

        <div className="rounded-3xl bg-white border border-neutral-200 shadow-sm p-10">

          <div className="flex items-start justify-between">

            <div>

              <h1 className="text-4xl font-semibold">
                John Doe
              </h1>

              <p className="mt-3 text-neutral-500">
                Nigeria
              </p>

            </div>

            <button className="flex items-center gap-2 rounded-full border border-neutral-300 px-6 py-3">

              <Calendar size={18} />

              Select Date

            </button>

          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">

            <div className="rounded-3xl border border-neutral-200 p-8">

              <p className="text-neutral-500">
                Joined
              </p>

              <h2 className="text-2xl font-semibold mt-3">
                18 Jul 2026
              </h2>

            </div>

            <div className="rounded-3xl border border-neutral-200 p-8">

              <p className="text-neutral-500">
                Last Active
              </p>

              <h2 className="text-2xl font-semibold mt-3">
                Today
              </h2>

            </div>

            <div className="rounded-3xl border border-neutral-200 p-8">

              <p className="text-neutral-500">
                Status
              </p>

              <span className="inline-block mt-3 rounded-full bg-black text-white px-5 py-2">
                Verified
              </span>

            </div>

          </div>

          <div className="mt-12">

            <h2 className="text-2xl font-semibold mb-8">
              Activity
            </h2>

            <div className="space-y-5">

              <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6">

                <p className="font-medium">
                  Joined Waitlist
                </p>

                <p className="text-sm text-neutral-500 mt-1">
                  18 Jul 2026
                </p>

              </div>

              <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6">

                <p className="font-medium">
                  Verified Email
                </p>

                <p className="text-sm text-neutral-500 mt-1">
                  18 Jul 2026
                </p>

              </div>

              <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6">

                <p className="font-medium">
                  Logged In
                </p>

                <p className="text-sm text-neutral-500 mt-1">
                  20 Jul 2026
                </p>

              </div>

              <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6">

                <p className="font-medium">
                  Copied Referral Link
                </p>

                <p className="text-sm text-neutral-500 mt-1">
                  21 Jul 2026
                </p>

              </div>

              <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6">

                <p className="font-medium">
                  Opened Dashboard
                </p>

                <p className="text-sm text-neutral-500 mt-1">
                  Today
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}
