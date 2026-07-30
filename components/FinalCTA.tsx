import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="bg-black py-32 px-6">
      <div className="mx-auto max-w-4xl text-center">

        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-red-500">
          TAKE PROFIT
        </p>

        <h2 className="mt-8 text-5xl font-semibold leading-tight text-white md:text-7xl">
          Your journey
          <br />
          starts today.
        </h2>

        <p className="mx-auto mt-10 max-w-2xl text-xl leading-9 text-neutral-400">
          Join the waitlist today and be among the first to experience
          Take Profit when we launch.
        </p>

        <Link
          href="/waitlist"
          className="mt-12 inline-flex h-16 items-center justify-center rounded-full bg-white px-12 text-lg font-semibold text-black transition hover:bg-neutral-200"
        >
          Join Waitlist
        </Link>

      </div>
    </section>
  );
}
