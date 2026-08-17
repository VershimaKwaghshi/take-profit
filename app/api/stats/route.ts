import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export const revalidate = 86400;

export async function GET() {
  const count = await prisma.user.count();

  return NextResponse.json({
    users: count,
  });
}
