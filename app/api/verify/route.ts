import { NextResponse } from "next/server";
import { supabaseAdmin as supabase } from "@/lib/supabaseAdmin";

export async function POST(request: Request) {
  try {
    const { email, code } = await request.json();

    const { data, error } = await supabase
      .from("waitlist")
      .select("*")
      .eq("email", email)
      .eq("verification_code", code)
      .single();

    if (error || !data) {
      return NextResponse.json(
        { error: "Invalid verification code" },
        { status: 400 }
      );
    }

    if (
      !data.verification_expires_at ||
      new Date(data.verification_expires_at).getTime() < Date.now()
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
        status: "verified",
        verification_code: null,
        verification_expires_at: null,
      })
      .eq("email", email);

    if (updateError) {
      return NextResponse.json(
        { error: updateError.message },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      email,
      redirect: `/dashboard?email=${encodeURIComponent(email)}`,
    });

  } catch (error) {
    console.error("Verification error:", error);

    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
