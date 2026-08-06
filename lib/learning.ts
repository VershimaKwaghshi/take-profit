import { learningLessons } from "@/data/learning-lessons";

export function getAllLessons() {
  return [...learningLessons].sort(
    (a, b) => a.lessonNumber - b.lessonNumber
  );
}

export function getLessonByNumber(
  lessonNumber: number
) {
  return learningLessons.find(
    (lesson) => lesson.lessonNumber === lessonNumber
  );
}

export function getLessonBySlug(
  slug: string
) {
  return learningLessons.find(
    (lesson) => lesson.slug === slug
  );
}

export function getPreviousLesson(
  lessonNumber: number
) {
  return learningLessons.find(
    (lesson) => lesson.lessonNumber === lessonNumber - 1
  );
}

export function getNextLesson(
  lessonNumber: number
) {
  return learningLessons.find(
    (lesson) => lesson.lessonNumber === lessonNumber + 1
  );
}

export function getTotalLessons() {
  return learningLessons.length;
}