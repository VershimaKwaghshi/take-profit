import { NextResponse } from "next/server";
import { supabaseAdmin as supabase } from "@/lib/supabaseAdmin";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const verificationCode = Math.floor(
      100000 + Math.random() * 900000
    ).toString();

    const verificationExpiresAt = new Date(
      Date.now() + 15 * 60 * 1000
    ).toISOString();

    const { error } = await supabase
      .from("waitlist")
      .insert({
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        phone: data.phone,
        country: data.country,
        experience: data.experience,
        targeted_assets: data.targeted_assets,
        trading_frequency: data.trading_frequency,
        beta_opt_in: data.beta_opt_in,
        referred_by: data.referred_by || null,
        email_verified: false,
        verification_code: verificationCode,
        verification_expires_at: verificationExpiresAt,
        status: "pending",
      });

    if (error) {
      return NextResponse.json(
        { error: error.message },
        { status: 400 }
      );
    }

    if (data.referred_by) {
      const { data: referrer } = await supabase
        .from("waitlist")
        .select("referral_count")
        .eq("referral_code", data.referred_by)
        .single();

      if (referrer) {
        await supabase
          .from("waitlist")
          .update({
            referral_count: (referrer.referral_count || 0) + 1,
          })
          .eq("referral_code", data.referred_by);
      }
    }

    const { error: emailError } = await resend.emails.send({
      from: "Take Profit <welcome@takeprofit.name.ng>",
      to: data.email,
      subject: "Verify your Take Profit email",
      html: `
        <div style="font-family:Arial,sans-serif;padding:40px;max-width:600px;margin:auto">
          <h1>Take Profit</h1>

          <p>Hello ${data.first_name},</p>

          <p>Welcome to the Take Profit waitlist.</p>

          <p>Your verification code is</p>

          <h2 style="font-size:36px;letter-spacing:6px">
            ${verificationCode}
          </h2>

          <p>This code expires in 15 minutes.</p>

          <p>Thank you.</p>

          <strong>Take Profit</strong>
        </div>
      `,
    });

    if (emailError) {
      console.error(emailError);
    }

    return NextResponse.json({
      success: true,
      email: data.email,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
