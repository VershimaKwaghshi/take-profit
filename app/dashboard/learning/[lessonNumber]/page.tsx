import fs from "fs";
import path from "path";
import Link from "next/link";
import { redirect } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ArrowLeft, ArrowRight, Lock, Check } from "lucide-react";

import { getSessionFromCookies } from "@/lib/auth";
import {
  getLessonByNumber,
  getLessonAccess,
  getLessonFeedback,
} from "@/lib/learning";
import LessonFeedbackForm from "@/components/LessonFeedbackForm";

type LessonPageProps = {
  params: Promise<{
    lessonNumber: string;
  }>;
};

function formatUnlockCountdown(availableAt: Date) {
  const ms = availableAt.getTime() - Date.now();

  if (ms <= 0) return null;

  const hours = Math.floor(ms / (1000 * 60 * 60));
  const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));

  if (hours <= 0) return `${minutes}m`;

  return `${hours}h ${minutes}m`;
}

export default async function LessonPage({ params }: LessonPageProps) {
  const { lessonNumber } = await params;
  const lessonNumberValue = Number(lessonNumber);

  const session = await getSessionFromCookies();

  if (!session) {
    redirect("/login");
  }

  const lesson = await getLessonByNumber(lessonNumberValue);

  if (!lesson) {
    return (
      <main className="min-h-screen bg-[#F7F7F4] text-black">
        <div className="mx-auto w-full max-w-6xl px-6 py-20 md:px-10 lg:px-14">
          <Link
            href="/dashboard/learning"
            className="inline-flex items-center gap-2 font-semibold text-[#071A52]"
          >
            <ArrowLeft size={18} />
            Back to Learning Center
          </Link>

          <div className="mt-16 border-t-4 border-[#D94A3D] bg-white p-8 md:p-12">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.3em] text-[#D94A3D]">
              Lesson not found
            </p>

            <h1 className="mt-5 text-4xl font-semibold text-[#071A52] md:text-5xl">
              We could not find this lesson.
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-black/60">
              The lesson you are trying to open does not exist in the current
              curriculum.
            </p>

            <Link
              href="/dashboard/learning"
              className="mt-8 inline-flex items-center gap-2 bg-[#071A52] px-6 py-3 font-semibold text-white transition hover:opacity-90"
            >
              Return to Learning Center
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </main>
    );
  }

  const access = await getLessonAccess(session.id, lesson.id);

  if (!access.unlocked) {
    const countdown = access.availableAt
      ? formatUnlockCountdown(access.availableAt)
      : null;

    return (
      <main className="min-h-screen bg-[#F7F7F4] text-black">
        <div className="mx-auto w-full max-w-6xl px-6 py-20 md:px-10 lg:px-14">
          <Link
            href="/dashboard/learning"
            className="inline-flex items-center gap-2 font-semibold text-[#071A52]"
          >
            <ArrowLeft size={18} />
            Back to Learning Center
          </Link>

          <div className="mt-16 border-t-4 border-[#071A52] bg-white p-8 md:p-12">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-black/20">
              <Lock size={18} className="text-black/50" />
            </div>

            <h1 className="mt-6 text-4xl font-semibold text-[#071A52] md:text-5xl">
              This lesson is still locked.
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-black/60">
              {countdown
                ? `Complete the lesson before this one, and this unlocks in ${countdown}.`
                : "Complete the lesson before this one to unlock it."}
            </p>

            <Link
              href="/dashboard/learning"
              className="mt-8 inline-flex items-center gap-2 bg-[#071A52] px-6 py-3 font-semibold text-white transition hover:opacity-90"
            >
              Return to Learning Center
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </main>
    );
  }

  const [previousLesson, nextLesson, feedback] = await Promise.all([
    getLessonByNumber(lesson.lessonNumber - 1),
    getLessonByNumber(lesson.lessonNumber + 1),
    getLessonFeedback(session.id, lesson.id),
  ]);

  const nextLessonAccess = nextLesson
    ? await getLessonAccess(session.id, nextLesson.id)
    : null;

  let markdown = "";
  try {
    const filePath = path.join(
      process.cwd(),
      "content",
      "learning",
      `${lesson.slug}.md`
    );
    markdown = fs.readFileSync(filePath, "utf8");
  } catch {
    markdown =
      "Lesson content is missing for this lesson. Contact support.";
  }

  const completed = access.completed;

  return (
    <main className="min-h-screen bg-[#F7F7F4] text-black">
      {/* TOP NAVIGATION */}
      <div className="border-b border-black/10 bg-white">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5 md:px-10 lg:px-14">
          <Link
            href="/dashboard/learning"
            className="inline-flex items-center gap-2 font-semibold text-[#071A52] transition hover:opacity-70"
          >
            <ArrowLeft size={18} />
            Learning Center
          </Link>

          <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-black/40">
            Lesson {String(lesson.lessonNumber).padStart(2, "0")}
          </span>
        </div>
      </div>

      {/* LESSON HEADER */}
      <section className="bg-[#071A52] text-white">
        <div className="mx-auto w-full max-w-6xl px-6 py-16 md:px-10 md:py-24 lg:px-14">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.35em] text-[#D94A3D]">
            Take Profit Academy
          </p>

          <p className="mt-10 font-mono text-xs uppercase tracking-[0.25em] text-white/45">
            Lesson {String(lesson.lessonNumber).padStart(2, "0")}
          </p>

          <h1 className="mt-4 max-w-5xl text-4xl font-semibold leading-[1.08] tracking-tight md:text-6xl">
            {lesson.title}
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-white/70 md:text-xl">
            {lesson.description}
          </p>
        </div>
      </section>

      {/* LESSON CONTENT */}
      <article className="mx-auto w-full max-w-5xl px-6 py-14 md:px-10 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_280px]">
          {/* MAIN READING AREA */}
          <div>
            <div className="border-t-4 border-[#D94A3D] bg-white p-7 md:p-10">
              <div className="prose max-w-none prose-headings:text-[#071A52] prose-headings:font-semibold prose-p:text-black/70 prose-p:leading-8 prose-img:my-8 prose-strong:text-black prose-li:text-black/70">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {markdown}
                </ReactMarkdown>
              </div>
            </div>

            {/* FEEDBACK / COMPLETION */}
            <div className="mt-8">
              {completed ? (
                <div className="border-t-4 border-[#071A52] bg-white p-7 md:p-10">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#071A52] text-white">
                    <Check size={20} />
                  </div>

                  <h2 className="mt-6 text-2xl font-semibold text-[#071A52] md:text-3xl">
                    Lesson completed
                  </h2>

                  <p className="mt-4 max-w-2xl text-base leading-8 text-black/60">
                    {feedback
                      ? "Thanks for the feedback."
                      : "This lesson is marked complete."}
                  </p>
                </div>
              ) : (
                <LessonFeedbackForm lessonId={lesson.id} />
              )}
            </div>

            {/* LESSON NAVIGATION */}
            <div className="mt-12 flex flex-col gap-4 border-t border-black/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
              {previousLesson ? (
                <Link
                  href={`/dashboard/learning/${previousLesson.lessonNumber}`}
                  className="inline-flex items-center gap-2 font-semibold text-[#071A52]"
                >
                  <ArrowLeft size={17} />
                  Previous lesson
                </Link>
              ) : (
                <Link
                  href="/dashboard/learning"
                  className="inline-flex items-center gap-2 font-semibold text-[#071A52]"
                >
                  <ArrowLeft size={17} />
                  Learning Center
                </Link>
              )}

              {nextLesson ? (
                nextLessonAccess?.unlocked ? (
                  <Link
                    href={`/dashboard/learning/${nextLesson.lessonNumber}`}
                    className="inline-flex items-center gap-2 font-semibold text-[#071A52]"
                  >
                    Next lesson
                    <ArrowRight size={17} />
                  </Link>
                ) : (
                  <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-black/35">
                    <Lock size={14} />
                    {completed
                      ? "Next lesson unlocking soon"
                      : "Next lesson locked"}
                  </div>
                )
              ) : (
                <span className="font-mono text-xs uppercase tracking-wider text-black/35">
                  End of curriculum
                </span>
              )}
            </div>
          </div>

          {/* SIDE INFORMATION */}
          <aside className="h-fit bg-white p-6 md:p-8 lg:sticky lg:top-8">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-[#D94A3D]">
              Your progress
            </p>

            <p className="mt-4 text-3xl font-semibold text-[#071A52]">
              {completed ? 100 : 0}%
            </p>

            <div className="mt-5 h-1.5 w-full overflow-hidden bg-black/10">
              <div
                className="h-full bg-[#071A52]"
                style={{ width: completed ? "100%" : "0%" }}
              />
            </div>

            <p className="mt-5 text-sm leading-7 text-black/55">
              {completed
                ? "Completed. The next lesson unlocks 24 hours after completion."
                : "Submit feedback at the end of this lesson to mark it complete."}
            </p>

            <div className="mt-8 border-t border-black/10 pt-6">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-black/40">
                Current lesson
              </p>

              <p className="mt-2 font-semibold text-[#071A52]">
                {String(lesson.lessonNumber).padStart(2, "0")} —{" "}
                {lesson.title}
              </p>
            </div>
          </aside>
        </div>
      </article>
    </main>
  );
}