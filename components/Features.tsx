export default function Features() {
  return (
    <section
      id="features"
      className="bg-neutral-100 py-32 px-6"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-neutral-500">
            WHY JOIN THE WAITLIST
          </p>

          <h2 className="mt-8 text-5xl font-semibold leading-tight text-black md:text-6xl">
            Learn how
            <br />
            Take Profit works.
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-neutral-600">
            Take Profit is currently in development. The waitlist is your opportunity
            to understand the platform before launch and be among the first to access it.
          </p>
        </div>

        <div className="mt-24 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-[32px] bg-white p-10 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
            <p className="text-sm uppercase tracking-[0.3em] text-red-600">
              UNDERSTAND
            </p>

            <h3 className="mt-6 text-3xl font-semibold text-black">
              Learn the platform.
            </h3>

            <p className="mt-6 text-lg leading-8 text-neutral-600">
              Discover how Take Profit works through simple updates before launch.
            </p>
          </div>

          <div className="rounded-[32px] bg-white p-10 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
            <p className="text-sm uppercase tracking-[0.3em] text-red-600">
              FOLLOW
            </p>

            <h3 className="mt-6 text-3xl font-semibold text-black">
              Stay informed.
            </h3>

            <p className="mt-6 text-lg leading-8 text-neutral-600">
              Receive product updates, development progress, and important announcements.
            </p>
          </div>

          <div className="rounded-[32px] bg-white p-10 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
            <p className="text-sm uppercase tracking-[0.3em] text-red-600">
              ACCESS
            </p>

            <h3 className="mt-6 text-3xl font-semibold text-black">
              Be first in line.
            </h3>

            <p className="mt-6 text-lg leading-8 text-neutral-600">
              Waitlist members will be among the first invited to use Take Profit when it launches.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}