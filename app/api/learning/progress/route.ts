import { NextRequest, NextResponse } from "next/server";
import { requireSession } from "@/lib/auth";
import { updateLessonProgress } from "@/lib/learning";

/**
 * Saves reading progress (scroll position) for a lesson.
 *
 * This route intentionally never marks a lesson as
 * completed. Completion only happens by submitting
 * feedback, via /api/learning/feedback, which is what
 * starts the 24-hour unlock timer for the next lesson.
 */
export async function POST(req: NextRequest) {
  const { session, response } = requireSession(req);

  if (!session) {
    return response;
  }

  try {
    const body = await req.json();

    const { lessonId, progress, lastScrollPosition } = body;

    if (!lessonId) {
      return NextResponse.json(
        { error: "lessonId is required." },
        { status: 400 }
      );
    }

    const savedProgress = await updateLessonProgress({
      userId: session.id,
      lessonId,
      progress: progress ?? 0,
      completed: false,
      lastScrollPosition: lastScrollPosition ?? 0,
    });

    return NextResponse.json(savedProgress);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Unable to save progress." },
      { status: 500 }
    );
  }
}
