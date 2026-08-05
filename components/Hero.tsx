"use client";

import Link from "next/link";
import FloorMotif from "./FloorMotif";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-paper">
      <div className="mx-auto flex min-h-[calc(100vh-96px)] max-w-5xl flex-col items-center justify-center px-6 text-center">

        <span className="rounded-full border border-oxblood/25 bg-oxblood/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-oxblood">
          Pre launch
        </span>

        <h1 className="mt-10 text-5xl font-semibold leading-[0.98] tracking-tight text-ink sm:text-6xl md:text-7xl lg:text-8xl">
          Trade with
          <br />
          real capital.
        </h1>

        <p className="mt-8 max-w-4xl text-lg leading-8 text-ash md:text-xl md:leading-9">

          Most traders do not fail because they lack skill. They fail because every loss forces them to deposit new capital again and again until they eventually give up.

          <span className="font-semibold text-ink"> Take Profit is building Traders Restitution.</span>

          A different approach that helps eligible traders recover from trading losses without repeatedly funding new capital themselves. Instead of starting over after every setback, traders can continue building experience while Take Profit handles capital restitution.

          Join the waitlist to learn how Traders Restitution works before launch and be among the first traders to gain access.

        </p>

        <div className="mt-12">
          <Link
            href="/waitlist"
            className="inline-flex h-16 items-center justify-center rounded-full bg-ink px-10 text-lg font-semibold text-paper transition hover:bg-oxblood"
          >
            Join the waitlist
          </Link>
        </div>

        <p className="mt-5 text-sm text-ash">
          Free to join. Learn before launch. No commitment required.
        </p>

      </div>

      <div className="mx-auto max-w-4xl px-6 pb-20 opacity-80">
        <FloorMotif tone="ink" />
      </div>
    </section>
  );
}