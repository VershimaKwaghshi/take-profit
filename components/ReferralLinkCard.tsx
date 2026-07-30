"use client";

import { useState } from "react";
import { useUser } from "@/app/dashboard/UserProvider";

export default function ReferralLinkCard() {
  const { user, loading } = useUser();

  const [copied, setCopied] = useState(false);

  if (loading) {
    return (
      <div className="rounded-[28px] bg-neutral-100 p-8">
        Loading...
      </div>
    );
  }

  const referralCode = user?.referral_code ?? "";

  const referralLink =
    referralCode.length > 0
      ? `https://takeprofit.name.ng/invite/${referralCode}`
      : "";

  const referralCount = user?.referral_count ?? 0;

  async function copyLink() {
    if (!referralLink) return;

    await navigator.clipboard.writeText(referralLink);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  return (
    <div>

      <div className="rounded-[32px] bg-[#071A52] p-8 text-white">

        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-200">
          Your Referral Link
        </p>

        <div className="mt-6 break-all rounded-2xl bg-white/10 p-5 text-base leading-8">
          {referralLink || "Referral link unavailable."}
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">

          <div className="rounded-2xl bg-white p-6">

            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-neutral-500">
              Verified Referrals
            </p>

            <p className="mt-3 text-5xl font-bold text-black">
              {referralCount}
            </p>

          </div>

          <div className="rounded-2xl bg-[#A3221B] p-6">

            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-100">
              Status
            </p>

            <p className="mt-3 text-3xl font-bold text-white">
              Founding Member
            </p>

            <p className="mt-4 text-red-100">
              Share your referral link and invite others to join before launch.
            </p>

          </div>

        </div>

        <div className="mt-8 flex flex-wrap gap-4">

          <button
            onClick={copyLink}
            className="inline-flex h-14 items-center justify-center rounded-full bg-white px-8 font-semibold text-black transition hover:bg-neutral-200"
          >
            {copied ? "Copied" : "Copy Link"}
          </button>

          <a
            href={`https://wa.me/?text=${encodeURIComponent(referralLink)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-14 items-center justify-center rounded-full border border-white/30 px-8 font-semibold text-white transition hover:bg-white/10"
          >
            Share
          </a>

        </div>

      </div>

    </div>
  );
}