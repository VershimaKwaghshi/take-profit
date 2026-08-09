import { NextResponse } from "next/server";
import { supabaseAdmin as supabase } from "@/lib/supabaseAdmin";

export const revalidate = 86400;

export async function GET() {
  const { count } = await supabase
    .from("waitlist")
    .select("*", {
      count: "exact",
      head: true,
    });

  return NextResponse.json({
    users: count || 0,
  });
}
