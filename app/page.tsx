import Link from "next/link";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Philosophy from "../components/Philosophy";
import Features from "../components/Features";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="bg-white">

      <Navbar />

      <Hero />

      <Philosophy />

      <Features />

      <section className="bg-black py-32">

        <div className="mx-auto max-w-7xl px-6">

          <div className="max-w-4xl">

            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-red-500">

              TAKE PROFIT

            </p>

            <h2 className="mt-8 text-5xl font-semibold leading-tight text-white md:text-7xl">

              One platform.

              <br />

              Every opportunity.

            </h2>

            <p className="mt-8 max-w-2xl text-xl leading-10 text-neutral-300">

              Built for traders who want access to capital, structured risk management and long term growth.

            </p>

          </div>

          <div className="mt-20 grid gap-8 lg:grid-cols-3">

            <div className="rounded-[36px] bg-neutral-900 p-10">

              <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">

                CAPITAL

              </p>

              <h3 className="mt-8 text-6xl font-bold text-white">

                $100K

              </h3>

              <p className="mt-8 text-lg leading-9 text-neutral-400">

                Trade with funded capital while protecting your own.

              </p>

            </div>

            <div className="rounded-[36px] bg-neutral-900 p-10">

              <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">

                GROWTH

              </p>

              <div className="mt-10">

                <svg
                  viewBox="0 0 500 220"
                  className="w-full"
                  xmlns="http://www.w3.org/2000/svg"
                >

                  <defs>

                    <linearGradient
                      id="growthFill"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >

                      <stop
                        offset="0%"
                        stopColor="#dc2626"
                        stopOpacity="0.35"
                      />

                      <stop
                        offset="100%"
                        stopColor="#dc2626"
                        stopOpacity="0"
                      />

                    </linearGradient>

                  </defs>

                  <path
                    fill="url(#growthFill)"
                    d="M0 190 C40 185 70 175 110 160 S180 130 240 105 S320 75 390 45 S450 25 500 12 L500 220 L0 220 Z"
                  />

                  <path
                    fill="none"
                    stroke="#ef4444"
                    strokeWidth={6}
                    strokeLinecap="round"
                    d="M0 190 C40 185 70 175 110 160 S180 130 240 105 S320 75 390 45 S450 25 500 12"
                  />

                </svg>

              </div>

            </div>

            <div className="rounded-[36px] bg-neutral-900 p-10">


            </div>

          </div>

          <div className="mt-24">

            <Link
              href="/waitlist"
              className="inline-flex h-16 items-center justify-center rounded-full bg-white px-12 text-lg font-semibold text-black transition hover:bg-neutral-100"
            >

              Join Waitlist

            </Link>

          </div>

        </div>

      </section>

      <Footer />

    </main>
  );
}