"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";

interface Props {
  lessonId: number;
}

export default function LessonComplete({
  lessonId,
}: Props) {

  const [reachedEnd] = useState(true);

  if (!reachedEnd) {
    return null;
  }

  return (

    <section className="rounded-xl border p-8">

      <h2 className="text-2xl font-bold">

        You've reached the end of this lesson.

      </h2>

      <p className="mt-3 text-muted-foreground">

        When you're satisfied that you understand this lesson,
        continue to the feedback form.

      </p>

      <Button
        className="mt-8"
      >
        Continue to Feedback
      </Button>

    </section>

  );
}
