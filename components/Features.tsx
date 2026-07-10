export default function Features() {
  const features = [
    {
      title: "Learn",
      text: "Start with the basics.",
    },
    {
      title: "Practice",
      text: "Build confidence over time.",
    },
    {
      title: "Grow",
      text: "Move forward one step at a time.",
    },
  ];

  return (
    <section className="bg-neutral-50 py-32 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-24">
          <h2 className="text-5xl font-semibold text-black">
            One step at a time
          </h2>

          <p className="mt-6 text-lg text-neutral-600">
            Learn
            <br />
            Practice
            <br />
            Grow
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">

          {features.map((item) => (

            <div
              key={item.title}
              className="rounded-[32px] bg-white border border-neutral-200 p-10 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >

              <div className="w-16 h-16 rounded-2xl border border-neutral-300 mb-8 flex items-center justify-center">
                <div className="w-6 h-6 rounded-full bg-black"></div>
              </div>

              <h3 className="text-3xl font-semibold text-black mb-5">
                {item.title}
              </h3>

              <p className="text-neutral-600 text-lg leading-8">
                {item.text}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}