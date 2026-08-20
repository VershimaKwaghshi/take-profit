// app/api/register/route.ts
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { Resend } from "resend";
import { rateLimit, getClientIp } from "@/lib/rateLimit";

const resend = new Resend(process.env.RESEND_API_KEY!);

function generateReferralCode(): string {
  return Math.random().toString(36).substring(2, 8).toUpperCase();
}

async function sendVerificationEmail(email: string) {
  const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();

  await prisma.verificationCode.upsert({
    where: { email },
    update: { code: verificationCode, createdAt: new Date() },
    create: { email, code: verificationCode },
  });

  await resend.emails.send({
    from: "Take Profit <welcome@takeprofit.name.ng>",
    to: email,
    subject: "Your Take Profit verification code",
    html: `
    <div style="font-family:Arial;padding:40px">
      <h2>Take Profit</h2>
      <p>Your verification code:</p>
      <h1>${verificationCode}</h1>
      <p>This code expires in 15 minutes.</p>
    </div>
    `,
  });
}

export async function POST(request: Request) {
  try {
    const ip = getClientIp(request);
    const limit = await rateLimit(`register:${ip}`, 5, 60 * 60 * 1000);

    if (!limit.success) {
      return NextResponse.json(
        { error: "Too many signups from this connection. Please try again later." },
        { status: 429 }
      );
    }

    const data = await request.json();
    const referralCodeUsed: string | undefined = data.referredBy || data.ref;

    let referrerId: string | null = null;

    if (referralCodeUsed) {
      const referrer = await prisma.user.findUnique({
        where: { referralCode: referralCodeUsed.toUpperCase() },
      });

      if (!referrer) {
        return NextResponse.json(
          { error: "That referral code is not valid." },
          { status: 400 }
        );
      }

      referrerId = referrer.id;
    }

    const existing = await prisma.user.findUnique({ where: { email: data.email } });

    if (existing) {
      // Account already exists. Do not reveal this, do not overwrite their
      // profile, just send a fresh code to the inbox that actually owns it.
      await sendVerificationEmail(data.email);
      return NextResponse.json({ success: true, email: data.email });
    }

    let newReferralCode = generateReferralCode();
    while (await prisma.user.findUnique({ where: { referralCode: newReferralCode } })) {
      newReferralCode = generateReferralCode();
    }

    const user = await prisma.user.create({
      data: {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        country: data.country,
        experience: data.experience,
        targetedAssets: data.targetedAssets,
        tradingFrequency: data.tradingFrequency,
        referralCode: newReferralCode,
        referredById: referrerId,
        emailVerified: false,
      },
    });

    await sendVerificationEmail(user.email);

    return NextResponse.json({ success: true, email: user.email });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}
