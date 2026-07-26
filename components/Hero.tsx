"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">

      <div className="mx-auto flex min-h-[80vh] max-w-7xl flex-col justify-center px-6 pt-14 pb-8">

        {/* Label */}

        <span className="mb-4 text-xs font-semibold uppercase tracking-[0.45em] text-red-600">
          Trade Smarter
        </span>

        {/* Heading */}

        <h1 className="max-w-4xl text-5xl font-black leading-[0.92] tracking-tight text-black sm:text-7xl md:text-8xl">
          Trade with
          <br />
          real capital.
        </h1>

        {/* Description */}

        <p className="mt-6 max-w-2xl text-xl leading-relaxed text-neutral-600 sm:text-2xl">
          Keep more of the upside.
          <br />
          Carry less of the risk.
          <br />
          Learn continuously and stay in the market longer.
        </p>

        {/* Button */}

        <div className="mt-8">
          <Link
            href="/waitlist"
            className="inline-flex h-16 w-full items-center justify-center rounded-full bg-black px-10 text-lg font-semibold text-white transition hover:opacity-90 sm:w-auto"
          >
            Join Waitlist
          </Link>
        </div>

        {/* Illustration */}

        <div className="mt-8 flex justify-center">
          <Image
            src="/seesaw.png"
            alt="Take Profit"
            width={900}
            height={520}
            priority
            className="h-auto w-full max-w-2xl object-contain"
          />
        </div>

      </div>

    </section>
  );
}