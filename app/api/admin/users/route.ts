import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { requireAdmin } from "@/lib/auth";

export async function GET(request: Request) {
  const { response } = await requireAdmin(request);
  if (response) return response;

  const users = await prisma.user.findMany({
    orderBy: { createdAt: "desc" },
    include: { _count: { select: { referrals: true } } },
  });

  const shaped = users.map((u) => ({
    id: u.id,
    first_name: u.firstName,
    last_name: u.lastName,
    email: u.email,
    phone: u.phone,
    country: u.country,
    experience: u.experience,
    targeted_assets: u.targetedAssets,
    trading_frequency: u.tradingFrequency,
    email_verified: u.emailVerified,
    is_admin: u.isAdmin,
    referral_code: u.referralCode,
    referral_count: u._count.referrals,
    created_at: u.createdAt,
  }));

  return NextResponse.json(shaped);
}
