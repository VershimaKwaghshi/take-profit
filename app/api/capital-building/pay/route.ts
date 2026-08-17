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

    const payment = await prisma.capitalBuildingPayment.create({
      data: {
        planId: plan.id,
        dayNumber: nextDayNumber,
        amount: totalAmount,
        creditRepaymentAmount,
        serviceFeeAmount,
      },
    });

    const updatedPlan = await prisma.capitalBuildingPlan.update({
      where: { id: plan.id },
      data: {
        dayCount: nextDayNumber,
        status: nextDayNumber >= 100 ? "completed" : "in_progress",
        completedAt: nextDayNumber >= 100 ? new Date() : null,
      },
    });

    return NextResponse.json({ payment, plan: updatedPlan }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
