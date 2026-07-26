"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">

      <div className="mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-center px-6 pt-10 pb-16">

        {/* Small label */}

        <span className="mb-5 text-xs font-semibold uppercase tracking-[0.45em] text-red-600">
          Trade Smarter
        </span>

        {/* Heading */}

        <h1 className="max-w-4xl text-[56px] font-black leading-[0.9] tracking-tight text-black sm:text-7xl md:text-8xl">
          Trade with
          <br />
          real capital.
        </h1>

        {/* Description */}

        <p className="mt-8 max-w-2xl text-[22px] leading-relaxed text-neutral-600">
          Keep more of the upside.
          <br className="hidden sm:block" />
          Carry less of the risk.
          <br className="hidden sm:block" />
          Learn continuously and stay in the market longer.
        </p>

        {/* Buttons */}

        <div className="mt-12 flex flex-col gap-4 sm:flex-row">

          <Link
            href="/waitlist"
            className="flex h-16 items-center justify-center rounded-full bg-black px-10 text-lg font-semibold text-white transition hover:opacity-90"
          >
            Join Waitlist
          </Link>

          <Link
            href="#about"
            className="flex h-16 items-center justify-center rounded-full border border-neutral-300 bg-white px-10 text-lg font-semibold text-black transition hover:bg-neutral-100"
          >
            Learn More
          </Link>

        </div>

        {/* Illustration */}

        <div className="mt-20 flex justify-center">

          <Image
            src="/seesaw.png"
            alt="Take Profit"
            width={1100}
            height={700}
            priority
            className="w-full max-w-3xl object-contain"
          />

        </div>

      </div>

    </section>
  );
}