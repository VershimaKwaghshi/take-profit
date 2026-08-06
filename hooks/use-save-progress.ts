"use client";

import { useEffect } from "react";

interface SaveProgressProps {
  userId: string;
  lessonId: string;
  progress: number;
  completed: boolean;
  lastScrollPosition: number;
}

export function useSaveProgress({
  userId,
  lessonId,
  progress,
  completed,
  lastScrollPosition,
}: SaveProgressProps) {
  useEffect(() => {
    if (!userId || !lessonId) return;

    const interval = setInterval(async () => {
      try {
        await fetch("/api/learning/progress", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId,
            lessonId,
            progress,
            completed,
            lastScrollPosition,
          }),
        });
      } catch (error) {
        console.error("Failed to save lesson progress.", error);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [
    userId,
    lessonId,
    progress,
    completed,
    lastScrollPosition,
  ]);
}
