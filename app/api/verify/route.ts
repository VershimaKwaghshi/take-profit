import { NextResponse } from "next/server";
import { supabaseAdmin as supabase } from "@/lib/supabaseAdmin";
import { createSessionToken } from "@/lib/session";
import { SESSION_COOKIE_NAME } from "@/lib/auth";
import { rateLimit } from "@/lib/rateLimit";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

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

    // 4. Mark this user verified in waitlist and grab their referral info
    const { data: userRecord, error: userError } = await supabase
      .from("waitlist")
      .update({ email_verified: true, status: "verified" })
      .eq("email", email)
      .select("id, email, first_name, referred_by, is_admin")
      .maybeSingle();

    if (userError || !userRecord) {
      return NextResponse.json(
        { error: "Unable to verify user." },
        { status: 500 }
      );
    }

    // 5. If this user was referred, credit the referrer and notify them
    if (userRecord.referred_by) {
      const { data: referrer } = await supabase
        .from("waitlist")
        .select("id, email, first_name, referral_count")
        .eq("referral_code", userRecord.referred_by)
        .maybeSingle();

      if (referrer) {
        await supabase
          .from("waitlist")
          .update({ referral_count: (referrer.referral_count || 0) + 1 })
          .eq("id", referrer.id);

        resend.emails
          .send({
            from: "Take Profit <welcome@takeprofit.name.ng>",
            to: referrer.email,
            subject: "You've got a new verified referral 🎉",
            html: `
            <div style="font-family:Arial;padding:40px">
              <h2>Nice work, ${referrer.first_name || "there"}!</h2>
              <p>${userRecord.first_name || "Someone"} just verified their email using your referral link.</p>
              <p>Your verified referral count is now <strong>${(referrer.referral_count || 0) + 1}</strong>.</p>
            </div>
            `,
          })
          .catch((err) => console.error("Referral notification email failed:", err));
      }
    }

    // 6. Issue session
    const token = createSessionToken({
      id: userRecord.id,
      email: userRecord.email,
      is_admin: !!userRecord.is_admin,
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
    console.error(error);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
