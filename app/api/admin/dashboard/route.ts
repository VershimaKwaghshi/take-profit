import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { requireAdmin } from "@/lib/auth";

export async function GET(request: Request) {
  const { response } = requireAdmin(request);
  if (response) return response;

  const totalUsers = await prisma.user.count();
  const verifiedUsers = await prisma.user.count({ where: { emailVerified: true } });
  const totalReferrals = await prisma.user.count({ where: { referredById: { not: null } } });
  const announcements = await prisma.announcement.count();

  return NextResponse.json({
    totalUsers,
    verifiedUsers,
    totalReferrals,
    announcements,
  });
}
