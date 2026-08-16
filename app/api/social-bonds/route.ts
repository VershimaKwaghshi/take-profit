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

    const bonds = await prisma.socialBond.findMany({
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        bondCode: true,
        location: true,
        bondType: true,
        targetReturnPct: true,
        status: true,
      },
    });

    const myInvestments = await prisma.socialBondInvestment.findMany({
      where: { investorId: session.id },
      select: { amountInvested: true, bond: { select: { targetReturnPct: true } } },
    });

    const totalValue = myInvestments.reduce((sum, i) => sum + Number(i.amountInvested), 0);
    const weightedYield =
      totalValue > 0
        ? myInvestments.reduce(
            (sum, i) => sum + Number(i.amountInvested) * Number(i.bond.targetReturnPct),
            0
          ) / totalValue
        : 0;

    return NextResponse.json(
      {
        bonds,
        summary: {
          totalBondsFunded: myInvestments.length,
          totalValue,
          weightedYield,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
