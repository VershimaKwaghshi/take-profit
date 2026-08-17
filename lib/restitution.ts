// lib/restitution.ts
import prisma from "./prisma";

const DRAWDOWN_THRESHOLD = 50;

export async function reportDrawdown(tradingAccountId: string, drawdownPct: number) {
  return prisma.$transaction(async (tx) => {
    const account = await tx.tradingAccount.update({
      where: { id: tradingAccountId },
      data: { drawdownPct },
    });

    if (drawdownPct < DRAWDOWN_THRESHOLD) {
      return { account, restitutionEvent: null, triggered: false };
    }

    const activeAssignment = await tx.managerAssignment.findFirst({
      where: { tradingAccountId, active: true },
    });

    if (!activeAssignment) {
      return { account, restitutionEvent: null, triggered: false };
    }

    await tx.managerAssignment.update({
      where: { id: activeAssignment.id },
      data: { active: false, endedAt: new Date(), endReason: "drawdown" },
    });

    await tx.tradingAccount.update({
      where: { id: tradingAccountId },
      data: { status: "restitution" },
    });

    const queuedCount = await tx.restitutionEvent.count({
      where: { status: "queued" },
    });

    const restitutionEvent = await tx.restitutionEvent.create({
      data: {
        tradingAccountId,
        managerAssignmentId: activeAssignment.id,
        drawdownPctAtTrigger: drawdownPct,
        queuePosition: queuedCount + 1,
        status: "queued",
      },
    });

    return { account, restitutionEvent, triggered: true };
  });
}
