import Link from "next/link";
import { ArrowLeft, ArrowRight, Lock } from "lucide-react";

import { getLessons } from "@/lib/learning";

type LessonPageProps = {
  params: Promise<{
    lessonNumber: string;
  }>;
};

export default async function LessonPage({
  params,
}: LessonPageProps) {
  const { lessonNumber } = await params;

  const lessonNumberValue = Number(lessonNumber);

  const modules = await getLessons();

  const lesson = modules.find(
    (module) => module.lessonNumber === lessonNumberValue
  );

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

  const isFirstLesson = lesson.lessonNumber === 1;

  const previousLesson = modules.find(
    (module) => module.lessonNumber === lesson.lessonNumber - 1
  );

  const nextLesson = modules.find(
    (module) => module.lessonNumber === lesson.lessonNumber + 1
  );

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
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.3em] text-[#D94A3D]">
                Lesson {String(lesson.lessonNumber).padStart(2, "0")}
              </p>

              <h2 className="mt-5 text-3xl font-semibold leading-tight text-[#071A52] md:text-4xl">
                {lesson.title}
              </h2>

              <p className="mt-6 text-lg leading-9 text-black/65">
                {lesson.description}
              </p>
            </div>

            {/* TEMPORARY LESSON BODY */}
            <div className="mt-8 space-y-8">
              <section className="bg-white p-7 md:p-10">
                <h2 className="text-2xl font-semibold text-[#071A52] md:text-3xl">
                  Understanding the lesson
                </h2>

                <p className="mt-5 text-base leading-8 text-black/65 md:text-lg">
                  This lesson is part of the Take Profit Academy curriculum.
                  Work through the material carefully and make sure you
                  understand the ideas before moving forward.
                </p>

                <p className="mt-5 text-base leading-8 text-black/65 md:text-lg">
                  The Academy is designed to build your understanding step by
                  step. Each lesson introduces another layer of how financial
                  markets work and how the different participants interact.
                </p>
              </section>

              <section className="bg-white p-7 md:p-10">
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.3em] text-[#D94A3D]">
                  Key idea
                </p>

                <h2 className="mt-4 text-2xl font-semibold text-[#071A52] md:text-3xl">
                  Learn before you enter.
                </h2>

                <p className="mt-5 text-base leading-8 text-black/65 md:text-lg">
                  The goal is not simply to memorize terminology. The goal is
                  to understand what is happening, who is involved, and why
                  the market behaves the way it does.
                </p>
              </section>

              <section className="bg-[#071A52] p-7 text-white md:p-10">
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.3em] text-[#D94A3D]">
                  Take your time
                </p>

                <h2 className="mt-4 text-2xl font-semibold md:text-3xl">
                  Understanding comes first.
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-8 text-white/70 md:text-lg">
                  Read this lesson carefully. You do not need to rush through
                  the Academy. The purpose is to build a foundation that you
                  can actually use.
                </p>
              </section>
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
                <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-black/35">
                  <Lock size={14} />
                  Next lesson locked
                </div>
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
              0%
            </p>

            <div className="mt-5 h-1.5 w-full overflow-hidden bg-black/10">
              <div className="h-full w-0 bg-[#071A52]" />
            </div>

            <p className="mt-5 text-sm leading-7 text-black/55">
              Complete each lesson carefully before moving to the next part of
              the curriculum.
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
