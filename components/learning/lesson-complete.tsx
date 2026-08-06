"use client";

import Button from "@/components/ui/button";

interface Props {
  lessonId: number;
  completed: boolean;
}

export default function LessonComplete({
  lessonId,
  completed,
}: Props) {
  if (!completed) {
    return (
      <section className="rounded-xl border bg-white p-8 dark:bg-neutral-900">
        <h2 className="text-2xl font-bold">
          Keep Reading
        </h2>

        <p className="mt-3 text-gray-600 dark:text-gray-400">
          Continue reading until you reach the end of this lesson.
          Once completed, you'll be able to submit your feedback.
        </p>
      </section>
    );
  }

  return (
    <section className="rounded-xl border bg-white p-8 dark:bg-neutral-900">
      <h2 className="text-2xl font-bold">
        ✓ You've Reached The End
      </h2>

      <p className="mt-3 text-gray-600 dark:text-gray-400">
        Great work.
        When you're satisfied that you understand this lesson,
        continue to the feedback form.
      </p>

      <div className="mt-8">
        <Button>
          Continue to Feedback
        </Button>
      </div>
    </section>
  );
}