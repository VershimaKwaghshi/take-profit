// app/api/restitution/route.ts
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getSessionFromRequest } from "@/lib/auth";

export async function GET(request: Request) {
  try {
    const session = getSessionFromRequest(request);
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const events = await prisma.restitutionEvent.findMany({
      where: {
        tradingAccount: { ownerId: session.id },
      },
      orderBy: { triggeredAt: "desc" },
      select: {
        id: true,
        status: true,
        queuePosition: true,
        drawdownPctAtTrigger: true,
        triggeredAt: true,
        restoredAt: true,
      },
      take: 10,
    });

    return NextResponse.json({ events }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
