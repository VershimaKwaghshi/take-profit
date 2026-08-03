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

    if (!limit.success) {
      return NextResponse.json(
        {
          error: "Too many verification attempts. Please wait a few minutes and try again.",
        },
        { status: 429 }
      );
    }

    // 2. Verify code in database
    const { data: codeRecord, error: codeError } = await supabase
      .from("verification_codes")
      .select("*")
      .eq("email", email)
      .eq("code", code)
      .maybeSingle();

    if (codeError || !codeRecord) {
      return NextResponse.json(
        { error: "Invalid or expired verification code." },
        { status: 400 }
      );
    }

    // 3. Delete verification code after successful usage
    await supabase.from("verification_codes").delete().eq("email", email);

    // 4. Retrieve or create user profile to get id and is_admin
    const { data: userRecord } = await supabase
      .from("users")
      .select("id, email, is_admin")
      .eq("email", email)
      .maybeSingle();

    const userId = userRecord?.id || email;
    const isAdmin = !!userRecord?.is_admin;

    // 5. Pass complete user object to createSessionToken
    const token = createSessionToken({
      id: userId,
      email: email,
      is_admin: isAdmin,
    });

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
