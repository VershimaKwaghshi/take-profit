import { supabaseAdmin } from "@/lib/supabaseAdmin";

export async function getLearningModules() {
  const { data, error } = await supabaseAdmin
    .from("learning_modules")
    .select("*")
    .order("order_number");

  if (error) {
    throw error;
  }

  return data;
}
