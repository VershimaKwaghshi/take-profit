// app/api/referrals/marketplace/route.ts
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getSessionFromRequest } from "@/lib/auth";

export async function GET(request: Request) {
  try {
    const session = getSessionFromRequest(request);
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const listings = await prisma.referralMarketplaceListing.findMany({
      where: { status: "open" },
      include: {
        trader: {
          select: {
            referralCode: true,
            referrerLastActiveAt: true,
          },
        },
        bids: {
          where: { bidderId: session.id },
          select: { bidCutPct: true, status: true },
        },
      },
      orderBy: { createdAt: "desc" },
      take: 25,
    });

    const now = Date.now();

    const results = listings.map((listing) => {
      const daysInactive = Math.floor(
        (now - new Date(listing.trader.referrerLastActiveAt).getTime()) / (1000 * 60 * 60 * 24)
      );

      return {
        id: listing.id,
        referralCode: listing.trader.referralCode,
        inactiveSince: listing.trader.referrerLastActiveAt,
        daysInactive,
        myBid: listing.bids[0]?.bidCutPct ?? null,
      };
    });

    return NextResponse.json({ listings: results }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
