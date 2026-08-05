import Link from "next/link";
import { Check, Lock } from "lucide-react";
import { getLearningModules } from "@/lib/learning";

export default async function LearningPage() {
  const modules = await getLearningModules();

  const completedModules = 0;

  const percentage =
    modules.length === 0
      ? 0
      : Math.round(
          (completedModules / modules.length) * 100
        );

  return (
    <main className="mx-auto max-w-6xl px-6 py-12">

      <div>

        <h1 className="text-5xl font-semibold text-black">
          Learning Center
        </h1>

        <p className="mt-5 max-w-3xl text-lg leading-8 text-neutral-600">
          Learn how Take Profit works and
          follow our journey toward launch.
        </p>

      </div>

      <section className="mt-12 rounded-[36px] bg-white p-8 shadow-sm">

        <div className="flex items-center justify-between">

          <div>

            <h2 className="text-2xl font-semibold">
              Learning Progress
            </h2>

            <p className="mt-2 text-neutral-500">
              {completedModules} of {modules.length} Modules Completed
            </p>

          </div>

          <div className="text-4xl font-semibold text-[#071A52]">
            {percentage}%
          </div>

        </div>

        <div className="mt-8 h-3 overflow-hidden rounded-full bg-neutral-200">

          <div
            className="h-full rounded-full bg-[#071A52] transition-all"
            style={{
              width: `${percentage}%`,
            }}
          />

        </div>

      </section>

      <section className="mt-10 space-y-5">

        {modules.map((module, index) => {

          const completed = false;

          const unlocked =
            index === 0;

          return (

            <Link
              key={module.id}
              href={
                unlocked
                  ? `/dashboard/learning/module/${module.id}`
                  : "#"
              }
              className={`block rounded-[32px] border bg-white p-8 transition

              ${
                unlocked
                  ? "border-neutral-200 hover:-translate-y-1 hover:shadow-xl"
                  : "cursor-not-allowed border-neutral-100 opacity-70"
              }`}
            >

              <div className="flex items-center justify-between">

                <div className="flex items-start gap-5">

                  {completed ? (

                    <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#071A52]">

                      <Check
                        size={18}
                        className="text-[#071A52]"
                      />

                    </div>

                  ) : unlocked ? (

                    <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#071A52]">

                    </div>

                  ) : (

                    <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-neutral-300">

                      <Lock
                        size={16}
                        className="text-neutral-400"
                      />

                    </div>

                  )}

                  <div>

                    <p className="text-sm font-medium uppercase tracking-[0.25em] text-neutral-500">

                      Module {module.order_number}

                    </p>

                    <h2 className="mt-2 text-2xl font-semibold">

                      {module.title}

                    </h2>

                    <p className="mt-3 max-w-2xl leading-8 text-neutral-600">

                      {module.description}

                    </p>

                  </div>

                </div>

                <div>

                  {completed ? (

                    <span className="rounded-full bg-[#071A52] px-6 py-3 text-sm font-medium text-white">

                      Completed

                    </span>

                  ) : unlocked ? (

                    <span className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white">

                      Start

                    </span>

                  ) : (

                    <span className="rounded-full border border-neutral-300 px-6 py-3 text-sm">

                      Locked

                    </span>

                  )}

                </div>

              </div>

            </Link>

          );

        })}

      </section>

    </main>
  );
}