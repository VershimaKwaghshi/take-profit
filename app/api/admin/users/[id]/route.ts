import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { requireAdmin } from "@/lib/auth";

const FIELD_MAP: Record<string, string> = {
  first_name: "firstName",
  last_name: "lastName",
  email: "email",
  phone: "phone",
  country: "country",
  experience: "experience",
  targeted_assets: "targetedAssets",
  trading_frequency: "tradingFrequency",
  email_verified: "emailVerified",
  is_admin: "isAdmin",
};

function toPrismaUpdate(body: Record<string, unknown>) {
  const result: Record<string, unknown> = {};
  for (const [snakeKey, camelKey] of Object.entries(FIELD_MAP)) {
    if (snakeKey in body) {
      result[camelKey] = body[snakeKey];
    }
  }
  return result;
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { response } = requireAdmin(request);
  if (response) return response;

  const { id } = await params;

  const user = await prisma.user.findUnique({
    where: { id },
    include: { _count: { select: { referrals: true } } },
  });

  if (!user) {
    return NextResponse.json({ error: "User not found." }, { status: 404 });
  }

  return NextResponse.json({
    id: user.id,
    first_name: user.firstName,
    last_name: user.lastName,
    email: user.email,
    phone: user.phone,
    country: user.country,
    experience: user.experience,
    targeted_assets: user.targetedAssets,
    trading_frequency: user.tradingFrequency,
    email_verified: user.emailVerified,
    is_admin: user.isAdmin,
    referral_code: user.referralCode,
    referral_count: user._count.referrals,
    created_at: user.createdAt,
  });
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { response } = requireAdmin(request);
  if (response) return response;

  const { id } = await params;
  const body = await request.json();
  const updates = toPrismaUpdate(body);

  if (Object.keys(updates).length === 0) {
    return NextResponse.json({ error: "No editable fields provided." }, { status: 400 });
  }

  try {
    const user = await prisma.user.update({ where: { id }, data: updates });
    return NextResponse.json(user);
  } catch {
    return NextResponse.json({ error: "Update failed." }, { status: 500 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { response } = requireAdmin(request);
  if (response) return response;

  const { id } = await params;

  try {
    await prisma.user.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Delete failed." }, { status: 500 });
  }
}
