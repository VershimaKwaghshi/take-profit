import prisma from "./prisma";

/**
 * Number of hours before the next lesson becomes available.
 */
const LESSON_UNLOCK_DELAY_HOURS = 24;

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
 * Calculate the time when the next lesson
 * should become available.
 */
function getUnlockTime(
  completedAt: Date
) {
  return new Date(
    completedAt.getTime() +
      LESSON_UNLOCK_DELAY_HOURS *
        60 *
        60 *
        1000
  );
}

/**
 * Save or update a user's lesson reading progress.
 *
 * Completing a lesson starts the 24-hour
 * countdown for the next lesson.
 *
 * IMPORTANT:
 *
 * Once completedAt and unlockAt have been
 * created, they are NEVER reset by simply
 * opening or reading the lesson again.
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
   * If this lesson has already been completed,
   * never restart the completion timer.
   */
  if (
    existing?.completed &&
    existing.completedAt
  ) {
    return prisma.lessonProgress.update({
      where: {
        userId_lessonId: {
          userId,
          lessonId,
        },
      },

      data: {
        progress: Math.max(
          existing.progress,
          safeProgress
        ),

        completed: true,

        completedAt:
          existing.completedAt,

        unlockAt:
          existing.unlockAt,

        lastReadAt: now,

        lastScrollPosition,
      },
    });
  }

  /*
   * The lesson is being completed for
   * the first time.
   */
  if (completed) {
    const completedAt = now;

    const unlockAt =
      getUnlockTime(completedAt);

    return prisma.lessonProgress.upsert({
      where: {
        userId_lessonId: {
          userId,
          lessonId,
        },
      },

      update: {
        progress: 100,
        completed: true,
        completedAt,
        unlockAt,
        lastReadAt: now,
        lastScrollPosition,
      },

      create: {
        userId,
        lessonId,
        progress: 100,
        completed: true,
        completedAt,
        unlockAt,
        lastReadAt: now,
        lastScrollPosition,
      },
    });
  }

  /*
   * Normal reading progress.
   */
  return prisma.lessonProgress.upsert({
    where: {
      userId_lessonId: {
        userId,
        lessonId,
      },
    },

    update: {
      progress: safeProgress,
      lastReadAt: now,
      lastScrollPosition,
    },

    create: {
      userId,
      lessonId,
      progress: safeProgress,
      completed: false,
      completedAt: null,
      unlockAt: null,
      lastReadAt: now,
      lastScrollPosition,
    },
  });
}

/**
 * Get access information for one lesson.
 *
 * Rules:
 *
 * Lesson 01:
 *     Always unlocked.
 *
 * Lesson 02+:
 *     Previous lesson must be completed.
 *     The previous lesson's unlockAt must have arrived.
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

  const currentProgress =
    await getLessonProgress(
      userId,
      lesson.id
    );

  const completed =
    currentProgress?.completed ?? false;

  /*
   * Lesson 01 is always available.
   */
  if (lesson.lessonNumber === 1) {
    return {
      unlocked: true,
      completed,
      availableAt: null,
    };
  }

  /*
   * Find the previous lesson.
   */
  const previousLesson =
    lessons.find(
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

  /*
   * Get the user's progress for
   * the previous lesson.
   */
  const previousProgress =
    await getLessonProgress(
      userId,
      previousLesson.id
    );

  /*
   * Previous lesson has not been completed.
   */
  if (
    !previousProgress?.completed
  ) {
    return {
      unlocked: false,
      completed,
      availableAt: null,
    };
  }

  /*
   * The previous lesson should have an
   * unlockAt because completion creates it.
   */
  if (!previousProgress.unlockAt) {
    return {
      unlocked: false,
      completed,
      availableAt: null,
    };
  }

  const now = new Date();

  const unlocked =
    now >= previousProgress.unlockAt;

  return {
    unlocked,
    completed,
    availableAt:
      previousProgress.unlockAt,
  };
}

