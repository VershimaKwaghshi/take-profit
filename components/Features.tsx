export default function Features() {
  const items = [
    {
      title: "Learn before launch",
      body: "We'll introduce the platform step by step so you understand how it works before it's available.",
    },
    {
      title: "Stay updated",
      body: "Receive important updates, development milestones and launch announcements directly from our team.",
    },
    {
      title: "Get early access",
      body: "Waitlist members will be among the first invited when Take Profit officially launches.",
    },
  ];

  return (
    <section id="features" className="bg-mist py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-oxblood">
            Why join now
          </p>

          <h2 className="mt-8 text-4xl font-semibold leading-tight text-ink md:text-5xl">
            Be part of the journey from day one.
          </h2>

          <p className="mt-6 text-lg leading-8 text-ash">
            Take Profit is currently in development. Joining the waitlist
            gives you a front-row seat as we build toward launch.
          </p>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-lg border border-line bg-paper p-10 transition hover:-translate-y-0.5"
            >
              <h3 className="text-xl font-semibold text-ink">{item.title}</h3>
              <p className="mt-5 text-base leading-7 text-ash">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}