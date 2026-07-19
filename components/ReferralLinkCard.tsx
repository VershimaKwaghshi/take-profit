"use client";

import { useState } from "react";
import { Copy, Share2, QrCode, Check } from "lucide-react";
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

  async function handleCopy() {
    if (!referralLink) return;

    try {
      await navigator.clipboard.writeText(referralLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable, nothing to do here
    }
  }

  async function handleShare() {
    if (!referralLink) return;

    if (navigator.share) {
      try {
        await navigator.share({
          title: "Take Profit",
          text: "Join me on Take Profit",
          url: referralLink,
        });
      } catch {
        // User cancelled the share sheet, ignore
      }
    } else {
      handleCopy();
    }
  }

  const qrSrc = referralLink
    ? `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(
        referralLink
      )}`
    : null;

  return (
    <section className="rounded-[32px] border border-neutral-200 bg-white p-10 shadow-sm">

      <p className="text-neutral-500">
        Your Referral Link
      </p>

      <div className="mt-5 rounded-2xl bg-neutral-100 p-5">

        <p className="break-all text-lg font-medium">
          {loading
            ? "Loading your referral link..."
            : error
            ? "Unable to load referral link"
            : referralLink ?? "Your referral code is being generated"}
        </p>

      </div>

      <div className="mt-8 flex flex-wrap gap-4">

        <button
          onClick={handleCopy}
          disabled={!referralLink}
          className="flex items-center gap-2 rounded-full bg-black px-6 py-3 text-white transition hover:opacity-90 disabled:opacity-50"
        >

          {copied ? <Check size={18} /> : <Copy size={18} />}

          {copied ? "Copied" : "Copy"}

        </button>

        <button
          onClick={handleShare}
          disabled={!referralLink}
          className="flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-6 py-3 transition hover:bg-neutral-100 disabled:opacity-50"
        >

          <Share2 size={18} />

          Share

        </button>

        <button
          onClick={() => setShowQr((prev) => !prev)}
          disabled={!referralLink}
          className="flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-6 py-3 transition hover:bg-neutral-100 disabled:opacity-50"
        >

          <QrCode size={18} />

          QR Code

        </button>

      </div>

      {showQr && qrSrc && (
        <div className="mt-8 flex justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={qrSrc}
            alt="Referral link QR code"
            width={200}
            height={200}
            className="rounded-2xl border border-neutral-200"
          />
        </div>
      )}

    </section>
  );
}
