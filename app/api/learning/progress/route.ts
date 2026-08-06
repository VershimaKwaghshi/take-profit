import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      userId,
      lessonId,
      progress,
      completed,
      lastScrollPosition,
    } = body;

    const lessonProgress =
      await prisma.lessonProgress.upsert({
        where: {
          userId_lessonId: {
            userId,
            lessonId,
          },
        },
        update: {
          progress,
          completed,
          completedAt: completed ? new Date() : null,
          unlockAt: completed
            ? new Date(Date.now() + 24 * 60 * 60 * 1000)
            : null,
          lastReadAt: new Date(),
          lastScrollPosition,
        },
        create: {
          userId,
          lessonId,
          progress,
          completed,
          completedAt: completed ? new Date() : null,
          unlockAt: completed
            ? new Date(Date.now() + 24 * 60 * 60 * 1000)
            : null,
          lastReadAt: new Date(),
          lastScrollPosition,
        },
      });

    return NextResponse.json({
      success: true,
      progress: lessonProgress,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to save progress.",
      },
      {
        status: 500,
      }
    );
  }
}
