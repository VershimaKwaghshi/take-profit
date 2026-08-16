// app/api/dashboard-summary/route.ts
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getSessionFromRequest } from "@/lib/auth";

export async function GET(request: Request) {
  try {
    const session = getSessionFromRequest(request);
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const account = await prisma.tradingAccount.findFirst({
      where: { ownerId: session.id, status: "active" },
      orderBy: { createdAt: "desc" },
      select: { id: true, size: true, status: true },
    });

    if (!account) {
      return NextResponse.json({ account: null }, { status: 200 });
    }

    const assignment = await prisma.managerAssignment.findFirst({
      where: { tradingAccountId: account.id, active: true },
      select: {
        splitType: true,
        managerProfile: { select: { alias: true, region: true } },
      },
    });

    return NextResponse.json(
      {
        account: {
          balance: account.size,
          status: account.status,
          managerAlias: assignment?.managerProfile.alias ?? null,
          region: assignment?.managerProfile.region ?? null,
          splitType: assignment?.splitType ?? null,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
