import { redirect } from "next/navigation";
import { supabaseAdmin } from "@/lib/supabaseAdmin";

export default async function ReferralRedirect({
  params,
}: {
  params: Promise<{ code: string }>;
}) {
  const { code } = await params;

  const { data } = await supabaseAdmin
    .from("waitlist")
    .select("referral_code")
    .eq("referral_code", code)
    .single();

  if (data) {
    redirect(`/?ref=${encodeURIComponent(code)}#waitlist`);
  }

  redirect("/#waitlist");
}
