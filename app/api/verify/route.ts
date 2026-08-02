import { NextResponse } from "next/server";
import { supabaseAdmin as supabase } from "@/lib/supabaseAdmin";
import { createSessionToken } from "@/lib/session";
import { SESSION_COOKIE_NAME } from "@/lib/auth";
import { rateLimit } from "@/lib/rateLimit";

export async function POST(request: Request) {
  try {
    const { email, code } = await request.json();

    if (!email || !code) {
      return NextResponse.json(
        {
          error: "Email and code are required.",
        },
        {
          status: 400,
        }
      );
    }

    const limit = rateLimit(
      `verify:${email}`,
      10,
      15 * 60 * 1000
    );

    if (!limit.allowed) {
      return NextResponse.json(
        {
          error:
            "Too many attempts. Please wait a few minutes.",
        },
        {
          status: 429,
        }
      );
    }

    const { data, error } = await supabase
      .from("waitlist")
      .select("*")
      .eq("email", email)
      .eq("verification_code", code)
      .single();

    if (error || !data) {
      return NextResponse.json(
        {
          error: "Invalid verification code",
        },
        {
          status: 400,
        }
      );
    }

    if (
      !data.verification_expires_at ||
      new Date(data.verification_expires_at).getTime() <
        Date.now()
    ) {
      return NextResponse.json(
        {
          error: "Verification code expired.",
        },
        {
          status: 400,
        }
      );
    }

    await supabase
      .from("waitlist")
      .update({
        email_verified: true,
        status: "verified",
        verification_code: null,
        verification_expires_at: null,
      })
      .eq("id", data.id);

    // Increment referral count if referred_by exists
    if (data.referred_by) {
      const { data: referrer } = await supabase
        .from("waitlist")
        .select("id, referral_count")
        .or(`referral_code.eq.${data.referred_by},email.eq.${data.referred_by},id.eq.${data.referred_by}`)
        .single();

      if (referrer) {
        await supabase
          .from("waitlist")
          .update({
            referral_count: (referrer.referral_count ?? 0) + 1,
          })
          .eq("id", referrer.id);
      }
    }

    const token = createSessionToken({
      id: data.id,
      email: data.email,
      is_admin: data.is_admin,
    });

    const response = NextResponse.json({
      success: true,
      redirect: "/dashboard",
    });

    response.cookies.set(
      SESSION_COOKIE_NAME,
      token,
      {
        httpOnly: true,
        secure:
          process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 24 * 7,
      }
    );

    return response;

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
