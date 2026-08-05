"use client";

import { useState } from "react";
import { useUser } from "@/app/dashboard/UserProvider";

export default function ReferralLinkCard() {
  const { user, loading } = useUser();
  const [copied, setCopied] = useState(false);

  if (loading) {
    return (
      <div className="rounded-md border border-panel-line bg-deck/50 p-6 text-fog">
        Loading...
      </div>
    );
  }

  // Derive a code if referral_code is missing
  const derivedCode = user?.email
    ? user.email.split("@")[0].replace(/[^a-zA-Z0-9]/g, "")
    : "";

  const referralCode = user?.referral_code || derivedCode;

  const referralLink = referralCode
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
      <div className="break-all rounded-md border border-panel-line bg-deck/50 p-6 font-mono text-sm leading-7 text-chalk">
        {referralLink || "Referral link unavailable."}
      </div>

      <div className="mt-6 flex flex-wrap gap-4">
        <button
          onClick={copyLink}
          disabled={!referralLink}
          className="inline-flex h-12 items-center justify-center rounded-full bg-chalk px-8 font-medium text-deck transition hover:bg-fog disabled:opacity-50"
        >
          {copied ? "Copied" : "Copy link"}
        </button>

        <a
          href={
            referralLink
              ? `https://wa.me/?text=${encodeURIComponent(referralLink)}`
              : "#"
          }
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex h-12 items-center justify-center rounded-full border border-panel-line px-8 font-medium text-chalk transition hover:border-fog ${
            !referralLink ? "pointer-events-none opacity-50" : ""
          }`}
        >
          Share
        </a>
      </div>
    </div>
  );
}