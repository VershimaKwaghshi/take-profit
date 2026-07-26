"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto flex min-h-[calc(100vh-88px)] max-w-7xl items-center px-6 py-16 md:px-10 lg:px-16">
        <div className="max-w-4xl">

          {/* Label */}
          <span className="mb-5 block text-xs font-bold uppercase tracking-[0.45em] text-red-600">
            Trade Smarter
          </span>

          {/* Heading */}
          <h1 className="text-5xl font-black leading-[0.92] tracking-tight text-black sm:text-6xl md:text-7xl lg:text-8xl">
            Trade with
            <br />
            real capital.
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-2xl text-lg leading-9 text-neutral-600 md:text-xl">
            Keep more of the upside.
            <br />
            Carry less of the risk.
            <br />
            Learn continuously and stay in the market longer.
          </p>

          {/* Buttons */}
          <div className="mt-12">
            <Link
              href="/waitlist"
              className="inline-flex h-16 items-center justify-center rounded-full bg-black px-12 text-lg font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-neutral-900"
            >
              Join Waitlist
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}