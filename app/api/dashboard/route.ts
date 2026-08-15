// app/api/dashboard/route.ts
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getSessionFromRequest } from "@/lib/auth";

export async function GET(request: Request) {
  try {
    const session = getSessionFromRequest(request);

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const user = await prisma.user.findUnique({
      where: { email: session.email },
      select: {
        firstName: true,
        lastName: true,
        email: true,
        country: true,
        referralCode: true,
        emailVerified: true,
        createdAt: true,
        isAdmin: true,
        referredById: true,
      },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json(
      {
        first_name: user.firstName,
        last_name: user.lastName,
        email: user.email,
        country: user.country,
        referral_code: user.referralCode,
        referral_count: 0,
        email_verified: user.emailVerified,
        created_at: user.createdAt,
        is_admin: user.isAdmin,
        has_referrer: !!user.referredById,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
