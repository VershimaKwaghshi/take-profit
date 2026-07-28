import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin as supabase } from "@/lib/supabaseAdmin";
import { requireAdmin } from "@/lib/auth";

const EDITABLE_FIELDS = [
  "first_name",
  "last_name",
  "email",
  "phone",
  "country",
  "experience",
  "targeted_assets",
  "trading_frequency",
  "beta_opt_in",
  "email_verified",
  "status",
  "is_admin",
  "referral_count",
] as const;

function pickEditableFields(body: Record<string, unknown>) {
  const result: Record<string, unknown> = {};

  for (const key of EDITABLE_FIELDS) {
    if (key in body) {
      result[key] = body[key];
    }
  }

  return result;
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { response } = requireAdmin(request);
  if (response) return response;

  const { id } = await params;

  const { data, error } = await supabase
    .from("waitlist")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 404 }
    );
  }

  return NextResponse.json(data);
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { response } = requireAdmin(request);
  if (response) return response;

  const { id } = await params;

  const body = await request.json();
  const updates = pickEditableFields(body);

  if (Object.keys(updates).length === 0) {
    return NextResponse.json(
      { error: "No editable fields provided." },
      { status: 400 }
    );
  }

  const { data, error } = await supabase
    .from("waitlist")
    .update(updates)
    .eq("id", id)
    .select()
    .single();

  if (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }

  return NextResponse.json(data);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { response } = requireAdmin(request);
  if (response) return response;

  const { id } = await params;

  const { error } = await supabase
    .from("waitlist")
    .delete()
    .eq("id", id);

  if (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}
