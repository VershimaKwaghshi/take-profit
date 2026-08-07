import prisma from "./prisma";

/**
 * Get all published lessons.
 */
export async function getLessons() {
  return prisma.lesson.findMany({
    where: {
      isPublished: true,
    },
    orderBy: {
      lessonNumber: "asc",
    },
  });
}

/**
 * Get a single lesson by its lesson number.
 */
export async function getLessonByNumber(
  lessonNumber: number
) {
  return prisma.lesson.findUnique({
    where: {
      lessonNumber,
    },
  });
}

/**
 * Get a single lesson by its slug.
 */
export async function getLessonBySlug(
  slug: string
) {
  return prisma.lesson.findUnique({
    where: {
      slug,
    },
  });
}

/**
 * Get a user's progress for a specific lesson.
 */
export async function getLessonProgress(
  userId: string,
  lessonId: string
) {
  return prisma.lessonProgress.findUnique({
    where: {
      userId_lessonId: {
        userId,
        lessonId,
      },
    },
  });
}

/**
 * Get all lesson progress records for a user.
 */
export async function getUserLessonProgress(
  userId: string
) {
  return prisma.lessonProgress.findMany({
    where: {
      userId,
    },
    include: {
      lesson: true,
    },
    orderBy: {
      lesson: {
        lessonNumber: "asc",
      },
    },
  });
}

/**
 * Save or update a user's lesson progress.
 */
export async function updateLessonProgress({
  userId,
  lessonId,
  progress,
  completed,
  lastScrollPosition,
}: {
  userId: string;
  lessonId: string;
  progress: number;
  completed: boolean;
  lastScrollPosition: number;
}) {
  const safeProgress = Math.min(
    100,
    Math.max(0, Math.round(progress))
  );

  const now = new Date();

  return prisma.lessonProgress.upsert({
    where: {
      userId_lessonId: {
        userId,
        lessonId,
      },
    },

    update: {
      progress: safeProgress,
      completed,
      completedAt: completed ? now : undefined,
      lastReadAt: now,
      lastScrollPosition,
    },

    create: {
      userId,
      lessonId,
      progress: safeProgress,
      completed,
      completedAt: completed ? now : null,
      lastReadAt: now,
      lastScrollPosition,
    },
  });
}

/**
 * Save lesson feedback.
 */
export async function createLessonFeedback({
  userId,
  lessonId,
  rating,
  understood,
  comment,
}: {
  userId: string;
  lessonId: string;
  rating: number;
  understood: boolean;
  comment?: string;
}) {
  return prisma.lessonFeedback.create({
    data: {
      userId,
      lessonId,
      rating,
      understood,
      comment: comment?.trim() || null,
    },
  });
}