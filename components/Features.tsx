export default function Features() {
  const panels = [
    {
      title: "Keep Trading",
      description:
        "One losing trade should not permanently end your trading journey.",
    },
    {
      title: "Trading Capital",
      description:
        "Access trading capital without taking on liability.",
    },
    {
      title: "Managed Trading",
      description:
        "Participate through experienced managers under the Take Profit platform.",
    },
    {
      title: "Learn Before Launch",
      description:
        "Join the waitlist and discover how Take Profit works before launch.",
    },
  ];

  return (
    <section className="bg-white py-32 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center max-w-4xl mx-auto mb-24">
          <h2 className="text-5xl md:text-6xl font-semibold text-black">
            Why Take Profit?
          </h2>

          <p className="mt-8 text-xl text-neutral-600 leading-9">
            A platform built around one belief.
            <br />
            Losing a trade is fine.
            <br />
            Losing permanently is not.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">

          {panels.map((panel) => (
            <div
              key={panel.title}
              className="rounded-[32px] border border-neutral-200 bg-neutral-50 p-10 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="w-16 h-16 rounded-2xl border border-neutral-300 flex items-center justify-center mb-8">
                <div className="w-6 h-6 rounded-full bg-black"></div>
              </div>

              <h3 className="text-3xl font-semibold text-black mb-5">
                {panel.title}
              </h3>

              <p className="text-lg leading-8 text-neutral-600">
                {panel.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}