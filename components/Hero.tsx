"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid min-h-[calc(100vh-88px)] max-w-7xl items-center gap-20 px-6 py-20 lg:grid-cols-2">
        {/* Left */}
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.45em] text-red-600">
            PRE-LAUNCH WAITLIST
          </span>

          <h1 className="mt-6 text-5xl font-black leading-[0.9] tracking-tight text-black sm:text-6xl md:text-7xl lg:text-8xl">
            Trade with
            <br />
            real capital.
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-gray-600">
            Take Profit isn't live yet.
          </p>

          <p className="mt-4 max-w-xl text-lg leading-8 text-gray-600">
            Join the waitlist to learn how the platform works, follow our
            progress, and be among the first to receive access when we launch.
          </p>

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            <div className="rounded-3xl border border-neutral-200 bg-white p-6 transition hover:shadow-lg">
              <h3 className="text-lg font-bold text-black">
                Learn the Platform
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                Understand how Take Profit works before it launches.
              </p>
            </div>

            <div className="rounded-3xl border border-neutral-200 bg-white p-6 transition hover:shadow-lg">
              <h3 className="text-lg font-bold text-black">
                Recovery System
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                Discover how the platform is designed to help traders recover
                and continue after setbacks.
              </p>
            </div>

            <div className="rounded-3xl border border-neutral-200 bg-white p-6 transition hover:shadow-lg">
              <h3 className="text-lg font-bold text-black">
                Trading Capital
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                Learn how members can access company-funded trading capital.
              </p>
            </div>

            <div className="rounded-3xl border border-neutral-200 bg-white p-6 transition hover:shadow-lg">
              <h3 className="text-lg font-bold text-black">
                Product Updates
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                Receive updates, new features, and your invitation when Take
                Profit launches.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <Link
              href="/waitlist"
              className="inline-flex items-center justify-center rounded-full bg-black px-8 py-4 text-base font-semibold text-white transition hover:bg-neutral-800"
            >
              Join the Waitlist
            </Link>

            <p className="mt-5 text-sm text-gray-500">
              Join today to understand how Take Profit works before launch.
            </p>
          </div>
        </div>

        {/* Right */}
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

              <p className="mt-6 max-w-sm text-gray-600 leading-7">
                Built to connect traders with professional managers through a
                platform designed for long-term participation, not one-time
                opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}