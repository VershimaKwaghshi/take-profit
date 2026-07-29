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

            A different
            <br />
            trading experience.

          </h2>

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

              Access trading capital without putting your own capital at risk.

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

              Designed to protect traders from permanent setbacks.

            </p>

          </div>

          <div className="rounded-[32px] bg-white p-10 shadow-sm">

            <p className="text-sm uppercase tracking-[0.3em] text-red-600">

              GROWTH

            </p>

            <h3 className="mt-6 text-3xl font-semibold text-black">

              Keep progressing.

            </h3>

            <p className="mt-6 text-lg leading-8 text-neutral-600">

              Built to support long term trader development.

            </p>

          </div>

        </div>

      </div>

    </section>
  );
}