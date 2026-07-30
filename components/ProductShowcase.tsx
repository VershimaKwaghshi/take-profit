export default function ProductShowcase() {
  return (
    <section className="bg-black py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-red-500">
            WHAT YOU'LL DISCOVER
          </p>

          <h2 className="mt-8 text-5xl font-semibold leading-tight text-white md:text-7xl">
            Learn the ideas
            <br />
            behind
            <br />
            Take Profit.
          </h2>

          <p className="mt-10 max-w-3xl text-xl leading-10 text-neutral-400">
            Before Take Profit launches, we'll walk you through the platform one
            concept at a time so you understand how everything works.
          </p>
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          <div className="rounded-[36px] bg-neutral-900 p-10 transition hover:-translate-y-1 hover:bg-neutral-800">
            <p className="text-sm uppercase tracking-[0.3em] text-red-500">
              PROFESSIONAL MANAGERS
            </p>

            <h3 className="mt-8 text-3xl font-semibold text-white">
              Learn how managed trading works.
            </h3>

            <p className="mt-6 text-lg leading-8 text-neutral-400">
              Understand how traders and professional managers work together
              through the Take Profit platform.
            </p>
          </div>

          <div className="rounded-[36px] bg-neutral-900 p-10 transition hover:-translate-y-1 hover:bg-neutral-800">
            <p className="text-sm uppercase tracking-[0.3em] text-red-500">
              RECOVERY SYSTEM
            </p>

            <h3 className="mt-8 text-3xl font-semibold text-white">
              Discover the recovery process.
            </h3>

            <p className="mt-6 text-lg leading-8 text-neutral-400">
              See how Take Profit is designed to help traders continue after
              significant setbacks.
            </p>
          </div>

          <div className="rounded-[36px] bg-neutral-900 p-10 transition hover:-translate-y-1 hover:bg-neutral-800">
            <p className="text-sm uppercase tracking-[0.3em] text-red-500">
              COMPANY CAPITAL
            </p>

            <h3 className="mt-8 text-3xl font-semibold text-white">
              Explore funded trading.
            </h3>

            <p className="mt-6 text-lg leading-8 text-neutral-400">
              Learn how members can gain access to company-funded trading
              capital after launch.
            </p>
          </div>
        </div>

        <div className="mt-24 text-center">
          <h3 className="text-3xl font-semibold text-white">
            Join before we launch.
          </h3>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-neutral-400">
            Become an early member today and learn how Take Profit works before
            the platform opens to the public.
          </p>

          <a
            href="/waitlist"
            className="mt-10 inline-flex h-16 items-center justify-center rounded-full bg-white px-12 text-lg font-semibold text-black transition hover:bg-neutral-100"
          >
            Join the Waitlist
          </a>
        </div>
      </div>
    </section>
  );
}