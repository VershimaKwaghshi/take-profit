// app/api/referrals/bid/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSessionFromRequest } from "@/lib/auth";

export async function POST(request: Request) {
  try {
    const session = getSessionFromRequest(request);
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const listingId: string = body.listingId;
    const bidCutPct: number = body.bidCutPct;

    if (!listingId || bidCutPct === undefined || bidCutPct < 0 || bidCutPct > 5) {
      return NextResponse.json({ error: "Invalid bid" }, { status: 400 });
    }

    const listing = await prisma.referralMarketplaceListing.findUnique({
      where: { id: listingId },
    });

    if (!listing || listing.status !== "open") {
      return NextResponse.json({ error: "Listing not open" }, { status: 400 });
    }

    const bid = await prisma.referralBid.upsert({
      where: {
        listingId_bidderId: {
          listingId,
          bidderId: session.id,
        },
      },
      update: { bidCutPct, status: "active" },
      create: {
        listingId,
        bidderId: session.id,
        bidCutPct,
        status: "active",
      },
    });

    return NextResponse.json({ bid }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
