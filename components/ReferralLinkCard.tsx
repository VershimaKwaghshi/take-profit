"use client";

import { useState } from "react";
import { Copy, Share2, QrCode, Check, X, Download } from "lucide-react";
import { useUser } from "@/app/dashboard/UserProvider";

const REFERRAL_BASE_URL = "https://takeprofit.name.ng/invite";

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

    await navigator.clipboard.writeText(referralLink);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
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
        // User cancelled sharing
      }
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
              : referralLink ??
                "Your referral code is being generated..."}

          </p>

        </div>

        <div className="mt-8 flex flex-wrap gap-4">

          <button
            onClick={handleCopy}
            disabled={!referralLink}
            className="flex items-center gap-2 rounded-full bg-black px-6 py-3 text-white transition hover:opacity-90 disabled:opacity-50"
          >

            {copied ? (
              <Check size={18} />
            ) : (
              <Copy size={18} />
            )}

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
            onClick={() => setShowQr(true)}
            disabled={!referralLink}
            className="flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-6 py-3 transition hover:bg-neutral-100 disabled:opacity-50"
          >

            <QrCode size={18} />

            QR Code

          </button>

        </div>

      </section>

      {showQr && qrSrc && (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-6">

          <div className="w-full max-w-sm rounded-[32px] bg-white p-8">

            <div className="flex items-center justify-between">

              <h2 className="text-2xl font-semibold">
                Your Referral QR Code
              </h2>

              <button
                onClick={() => setShowQr(false)}
              >
                <X />
              </button>

            </div>

            <img
              src={qrSrc}
              alt="Referral QR Code"
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
