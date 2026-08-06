"use client";

import { useEffect, useState } from "react";

export function useReadingProgress() {
  const [progress, setProgress] = useState(0);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    function calculateProgress() {
      const article = document.getElementById("lesson-content");

      if (!article) return;

      const rect = article.getBoundingClientRect();

      const totalHeight = article.scrollHeight - window.innerHeight;

      const current = Math.max(
        0,
        window.scrollY - article.offsetTop
      );

      const percentage = Math.min(
        100,
        Math.round((current / totalHeight) * 100)
      );

      setProgress(percentage);

      if (percentage >= 98) {
        setCompleted(true);
      }
    }

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

  return {
    progress,
    completed,
  };
}
