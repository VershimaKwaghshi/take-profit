export default function Features() {
  return (
    <section
      id="features"
      className="bg-neutral-100 py-32 px-6"
    >
      <div className="mx-auto max-w-7xl">

        <div className="mx-auto max-w-5xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-neutral-500">

            TAKE PROFIT

          </p>

          <h2 className="mt-8 text-5xl font-semibold leading-tight text-black md:text-6xl">

            Everything you need
            <br />
            in one place.

          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-neutral-600">

            Built to help traders access capital, manage risk and continue building wealth.

          </p>

        </div>

        <div className="mt-24 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          <div className="rounded-[32px] bg-white p-10 shadow-sm">

            <p className="text-sm uppercase tracking-[0.3em] text-red-600">

              CAPITAL

            </p>

            <h3 className="mt-6 text-3xl font-semibold text-black">

              Trade with real capital.

            </h3>

            <p className="mt-6 text-lg leading-8 text-neutral-600">

              Access funded trading accounts without committing your own trading capital.

            </p>

          </div>

          <div className="rounded-[32px] bg-white p-10 shadow-sm">

            <p className="text-sm uppercase tracking-[0.3em] text-red-600">

              RISK MANAGEMENT

            </p>

            <h3 className="mt-6 text-3xl font-semibold text-black">

              Stay in control.

            </h3>

            <p className="mt-6 text-lg leading-8 text-neutral-600">

              Clear rules and built in protection help reduce permanent losses.

            </p>

          </div>

          <div className="rounded-[32px] bg-white p-10 shadow-sm">

            <p className="text-sm uppercase tracking-[0.3em] text-red-600">

              GROWTH

            </p>

            <h3 className="mt-6 text-3xl font-semibold text-black">

              Keep moving forward.

            </h3>

            <p className="mt-6 text-lg leading-8 text-neutral-600">

              Every trade contributes to a long term record of your progress.

            </p>

          </div>

        </div>

      </div>

    </section>
  );
}