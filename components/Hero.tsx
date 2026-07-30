"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-white">

      <div className="mx-auto flex min-h-[calc(100vh-88px)] max-w-5xl flex-col items-center justify-center px-6 text-center">

        <span className="rounded-full border border-red-200 bg-red-50 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-red-600">
          PRE-LAUNCH
        </span>

        <h1 className="mt-10 text-5xl font-black leading-[0.95] tracking-tight text-black sm:text-6xl md:text-7xl lg:text-8xl">

          Trade with
          <br />
          real capital.

        </h1>

        <p className="mt-10 max-w-3xl text-xl leading-9 text-neutral-600">

          Take Profit is building a different trading experience.

          Join the waitlist to follow our journey, learn about the platform before launch, and be among the first to receive access.

        </p>

        <div className="mt-12">

          <Link
            href="/waitlist"
            className="inline-flex h-16 items-center justify-center rounded-full bg-black px-10 text-lg font-semibold text-white transition hover:bg-neutral-900"
          >
            Join Waitlist
          </Link>

        </div>

        <p className="mt-5 text-sm text-neutral-500">
          Free to join. No commitment required.
        </p>

      </div>

    </section>
  );
}