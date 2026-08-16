// app/api/resend-code/route.ts
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { Resend } from "resend";
import { rateLimit } from "@/lib/rateLimit";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required." }, { status: 400 });
    }

    const limit = await rateLimit(`resend-code:${email}`, 3, 15 * 60 * 1000);
    if (!limit.success) {
      return NextResponse.json(
        { error: "Too many code requests. Please wait a few minutes and try again." },
        { status: 429 }
      );
    }

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return NextResponse.json(
        { error: "No account found with that email. Create an account first." },
        { status: 404 }
      );
    }

    const code = Math.floor(100000 + Math.random() * 900000).toString();

    await prisma.verificationCode.upsert({
      where: { email },
      update: { code, createdAt: new Date() },
      create: { email, code },
    });

    const { error: emailError } = await resend.emails.send({
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

    return NextResponse.json({ success: true, message: "Verification code sent successfully." });
  } catch (error) {
    console.error("Internal API error:", error);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
