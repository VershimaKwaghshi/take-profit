import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";

const lessons = [
  {
    number: "01",
    title: "Understanding Take Profit",
    status: "Available at launch",
  },
  {
    number: "02",
    title: "Risk Management",
    status: "Available at launch",
  },
  {
    number: "03",
    title: "Restitution",
    status: "Available at launch",
  },
  {
    number: "04",
    title: "Capital Access",
    status: "Available at launch",
  },
  {
    number: "05",
    title: "Trading Psychology",
    status: "Available at launch",
  },
  {
    number: "06",
    title: "Platform Walkthrough",
    status: "Available at launch",
  },
];

export default function EducationPage() {
  return (
    <main className="min-h-screen bg-neutral-100">

      <div className="flex">

        <Sidebar />

        <section className="flex-1 p-10">

          <Topbar />

          <div className="mt-10">

            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-neutral-500">
              TAKE PROFIT ACADEMY
            </p>

            <h1 className="mt-5 text-5xl font-semibold text-black">
              Learn before launch.
            </h1>

            <p className="mt-6 max-w-2xl text-xl leading-9 text-neutral-600">
              Every lesson has been prepared to help you understand Take Profit
              before the platform officially launches.
            </p>

          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[320px_1fr]">

            <div className="rounded-[32px] bg-white p-8 shadow-sm">

              <p className="text-sm uppercase tracking-[0.35em] text-neutral-500">
                YOUR PROGRESS
              </p>

              <h2 className="mt-6 text-6xl font-semibold">
                0%
              </h2>

              <div className="mt-8 h-3 overflow-hidden rounded-full bg-neutral-200">

                <div className="h-full w-0 rounded-full bg-red-600" />

              </div>

              <p className="mt-8 leading-8 text-neutral-500">
                Your learning journey begins when Take Profit launches.
              </p>

            </div>

            <div className="rounded-[32px] bg-white p-8 shadow-sm">

              <p className="text-sm uppercase tracking-[0.35em] text-neutral-500">
                LEARNING PATH
              </p>

              <div className="mt-8 divide-y divide-neutral-200">

                {lessons.map((lesson) => (

                  <div
                    key={lesson.number}
                    className="flex items-center justify-between py-7"
                  >

                    <div className="flex items-center gap-6">

                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-neutral-100 text-lg font-semibold">

                        {lesson.number}

                      </div>

                      <div>

                        <h3 className="text-xl font-semibold text-black">
                          {lesson.title}
                        </h3>

                        <p className="mt-2 text-neutral-500">
                          {lesson.status}
                        </p>

                      </div>

                    </div>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </section>

      </div>

    </main>
  );
}