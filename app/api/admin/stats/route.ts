import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function GET() {

  const { count: total } = await supabase
    .from("waitlist")
    .select("*", {
      count: "exact",
      head: true,
    });

  const { count: verified } = await supabase
    .from("waitlist")
    .select("*", {
      count: "exact",
      head: true,
    })
    .eq("email_verified", true);

  const { count: pending } = await supabase
    .from("waitlist")
    .select("*", {
      count: "exact",
      head: true,
    })
    .eq("email_verified", false);

  const { count: announcements } = await supabase
    .from("announcements")
    .select("*", {
      count: "exact",
      head: true,
    });

  return NextResponse.json({
    total: total || 0,
    verified: verified || 0,
    pending: pending || 0,
    announcements: announcements || 0,
  });

}
