import { NextResponse } from "next/server";
import { supabaseAdmin as supabase } from "@/lib/supabaseAdmin";
import { createSessionToken } from "@/lib/session";
import { SESSION_COOKIE_NAME } from "@/lib/auth";
import { rateLimit } from "@/lib/rateLimit";

export async function POST(request: Request) {
  try {
    const { email, code } = await request.json();

    if (!email || !code) {
      return NextResponse.json(
        { error: "Email and verification code are required." },
        { status: 400 }
      );
    }

    // 1. Await rate limit evaluation
    const limit = await rateLimit(`verify:${email}`, 5, 15 * 60 * 1000);

    // 2. Check the .success boolean property
    if (!limit.success) {
      return NextResponse.json(
        {
          error: "Too many verification attempts. Please wait a few minutes and try again.",
        },
        { status: 429 }
      );
    }

    // Verify code in database
    const { data, error } = await supabase
      .from("verification_codes")
      .select("*")
      .eq("email", email)
      .eq("code", code)
      .maybeSingle();

    if (error || !data) {
      return NextResponse.json(
        { error: "Invalid or expired verification code." },
        { status: 400 }
      );
    }

    // Delete verification code after successful usage
    await supabase.from("verification_codes").delete().eq("email", email);

    // Create session token and set HTTP-only cookie
    const token = await createSessionToken({ email });
    const response = NextResponse.json(
      { success: true, message: "Verification successful." },
      { status: 200 }
    );

    response.cookies.set(SESSION_COOKIE_NAME, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    return response;
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
