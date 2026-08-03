import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { supabaseAdmin as supabase } from "@/lib/supabaseAdmin";

export async function GET() {
  try {
    const cookieStore = await cookies();
    const sessionToken = cookieStore.get("session")?.value;

    if (!sessionToken) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    // Decode or verify your session token here if needed.
    // Replace `sessionToken` with the authenticated email from your session context.
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
      .eq("email", sessionToken) 
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
