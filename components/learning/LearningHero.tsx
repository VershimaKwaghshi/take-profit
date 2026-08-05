type LearningHeroProps = {
  module: number;
  title: string;
  description: string;
  estimatedTime: string;
};

export default function LearningHero({
  module,
  title,
  description,
  estimatedTime,
}: LearningHeroProps) {
  return (
    <section className="rounded-[36px] border border-neutral-200 bg-white p-10 shadow-sm">

      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#071A52]">
        Module {module}
      </p>

      <h1 className="mt-5 text-5xl font-semibold leading-tight text-black">
        {title}
      </h1>

      <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-600">
        {description}
      </p>

      <div className="mt-10 inline-flex items-center rounded-full border border-neutral-200 bg-neutral-50 px-5 py-3">

        <span className="text-sm font-medium text-neutral-700">
          Estimated time
        </span>

        <span className="mx-3 h-1 w-1 rounded-full bg-neutral-400" />

        <span className="text-sm font-semibold text-[#071A52]">
          {estimatedTime}
        </span>

      </div>

    </section>
  );
}
