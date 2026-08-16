// app/api/managers/select/route.ts
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { requireReferral } from "@/lib/auth";

export async function POST(request: Request) {
  try {
    const { session, response } = await requireReferral(request);
    if (response) return response;

    const { managerProfileId } = await request.json();
    if (!managerProfileId) {
      return NextResponse.json({ error: "A manager must be selected." }, { status: 400 });
    }

    const account = await prisma.tradingAccount.findFirst({
      where: { ownerId: session!.id, status: "active" },
      orderBy: { createdAt: "desc" },
    });

    if (!account) {
      return NextResponse.json({ error: "No active trading account found." }, { status: 400 });
    }

    const existing = await prisma.managerAssignment.findFirst({
      where: { tradingAccountId: account.id, active: true },
    });

    if (existing) {
      await prisma.managerAssignment.update({
        where: { id: existing.id },
        data: { active: false, endedAt: new Date(), endReason: "manual_switch" },
      });
    }

    const assignment = await prisma.managerAssignment.create({
      data: {
        tradingAccountId: account.id,
        managerProfileId,
        splitType: "two_way",
        active: true,
      },
    });

    return NextResponse.json({ assignment }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
