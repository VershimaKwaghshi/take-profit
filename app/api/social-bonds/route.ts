// app/api/social-bonds/route.ts
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getSessionFromRequest } from "@/lib/auth";

export async function GET(request: Request) {
  try {
    const session = getSessionFromRequest(request);
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const requests = await prisma.liquidityRequest.findMany({
      where: { traderId: session.id },
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        requestedAmount: true,
        status: true,
        lienExpiresAt: true,
      },
      take: 10,
    });

    return NextResponse.json({ requests }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
