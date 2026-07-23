"use client";

import { useState } from "react";
import {
  Copy,
  Share2,
  QrCode,
  Check,
  X,
  Download,
  Lock,
} from "lucide-react";
import { useUser } from "@/app/dashboard/UserProvider";

const REFERRAL_BASE_URL = "https://takeprofit.name.ng/r";

export default function ReferralLinkCard() {
  const { user, loading, error } = useUser();

  const [copied, setCopied] = useState(false);
  const [showQr, setShowQr] = useState(false);

  const referralCode = user?.referral_code;

  const referralLink = referralCode
    ? `${REFERRAL_BASE_URL}/${referralCode}`
    : null;

  const verifiedReferrals = user?.verified_referrals ?? 0;
  const totalReferrals = user?.referral_count ?? 0;

  const unlocked = verifiedReferrals >= 1;

  async function handleCopy() {
    if (!referralLink) return;

    await navigator.clipboard.writeText(referralLink);

    setCopied(true);

    setTimeout(() => setCopied(false), 2000);
  }

  async function handleShare() {
    if (!referralLink) return;

    if (navigator.share) {
      await navigator.share({
        title: "Take Profit",
        text: "Join me on Take Profit.",
        url: referralLink,
      });
    } else {
      handleCopy();
    }
  }

  const qrSrc = referralLink
    ? `https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${encodeURIComponent(
        referralLink
      )}`
    : null;

  return (
    <>
      <section className="rounded-[36px] border border-neutral-200 bg-white p-10 shadow-sm">

        <div className="flex items-center justify-between">

          <div>

            <p className="text-sm font-medium uppercase tracking-wide text-neutral-500">
              Referral Centre
            </p>

            <h2 className="mt-2 text-3xl font-semibold">
              Invite Friends
            </h2>

          </div>

          <div
            className={`rounded-full px-5 py-2 text-sm font-medium ${
              unlocked
                ? "bg-green-100 text-green-700"
                : "bg-neutral-100 text-neutral-700"
            }`}
          >
            {unlocked ? "Unlocked" : "1 Verified Referral Required"}
          </div>

        </div>

        <p className="mt-6 max-w-2xl leading-8 text-neutral-500">
          Invite one verified friend to unlock the Take Profit ecosystem.
          Once one friend successfully joins and verifies their email,
          your account unlocks automatically.
        </p>

        <div className="mt-8 rounded-2xl bg-neutral-100 p-5">

          <p className="break-all text-lg font-medium">

            {loading
              ? "Loading..."
              : error
              ? "Unable to load referral link."
              : referralLink}

          </p>

        </div>

        <div className="mt-8 flex flex-wrap gap-4">

          <button
            onClick={handleCopy}
            className="flex items-center gap-2 rounded-full bg-black px-6 py-3 text-white"
          >
            {copied ? <Check size={18} /> : <Copy size={18} />}
            {copied ? "Copied" : "Copy Link"}
          </button>

          <button
            onClick={handleShare}
            className="flex items-center gap-2 rounded-full border border-neutral-300 px-6 py-3"
          >
            <Share2 size={18} />
            Share
          </button>

          <button
            onClick={() => setShowQr(true)}
            className="flex items-center gap-2 rounded-full border border-neutral-300 px-6 py-3"
          >
            <QrCode size={18} />
            QR Code
          </button>

        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">

          <div className="rounded-3xl border border-neutral-200 p-8">

            <p className="text-sm text-neutral-500">
              Total Referrals
            </p>

            <h3 className="mt-3 text-4xl font-semibold">
              {totalReferrals}
            </h3>

          </div>

          <div className="rounded-3xl border border-neutral-200 p-8">

            <p className="text-sm text-neutral-500">
              Verified Referrals
            </p>

            <h3 className="mt-3 text-4xl font-semibold">
              {verifiedReferrals}
            </h3>

          </div>

          <div className="rounded-3xl border border-neutral-200 p-8">

            <div className="flex items-center gap-2">

              <Lock size={18} />

              <span className="text-sm text-neutral-500">
                Unlock Progress
              </span>

            </div>

            <h3 className="mt-3 text-4xl font-semibold">
              {Math.min(verifiedReferrals, 1)}/1
            </h3>

            <div className="mt-5 h-3 overflow-hidden rounded-full bg-neutral-200">

              <div
                className={`h-full rounded-full bg-black ${
                  unlocked ? "w-full" : "w-0"
                }`}
              />

            </div>

          </div>

        </div>

      </section>

      {showQr && qrSrc && (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-6">

          <div className="w-full max-w-sm rounded-[32px] bg-white p-8">

            <div className="flex items-center justify-between">

              <h3 className="text-2xl font-semibold">
                Your QR Code
              </h3>

              <button
                onClick={() => setShowQr(false)}
              >
                <X />
              </button>

            </div>

            <img
              src={qrSrc}
              alt="QR Code"
              className="mx-auto mt-8 rounded-2xl"
            />

            <a
              href={qrSrc}
              download="take-profit-qr.png"
              className="mt-8 flex items-center justify-center gap-2 rounded-full bg-black py-4 text-white"
            >
              <Download size={18} />
              Download QR
            </a>

          </div>

        </div>

      )}

    </>
  );
}
