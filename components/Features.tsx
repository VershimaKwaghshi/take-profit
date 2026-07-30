export default function Features() {
  return (
    <section id="features" className="bg-neutral-100 py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-red-600">
            WHY JOIN NOW
          </p>

          <h2 className="mt-8 text-5xl font-semibold leading-tight text-black md:text-6xl">
            Be part of the
            <br />
            journey from day one.
          </h2>

          <p className="mt-8 text-xl leading-9 text-neutral-600">
            Take Profit is currently in development. Joining the waitlist gives
            you a front-row seat as we build toward launch.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-3">
          <div className="rounded-[32px] bg-white p-10 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <h3 className="text-2xl font-semibold text-black">
              Learn Before Launch
            </h3>

            <p className="mt-6 text-lg leading-8 text-neutral-600">
              We'll introduce the platform step by step so you understand how it
              works before it's available.
            </p>
          </div>

          <div className="rounded-[32px] bg-white p-10 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <h3 className="text-2xl font-semibold text-black">
              Stay Updated
            </h3>

            <p className="mt-6 text-lg leading-8 text-neutral-600">
              Receive important updates, development milestones and launch
              announcements directly from our team.
            </p>
          </div>

          <div className="rounded-[32px] bg-white p-10 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <h3 className="text-2xl font-semibold text-black">
              Get Early Access
            </h3>

            <p className="mt-6 text-lg leading-8 text-neutral-600">
              Waitlist members will be among the first invited when Take Profit
              officially launches.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}