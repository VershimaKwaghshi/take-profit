import { NextResponse } from "next/server";
import { supabaseAdmin as supabase } from "@/lib/supabaseAdmin";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !email.trim()) {
      return NextResponse.json(
        {
          error: "Please enter your email address.",
        },
        {
          status: 400,
        }
      );
    }

    // Check whether the email already exists
    const { data: user, error: findError } = await supabase
      .from("waitlist")
      .select("id, first_name")
      .eq("email", email)
      .single();

    if (findError || !user) {
      return NextResponse.json(
        {
          error:
            "We couldn't find an account with this email. Please join the waitlist first.",
        },
        {
          status: 404,
        }
      );
    }

    // Generate a fresh verification code
    const verificationCode = Math.floor(
      100000 + Math.random() * 900000
    ).toString();

    const verificationExpiresAt = new Date(
      Date.now() + 15 * 60 * 1000
    ).toISOString();

    const { error: updateError } = await supabase
      .from("waitlist")
      .update({
        verification_code: verificationCode,
        verification_expires_at: verificationExpiresAt,
      })
      .eq("email", email);

    if (updateError) {
      return NextResponse.json(
        {
          error: "Unable to generate a new verification code.",
        },
        {
          status: 500,
        }
      );
    }

    const { error: emailError } = await resend.emails.send({
      from: "Take Profit <welcome@takeprofit.name.ng>",
      to: email,
      subject: "Your new Take Profit verification code",
      html: `
      <div style="font-family:Arial,sans-serif;padding:40px;max-width:600px;margin:auto">

        <h1 style="margin-bottom:24px;">
          Take Profit
        </h1>

        <p>Hello ${user.first_name},</p>

        <p>
          Use the verification code below to continue to your dashboard.
        </p>

        <div
          style="
            font-size:38px;
            font-weight:bold;
            letter-spacing:8px;
            margin:30px 0;
          "
        >
          ${verificationCode}
        </div>

        <p>
          This code expires in <strong>15 minutes</strong>.
        </p>

        <p>
          If you didn't request this code, you can safely ignore this email.
        </p>

        <br/>

        <strong>Take Profit</strong>

      </div>
      `,
    });

    if (emailError) {
      console.error(emailError);

      return NextResponse.json(
        {
          error: "Unable to send verification email.",
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
        error: "Something went wrong.",
      },
      {
        status: 500,
      }
    );
  }
}
