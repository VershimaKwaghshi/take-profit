import { NextResponse } from "next/server";
import { supabaseAdmin as supabase } from "@/lib/supabaseAdmin";

const DASHBOARD_FIELDS =
  "first_name, last_name, email, country, referral_code, referral_count, email_verified, created_at";

async function getDashboardUser(email: string | null) {
  if (!email) {
    return NextResponse.json(
      { error: "Email is required" },
      { status: 400 }
    );
  }

  const { data, error } = await supabase
    .from("waitlist")
    .select(DASHBOARD_FIELDS)
    .eq("email", email)
    .single();

  if (error || !data) {
    return NextResponse.json(
      { error: "User not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(data);
}

// GET /api/dashboard?email=someone@example.com
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  return getDashboardUser(searchParams.get("email"));
}

// POST { email } — kept for backward compatibility with any existing callers
export async function POST(request: Request) {
  try {
    const { email } = await request.json();
    return getDashboardUser(email ?? null);
  } catch {
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}
