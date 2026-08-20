// app/api/admin/restitution/[id]/restore/route.ts
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { requireAdmin } from "@/lib/auth";

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { response } = await requireAdmin(request);
  if (response) return response;

  try {
    const { id } = await params;

    const event = await prisma.restitutionEvent.findUnique({ where: { id } });

    if (!event || event.status !== "queued") {
      return NextResponse.json({ error: "This event is not queued." }, { status: 400 });
    }

    const earliest = await prisma.restitutionEvent.findFirst({
      where: { status: "queued" },
      orderBy: { queuePosition: "asc" },
    });

    if (earliest?.id !== event.id) {
      return NextResponse.json(
        { error: "Only the earliest queued event can be restored, first come first served." },
        { status: 400 }
      );
    }

    const result = await prisma.$transaction(async (tx) => {
      const restoredEvent = await tx.restitutionEvent.update({
        where: { id: event.id },
        data: { status: "restored", restoredAt: new Date() },
      });

      await tx.tradingAccount.update({
        where: { id: event.tradingAccountId },
        data: { status: "active", drawdownPct: 0 },
      });

      await tx.restitutionEvent.updateMany({
        where: {
          status: "queued",
          queuePosition: { gt: event.queuePosition ?? 0 },
        },
        data: { queuePosition: { decrement: 1 } },
      });

      return restoredEvent;
    });

    return NextResponse.json({ event: result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
