// app/api/capital-building/pay/route.ts
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { requireActiveSubscription, requireReferral } from "@/lib/auth";

export async function POST(request: Request) {
  try {
    const subCheck = await requireActiveSubscription(request);
    if (subCheck.response) return subCheck.response;

    const { session, response } = await requireReferral(request);
    if (response) return response;

    const plan = await prisma.capitalBuildingPlan.findFirst({
      where: { traderId: session!.id, status: "in_progress" },
    });

    if (!plan) {
      return NextResponse.json({ error: "No active capital building plan." }, { status: 400 });
    }

    if (plan.dayCount >= 100) {
      return NextResponse.json({ error: "This schedule is already complete." }, { status: 400 });
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const lastPayment = await prisma.capitalBuildingPayment.findFirst({
      where: { planId: plan.id },
      orderBy: { dayNumber: "desc" },
    });

    if (lastPayment) {
      const lastPaidDay = new Date(lastPayment.paidAt);
      lastPaidDay.setHours(0, 0, 0, 0);
      if (lastPaidDay.getTime() === today.getTime()) {
        return NextResponse.json({ error: "Today's payment has already been made." }, { status: 400 });
      }
    }

    const nextDayNumber = plan.dayCount + 1;
    const target = Number(plan.requestedSize);
    const creditRepaymentAmount = Math.round(target * 0.01 * 100) / 100;
    const serviceFeeAmount = Math.round(target * 0.001 * 100) / 100;
    const totalAmount = creditRepaymentAmount + serviceFeeAmount;
    const isCompleting = nextDayNumber >= 100;

    const result = await prisma.$transaction(async (tx) => {
      const payment = await tx.capitalBuildingPayment.create({
        data: {
          planId: plan.id,
          dayNumber: nextDayNumber,
          amount: totalAmount,
          creditRepaymentAmount,
          serviceFeeAmount,
        },
      });

      let tradingAccount = null;

      if (isCompleting) {
        tradingAccount = await tx.tradingAccount.create({
          data: {
            ownerId: session!.id,
            accountType: "capital_building",
            size: plan.requestedSize,
            status: "active",
            capitalLocked: false,
          },
        });
      }

      const updatedPlan = await tx.capitalBuildingPlan.update({
        where: { id: plan.id },
        data: {
          dayCount: nextDayNumber,
          status: isCompleting ? "completed" : "in_progress",
          completedAt: isCompleting ? new Date() : null,
          tradingAccountId: tradingAccount?.id ?? null,
        },
      });

      return { payment, plan: updatedPlan, tradingAccount };
    });

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
