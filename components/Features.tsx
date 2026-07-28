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
            Everything works together.
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-neutral-600">
            Markets create opportunities and setbacks.

            What matters is having the ability to recover, improve and continue building.

            Take Profit brings together education, capital, risk management and community so every stage of your trading journey works together.
          </p>

        </div>

        <div className="mt-20 rounded-[40px] bg-black p-12 shadow-2xl">

          <div className="grid gap-14 lg:grid-cols-2">

            <div>

              <p className="text-sm uppercase tracking-[0.35em] text-red-500">
                THE PLATFORM
              </p>

              <h3 className="mt-6 text-4xl font-semibold text-white">
                Built to keep traders
                moving forward.
              </h3>

              <p className="mt-8 text-lg leading-9 text-neutral-300">
                Every part of Take Profit exists for one purpose.

                Helping traders stay in the market and continue building.
              </p>

            </div>

            <div className="space-y-10">

              <div className="border-b border-neutral-800 pb-8">

                <h4 className="text-2xl font-semibold text-white">
                  Education
                </h4>

                <p className="mt-3 leading-8 text-neutral-400">
                  Understand the platform before you begin.
                </p>

              </div>

              <div className="border-b border-neutral-800 pb-8">

                <h4 className="text-2xl font-semibold text-white">
                  Capital
                </h4>

                <p className="mt-3 leading-8 text-neutral-400">
                  Access trading capital without relying only on your own funds.
                </p>

              </div>

              <div className="border-b border-neutral-800 pb-8">

                <h4 className="text-2xl font-semibold text-white">
                  Risk Management
                </h4>

                <p className="mt-3 leading-8 text-neutral-400">
                  Protect your capital and stay in the market longer.
                </p>

              </div>

              <div>

                <h4 className="text-2xl font-semibold text-white">
                  Community
                </h4>

                <p className="mt-3 leading-8 text-neutral-400">
                  Grow alongside traders sharing experience, knowledge and progress.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}