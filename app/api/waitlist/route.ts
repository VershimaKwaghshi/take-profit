import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const resend = new Resend(
  process.env.RESEND_API_KEY!
);

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

    const { error: emailError } = await resend.emails.send({
      from: "Take Profit <welcome@takeprofit.name.ng>",
      to: data.email,
      subject: "Verify your Take Profit email",
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;padding:40px;">
          <h1>Take Profit</h1>

          <p>Hello ${data.first_name},</p>

          <p>Thank you for joining the Take Profit waitlist.</p>

          <p>Your verification code is</p>

          <div style="font-size:36px;font-weight:bold;letter-spacing:8px;margin:30px 0;">
            ${verificationCode}
          </div>

          <p>This code expires in 15 minutes.</p>

          <p>If you did not request this email, you can safely ignore it.</p>

          <br>

          <p>Take Profit</p>
          <p>takeprofit.name.ng</p>
        </div>
      `,
    });

    if (emailError) {
      console.error("Resend error:", emailError);

      return NextResponse.json(
        { error: "Unable to send verification email." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      email: data.email,
    });
  } catch (error) {
    console.error("Waitlist error:", error);

    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}