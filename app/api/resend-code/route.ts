import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    const verificationCode = Math.floor(
      100000 + Math.random() * 900000
    ).toString();

    const verificationExpiresAt = new Date(
      Date.now() + 15 * 60 * 1000
    ).toISOString();

    const { data, error } = await supabase
      .from("waitlist")
      .update({
        verification_code: verificationCode,
        verification_expires_at: verificationExpiresAt,
      })
      .eq("email", email)
      .eq("email_verified", false)
      .select()
      .single();

    if (error || !data) {
      return NextResponse.json(
        { error: "Unable to resend verification code" },
        { status: 400 }
      );
    }

    const { error: emailError } = await resend.emails.send({
      from: "Take Profit <onboarding@resend.dev>",
      to: email,
      subject: "Your new Take Profit verification code",
      html: `
        <h1>Take Profit</h1>
        <p>Your new verification code is:</p>
        <h2>${verificationCode}</h2>
        <p>This code expires in 15 minutes.</p>
      `,
    });

    if (emailError) {
      return NextResponse.json(
        { error: "Unable to send verification email" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error("Resend code error:", error);

    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}