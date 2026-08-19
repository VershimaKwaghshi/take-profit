// app/api/admin/restitution/route.ts
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { requireAdmin } from "@/lib/auth";

export async function GET(request: Request) {
  const { response } = requireAdmin(request);
  if (response) return response;

  const events = await prisma.restitutionEvent.findMany({
    where: { status: "queued" },
    orderBy: { queuePosition: "asc" },
    include: {
      tradingAccount: {
        select: {
          id: true,
          size: true,
          owner: { select: { firstName: true, lastName: true, email: true } },
        },
      },
    },
  });

  return NextResponse.json({ events }, { status: 200 });
}
