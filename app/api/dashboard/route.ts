import { NextResponse } from "next/server";
import { supabaseAdmin as supabase } from "@/lib/supabaseAdmin";
import { requireSession } from "@/lib/auth";

export async function GET(request: Request) {
  const auth = requireSession(request);

  if (auth.response) {
    return auth.response;
  }

  const session = auth.session!;

  const { data, error } = await supabase
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
    .eq("id", session.id)
    .single();

  if (error) {
    return NextResponse.json(
      { error: "User not found." },
      { status: 404 }
    );
  }

  return NextResponse.json(data);
}