import Link from "next/link";

export default function VisionPage() {
  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="mb-12">
          <Link
            href="/dashboard/learning"
            className="text-sm font-medium text-[#071A52] hover:underline"
          >
            ← Back to Learning Center
          </Link>
        </div>

        <span className="rounded-full border border-[#071A52]/20 bg-[#071A52]/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#071A52]">
          THE VISION
        </span>

        <h1 className="mt-8 text-5xl font-semibold leading-tight">
          Why we are building
          <br />
          Take Profit
        </h1>

        <div className="mt-16 space-y-10 text-xl leading-10 text-neutral-700">
          <p>
            Trading has opened financial opportunities for millions of
            people around the world.
          </p>

          <p>
            Every day, traders participate in global markets, develop their
            skills and pursue financial independence.
          </p>

          <p>
            Yet one challenge has remained remarkably consistent.
          </p>

          <p>
            A trader can spend months or even years becoming profitable,
            but a period of losses can force them to deposit capital
            again simply to continue trading.
          </p>

          <p>
            Over time we began asking a different question.
          </p>

          <p>
            Instead of accepting this as an unavoidable part of trading,
            what if the financial impact of losses could be approached
            differently?
          </p>

          <p>
            That question became the foundation of Take Profit.
          </p>

          <p>
            We are building a platform centred on one idea:
            <strong> Traders Restitution.</strong>
          </p>

          <p>
            We believe traders should be able to focus on improving
            their skills without every setback becoming a permanent
            financial obstacle.
          </p>

          <p>
            Take Profit is not simply about providing capital.
          </p>

          <p>
            It is about building a financial model that gives traders
            more opportunities to continue progressing throughout
            their journey.
          </p>

          <p>
            This vision extends beyond one product.
          </p>

          <p>
            We are building an environment where education,
            funded capital, community and future financial
            opportunities work together to support traders.
          </p>

          <p>
            Our journey is only beginning.
          </p>

          <p>
            Every feature we build should move us closer to a future
            where traders have greater opportunities to learn,
            recover, grow and succeed.
          </p>
        </div>

        <div className="mt-20 rounded-[36px] border border-[#071A52]/20 bg-[#071A52] p-10 text-white">
          <h2 className="text-3xl font-semibold">
            Our Mission
          </h2>

          <p className="mt-6 text-lg leading-9 text-white/90">
            To build financial systems that give traders more
            opportunities to learn, recover from losses and
            continue progressing throughout their trading journey.
          </p>
        </div>

        <div className="mt-14 rounded-[36px] border border-neutral-200 bg-neutral-50 p-10">
          <h2 className="text-3xl font-semibold">
            Our Principles
          </h2>

          <div className="mt-10 space-y-8">
            <div>
              <h3 className="text-xl font-semibold">
                Knowledge before Capital
              </h3>

              <p className="mt-2 leading-8 text-neutral-700">
                Understanding markets creates better decisions.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Discipline before Profit
              </h3>

              <p className="mt-2 leading-8 text-neutral-700">
                Consistency matters more than chasing quick gains.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Transparency builds Trust
              </h3>

              <p className="mt-2 leading-8 text-neutral-700">
                Traders deserve to understand how the platform works.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Losses are part of Trading
              </h3>

              <p className="mt-2 leading-8 text-neutral-700">
                The goal is not to eliminate losses but to reduce
                their long-term financial impact.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Sustainable Growth
              </h3>

              <p className="mt-2 leading-8 text-neutral-700">
                Long-term progress is built one step at a time.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}