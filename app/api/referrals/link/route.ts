// app/api/referrals/link/route.ts
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getSessionFromRequest } from "@/lib/auth";

export async function POST(request: Request) {
  try {
    const session = getSessionFromRequest(request);
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { referralCode } = await request.json();
    if (!referralCode) {
      return NextResponse.json({ error: "A referral code is required." }, { status: 400 });
    }

    const currentUser = await prisma.user.findUnique({ where: { id: session.id } });
    if (currentUser?.referredById) {
      return NextResponse.json({ error: "A referral is already linked to your account." }, { status: 400 });
    }

    const referrer = await prisma.user.findUnique({
      where: { referralCode: referralCode.toUpperCase() },
    });

    if (!referrer) {
      return NextResponse.json({ error: "That referral code is not valid." }, { status: 400 });
    }

    if (referrer.id === session.id) {
      return NextResponse.json({ error: "You cannot refer yourself." }, { status: 400 });
    }

    await prisma.user.update({
      where: { id: session.id },
      data: { referredById: referrer.id },
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
