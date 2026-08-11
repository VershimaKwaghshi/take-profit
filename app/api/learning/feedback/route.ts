import { NextRequest, NextResponse } from "next/server";
import { requireSession } from "@/lib/auth";
import { createLessonFeedback } from "@/lib/learning";

export async function POST(req: NextRequest) {
  const { session, response } = requireSession(req);

  if (!session) {
    return response;
  }

  try {
    const body = await req.json();

    const { lessonId, clarityRating, usefulnessRating, comment } = body;

    if (!lessonId) {
      return NextResponse.json(
        { error: "lessonId is required." },
        { status: 400 }
      );
    }

    const result = await createLessonFeedback({
      userId: String(session.id),
      lessonId,
      clarityRating,
      usefulnessRating,
      comment,
    });

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Unable to submit feedback.";

    const alreadySubmitted = message.includes(
      "already been submitted"
    );

    return NextResponse.json(
      { error: message },
      { status: alreadySubmitted ? 409 : 500 }
    );
  }
}
