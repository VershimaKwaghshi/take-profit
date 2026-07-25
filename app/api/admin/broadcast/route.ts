import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(request: Request) {
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
          from: "Take Profit <noreply@takeprofit.name.ng>",
          to: user.email,
          subject,
          html: `
          <div style="font-family:Arial;padding:40px;max-width:650px;margin:auto">

            <img
              src="https://takeprofit.name.ng/logo.png"
              width="70"
            />

            <h1 style="margin-top:30px">
              ${subject}
            </h1>

            <div style="font-size:16px;line-height:1.8">
              ${message.replace(/\n/g, "<br/>")}
            </div>

            <hr style="margin:40px 0"/>

            <p style="color:#666">
              Take Profit<br/>
              A PLeNat Technologies company.
            </p>

          </div>
          `,
        });

        sent++;
      } catch (err) {
        console.error(err);
      }
    }

    return NextResponse.json({
      success: true,
      sent,
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Broadcast failed.",
      },
      {
        status: 500,
      }
    );
  }
}