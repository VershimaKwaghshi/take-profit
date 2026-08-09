import { NextResponse } from "next/server";
import { supabaseAdmin as supabase } from "@/lib/supabaseAdmin";
import { requireAdmin } from "@/lib/auth";

export async function GET(request: Request) {
  const { response } = requireAdmin(request);
  if (response) return response;

  const { count: total } = await supabase
    .from("waitlist")
    .select("*", { count: "exact", head: true });

  const { count: verified } = await supabase
    .from("waitlist")
    .select("*", { count: "exact", head: true })
    .eq("email_verified", true);

  const { count: pending } = await supabase
    .from("waitlist")
    .select("*", { count: "exact", head: true })
    .eq("email_verified", false);

  const { count: announcements } = await supabase
    .from("announcements")
    .select("*", { count: "exact", head: true });

  return NextResponse.json({
    total: total || 0,
    verified: verified || 0,
    pending: pending || 0,
    announcements: announcements || 0,
  });
}
