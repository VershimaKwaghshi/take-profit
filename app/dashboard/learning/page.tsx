import Link from "next/link";
import { ArrowRight, Check, Lock } from "lucide-react";

import { getLessons } from "@/lib/learning";

export default async function LearningPage() {
  const modules = await getLessons();

  const completedModules = 0;

  const percentage =
    modules.length === 0
      ? 0
      : Math.round((completedModules / modules.length) * 100);

  return (
    <main className="min-h-screen bg-[#F7F7F4] text-black">
      {/* INTRODUCTION */}
      <section className="border-b border-black/10 bg-[#071A52] text-white">
        <div className="mx-auto w-full max-w-6xl px-6 py-16 md:px-10 md:py-24 lg:px-14">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.35em] text-[#D94A3D]">
            Take Profit Academy
          </p>

          <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight md:text-6xl">
            Learn the market before you enter it.
          </h1>

          <p className="mt-7 max-w-3xl text-base leading-8 text-white/75 md:text-lg">
            A structured introduction to the people, systems and forces
            behind financial markets — and the ideas that shaped Take Profit.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4 text-sm">
            <span className="border border-white/20 px-4 py-2 font-mono uppercase tracking-wider text-white/70">
              {modules.length} Lessons
            </span>

            <span className="border border-white/20 px-4 py-2 font-mono uppercase tracking-wider text-white/70">
              Self-paced
            </span>
          </div>
        </div>
      </section>

      {/* PROGRESS */}
      <section className="border-b border-black/10 bg-white">
        <div className="mx-auto w-full max-w-6xl px-6 py-8 md:px-10 lg:px-14">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-[#D94A3D]">
                Your progress
              </p>

              <p className="mt-3 text-xl font-semibold">
                {completedModules} of {modules.length} lessons completed
              </p>
            </div>

            <p className="text-3xl font-semibold text-[#071A52]">
              {percentage}%
            </p>
          </div>

          <div className="mt-6 h-1.5 w-full overflow-hidden bg-black/10">
            <div
              className="h-full bg-[#071A52] transition-all duration-500"
              style={{
                width: `${percentage}%`,
              }}
            />
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <div className="mx-auto w-full max-w-6xl px-6 py-14 md:px-10 md:py-20 lg:px-14">
        {/* VISION */}
        <section className="border-b border-black/10 pb-14">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.3em] text-[#D94A3D]">
            Start here
          </p>

          <Link
            href="/dashboard/learning/vision"
            className="group mt-6 block border-t-4 border-[#071A52] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl md:p-10"
          >
            <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <div className="max-w-3xl">
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-black/45">
                  The Vision
                </p>

                <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#071A52] md:text-4xl">
                  Why Take Profit Exists
                </h2>

                <p className="mt-5 text-base leading-8 text-black/65 md:text-lg">
                  Before learning how the market works, understand why Take
                  Profit is being built, the problem we are trying to solve,
                  and the principles behind the platform.
                </p>
              </div>

              <div className="flex shrink-0 items-center gap-3 font-semibold text-[#071A52]">
                Read the Vision

                <ArrowRight
                  size={19}
                  className="transition-transform group-hover:translate-x-1"
                />
              </div>
            </div>
          </Link>
        </section>

        {/* LESSONS */}
        <section className="pt-14">
          <div className="mb-10">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.3em] text-[#D94A3D]">
              The curriculum
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#071A52] md:text-4xl">
              Understand the market
            </h2>

            <p className="mt-4 max-w-3xl leading-8 text-black/60">
              Each lesson builds on the one before it. Start at the beginning
              and move through the market one layer at a time.
            </p>
          </div>

          <div className="border-t border-black/10">
            {modules.map((module, index) => {
              const completed = false;
              const unlocked = index === 0;

              return (
                <Link
                  key={module.lessonNumber}
                  href={
                    unlocked
                      ? `/dashboard/learning/${module.lessonNumber}`
                      : "#"
                  }
                  aria-disabled={!unlocked}
                  className={`group block border-b border-black/10 py-8 transition md:py-10 ${
                    unlocked
                      ? "hover:bg-white"
                      : "cursor-not-allowed opacity-45"
                  }`}
                >
                  <div className="flex gap-5 md:gap-8">
                    {/* NUMBER / STATUS */}
                    <div className="w-12 shrink-0 md:w-16">
                      {completed ? (
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#071A52] text-white">
                          <Check size={17} />
                        </div>
                      ) : unlocked ? (
                        <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#071A52] font-mono text-xs font-semibold text-[#071A52]">
                          {String(module.lessonNumber).padStart(2, "0")}
                        </div>
                      ) : (
                        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-black/20">
                          <Lock size={15} className="text-black/40" />
                        </div>
                      )}
                    </div>

                    {/* CONTENT */}
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                        <div className="max-w-3xl">
                          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-black/40">
                            Lesson{" "}
                            {String(module.lessonNumber).padStart(2, "0")}
                          </p>

                          <h3 className="mt-2 text-2xl font-semibold leading-tight text-black transition group-hover:text-[#071A52] md:text-3xl">
                            {module.title}
                          </h3>

                          <p className="mt-3 text-sm leading-7 text-black/60 md:text-base">
                            {module.description}
                          </p>
                        </div>

                        <div className="shrink-0 md:pt-5">
                          {completed ? (
                            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#071A52]">
                              Completed
                            </span>
                          ) : unlocked ? (
                            <span className="inline-flex items-center gap-2 font-semibold text-[#071A52]">
                              Read lesson

                              <ArrowRight
                                size={17}
                                className="transition-transform group-hover:translate-x-1"
                              />
                            </span>
                          ) : (
                            <span className="font-mono text-xs uppercase tracking-wider text-black/40">
                              Locked
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* FOOTER NOTE */}
        <section className="mt-16 border-t-4 border-[#D94A3D] bg-[#071A52] px-7 py-10 text-white md:px-10">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
            Take your time
          </p>

          <h3 className="mt-4 text-2xl font-semibold md:text-3xl">
            This is not a race.
          </h3>

          <p className="mt-4 max-w-3xl leading-8 text-white/70">
            The purpose of the Academy is understanding. Read each lesson,
            think about it, and come back whenever you need to.
          </p>
        </section>
      </div>
    </main>
  );
}