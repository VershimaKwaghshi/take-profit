import { NextResponse } from "next/server";
import { supabaseAdmin as supabase } from "@/lib/supabaseAdmin";

async function getDashboardUser(email: string | null) {
  if (!email) {
    return NextResponse.json(
      { error: "Email is required" },
      { status: 400 }
    );
  }

  // Get logged-in user
  const { data: user, error } = await supabase
    .from("waitlist")
    .select(`
      first_name,
      last_name,
      email,
      country,
      referral_code,
      referral_count,
      email_verified,
      created_at
    `)
    .eq("email", email)
    .single();

  if (error || !user) {
    return NextResponse.json(
      { error: "User not found" },
      { status: 404 }
    );
  }

  // Count verified referrals
  const { count } = await supabase
    .from("waitlist")
    .select("*", {
      count: "exact",
      head: true,
    })
    .eq("referred_by", user.referral_code)
    .eq("email_verified", true);

  return NextResponse.json({
    ...user,
    verified_referrals: count ?? 0,
  });
}

// GET
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  return getDashboardUser(
    searchParams.get("email")
  );
}

// POST
export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    return getDashboardUser(email);
  } catch {
    return NextResponse.json(
      {
        error: "Server error",
      },
      {
        status: 500,
      }
    );
  }
}