/**
 * Get access information for every lesson
 * for a specific user.
 *
 * This is what the Learning Center page
 * will use to determine:
 *
 * - completed
 * - unlocked
 * - locked
 * - available time
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

  const now = new Date();

  return lessons.map(
    (lesson, index) => {
      const lessonProgress =
        progressMap.get(lesson.id);

      const completed =
        lessonProgress?.completed ??
        false;

      /*
       * Lesson 01 is always unlocked.
       */
      if (index === 0) {
        return {
          lesson,
          completed,
          unlocked: true,
          availableAt: null,
        };
      }

      /*
       * Find previous lesson.
       */
      const previousLesson =
        lessons[index - 1];

      const previousProgress =
        progressMap.get(
          previousLesson.id
        );

      /*
       * Previous lesson hasn't been
       * completed yet.
       */
      if (
        !previousProgress?.completed
      ) {
        return {
          lesson,
          completed,
          unlocked: false,
          availableAt: null,
        };
      }

      /*
       * Previous lesson was completed
       * but somehow has no unlock time.
       */
      if (
        !previousProgress.unlockAt
      ) {
        return {
          lesson,
          completed,
          unlocked: false,
          availableAt: null,
        };
      }

      const unlocked =
        now >=
        previousProgress.unlockAt;

      return {
        lesson,
        completed,
        unlocked,
        availableAt:
          previousProgress.unlockAt,
      };
    }
  );
}

/**
 * Save lesson feedback AND complete
 * the lesson.
 *
 * This is the important part of the
 * learning progression system.
 *
 * When the user submits feedback:
 *
 * 1. Feedback is saved.
 * 2. Lesson becomes completed.
 * 3. completedAt is recorded.
 * 4. unlockAt is set to 24 hours later.
 * 5. The next lesson becomes available
 *    when that unlockAt time arrives.
 */
export async function createLessonFeedback({
  userId,
  lessonId,
  clarityRating,
  usefulnessRating,
  comment,
}: {
  userId: string;
  lessonId: string;
  clarityRating: number;
  usefulnessRating: number;
  comment?: string;
}) {
  /*
   * Validate ratings.
   */
  if (
    clarityRating < 1 ||
    clarityRating > 5
  ) {
    throw new Error(
      "Clarity rating must be between 1 and 5."
    );
  }

  if (
    usefulnessRating < 1 ||
    usefulnessRating > 5
  ) {
    throw new Error(
      "Usefulness rating must be between 1 and 5."
    );
  }

  const trimmedComment =
    comment?.trim() || null;

  return prisma.$transaction(
    async (tx) => {
      /*
       * Check whether feedback has already
       * been submitted.
       */
      const existingFeedback =
        await tx.lessonFeedback.findUnique({
          where: {
            userId_lessonId: {
              userId,
              lessonId,
            },
          },
        });

      if (existingFeedback) {
        throw new Error(
          "Feedback has already been submitted for this lesson."
        );
      }

      /*
       * Get existing progress.
       */
      const existingProgress =
        await tx.lessonProgress.findUnique({
          where: {
            userId_lessonId: {
              userId,
              lessonId,
            },
          },
        });

      const now = new Date();

      /*
       * If somehow the lesson was already
       * completed, preserve its original
       * completion time.
       *
       * Normally this will not happen because
       * feedback can only be submitted once.
       */
      const completedAt =
        existingProgress?.completedAt ??
        now;

      const unlockAt =
        existingProgress?.unlockAt ??
        getUnlockTime(completedAt);

      /*
       * Save feedback.
       */
      const feedback =
        await tx.lessonFeedback.create({
          data: {
            userId,
            lessonId,
            clarityRating,
            usefulnessRating,
            comment: trimmedComment,
          },
        });

      /*
       * Mark lesson as completed.
       *
       * Submitting feedback is the event
       * that completes the lesson.
       */
      const lessonProgress =
        await tx.lessonProgress.upsert({
          where: {
            userId_lessonId: {
              userId,
              lessonId,
            },
          },

          update: {
            progress: 100,
            completed: true,
            completedAt,
            unlockAt,
            lastReadAt: now,
          },

          create: {
            userId,
            lessonId,
            progress: 100,
            completed: true,
            completedAt,
            unlockAt,
            lastReadAt: now,
            lastScrollPosition: 0,
          },
        });

      return {
        feedback,
        lessonProgress,
      };
    }
  );
}

/**
 * Get feedback submitted by a user
 * for a specific lesson.
 */
export async function getLessonFeedback(
  userId: string,
  lessonId: string
) {
  return prisma.lessonFeedback.findUnique({
    where: {
      userId_lessonId: {
        userId,
        lessonId,
      },
    },
  });
}