import { NextResponse } from "next/server";
import { supabaseAdmin as supabase } from "@/lib/supabaseAdmin";
import { Resend } from "resend";
import { rateLimit } from "@/lib/rateLimit";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: "Email is required." },
        { status: 400 }
      );
    }

    const limit = await rateLimit(`resend-code:${email}`, 3, 15 * 60 * 1000);

    if (!limit.success) {
      return NextResponse.json(
        { error: "Too many code requests. Please wait a few minutes and try again." },
        { status: 429 }
      );
    }

    const code = Math.floor(100000 + Math.random() * 900000).toString();

    const { error: dbError } = await supabase
      .from("verification_codes")
      .upsert(
        {
          email,
          code,
          created_at: new Date().toISOString(),
        },
        { onConflict: "email" }
      );

    if (dbError) {
      return NextResponse.json(
        { error: "Failed to store verification code." },
        { status: 500 }
      );
    }

    // Capture the output from Resend to handle errors explicitly
    const { data: emailData, error: emailError } = await resend.emails.send({
      from: "Take Profit <welcome@takeprofit.name.ng>",
      to: [email],
      subject: "Your Take Profit Verification Code",
      html: `<p>Your verification code is: <strong>${code}</strong></p>`,
    });

    if (emailError) {
      console.error("Resend delivery failed:", emailError);
      return NextResponse.json(
        { error: `Email delivery failed: ${emailError.message}` },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Verification code sent successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Internal API error:", error);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
