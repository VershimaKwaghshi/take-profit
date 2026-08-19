// app/api/managers/apply/route.ts
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { requireActiveSubscription, requireReferral } from "@/lib/auth";

const REGIONS = ["EU-WEST", "NA-EAST", "APAC"];

export async function GET(request: Request) {
  const subCheck = await requireActiveSubscription(request);
  if (subCheck.response) return subCheck.response;

  const { session, response } = await requireReferral(request);
  if (response) return response;

  const existingProfile = await prisma.managerProfile.findUnique({
    where: { userId: session!.id },
  });

  const qualifyingAccount = await prisma.tradingAccount.findFirst({
    where: {
      ownerId: session!.id,
      managerAssignments: { some: { active: true } },
    },
    select: { id: true, size: true },
  });

  return NextResponse.json(
    {
      hasProfile: !!existingProfile,
      profile: existingProfile,
      qualifies: !!qualifyingAccount,
      qualifyingAccount,
    },
    { status: 200 }
  );
}

export async function POST(request: Request) {
  try {
    const subCheck = await requireActiveSubscription(request);
    if (subCheck.response) return subCheck.response;

    const { session, response } = await requireReferral(request);
    if (response) return response;

    const { alias, region } = await request.json();

    if (!alias || !region || !REGIONS.includes(region)) {
      return NextResponse.json({ error: "A valid alias and region are required." }, { status: 400 });
    }

    const existingProfile = await prisma.managerProfile.findUnique({
      where: { userId: session!.id },
    });

    if (existingProfile) {
      return NextResponse.json({ error: "You already have a manager profile." }, { status: 400 });
    }

    const qualifyingAccount = await prisma.tradingAccount.findFirst({
      where: {
        ownerId: session!.id,
        managerAssignments: { some: { active: true } },
      },
    });

    if (!qualifyingAccount) {
      return NextResponse.json(
        {
          error:
            "You need a trading account actively managed by another manager before you can apply.",
        },
        { status: 400 }
      );
    }

    const aliasTaken = await prisma.managerProfile.findUnique({ where: { alias } });
    if (aliasTaken) {
      return NextResponse.json({ error: "That alias is already in use." }, { status: 400 });
    }

    const profile = await prisma.managerProfile.create({
      data: {
        userId: session!.id,
        alias,
        region,
        qualificationMethod: "mutual_exposure",
        qualifiedAt: new Date(),
      },
    });

    await prisma.user.update({
      where: { id: session!.id },
      data: { role: "MANAGER" },
    });

    return NextResponse.json({ profile }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
