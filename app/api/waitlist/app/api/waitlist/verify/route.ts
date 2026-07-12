import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const { data: entry, error } = await supabase
      .from("waitlist")
      .select("*")
      .eq("email", data.email)
      .eq("verification_code", data.code)
      .single();

    if (error || !entry) {
      return NextResponse.json(
        { error: "Invalid verification code" },
        { status: 400 }
      );
    }

    if (
      new Date(entry.verification_expires_at).getTime() <
      Date.now()
    ) {
      return NextResponse.json(
        { error: "Verification code has expired" },
        { status: 400 }
      );
    }

    const { error: updateError } = await supabase
      .from("waitlist")
      .update({
        email_verified: true,
        verification_code: null,
        verification_expires_at: null,
        status: "verified",
      })
      .eq("email", data.email);

    if (updateError) {
      return NextResponse.json(
        { error: updateError.message },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error("Verification error:", error);

    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}