"use client";

import { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import Progress from "@/components/ui/progress";
import LessonContent from "@/components/learning/lesson-content";
import LessonComplete from "@/components/learning/lesson-complete";
import { useReadingProgress } from "@/hooks/use-reading-progress";

const lessons = [
  {
    id: 1,
    title: "Trading Market",
    slug: "trading-market",
    readingTime: "5 min",
  },
  {
    id: 2,
    title: "Buyers & Sellers",
    slug: "buyers-sellers",
    readingTime: "4 min",
  },
  {
    id: 3,
    title: "Broker",
    slug: "broker",
    readingTime: "5 min",
  },
  {
    id: 4,
    title: "Liquidity Provider",
    slug: "liquidity-provider",
    readingTime: "4 min",
  },
  {
    id: 5,
    title: "Order Flow",
    slug: "order-flow",
    readingTime: "5 min",
  },
  {
    id: 6,
    title: "Regulation",
    slug: "regulation",
    readingTime: "4 min",
  },
  {
    id: 7,
    title: "Prop Firm",
    slug: "prop-firm",
    readingTime: "5 min",
  },
  {
    id: 8,
    title: "Restitution",
    slug: "restitution",
    readingTime: "5 min",
  },
  {
    id: 9,
    title: "Funded Capital",
    slug: "funded-capital",
    readingTime: "6 min",
  },
  {
    id: 10,
    title: "Manager Market",
    slug: "manager-market",
    readingTime: "6 min",
  },
  {
    id: 11,
    title: "Referral Market",
    slug: "referral-market",
    readingTime: "6 min",
  },
  {
    id: 12,
    title: "Social Bond",
    slug: "social-bond",
    readingTime: "7 min",
  },
];

interface Props {
  params: Promise<{
    lessonId: string;
  }>;
}

export default function LessonPage({ params }: Props) {
  const { lessonId } = use(params);

  const lesson = lessons.find(
    (item) => item.id === Number(lessonId)
  );

  if (!lesson) {
    notFound();
  }

  // Temporary until Supabase auth is connected
  const userId = "demo-user";

  const { progress, completed } = useReadingProgress({
    userId,
    lessonId,
  });

  return (
    <main className="mx-auto max-w-4xl px-6 py-10">
      <div className="sticky top-0 z-50 mb-8 rounded-xl border bg-white/95 p-4 backdrop-blur">
        <div className="mb-2 flex items-center justify-between">
          <span className="font-medium">
            {lesson.title}
          </span>

          <span className="text-sm text-gray-500">
            {progress}%
          </span>
        </div>

        <Progress value={progress} />
      </div>

      <Link
        href="/dashboard/learning"
        className="mb-8 inline-flex items-center gap-2 text-sm text-gray-500 hover:text-black"
      >
        <ArrowLeft className="h-4 w-4" />
        Learning Center
      </Link>

      <header className="space-y-2">
        <p className="text-sm text-gray-500">
          Lesson {lesson.id} of 12
        </p>

        <h1 className="text-4xl font-bold">
          {lesson.title}
        </h1>

        <p className="text-gray-500">
          Estimated Reading Time • {lesson.readingTime}
        </p>
      </header>

      <section className="mt-10">
        <LessonContent slug={lesson.slug} />
      </section>

      <section className="mt-16">
        <LessonComplete
          lessonId={lesson.id}
          completed={completed}
        />
      </section>
    </main>
  );
}