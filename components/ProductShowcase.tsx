export default function ProductShowcase() {
  return (
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
            Built for traders who want access to capital, structured risk
            management and long term growth.
          </p>

        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-2">

          {/* Capital */}

          <div className="rounded-[36px] bg-neutral-900 p-10">

            <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
              CAPITAL
            </p>

            <h3 className="mt-8 text-6xl font-bold text-white">
              $100K
            </h3>

            <p className="mt-8 text-lg leading-9 text-neutral-400">
              Access funded capital while protecting your own.
            </p>

          </div>

          {/* Dashboard Preview */}

          <div className="overflow-hidden rounded-[36px] bg-neutral-900">

            <div className="border-b border-neutral-800 px-8 py-5">

              <div className="flex items-center justify-between">

                <h3 className="text-xl font-semibold text-white">
                  Dashboard
                </h3>

                <div className="flex gap-2">

                  <div className="h-3 w-3 rounded-full bg-red-500" />

                  <div className="h-3 w-3 rounded-full bg-blue-500" />

                </div>

              </div>

            </div>

            <div className="space-y-6 p-8">

              <div className="rounded-3xl bg-neutral-800 p-6">

                <p className="text-sm uppercase tracking-[0.25em] text-neutral-500">
                  Capital
                </p>

                <h4 className="mt-3 text-4xl font-bold text-white">
                  $100,000
                </h4>

              </div>

              <div className="rounded-3xl bg-neutral-800 p-6">

                <p className="text-sm uppercase tracking-[0.25em] text-neutral-500">
                  Risk Management
                </p>

                <div className="mt-5 h-3 overflow-hidden rounded-full bg-neutral-700">

                  <div className="h-full w-2/3 rounded-full bg-red-500" />

                </div>

                <p className="mt-4 text-neutral-300">
                  Active
                </p>

              </div>

            </div>

          </div>

        </div>

        <div className="mt-24">

          <a
            href="/waitlist"
            className="inline-flex h-16 items-center justify-center rounded-full bg-white px-12 text-lg font-semibold text-black transition hover:bg-neutral-100"
          >
            Join Waitlist
          </a>

        </div>

      </div>

    </section>
  );
}