import Link from "next/link";
import { BookOpen, CheckCircle2, Lock } from "lucide-react";

const lessons = [
  {
    id: 1,
    title: "Trading Market",
    status: "ready",
    description:
      "Understand what financial markets are and why they exist.",
    readingTime: "5 min",
  },
  {
    id: 2,
    title: "Buyers & Sellers",
    status: "locked",
  },
  {
    id: 3,
    title: "Broker",
    status: "locked",
  },
  {
    id: 4,
    title: "Liquidity Provider",
    status: "locked",
  },
  {
    id: 5,
    title: "Order Flow",
    status: "locked",
  },
  {
    id: 6,
    title: "Regulation",
    status: "locked",
  },
  {
    id: 7,
    title: "Prop Firm",
    status: "locked",
  },
  {
    id: 8,
    title: "Restitution",
    status: "locked",
  },
  {
    id: 9,
    title: "Funded Capital",
    status: "locked",
  },
  {
    id: 10,
    title: "Manager Market",
    status: "locked",
  },
  {
    id: 11,
    title: "Referral Market",
    status: "locked",
  },
  {
    id: 12,
    title: "Social Bond",
    status: "locked",
  },
];

export default function LearningPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-10">
      <div className="mb-10">
        <h1 className="text-4xl font-bold">Learning Center</h1>

        <p className="mt-3 text-muted-foreground max-w-2xl">
          Learn one lesson at a time. Complete each lesson, submit your
          feedback, and the next lesson will unlock after 24 hours.
        </p>
      </div>

      <section className="mb-10 rounded-xl border bg-card p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">
              Overall Progress
            </p>

            <h2 className="mt-1 text-3xl font-bold">
              0 / 12 Lessons
            </h2>
          </div>

          <BookOpen className="h-10 w-10 text-primary" />
        </div>

        <div className="mt-6 h-3 overflow-hidden rounded-full bg-muted">
          <div className="h-full w-0 rounded-full bg-primary" />
        </div>

        <p className="mt-3 text-sm text-muted-foreground">
          0% Completed
        </p>
      </section>

      <div className="space-y-5">
        {lessons.map((lesson) => (
          <div
            key={lesson.id}
            className="rounded-xl border bg-card p-6"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground">
                  Lesson {lesson.id}
                </p>

                <h3 className="mt-1 text-2xl font-semibold">
                  {lesson.title}
                </h3>

                {lesson.status === "ready" && (
                  <>
                    <p className="mt-2 text-muted-foreground">
                      {lesson.description}
                    </p>

                    <p className="mt-3 text-sm text-muted-foreground">
                      Estimated Reading Time • {lesson.readingTime}
                    </p>
                  </>
                )}

                {lesson.status === "locked" && lesson.id === 2 && (
                  <div className="mt-4">
                    <p className="font-medium">🔒 Locked</p>

                    <p className="mt-2 text-muted-foreground">
                      Unlocks 24 hours after Lesson 1 has been completed
                      and feedback submitted.
                    </p>
                  </div>
                )}

                {lesson.status === "locked" && lesson.id > 2 && (
                  <div className="mt-4">
                    <p className="font-medium">🔒 Locked</p>

                    <p className="mt-2 text-muted-foreground">
                      Complete Lesson {lesson.id - 1} first.
                    </p>
                  </div>
                )}
              </div>

              {lesson.status === "ready" ? (
                <Link
                  href={`/learning/${lesson.id}`}
                  className="rounded-lg bg-primary px-5 py-3 font-medium text-primary-foreground hover:opacity-90"
                >
                  Start Lesson
                </Link>
              ) : lesson.status === "completed" ? (
                <CheckCircle2 className="h-8 w-8 text-green-600" />
              ) : (
                <Lock className="h-8 w-8 text-muted-foreground" />
              )}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
