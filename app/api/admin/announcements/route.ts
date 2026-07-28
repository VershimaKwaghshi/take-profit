import { NextResponse } from "next/server";
import { supabaseAdmin as supabase } from "@/lib/supabaseAdmin";
import { requireAdmin } from "@/lib/auth";

export async function POST(request: Request) {
  const { response } = requireAdmin(request);
  if (response) return response;

  const body = await request.json();

  const { error } = await supabase
    .from("announcements")
    .insert({
      title: body.title,
      body: body.body,
    });

  if (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}
