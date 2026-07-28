import { NextResponse } from "next/server";
import { supabaseAdmin as supabase } from "@/lib/supabaseAdmin";
import { requireAdmin } from "@/lib/auth";

export async function GET(request: Request) {
  const { response } = requireAdmin(request);
  if (response) return response;

  const { count: totalUsers } = await supabase
    .from("waitlist")
    .select("*", { count: "exact", head: true });

  const { count: verifiedUsers } = await supabase
    .from("waitlist")
    .select("*", { count: "exact", head: true })
    .eq("email_verified", true);

  const { data: referrals } = await supabase
    .from("waitlist")
    .select("referral_count");

  const totalReferrals =
    referrals?.reduce(
      (sum, user) => sum + (user.referral_count || 0),
      0
    ) || 0;

  const { count: announcements } = await supabase
    .from("announcements")
    .select("*", { count: "exact", head: true });

  return NextResponse.json({
    totalUsers: totalUsers || 0,
    verifiedUsers: verifiedUsers || 0,
    totalReferrals,
    announcements: announcements || 0,
  });
}
