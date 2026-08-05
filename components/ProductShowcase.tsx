export default function ProductShowcase() {
  const cards = [
    {
      eyebrow: "Professional managers",
      title: "How managed trading works.",
      body: "Understand how traders and professional managers work together through the Take Profit platform.",
    },
    {
      eyebrow: "Recovery system",
      title: "The recovery process.",
      body: "See how Take Profit is designed to help traders continue after significant setbacks.",
    },
    {
      eyebrow: "Company capital",
      title: "Funded trading, explained.",
      body: "Learn how members can gain access to company-funded trading capital after launch.",
    },
  ];

  return (
    <section className="bg-ink py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-oxblood">
            What you&apos;ll discover
          </p>

          <h2 className="mt-8 text-4xl font-semibold leading-tight text-paper md:text-6xl">
            Learn the ideas behind Take Profit.
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-paper/60">
            Before Take Profit launches, we&apos;ll walk you through the
            platform one concept at a time so you understand how everything
            works.
          </p>
        </div>

        <div className="mt-20 grid gap-6 lg:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.eyebrow}
              className="rounded-lg border border-paper/10 bg-paper/[0.04] p-10 transition hover:bg-paper/[0.07]"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-oxblood">
                {card.eyebrow}
              </p>

              <h3 className="mt-8 text-2xl font-semibold text-paper">
                {card.title}
              </h3>

              <p className="mt-6 text-base leading-7 text-paper/55">
                {card.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <h3 className="text-2xl font-semibold text-paper md:text-3xl">
            Join before we launch.
          </h3>

          <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-paper/55">
            Become an early member today and learn how Take Profit works
            before the platform opens to the public.
          </p>

          <a
            href="/waitlist"
            className="mt-10 inline-flex h-16 items-center justify-center rounded-full bg-paper px-12 text-lg font-semibold text-ink transition hover:bg-mist"
          >
            Join the waitlist
          </a>
        </div>
      </div>
    </section>
  );
}