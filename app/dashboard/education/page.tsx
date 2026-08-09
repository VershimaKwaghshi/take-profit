import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";

const lessons = [
  { number: "01", title: "Understanding Take Profit", status: "Available at launch" },
  { number: "02", title: "Risk Management", status: "Available at launch" },
  { number: "03", title: "Restitution", status: "Available at launch" },
  { number: "04", title: "Capital Access", status: "Available at launch" },
  { number: "05", title: "Trading Psychology", status: "Available at launch" },
  { number: "06", title: "Platform Walkthrough", status: "Available at launch" },
];

export default function EducationPage() {
  return (
    <div>
      <p className="font-mono text-xs font-semibold uppercase tracking-[0.3em] text-ember">
        Take Profit Academy
      </p>

      <h1 className="mt-5 text-4xl font-semibold text-chalk md:text-5xl">
        Learn before launch.
      </h1>

      <p className="mt-6 max-w-2xl leading-8 text-fog">
        Every lesson has been prepared to help you understand Take Profit
        before the platform officially launches.
      </p>

      <div className="mt-10 grid gap-6 lg:grid-cols-[320px_1fr]">
        <div className="rounded-lg border border-panel-line bg-panel p-8">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-fog">
            Your progress
          </p>

          <h2 className="mt-6 font-mono text-5xl font-semibold tabular-nums text-chalk">
            0%
          </h2>

          <div className="mt-8 h-2 overflow-hidden rounded-full bg-panel-line">
            <div className="h-full w-0 rounded-full bg-ember" />
          </div>

          <p className="mt-8 leading-7 text-fog">
            Your learning journey begins when Take Profit launches.
          </p>
        </div>

        <div className="rounded-lg border border-panel-line bg-panel p-8">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-fog">
            Learning path
          </p>

          <div className="mt-6 divide-y divide-panel-line">
            {lessons.map((lesson) => (
              <div
                key={lesson.number}
                className="flex items-center justify-between py-6"
              >
                <div className="flex items-center gap-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-panel-line font-mono text-sm text-fog">
                    {lesson.number}
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-chalk">
                      {lesson.title}
                    </h3>
                    <p className="mt-1 text-sm text-fog">{lesson.status}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}