// components/Hero.tsx
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative grid min-h-[85vh] place-items-center bg-slate-50 px-6 py-24">
      {/* optional pattern */}
      <div className="pointer-events-none absolute inset-0 bg-[url('/seesaw-pattern.svg')] bg-repeat opacity-40 bg-[length:140px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50/70 to-slate-50/95" />

      <div className="relative grid max-w-2xl gap-6 text-center">
        <span className="justify-self-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium tracking-wide text-slate-700">
          The difference is what happens after the loss
        </span>

        <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">
          A loss should not end your trading.
        </h1>

        <p className="justify-self-center max-w-lg text-lg leading-relaxed text-slate-600">
          Take Profit is a trader restitution system. It connects you with a vetted trading manager,
          protects your account with a defined restitution path, and gives you more than one way
          to build and access capital while you trade.
        </p>

        <div className="mt-2 flex flex-wrap justify-center gap-3">
          <Link
            href="/signup"
            className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-blue-700"
          >
            Join Take Profit
          </Link>
          <Link
            href="#how-it-works"
            className="rounded-lg border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-slate-900 hover:bg-slate-50"
          >
            See how it works
          </Link>
        </div>
      </div>
    </section>
  );
}