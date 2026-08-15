// app/api/capital-building/route.ts
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getSessionFromRequest } from "@/lib/auth";

export async function GET(request: Request) {
  try {
    const session = getSessionFromRequest(request);
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const plan = await prisma.capitalBuildingPlan.findFirst({
      where: { traderId: session.id, status: { in: ["in_progress", "funded"] } },
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        requestedSize: true,
        dayCount: true,
        status: true,
        fundedAt: true,
      },
    });

    return NextResponse.json({ plan }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
