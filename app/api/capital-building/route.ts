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
      where: { traderId: session.id, status: { in: ["in_progress", "funded", "completed"] } },
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        requestedSize: true,
        dayCount: true,
        status: true,
        fundedAt: true,
      },
    });

    if (!plan) {
      return NextResponse.json({ plan: null, payments: [] }, { status: 200 });
    }

    const payments = await prisma.capitalBuildingPayment.findMany({
      where: { planId: plan.id },
      orderBy: { dayNumber: "desc" },
      take: 5,
      select: {
        dayNumber: true,
        amount: true,
        paidAt: true,
      },
    });

    return NextResponse.json({ plan, payments }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
