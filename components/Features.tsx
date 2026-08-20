// components/Features.tsx
const features = [
  {
    title: "Your capital stays yours",
    description: "Take Profit is not a broker. Your capital remains in your own account the entire time.",
  },
  {
    title: "You choose your manager",
    description: "Every day you are shown three vetted managers from different regions. You pick one.",
  },
  {
    title: "No hidden identities",
    description: "Managers never know who they are trading for. You only see a rotating alias.",
  },
];

export default function Features() {
  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <article
            key={feature.title}
            className="rounded-xl border border-slate-200 bg-slate-50 p-6"
          >
            <h3 className="mb-2 text-lg font-semibold text-slate-900">
              {feature.title}
            </h3>
            <p className="text-sm leading-relaxed text-slate-600">
              {feature.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}