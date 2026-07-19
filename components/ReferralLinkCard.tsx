"use client";

import {
  Copy,
  Share2,
  QrCode,
} from "lucide-react";

export default function ReferralLinkCard() {
  return (
    <section className="rounded-[32px] border border-neutral-200 bg-white p-10 shadow-sm">

      <p className="text-neutral-500">
        Your Referral Link
      </p>

      <div className="mt-5 rounded-2xl bg-neutral-100 p-5">

        <p className="break-all text-lg font-medium">
          https://takeprofit.name.ng/r/TPL9XK8Q2M
        </p>

      </div>

      <div className="mt-8 flex flex-wrap gap-4">

        <button className="flex items-center gap-2 rounded-full bg-black px-6 py-3 text-white transition hover:opacity-90">

          <Copy size={18} />

          Copy

        </button>

        <button className="flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-6 py-3 transition hover:bg-neutral-100">

          <Share2 size={18} />

          Share

        </button>

        <button className="flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-6 py-3 transition hover:bg-neutral-100">

          <QrCode size={18} />

          QR Code

        </button>

      </div>

    </section>
  );
}
