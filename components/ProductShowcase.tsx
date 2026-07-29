export default function ProductShowcase() {
  return (
    <section className="bg-black py-32">

      <div className="mx-auto max-w-7xl px-6">

        <div className="max-w-4xl">

          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-red-500">

            TAKE PROFIT

          </p>

          <h2 className="mt-8 text-5xl font-semibold leading-tight text-white md:text-7xl">

            Capital.

            <br />

            Risk Management.

          </h2>

        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-2">

          <div className="rounded-[36px] bg-neutral-900 p-10">

            <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">

              CAPITAL

            </p>

            <h3 className="mt-8 text-6xl font-bold text-white">

              $100M+

            </h3>

          </div>

          <div className="rounded-[36px] bg-neutral-900 p-10">

            <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">

              RISK MANAGEMENT

            </p>

            <div className="mt-10 h-3 overflow-hidden rounded-full bg-neutral-800">

              <div className="h-full w-2/3 rounded-full bg-red-500" />

            </div>

            <p className="mt-8 text-3xl font-semibold text-white">

              Active

            </p>

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