import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { requireAdmin } from "@/lib/auth";

export async function GET(request: Request) {
  const { response } = requireAdmin(request);
  if (response) return response;

  const total = await prisma.user.count();
  const verified = await prisma.user.count({ where: { emailVerified: true } });
  const pending = await prisma.user.count({ where: { emailVerified: false } });
  const announcements = await prisma.announcement.count();

  return NextResponse.json({
    total,
    verified,
    pending,
    announcements,
  });
}
