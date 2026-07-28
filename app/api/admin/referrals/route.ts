import { NextResponse } from "next/server";
import { supabaseAdmin as supabase } from "@/lib/supabaseAdmin";
import { requireAdmin } from "@/lib/auth";

export async function GET(request: Request) {
  const { response } = requireAdmin(request);
  if (response) return response;

  const { data, error } = await supabase
    .from("waitlist")
    .select("id,first_name,last_name,email,referral_code,referral_count")
    .order("referral_count", { ascending: false });

  if (error) {
    return NextResponse.json([], { status: 500 });
  }

  return NextResponse.json(data);
}
