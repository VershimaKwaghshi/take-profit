"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-white">

      <div className="mx-auto flex min-h-[calc(100vh-88px)] max-w-7xl items-center px-6 py-20 md:px-10 lg:px-16">

        <div className="w-full">

          <p className="text-xs font-bold uppercase tracking-[0.45em] text-red-600">
            TRADE SMARTER
          </p>

          <h1 className="mt-8 max-w-5xl text-6xl font-black leading-[0.88] tracking-tight text-black sm:text-7xl md:text-8xl lg:text-[8rem]">

            Trade with
            <br />

            real capital.

          </h1>

          <div className="mt-16 grid gap-12 lg:grid-cols-[2fr_1fr]">

            <div>

              <p className="max-w-2xl text-2xl leading-relaxed text-neutral-600">

                Keep more of the upside.

                <br />

                Carry less of the risk.

                <br />

                Build wealth over time.

              </p>

              <div className="mt-14">

                <Link
                  href="/waitlist"
                  className="inline-flex h-16 items-center justify-center rounded-full bg-black px-12 text-lg font-semibold text-white transition hover:bg-neutral-900"
                >
                  Join Waitlist
                </Link>

              </div>

            </div>

            <div className="flex items-end lg:justify-end">

              <div className="max-w-sm border-l border-neutral-300 pl-8">

                <p className="text-sm uppercase tracking-[0.35em] text-neutral-400">
                  TAKE PROFIT
                </p>

                <p className="mt-6 text-lg leading-9 text-neutral-600">

                  Every trader experiences losses.

                  <br /><br />

                  What matters is having the opportunity to recover, improve and continue building wealth.

                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}