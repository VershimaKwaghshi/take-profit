// app/api/social-bonds/fund/route.ts
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getSessionFromRequest } from "@/lib/auth";

export async function POST(request: Request) {
  try {
    const session = getSessionFromRequest(request);
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { bondId, amount } = await request.json();

    if (!bondId || !amount || amount <= 0) {
      return NextResponse.json({ error: "Invalid request." }, { status: 400 });
    }

    const bond = await prisma.socialBond.findUnique({ where: { id: bondId } });

    if (!bond || bond.status !== "eligible") {
      return NextResponse.json({ error: "This bond is not open for funding." }, { status: 400 });
    }

    const investment = await prisma.socialBondInvestment.create({
      data: {
        bondId,
        investorId: session.id,
        amountInvested: amount,
      },
    });

    await prisma.socialBond.update({
      where: { id: bondId },
      data: { status: "funded" },
    });

    return NextResponse.json({ investment }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
