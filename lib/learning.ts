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
 * Check whether a lesson is available to a user.
 *
 * Rules:
 *
 * Lesson 01:
 * - Always available.
 *
 * Lesson 02+:
 * - Previous lesson must be completed.
 * - 24 hours must have passed since the previous
 *   lesson was completed.
 */
export async function getLessonAccess(
  userId: string,
  lessonId: string
) {
  const lessons = await getLessons();

  const lesson = lessons.find(
    (item) => item.id === lessonId
  );

  if (!lesson) {
    return {
      unlocked: false,
      completed: false,
      availableAt: null,
    };
  }

  const progress = await getLessonProgress(
    userId,
    lesson.id
  );

  const completed = Boolean(
    progress?.completed
  );

  // Lesson 01 is always available.
  if (lesson.lessonNumber === 1) {
    return {
      unlocked: true,
      completed,
      availableAt: null,
    };
  }

  // Find the lesson immediately before this one.
  const previousLesson = lessons.find(
    (item) =>
      item.lessonNumber ===
      lesson.lessonNumber - 1
  );

  if (!previousLesson) {
    return {
      unlocked: false,
      completed,
      availableAt: null,
    };
  }

  const previousProgress =
    await getLessonProgress(
      userId,
      previousLesson.id
    );

  // Previous lesson has not been completed yet.
  if (
    !previousProgress?.completed ||
    !previousProgress.completedAt
  ) {
    return {
      unlocked: false,
      completed,
      availableAt: null,
    };
  }

  // The next lesson becomes available 24 hours
  // after the previous lesson was completed.
  const availableAt = new Date(
    previousProgress.completedAt.getTime() +
      24 * 60 * 60 * 1000
  );

  const unlocked =
    new Date() >= availableAt;

  return {
    unlocked,
    completed,
    availableAt,
  };
}

/**
 * Get access information for every lesson
 * for a specific user.
 */
export async function getUserLessonAccess(
  userId: string
) {
  const lessons = await getLessons();

  const progress =
    await getUserLessonProgress(userId);

  const progressMap = new Map(
    progress.map((item) => [
      item.lessonId,
      item,
    ])
  );

  return lessons.map((lesson, index) => {
    const lessonProgress =
      progressMap.get(lesson.id);

    const completed = Boolean(
      lessonProgress?.completed
    );

    // First lesson is always unlocked.
    if (index === 0) {
      return {
        lesson,
        completed,
        unlocked: true,
        availableAt: null,
      };
    }

    const previousLesson =
      lessons[index - 1];

    const previousProgress =
      progressMap.get(previousLesson.id);

    if (
      !previousProgress?.completed ||
      !previousProgress.completedAt
    ) {
      return {
        lesson,
        completed,
        unlocked: false,
        availableAt: null,
      };
    }

    const availableAt = new Date(
      previousProgress.completedAt.getTime() +
        24 * 60 * 60 * 1000
    );

    return {
      lesson,
      completed,
      unlocked:
        new Date() >= availableAt,
      availableAt,
    };
  });
}

/**
 * Save or update a user's lesson reading progress.
 *
 * IMPORTANT:
 * Once a lesson is completed, its completedAt
 * timestamp is preserved. Reading the lesson again
 * must NOT restart the 24-hour countdown.
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

  const existing =
    await getLessonProgress(
      userId,
      lessonId
    );

  const now = new Date();

  /*
   * Never reset completedAt once the lesson
   * has already been completed.
   */
  const completedAt =
    existing?.completedAt ??
    (completed ? now : null);

  return prisma.lessonProgress.upsert({
    where: {
      userId_lessonId: {
        userId,
        lessonId,
      },
    },

    update: {
      progress: safeProgress,
      completed:
        existing?.completed
          ? true
          : completed,
      completedAt,
      lastReadAt: now,
      lastScrollPosition,
    },

    create: {
      userId,
      lessonId,
      progress: safeProgress,
      completed,
      completedAt,
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