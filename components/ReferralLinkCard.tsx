"use client";

import { useState } from "react";
import { useUser } from "@/app/dashboard/UserProvider";

export default function ReferralLinkCard() {
  const { user, loading } = useUser();
  const [copied, setCopied] = useState(false);

  if (loading) {
    return (
      <div className="rounded-[28px] bg-neutral-50 p-8">
        Loading...
      </div>
    );
  }

  // Fallback chain: referral_code -> id -> email prefix
  const rawCode =
    user?.referral_code ||
    user?.id ||
    (user?.email ? user.email.split("@")[0] : "");

  const referralCode = rawCode ? String(rawCode).trim() : "";

  const referralLink =
    referralCode.length > 0
      ? `https://takeprofit.name.ng/invite/${referralCode}`
      : "";

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
      <div className="rounded-3xl bg-neutral-100 p-6 break-all text-base leading-8 text-neutral-700">
        {referralLink || "Referral link unavailable."}
      </div>

      <div className="mt-8 flex flex-wrap gap-4">
        <button
          onClick={copyLink}
          disabled={!referralLink}
          className="inline-flex h-12 items-center justify-center rounded-full bg-black px-8 font-medium text-white transition hover:bg-neutral-900 disabled:opacity-50"
        >
          {copied ? "Copied" : "Copy Link"}
        </button>

        <a
          href={referralLink ? `https://wa.me/?text=${encodeURIComponent(referralLink)}` : "#"}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex h-12 items-center justify-center rounded-full border border-neutral-300 px-8 font-medium text-neutral-700 transition hover:bg-neutral-100 ${
            !referralLink ? "pointer-events-none opacity-50" : ""
          }`}
        >
          Share
        </a>
      </div>
    </div>
  );
}
