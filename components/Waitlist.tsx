"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import type { Country, Value } from "react-phone-number-input";

import CountrySelect from "./waitlist/CountrySelect";
import TPPhoneInput from "./waitlist/PhoneInput";
import ExperienceSelect from "./waitlist/ExperienceSelect";
import FrequencySelect from "./waitlist/FrequencySelect";
import AssetSelector from "./waitlist/AssetSelector";

function WaitlistForm() {
  const searchParams = useSearchParams();

  const [referredBy, setReferredBy] = useState<string | null>(null);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState<Value>();
  const [country, setCountry] = useState<Country>();
  const [experience, setExperience] = useState<string>();
  const [assets, setAssets] = useState<string[]>([]);
  const [frequency, setFrequency] = useState<string>();
  const [beta, setBeta] = useState(false);

  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const ref =
      searchParams.get("ref") ||
      searchParams.get("referred_by") ||
      searchParams.get("referral") ||
      searchParams.get("referral_code");

    if (ref) {
      localStorage.setItem("takeprofit_referral", ref);
      setReferredBy(ref);
    } else {
      const savedRef = localStorage.getItem("takeprofit_referral");
      if (savedRef) {
        setReferredBy(savedRef);
      }
    }
  }, [searchParams]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setSubmitting(true);
    setMessage("");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          email,
          phone: phone || "",
          country: country || "",
          experience: experience || "",
          targeted_assets: assets,
          trading_frequency: frequency || "",
          beta_opt_in: beta,
          referred_by: referredBy,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        setMessage(result.error || "Unable to join.");
        return;
      }

      localStorage.removeItem("takeprofit_referral");

      window.location.href = `/verify?email=${encodeURIComponent(email)}`;
    } catch {
      setMessage("Unable to connect.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="pb-32 px-6">
      <div className="mx-auto max-w-3xl">
        <form
          onSubmit={handleSubmit}
          className="space-y-6 rounded-lg border border-line bg-paper p-10"
        >
          <h2 className="text-3xl font-semibold text-ink">Application</h2>

          <p className="text-ash">Complete your application below.</p>

          {referredBy && (
            <div className="rounded-md border border-oxblood/20 bg-oxblood/5 p-4">
              <p className="text-sm font-medium text-oxblood">
                Referral applied
              </p>
              <p className="mt-1 font-mono text-sm text-ink">
                Code: <span className="font-semibold">{referredBy}</span>
              </p>
            </div>
          )}

          <div className="grid gap-5 md:grid-cols-2">
            <input
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First name"
              className="rounded-md border border-line px-5 py-4 text-ink outline-none transition focus:border-ink"
            />

            <input
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last name"
              className="rounded-md border border-line px-5 py-4 text-ink outline-none transition focus:border-ink"
            />
          </div>

          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full rounded-md border border-line px-5 py-4 text-ink outline-none transition focus:border-ink"
          />

          <TPPhoneInput value={phone} onChange={setPhone} />

          <CountrySelect value={country} onChange={setCountry} />

          <ExperienceSelect value={experience} onChange={setExperience} />

          <AssetSelector value={assets} onChange={setAssets} />

          <FrequencySelect value={frequency} onChange={setFrequency} />

          <label className="flex items-center gap-3 text-ink">
            <input
              type="checkbox"
              checked={beta}
              onChange={(e) => setBeta(e.target.checked)}
              className="h-4 w-4 accent-oxblood"
            />
            <span>Notify me when beta begins.</span>
          </label>

          <button
            disabled={submitting}
            className="w-full rounded-full bg-ink py-5 text-lg font-semibold text-paper transition hover:bg-oxblood disabled:opacity-60"
          >
            {submitting ? "Submitting..." : "Join waitlist"}
          </button>

          {message && (
            <p className="text-center text-sm text-oxblood">{message}</p>
          )}
        </form>
      </div>
    </section>
  );
}

export default function Waitlist() {
  return (
    <Suspense fallback={null}>
      <WaitlistForm />
    </Suspense>
  );
}