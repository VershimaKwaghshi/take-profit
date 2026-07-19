import { NextResponse } from "next/server";
import { supabaseAdmin as supabase } from "@/lib/supabaseAdmin";
import { Resend } from "resend";

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
        {
          error: "Unable to resend verification code",
        },
        {
          status: 400,
        }
      );
    }

    const { error: emailError } =
      await resend.emails.send({
        from: "Take Profit <welcome@takeprofit.name.ng>",
        to: email,
        subject: "Your new verification code",
        html: `
          <div style="font-family:Arial,sans-serif;padding:40px;max-width:600px;margin:auto">
            <h1>Take Profit</h1>

            <p>Your new verification code is</p>

            <h2 style="font-size:36px;letter-spacing:6px">
              ${verificationCode}
            </h2>

            <p>This code expires in 15 minutes.</p>

            <strong>Take Profit</strong>
          </div>
        `,
      });

    if (emailError) {
      console.error(emailError);

      return NextResponse.json(
        {
          error: "Unable to send verification email",
        },
        {
          status: 500,
        }
      );
    }

    return NextResponse.json({
      success: true,
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
