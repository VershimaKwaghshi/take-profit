"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-white">

      <div className="mx-auto grid min-h-[calc(100vh-88px)] max-w-7xl items-center gap-20 px-6 py-20 lg:grid-cols-2">

        <div>

          <span className="text-xs font-bold uppercase tracking-[0.45em] text-red-600">

            TRADE SMARTER

          </span>

          <h1 className="mt-6 text-5xl font-black leading-[0.9] tracking-tight text-black sm:text-6xl md:text-7xl lg:text-8xl">

            Trade with

            <br />

            real capital.

          </h1>

          <p className="text-lg text-gray-600 mt-6">
Take Profit is currently in development.

Join the waitlist to learn how the platform works, follow our progress, and be among the first to receive access when we launch.
</p>

          <Link
            href="/waitlist"
            className="mt-14 inline-flex h-16 items-center justify-center rounded-full bg-black px-12 text-lg font-semibold text-white transition hover:bg-neutral-900"
          >

            Join Waitlist

          </Link>

        </div>

        <div>

          <div className="overflow-hidden rounded-[40px] border border-neutral-200 bg-white shadow-2xl">

            <div className="border-b border-neutral-200 px-10 py-8">

              <div className="flex items-center justify-between">

                <p className="text-sm uppercase tracking-[0.35em] text-neutral-500">

                  Capital

                </p>

                <div className="flex gap-2">

                  <div className="h-3 w-3 rounded-full bg-red-500" />

                  <div className="h-3 w-3 rounded-full bg-blue-500" />

                </div>

              </div>

            </div>

            <div className="px-10 py-16">

              <h2 className="text-6xl font-black tracking-tight text-black md:text-7xl">

                $100M+

              </h2>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}