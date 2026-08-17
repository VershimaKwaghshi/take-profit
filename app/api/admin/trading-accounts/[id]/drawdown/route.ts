// app/api/admin/trading-accounts/[id]/drawdown/route.ts
import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth";
import { reportDrawdown } from "@/lib/restitution";

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { response } = requireAdmin(request);
  if (response) return response;

  try {
    const { id } = await params;
    const { drawdownPct } = await request.json();

    if (drawdownPct === undefined || drawdownPct < 0 || drawdownPct > 100) {
      return NextResponse.json({ error: "A valid drawdown percent between 0 and 100 is required." }, { status: 400 });
    }

    const result = await reportDrawdown(id, drawdownPct);

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
