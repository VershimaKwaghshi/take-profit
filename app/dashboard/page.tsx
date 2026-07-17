"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function DashboardContent() {
  const searchParams = useSearchParams();
  const email = searchParams.get("email") || "";

  return (
    <main className="min-h-screen bg-white text-black">
      <div className="mx-auto max-w-3xl px-6 py-16">

        <h1 className="text-4xl font-semibold">
          Welcome
        </h1>

        <p className="mt-3 text-neutral-600">
          {email}
        </p>

        <div className="mt-12 rounded-2xl border border-neutral-200 p-6">
          <h2 className="text-lg font-semibold">
            Your Referral Link
          </h2>

          <div className="mt-4 rounded-xl bg-neutral-100 p-4 break-all">
            Coming Soon
          </div>

          <button
            disabled
            className="mt-4 rounded-full bg-black px-6 py-3 text-white opacity-50"
          >
            Copy Link
          </button>
        </div>

        <div className="mt-8 rounded-2xl border border-neutral-200 p-6">
          <h2 className="text-lg font-semibold">
            Referrals
          </h2>

          <div className="mt-5 space-y-3">
            <div className="flex justify-between">
              <span>Minimum Required</span>
              <strong>1</strong>
            </div>

            <div className="flex justify-between">
              <span>Current Referrals</span>
              <strong>0</strong>
            </div>

            <div className="flex justify-between">
              <span>Progress</span>
              <strong>0 of 1</strong>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-neutral-200 p-6">
          <h2 className="text-lg font-semibold">
            Status
          </h2>

          <div className="mt-5 space-y-3">
            <p>🟢 Email Verified</p>
            <p>🟢 Waitlist Active</p>
            <p>🟡 Education Coming Soon</p>
            <p>🟡 Funding Coming Soon</p>
            <p>🟡 Trading Coming Soon</p>
            <p>🟡 Restitution Coming Soon</p>
          </div>
        </div>

      </div>
    </main>
  );
}

export default function DashboardPage() {
  return (
    <Suspense>
      <DashboardContent />
    </Suspense>
  );
}