type LearningSectionProps = {
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
};

export default function LearningSection({
  eyebrow,
  title,
  children,
}: LearningSectionProps) {
  return (
    <section className="mt-16">

      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#071A52]">
          {eyebrow}
        </p>
      )}

      <h2 className="mt-3 text-4xl font-semibold leading-tight text-black">
        {title}
      </h2>

      <div className="mt-8 space-y-6 text-lg leading-9 text-neutral-700">
        {children}
      </div>

    </section>
  );
}
