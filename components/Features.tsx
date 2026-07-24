export default function Features() {
  return (
    <section
      id="features"
      className="bg-white py-32 px-6"
    >
      <div className="mx-auto max-w-7xl">

        <div className="mx-auto mb-24 max-w-4xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-neutral-500">
            Why Take Profit
          </p>

          <h2 className="mt-8 text-5xl font-semibold leading-tight text-black md:text-6xl">
            Built on one rule.
            <br />
            One trade should not end everything.
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-xl leading-9 text-neutral-600">
            Take Profit exists to help traders stay in the market,
            continue learning and grow over time.
          </p>

        </div>

        <div className="grid gap-8 lg:grid-cols-2">

          {/* White */}

          <div className="rounded-[36px] border border-neutral-200 bg-white p-10 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

            <div className="mb-8 h-14 w-14 rounded-2xl bg-black"></div>

            <h3 className="text-3xl font-semibold text-black">
              Keep Trading
            </h3>

            <p className="mt-5 text-lg leading-8 text-neutral-600">
              One losing trade should never permanently remove
              you from the markets.
            </p>

          </div>

          {/* Blue */}

          <div className="rounded-[36px] bg-blue-600 p-10 text-white transition duration-300 hover:-translate-y-1 hover:shadow-2xl">

            <div className="mb-8 h-14 w-14 rounded-2xl bg-white"></div>

            <h3 className="text-3xl font-semibold">
              Trading Capital
            </h3>

            <p className="mt-5 text-lg leading-8 text-blue-100">
              Access real trading capital while protecting your
              personal finances.
            </p>

          </div>

          {/* Red */}

          <div className="rounded-[36px] bg-red-600 p-10 text-white transition duration-300 hover:-translate-y-1 hover:shadow-2xl">

            <div className="mb-8 h-14 w-14 rounded-2xl bg-white"></div>

            <h3 className="text-3xl font-semibold">
              Risk Protection
            </h3>

            <p className="mt-5 text-lg leading-8 text-red-100">
              Every rule inside Take Profit is designed to help
              traders survive difficult market conditions.
            </p>

          </div>

          {/* Black */}

          <div className="rounded-[36px] bg-black p-10 text-white transition duration-300 hover:-translate-y-1 hover:shadow-2xl">

            <div className="mb-8 h-14 w-14 rounded-2xl bg-blue-600"></div>

            <h3 className="text-3xl font-semibold">
              Learn Before Launch
            </h3>

            <p className="mt-5 text-lg leading-8 text-neutral-300">
              Explore how Take Profit works, complete guided
              learning, and help shape the platform before launch.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}