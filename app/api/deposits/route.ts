// app/api/deposits/route.ts
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getSessionFromRequest } from "@/lib/auth";

export async function POST(request: Request) {
  try {
    const session = getSessionFromRequest(request);
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { brokerId, size } = await request.json();

    if (!brokerId || !size || Number(size) <= 0) {
      return NextResponse.json({ error: "A broker and a valid account size are required." }, { status: 400 });
    }

    const broker = await prisma.broker.findUnique({ where: { id: brokerId } });
    if (!broker) {
      return NextResponse.json({ error: "That broker was not found." }, { status: 400 });
    }

    const account = await prisma.tradingAccount.create({
      data: {
        ownerId: session.id,
        brokerId,
        accountType: "self_deposit",
        size,
        status: "active",
      },
    });

    return NextResponse.json({ account }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
