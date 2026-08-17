// app/api/capital-building/start/route.ts
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { requireReferral } from "@/lib/auth";

export async function POST(request: Request) {
  try {
    const { session, response } = await requireReferral(request);
    if (response) return response;

    const { requestedSize } = await request.json();

    if (!requestedSize || Number(requestedSize) <= 0) {
      return NextResponse.json({ error: "A valid target account size is required." }, { status: 400 });
    }

    const existing = await prisma.capitalBuildingPlan.findFirst({
      where: { traderId: session!.id, status: { in: ["in_progress", "funded"] } },
    });

    if (existing) {
      return NextResponse.json({ error: "You already have an active capital building plan." }, { status: 400 });
    }

    const plan = await prisma.capitalBuildingPlan.create({
      data: {
        traderId: session!.id,
        requestedSize,
        dayCount: 0,
        status: "in_progress",
      },
    });

    return NextResponse.json({ plan }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
