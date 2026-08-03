import { NextResponse } from "next/server";
import { supabaseAdmin as supabase } from "@/lib/supabaseAdmin";
import { createSessionToken } from "@/lib/session"; // Use your actual session helper exported by lib/session.ts

export async function GET() {
  try {
    // Replace with your actual session retrieval logic from lib/session.ts
    const session = await createSessionToken(); 

    if (!session || !session.email) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

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
