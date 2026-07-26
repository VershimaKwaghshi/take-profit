"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-24">

        {/* Small Label */}
        <span className="mb-5 text-xs font-semibold uppercase tracking-[0.45em] text-red-600">
          Trade Smarter
        </span>

        {/* Heading */}
        <h1 className="max-w-4xl text-5xl font-black leading-[0.92] tracking-tight text-black sm:text-7xl md:text-8xl">
          Trade with
          <br />
          real capital.
        </h1>

        {/* Description */}
        <p className="mt-8 max-w-2xl text-xl leading-relaxed text-neutral-600 sm:text-2xl">
          Keep more of the upside.
          <br />
          Carry less of the risk.
          <br />
          Learn continuously and stay in the market longer.
        </p>

        {/* CTA */}
        <div className="mt-12">
          <Link
            href="/waitlist"
            className="inline-flex h-16 w-full items-center justify-center rounded-full bg-black px-10 text-lg font-semibold text-white transition hover:opacity-90 sm:w-auto"
          >
            Join Waitlist
          </Link>
        </div>

      </div>
    </section>
  );
}