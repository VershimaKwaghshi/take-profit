import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const email = searchParams.get("email");

  if (!email) {
    return NextResponse.json(
      { error: "Email required." },
      { status: 400 }
    );
  }

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
    .eq("email", email)
    .single();

  if (error) {
    return NextResponse.json(
      { error: "User not found." },
      { status: 404 }
    );
  }

  return NextResponse.json(data);
}