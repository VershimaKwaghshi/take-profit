import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">

      {/* Background */}

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(220,38,38,0.06),transparent_45%)]" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center">

        <h1 className="max-w-6xl text-5xl font-semibold leading-tight tracking-tight text-black md:text-7xl">

          Trade with real capital.

          <br />

          Keep more of the upside.

          <br />

          Carry less of the risk.

        </h1>

        <p className="mt-10 max-w-3xl text-xl leading-9 text-neutral-600">

          A proprietary trading platform helping disciplined traders
          access capital, learn continuously and stay in the market longer.

        </p>

        <div className="mt-14">

          <Link
            href="/waitlist"
            className="inline-flex items-center justify-center rounded-full bg-black px-10 py-5 font-semibold text-white transition hover:bg-neutral-900"
          >
            Join Waitlist
          </Link>

        </div>

        <div className="mt-28 w-full max-w-5xl rounded-[40px] border border-neutral-900 bg-black px-10 py-14 text-left shadow-2xl">

          <p className="text-sm uppercase tracking-[0.35em] text-red-500">

            OUR BELIEF

          </p>

          <h2 className="mt-6 text-4xl font-semibold leading-tight text-white md:text-5xl">

            One mistake should never permanently remove a disciplined trader from the opportunity to build wealth.

          </h2>

          <p className="mt-8 max-w-3xl text-lg leading-9 text-neutral-300">

            Take Profit exists to help traders survive long enough to
            improve, stay consistent and grow with confidence.

          </p>

        </div>

      </div>

    </section>
  );
}