// app/register/page.tsx
"use client";

import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import TPLogo from "@/components/TPLogo";

function RegisterContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const refFromLink = searchParams.get("ref") || "";

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    referredBy: refFromLink,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function update(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const result = await response.json();

      if (!response.ok) {
        setError(result.error || "Something went wrong.");
        setLoading(false);
        return;
      }

      router.push(`/verify?email=${encodeURIComponent(form.email)}`);
    } catch {
      setError("Something went wrong.");
      setLoading(false);
    }
  }

  return (
    <div className="tp-content min-h-screen bg-mist flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md">
        <div className="flex items-center gap-3 justify-center mb-8">
          <TPLogo size={36} />
          <div>
            <h1 className="text-sm font-bold tracking-wider uppercase leading-tight text-ink">Take Profit</h1>
            <p className="text-[10px] tracking-widest text-ink/60 uppercase leading-tight">Restitution System</p>
          </div>
        </div>

        <div className="bg-white border border-line rounded-xl p-7 shadow-sm">
          <h2 className="text-xl font-extrabold text-ink mb-1">Create your account</h2>
          <p className="text-xs text-ink/70 font-medium mb-6">
            Anyone can register. A referral code unlocks full platform features afterward.
          </p>

          <form onSubmit={submit} className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-bold text-ink block mb-1">First name</label>
                <input
                  required
                  value={form.firstName}
                  onChange={(e) => update("firstName", e.target.value)}
                  className="w-full border border-line rounded-md px-3 py-2 text-sm text-ink font-medium focus:outline-none focus:ring-2 focus:ring-navy"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-ink block mb-1">Last name</label>
                <input
                  required
                  value={form.lastName}
                  onChange={(e) => update("lastName", e.target.value)}
                  className="w-full border border-line rounded-md px-3 py-2 text-sm text-ink font-medium focus:outline-none focus:ring-2 focus:ring-navy"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-ink block mb-1">Email</label>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                className="w-full border border-line rounded-md px-3 py-2 text-sm text-ink font-medium focus:outline-none focus:ring-2 focus:ring-navy"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-bold text-ink block mb-1">Phone</label>
                <input
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  className="w-full border border-line rounded-md px-3 py-2 text-sm text-ink font-medium focus:outline-none focus:ring-2 focus:ring-navy"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-ink block mb-1">Country</label>
                <input
                  value={form.country}
                  onChange={(e) => update("country", e.target.value)}
                  className="w-full border border-line rounded-md px-3 py-2 text-sm text-ink font-medium focus:outline-none focus:ring-2 focus:ring-navy"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-ink block mb-1">Referral code <span className="text-ink/50 font-medium normal-case">(optional)</span></label>
              <input
                value={form.referredBy}
                onChange={(e) => update("referredBy", e.target.value.toUpperCase())}
                readOnly={!!refFromLink}
                className="w-full border border-line rounded-md px-3 py-2 text-sm text-ink font-bold uppercase tracking-wide focus:outline-none focus:ring-2 focus:ring-navy read-only:bg-mist"
              />
            </div>

            {error && (
              <p className="text-xs font-bold text-oxblood bg-red-50 border border-red-200 rounded-md px-3 py-2">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-navy hover:bg-navy-dark text-white font-bold text-sm py-3 rounded-md transition-colors disabled:opacity-60"
            >
              {loading ? "Creating account..." : "Create account"}
            </button>
          </form>
        </div>

        <p className="text-xs text-center text-ink/60 font-medium mt-5">
          Already have an account? <a href="/login" className="text-navy font-bold hover:underline">Log in</a>
        </p>
      </div>
    </div>
  );
}

export default function RegisterPage() {
  return (
    <Suspense fallback={null}>
      <RegisterContent />
    </Suspense>
  );
}
