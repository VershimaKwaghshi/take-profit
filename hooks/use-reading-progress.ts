"use client";

import { useEffect, useState } from "react";

interface Props {
  userId: string;
  lessonId: string;
}

export function useReadingProgress({
  userId,
  lessonId,
}: Props) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const calculateProgress = () => {
      const scrollTop = window.scrollY;

      const documentHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

      if (documentHeight <= 0) {
        setProgress(100);
        return;
      }

      const percentage = Math.min(
        100,
        Math.round((scrollTop / documentHeight) * 100)
      );

      setProgress(percentage);
    };

    calculateProgress();

    window.addEventListener(
      "scroll",
      calculateProgress
    );

    return () =>
      window.removeEventListener(
        "scroll",
        calculateProgress
      );
  }, []);

  useEffect(() => {
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
            completed: progress >= 100,
            lastScrollPosition: window.scrollY,
          }),
        });
      } catch (error) {
        console.error(error);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [userId, lessonId, progress]);

  return progress;
}