export default function Features() {
  const features = [
    {
      title: "Trading",
      description:
        "Access financial markets through a platform designed around smarter risk management.",
    },
    {
      title: "Funding",
      description:
        "Unlock opportunities to trade with real capital while reducing personal financial exposure.",
    },
    {
      title: "Restitution",
      description:
        "We're building new ways to help traders recover from setbacks instead of being left behind.",
    },
    {
      title: "Academy",
      description:
        "Learn how Take Profit works through guided educational content before the platform launches.",
    },
    {
      title: "Managed Trading",
      description:
        "Choose experienced managers to trade on your behalf while you monitor performance.",
    },
    {
      title: "Marketplace",
      description:
        "Access financial products, services, and opportunities from trusted partners in one place.",
    },
    {
      title: "Community",
      description:
        "Connect with other members, learn together, and grow within the Take Profit ecosystem.",
    },
    {
      title: "AI Assistant",
      description:
        "An intelligent assistant designed to help members understand the platform and make informed decisions.",
    },
  ];

  return (
    <section className="bg-white py-32 px-6">

      <div className="mx-auto max-w-7xl">

        <div className="mx-auto mb-24 max-w-4xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-neutral-500">
            What Take Profit Offers
          </p>

          <h2 className="mt-8 text-5xl font-semibold text-black md:text-6xl">

            One Platform.
            <br />
            Multiple Opportunities.

          </h2>

          <p className="mt-8 text-xl leading-9 text-neutral-600">

            Take Profit is being built as a complete financial ecosystem,
            giving members access to far more than just trading.

          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {features.map((feature) => (

            <div
              key={feature.title}
              className="rounded-[32px] border border-neutral-200 bg-neutral-50 p-8 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >

              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-neutral-300">

                <div className="h-6 w-6 rounded-full bg-black"></div>

              </div>

              <h3 className="text-2xl font-semibold text-black">

                {feature.title}

              </h3>

              <p className="mt-5 leading-8 text-neutral-600">

                {feature.description}

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}