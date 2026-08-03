import { NextResponse } from "next/server";
import { supabaseAdmin as supabase } from "@/lib/supabaseAdmin";
import { getSession } from "@/lib/session"; // Or your session reader

export async function GET() {
  try {
    const session = await getSession();

    if (!session || !session.email) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    // Explicitly query referral_code and referral_count
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
        created_at,
        is_admin
      `)
      .eq("email", session.email)
      .maybeSingle();

    if (error || !user) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
