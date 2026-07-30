"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function JoinWaitlistButton() {
  const searchParams = useSearchParams();
  const ref = searchParams.get("ref");

  return (
    <Link
      href={ref ? `/waitlist?ref=${encodeURIComponent(ref)}` : "/waitlist"}
      className="mt-16 inline-flex items-center justify-center rounded-full bg-white px-10 py-5 text-lg font-semibold text-black transition hover:bg-neutral-100"
    >
      Join Waitlist
    </Link>
  );
}
