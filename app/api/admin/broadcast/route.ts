import { NextResponse } from "next/server";
import { supabaseAdmin as supabase } from "@/lib/supabaseAdmin";
import { requireAdmin } from "@/lib/auth";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { response } = requireAdmin(request);
  if (response) return response;

  try {
    const {
      audience,
      subject,
      message,
    } = await request.json();

    let query = supabase
      .from("waitlist")
      .select("email,email_verified");

    if (audience === "verified") {
      query = query.eq("email_verified", true);
    }

    if (audience === "unverified") {
      query = query.eq("email_verified", false);
    }

    const { data: users, error } = await query;

    if (error) {
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }

    if (!users || users.length === 0) {
      return NextResponse.json({
        success: true,
        sent: 0,
      });
    }

    let sent = 0;

    for (const user of users) {
      if (!user.email) continue;

      try {
        await resend.emails.send({
          from: "Take Profit <welcome@takeprofit.name.ng>",
          to: user.email,
          subject,
          html: `
          <div style="font-family:Arial,sans-serif;padding:40px;max-width:650px;margin:auto;background:#0f0f0f;color:#ffffff">

            <img
              src="https://takeprofit.name.ng/logo.png"
              width="70"
              alt="Take Profit"
            />

            <h1 style="margin-top:30px;font-size:32px;">
              ${subject}
            </h1>

            <div style="font-size:16px;line-height:1.8;margin-top:30px;">
              ${message.replace(/\n/g, "<br/>")}
            </div>

            <hr style="margin:50px 0;border:none;border-top:1px solid #333;" />

            <p style="color:#999;font-size:14px;">
              Take Profit
              <br/>
              A PLeNat Technologies company.
            </p>

          </div>
          `,
        });

        sent++;
      } catch (err) {
        console.error("Email failed:", err);
      }
    }

    return NextResponse.json({
      success: true,
      sent,
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Broadcast failed." },
      { status: 500 }
    );
  }
}
