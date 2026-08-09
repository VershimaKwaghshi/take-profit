import { NextResponse } from "next/server";
import { supabaseAdmin as supabase } from "@/lib/supabaseAdmin";
import { Resend } from "resend";
import { rateLimit, getClientIp } from "@/lib/rateLimit";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(request: Request) {
  try {
    const ip = getClientIp(request);

    const limit = await rateLimit(`waitlist:${ip}`, 5, 60 * 60 * 1000);

    if (!limit.success) {
      return NextResponse.json(
        {
          error:
            "Too many signups from this connection. Please try again later.",
        },
        { status: 429 }
      );
    }

    const data = await request.json();

    const referredBy =
      data.referred_by || data.referredBy || data.ref || null;

    const userReferralCode = Math.random().toString(36).substring(2, 8).toUpperCase();

    const verificationCode = Math.floor(
      100000 + Math.random() * 900000
    ).toString();

    const { error } = await supabase
      .from("waitlist")
      .insert({
        first_name: data.first_name || data.firstName,
        last_name: data.last_name || data.lastName,
        email: data.email,
        phone: data.phone,
        country: data.country,
        experience: data.experience,
        targeted_assets: data.targeted_assets || data.targetedAssets,
        trading_frequency: data.trading_frequency || data.tradingFrequency,
        beta_opt_in: data.beta_opt_in ?? data.betaOptIn ?? false,
        referred_by: referredBy,
        referral_code: userReferralCode,
        email_verified: false,
        status: "pending",
      });

    if (error) {
      return NextResponse.json(
        { error: error.message },
        { status: 400 }
      );
    }

    // Write the code where /api/verify actually looks for it
    const { error: codeError } = await supabase
      .from("verification_codes")
      .upsert(
        {
          email: data.email,
          code: verificationCode,
          created_at: new Date().toISOString(),
        },
        { onConflict: "email" }
      );

    if (codeError) {
      return NextResponse.json(
        { error: "Failed to store verification code." },
        { status: 500 }
      );
    }

    await resend.emails.send({
      from: "Take Profit <welcome@takeprofit.name.ng>",
      to: data.email,
      subject: "Verify your Take Profit email",
      html: `
      <div style="font-family:Arial;padding:40px">
        <h2>Welcome to Take Profit</h2>

        <p>Your verification code:</p>

        <h1>${verificationCode}</h1>

        <p>This code expires in 15 minutes.</p>
      </div>
      `,
    });

    return NextResponse.json({
      success: true,
      email: data.email,
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Something went wrong",
      },
      {
        status: 500,
      }
    );
  }
}
