import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Progress } from "@/components/ui/progress";
import LessonContent from "@/components/learning/lesson-content";
import LessonComplete from "@/components/learning/lesson-complete";

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
];

interface Props {
  params: Promise<{
    lessonId: string;
  }>;
}

export default async function LessonPage({ params }: Props) {
  const { lessonId } = await params;

  const lesson = lessons.find(
    (lesson) => lesson.id === Number(lessonId)
  );

  if (!lesson) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-4xl px-6 py-10">

      <Link
        href="/learning"
        className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />

        Learning Center
      </Link>

      <div className="space-y-3">

        <p className="text-sm text-muted-foreground">
          Lesson {lesson.id} of 12
        </p>

        <h1 className="text-4xl font-bold">
          {lesson.title}
        </h1>

        <p className="text-muted-foreground">
          Estimated Reading Time • {lesson.readingTime}
        </p>

      </div>

      <div className="mt-8">

        <Progress value={0} />

      </div>

      <div className="mt-10">

        <LessonContent
          slug={lesson.slug}
        />

      </div>

      <div className="mt-16">

        <LessonComplete
          lessonId={lesson.id}
        />

      </div>

    </main>
  );
}
