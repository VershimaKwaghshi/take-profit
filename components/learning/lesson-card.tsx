import Link from "next/link";
import { BookOpen, CheckCircle2, Lock } from "lucide-react";

type LessonStatus =
  | "ready"
  | "locked"
  | "completed"
  | "countdown";

interface LessonCardProps {
  id: number;
  title: string;
  description?: string;
  readingTime?: string;
  status: LessonStatus;
  countdown?: string;
}

export default function LessonCard({
  id,
  title,
  description,
  readingTime,
  status,
  countdown,
}: LessonCardProps) {
  return (
    <div className="rounded-xl border bg-card p-6 transition hover:shadow-sm">
      <div className="flex items-start justify-between gap-6">
        <div className="flex-1">
          <p className="text-sm text-muted-foreground">
            Lesson {id}
          </p>

          <h2 className="mt-1 text-2xl font-semibold">
            {title}
          </h2>

          {status === "ready" && (
            <>
              <p className="mt-3 text-muted-foreground">
                {description}
              </p>

              <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                <BookOpen className="h-4 w-4" />
                {readingTime}
              </div>
            </>
          )}

          {status === "completed" && (
            <div className="mt-4">
              <p className="font-medium text-green-600">
                ✓ Completed
              </p>

              <p className="mt-1 text-sm text-muted-foreground">
                You have successfully completed this lesson.
              </p>
            </div>
          )}

          {status === "countdown" && (
            <div className="mt-4">
              <p className="font-medium">
                🔒 Locked
              </p>

              <p className="mt-3 text-sm text-muted-foreground">
                Unlocks in
              </p>

              <h3 className="mt-2 text-3xl font-bold tracking-wide">
                {countdown}
              </h3>

              <p className="mt-3 text-sm text-muted-foreground">
                Complete the reflection period before continuing.
              </p>
            </div>
          )}

          {status === "locked" && (
            <div className="mt-4">
              <p className="font-medium">
                🔒 Locked
              </p>

              <p className="mt-2 text-sm text-muted-foreground">
                Complete Lesson {id - 1} first.
              </p>
            </div>
          )}
        </div>

        <div>
          {status === "ready" && (
            <Link
              href={`/learning/${id}`}
              className="inline-flex rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90"
            >
              Start Lesson
            </Link>
          )}

          {status === "completed" && (
            <CheckCircle2 className="h-8 w-8 text-green-600" />
          )}

          {(status === "locked" || status === "countdown") && (
            <Lock className="h-8 w-8 text-muted-foreground" />
          )}
        </div>
      </div>
    </div>
  );
}
