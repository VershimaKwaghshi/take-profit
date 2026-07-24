export default function Hero() {
  return (
    <section className="flex min-h-screen items-center bg-white pt-32">

      <div className="mx-auto flex w-full max-w-7xl flex-col items-center px-6 text-center">

        <img
          src="/logo.svg"
          alt="Take Profit"
          className="mb-10 h-24 w-24"
        />

        <p className="mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-neutral-500">
          One Platform. Endless Possibilities.
        </p>

        <h1 className="max-w-5xl text-5xl font-semibold leading-tight text-black md:text-7xl">

          The future of personal finance
          <br />
          starts with one account.

        </h1>

        <p className="mt-10 max-w-3xl text-xl leading-9 text-neutral-600">

          Trade with real capital.
          Learn before you risk.
          Access funding.
          Recover from setbacks.
          Grow your financial future through one connected ecosystem.

        </p>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-5">

          <a
            href="/waitlist"
            className="inline-flex items-center justify-center rounded-full bg-black px-8 py-4 text-lg font-semibold text-white transition hover:opacity-90"
          >
            Join Waitlist
          </a>

          <a
            href="/login"
            className="inline-flex items-center justify-center rounded-full border border-neutral-300 px-8 py-4 text-lg font-semibold text-black transition hover:bg-neutral-100"
          >
            Log In
          </a>

        </div>

        <div className="mt-20 grid w-full max-w-5xl gap-6 md:grid-cols-3">

          <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-8">

            <h3 className="text-2xl font-semibold">
              Trade
            </h3>

            <p className="mt-4 leading-8 text-neutral-600">
              Access financial markets through a platform designed around smarter risk management.
            </p>

          </div>

          <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-8">

            <h3 className="text-2xl font-semibold">
              Learn
            </h3>

            <p className="mt-4 leading-8 text-neutral-600">
              Understand how Take Profit works before launch through guided educational content.
            </p>

          </div>

          <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-8">

            <h3 className="text-2xl font-semibold">
              Grow
            </h3>

            <p className="mt-4 leading-8 text-neutral-600">
              Join early, unlock your dashboard, invite others, and become part of the founding community.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}