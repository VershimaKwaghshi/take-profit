// app/api/verify/route.ts
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { createSessionToken } from "@/lib/session";
import { SESSION_COOKIE_NAME } from "@/lib/auth";
import { rateLimit } from "@/lib/rateLimit";

const CODE_EXPIRY_MS = 15 * 60 * 1000;

export async function POST(request: Request) {
  try {
    const { email, code } = await request.json();

    if (!email || !code) {
      return NextResponse.json(
        { error: "Email and verification code are required." },
        { status: 400 }
      );
    }

    const limit = await rateLimit(`verify:${email}`, 5, 15 * 60 * 1000);
    if (!limit.success) {
      return NextResponse.json(
        { error: "Too many verification attempts. Please wait a few minutes and try again." },
        { status: 429 }
      );
    }

    const codeRecord = await prisma.verificationCode.findFirst({
      where: { email, code },
    });

    const isExpired =
      codeRecord && Date.now() - codeRecord.createdAt.getTime() > CODE_EXPIRY_MS;

    if (!codeRecord || isExpired) {
      return NextResponse.json(
        { error: "Invalid or expired verification code." },
        { status: 400 }
      );
    }

    await prisma.verificationCode.delete({ where: { email } });

    const user = await prisma.user.update({
      where: { email },
      data: { emailVerified: true },
    });

    const token = createSessionToken({
      id: user.id,
      email: user.email,
      is_admin: user.isAdmin,
    });

    const response = NextResponse.json(
      { success: true, message: "Verification successful." },
      { status: 200 }
    );

    response.cookies.set(SESSION_COOKIE_NAME, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

    return response;
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
