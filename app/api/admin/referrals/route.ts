import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { requireAdmin } from "@/lib/auth";

export async function GET(request: Request) {
  const { response } = await requireAdmin(request);
  if (response) return response;

  const users = await prisma.user.findMany({
    include: { _count: { select: { referrals: true } } },
  });

  const shaped = users
    .map((u) => ({
      id: u.id,
      first_name: u.firstName,
      last_name: u.lastName,
      email: u.email,
      referral_code: u.referralCode,
      referral_count: u._count.referrals,
    }))
    .sort((a, b) => b.referral_count - a.referral_count);

  return NextResponse.json(shaped);
}
