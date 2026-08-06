"use client";

import { useEffect } from "react";

interface ResumeReadingProps {
  scrollPosition: number;
}

export function useResumeReading({
  scrollPosition,
}: ResumeReadingProps) {
  useEffect(() => {
    if (!scrollPosition) return;

    const timer = setTimeout(() => {
      window.scrollTo({
        top: scrollPosition,
        behavior: "smooth",
      });
    }, 500);

    return () => clearTimeout(timer);
  }, [scrollPosition]);
}
