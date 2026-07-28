"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="overflow-hidden bg-white">

      <div className="mx-auto grid min-h-[calc(100vh-88px)] max-w-7xl items-center gap-20 px-6 py-20 lg:grid-cols-2">

        {/* LEFT */}

        <div>

          <p className="text-sm font-semibold uppercase tracking-[0.45em] text-red-600">
            TRADE SMARTER
          </p>

          <h1 className="mt-8 text-5xl font-semibold leading-[0.9] tracking-tight text-black md:text-7xl lg:text-8xl">

            Trade with
            <br />
            real capital.

          </h1>

          <p className="mt-10 max-w-xl text-xl leading-10 text-neutral-600">

            Keep more of the upside.

            <br />

            Carry less of the risk.

            <br />

            Recover.

            <br />

            Improve.

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

        {/* RIGHT */}

        <div className="relative">

          <div className="rounded-[42px] border border-neutral-200 bg-white p-8 shadow-[0_40px_100px_rgba(0,0,0,0.12)]">

            <div className="flex items-center gap-3">

              <div className="h-3.5 w-3.5 rounded-full bg-red-500" />

              <div className="h-3.5 w-3.5 rounded-full bg-blue-500" />

            </div>

            <div className="mt-10 space-y-6">

              <div className="rounded-3xl bg-neutral-100 p-7">

                <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
                  Capital
                </p>

                <h3 className="mt-4 text-5xl font-bold text-black">
                  $100K
                </h3>

              </div>

              <div className="rounded-3xl bg-neutral-100 p-7">

                <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
                  Risk Management
                </p>

                <div className="mt-6 space-y-5">

                  <div>

                    <div className="mb-2 flex justify-between text-sm text-neutral-500">
                      <span>Daily Risk</span>
                      <span>35%</span>
                    </div>

                    <div className="h-3 rounded-full bg-neutral-300">
                      <div className="h-3 w-[35%] rounded-full bg-red-500" />
                    </div>

                  </div>

                  <div>

                    <div className="mb-2 flex justify-between text-sm text-neutral-500">
                      <span>Overall Risk</span>
                      <span>58%</span>
                    </div>

                    <div className="h-3 rounded-full bg-neutral-300">
                      <div className="h-3 w-[58%] rounded-full bg-blue-500" />
                    </div>

                  </div>

                </div>

              </div>

              <div className="rounded-3xl bg-neutral-100 p-7">

                <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
                  Growth
                </p>

                <div className="mt-6">

                  <svg
                    viewBox="0 0 520 220"
                    className="w-full"
                  >

                    <defs>

                      <linearGradient
                        id="heroGrowth"
                        x1="0%"
                        y1="0%"
                        x2="0%"
                        y2="100%"
                      >

                        <stop
                          offset="0%"
                          stopColor="#2563eb"
                          stopOpacity="0.35"
                        />

                        <stop
                          offset="100%"
                          stopColor="#2563eb"
                          stopOpacity="0"
                        />

                      </linearGradient>

                    </defs>

                    <path
                      d="
                        M0 180
                        C60 175 120 160 180 135
                        S300 85 520 20
                        L520 220
                        L0 220
                        Z
                      "
                      fill="url(#heroGrowth)"
                    />

                    <path
                      d="
                        M0 180
                        C60 175 120 160 180 135
                        S300 85 520 20
                      "
                      fill="none"
                      stroke="#2563eb"
                      strokeWidth="6"
                      strokeLinecap="round"
                    />

                  </svg>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}