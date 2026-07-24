"use client";

import { useUser } from "@/app/dashboard/UserProvider";

export default function ReferralLinkCard() {
  const { user } = useUser();

  const referralLink = user?.referral_code
    ? `https://takeprofit.name.ng/invite/${user.referral_code}`
    : "";

  async function copyLink() {
    if (!referralLink) return;

    await navigator.clipboard.writeText(referralLink);

    alert("Referral link copied.");
  }

  return (
    <div className="rounded-[32px] border border-neutral-200 bg-white p-8 shadow-sm">

      <h2 className="text-3xl font-semibold">
        Your Referral Link
      </h2>

      <div className="mt-6 rounded-2xl bg-neutral-100 p-5 break-all text-lg">

        {referralLink || "Loading referral link..."}

      </div>

      <div className="mt-6 flex flex-wrap gap-4">

        <button
          onClick={copyLink}
          className="rounded-full bg-black px-7 py-3 text-white"
        >
          Copy
        </button>

        <a
          href={
            referralLink
              ? `https://wa.me/?text=${encodeURIComponent(referralLink)}`
              : "#"
          }
          className="rounded-full border border-neutral-300 px-7 py-3"
        >
          Share
        </a>

      </div>

    </div>
  );
}