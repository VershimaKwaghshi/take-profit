"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero() {
  const [users, setUsers] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/stats")
      .then((res) => res.json())
      .then((data) => setUsers(data.users))
      .catch(() => {});
  }, []);

  return (
    <section className="bg-white">

      <div className="mx-auto grid min-h-[calc(100vh-88px)] max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-2">

        <div>

          <span className="text-xs font-bold uppercase tracking-[0.45em] text-red-600">

            TRADE SMARTER

          </span>

          <h1 className="mt-6 text-5xl font-black leading-[0.9] tracking-tight text-black sm:text-6xl md:text-7xl lg:text-8xl">

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

            Improve.

            Continue building wealth.

          </p>

          <Link
            href="/waitlist"
            className="mt-14 inline-flex h-16 items-center justify-center rounded-full bg-black px-12 text-lg font-semibold text-white transition hover:bg-neutral-900"
          >

            Join Waitlist

          </Link>

        </div>

        <div>

          <div className="overflow-hidden rounded-[36px] border border-neutral-200 bg-white shadow-xl">

            <div className="border-b border-neutral-200 p-8">

              <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">

                Available Capital

              </p>

              <h2 className="mt-5 text-5xl font-bold">

                $100,000

              </h2>

            </div>

            <div className="border-b border-neutral-200 p-8">

              <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">

                Users

              </p>

              <h2 className="mt-5 text-5xl font-bold">

                {users === null
                  ? "..."
                  : users.toLocaleString()}

              </h2>

            </div>

            <div className="p-8">

              <p className="mb-8 text-sm uppercase tracking-[0.3em] text-neutral-500">

                Growth

              </p>

              <svg
                viewBox="0 0 500 180"
                className="w-full"
              >

                <path
                  d="
                    M0 150
                    C40 148 70 142 110 132
                    S180 112 230 95
                    S320 70 390 45
                    S450 28 500 18
                  "
                  fill="none"
                  stroke="#dc2626"
                  strokeWidth="5"
                  strokeLinecap="round"
                />

              </svg>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}