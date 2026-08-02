import { NextResponse } from "next/server";
import { supabaseAdmin as supabase } from "@/lib/supabaseAdmin";

export async function POST(request: Request) {
  try {
    const { email, code } = await request.json();

    if (!email || !code) {
      return NextResponse.json(
        { error: "Email and verification code are required." },
        { status: 400 }
      );
    }

    // 1. Fetch user to check verification code and expiration
    const { data: user, error: fetchError } = await supabase
      .from("waitlist")
      .select("*")
      .eq("email", email)
      .single();

    if (fetchError || !user) {
      return NextResponse.json(
        { error: "User not found." },
        { status: 404 }
      );
    }

    if (user.email_verified) {
      return NextResponse.json(
        { error: "Email is already verified." },
        { status: 400 }
      );
    }

    if (user.verification_code !== code) {
      return NextResponse.json(
        { error: "Invalid verification code." },
        { status: 400 }
      );
    }

    if (new Date(user.verification_expires_at) < new Date()) {
      return NextResponse.json(
        { error: "Verification code has expired." },
        { status: 400 }
      );
    }

    // 2. Mark email as verified
    const { error: updateError } = await supabase
      .from("waitlist")
      .update({ email_verified: true, status: "active" })
      .eq("email", email);

    if (updateError) {
      return NextResponse.json(
        { error: updateError.message },
        { status: 400 }
      );
    }

    // 3. Increment referral count for the referrer if referred_by exists
    if (user.referred_by) {
      const { data: referrer } = await supabase
        .from("waitlist")
        .select("referral_count")
        .or(`email.eq.${user.referred_by},id.eq.${user.referred_by}`)
        .single();

      if (referrer) {
        const currentCount = referrer.referral_count || 0;
        await supabase
          .from("waitlist")
          .update({ referral_count: currentCount + 1 })
          .or(`email.eq.${user.referred_by},id.eq.${user.referred_by}`);
      }
    }

    return NextResponse.json({
      success: true,
      message: "Email successfully verified.",
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}
