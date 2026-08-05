import Link from "next/link";
import { getLearningModules } from "@/lib/learning";

export default async function LearningPage() {
  const modules = await getLearningModules();

  return (
    <main className="mx-auto max-w-6xl px-6 py-12">

      <h1 className="text-4xl font-semibold">
        Learning Center
      </h1>

      <p className="mt-4 max-w-2xl text-neutral-600">
        Exclusive content for Founding Traders. Learn how Take Profit works and follow our progress toward launch.
      </p>

      <div className="mt-12">

        <div className="h-3 w-full rounded-full bg-neutral-200">

          <div className="h-3 w-0 rounded-full bg-[#071A52]" />

        </div>

        <p className="mt-3 text-sm text-neutral-600">
          0 of {modules.length} Modules Completed
        </p>

      </div>

      <div className="mt-12 grid gap-6">

        {modules.map((module) => (

          <Link
            key={module.id}
            href={`/dashboard/learning/module/${module.id}`}
            className="rounded-3xl border border-neutral-200 bg-white p-8 transition hover:shadow-lg"
          >

            <div className="flex items-center justify-between">

              <div>

                <p className="text-sm font-medium text-neutral-500">
                  Module {module.order_number}
                </p>

                <h2 className="mt-2 text-2xl font-semibold">
                  {module.title}
                </h2>

                <p className="mt-3 text-neutral-600">
                  {module.description}
                </p>

              </div>

              <div>

                {module.status === "available" ? (

                  <span className="rounded-full bg-[#071A52] px-5 py-2 text-sm font-medium text-white">
                    Start
                  </span>

                ) : (

                  <span className="rounded-full border border-neutral-300 px-5 py-2 text-sm">
                    Coming Soon
                  </span>

                )}

              </div>

            </div>

          </Link>

        ))}

      </div>

    </main>
  );
}