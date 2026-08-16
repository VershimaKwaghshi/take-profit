// app/api/managers/pool/route.ts
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
    });

    if (!account) {
      return NextResponse.json({ account: null, activeAssignment: null, pool: [] }, { status: 200 });
    }

    const activeAssignment = await prisma.managerAssignment.findFirst({
      where: { tradingAccountId: account.id, active: true },
      select: {
        id: true,
        splitType: true,
        assignedAt: true,
        managerProfile: { select: { alias: true, region: true } },
      },
    });

    const regions = ["EU-WEST", "NA-EAST", "APAC"];
    const pool = [];

    for (const region of regions) {
      const candidates = await prisma.managerProfile.findMany({
        where: { region },
        select: { id: true, alias: true, region: true },
      });
      if (candidates.length > 0) {
        pool.push(candidates[Math.floor(Math.random() * candidates.length)]);
      }
    }

    return NextResponse.json(
      { account: { id: account.id }, activeAssignment, pool },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
