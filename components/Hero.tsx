"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-white">

      <div className="mx-auto flex min-h-[calc(100vh-88px)] max-w-7xl items-center px-6 py-20 md:px-10 lg:px-16">

        <div className="grid w-full items-center gap-20 lg:grid-cols-2">

          {/* Left */}

          <div>

            <p className="text-xs font-bold uppercase tracking-[0.45em] text-red-600">

              TRADE SMARTER

            </p>

            <h1 className="mt-8 text-6xl font-black leading-[0.9] tracking-tight text-black sm:text-7xl md:text-8xl">

              Trade with
              <br />

              real capital.

            </h1>

            <p className="mt-10 max-w-xl text-2xl leading-relaxed text-neutral-600">

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

          {/* Right */}

          <div>

            <div className="overflow-hidden rounded-[36px] border border-neutral-200 bg-black shadow-[0_30px_80px_rgba(0,0,0,.15)]">

              <div className="border-b border-neutral-800 px-8 py-6">

                <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">

                  TAKE PROFIT

                </p>

                <h3 className="mt-4 text-3xl font-semibold text-white">

                  Trader Dashboard

                </h3>

              </div>

              <div className="space-y-8 p-8">

                <div className="grid grid-cols-2 gap-5">

                  <div className="rounded-3xl bg-neutral-900 p-6">

                    <p className="text-sm text-neutral-500">

                      Available Capital

                    </p>

                    <h4 className="mt-4 text-3xl font-bold text-white">

                      $100K

                    </h4>

                  </div>

                  <div className="rounded-3xl bg-neutral-900 p-6">

                    <p className="text-sm text-neutral-500">

                      Risk Score

                    </p>

                    <h4 className="mt-4 text-3xl font-bold text-green-400">

                      Healthy

                    </h4>

                  </div>

                </div>

                <div className="rounded-3xl bg-neutral-900 p-6">

                  <p className="text-sm text-neutral-500">

                    Trader Growth

                  </p>

                  <div className="mt-8 flex h-32 items-end gap-3">

                    <div className="h-10 w-full rounded-full bg-red-500"></div>

                    <div className="h-16 w-full rounded-full bg-red-500"></div>

                    <div className="h-12 w-full rounded-full bg-red-500"></div>

                    <div className="h-24 w-full rounded-full bg-red-500"></div>

                    <div className="h-20 w-full rounded-full bg-red-500"></div>

                    <div className="h-28 w-full rounded-full bg-red-500"></div>

                    <div className="h-24 w-full rounded-full bg-red-500"></div>

                    <div className="h-32 w-full rounded-full bg-red-500"></div>

                  </div>

                </div>

                <div className="grid grid-cols-3 gap-5">

                  <div className="rounded-3xl bg-neutral-900 p-5">

                    <p className="text-xs uppercase tracking-wider text-neutral-500">

                      Education

                    </p>

                    <p className="mt-3 text-white">

                      Ready

                    </p>

                  </div>

                  <div className="rounded-3xl bg-neutral-900 p-5">

                    <p className="text-xs uppercase tracking-wider text-neutral-500">

                      Community

                    </p>

                    <p className="mt-3 text-white">

                      Active

                    </p>

                  </div>

                  <div className="rounded-3xl bg-neutral-900 p-5">

                    <p className="text-xs uppercase tracking-wider text-neutral-500">

                      Performance

                    </p>

                    <p className="mt-3 text-white">

                      Tracking

                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}