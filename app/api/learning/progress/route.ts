import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      userId,
      lessonId,
      progress,
      completed,
      lastScrollPosition,
    } = body;

    const savedProgress =
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
          lastScrollPosition,
          lastReadAt: new Date(),
          completedAt: completed
            ? new Date()
            : null,
        },
        create: {
          userId,
          lessonId,
          progress,
          completed,
          lastScrollPosition,
          lastReadAt: new Date(),
          completedAt: completed
            ? new Date()
            : null,
        },
      });

    return NextResponse.json(savedProgress);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Unable to save progress.",
      },
      {
        status: 500,
      }
    );
  }
}