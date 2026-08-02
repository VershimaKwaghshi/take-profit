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
    // Check for any common referral parameter in the URL
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
          className="space-y-6 rounded-[40px] border border-neutral-200 bg-white p-10 shadow-xl"
        >
          <h2 className="text-4xl font-semibold">Application</h2>

          <p className="text-neutral-600">Complete your application below.</p>

          {referredBy && (
            <div className="rounded-2xl border border-blue-200 bg-blue-50 p-4">
              <p className="text-sm font-medium text-blue-900">
                Referral Applied
              </p>
              <p className="mt-1 text-sm text-blue-700">
                Referral Code: <span className="font-semibold">{referredBy}</span>
              </p>
            </div>
          )}

          <div className="grid gap-5 md:grid-cols-2">
            <input
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
              className="rounded-2xl border border-neutral-300 px-5 py-4"
            />

            <input
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last Name"
              className="rounded-2xl border border-neutral-300 px-5 py-4"
            />
          </div>

          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full rounded-2xl border border-neutral-300 px-5 py-4"
          />

          <TPPhoneInput value={phone} onChange={setPhone} />

          <CountrySelect value={country} onChange={setCountry} />

          <ExperienceSelect value={experience} onChange={setExperience} />

          <AssetSelector value={assets} onChange={setAssets} />

          <FrequencySelect value={frequency} onChange={setFrequency} />

          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={beta}
              onChange={(e) => setBeta(e.target.checked)}
            />
            <span>Notify me when beta begins.</span>
          </label>

          <button
            disabled={submitting}
            className="w-full rounded-full bg-black py-5 text-lg font-semibold text-white transition hover:opacity-90 disabled:opacity-60"
          >
            {submitting ? "Submitting..." : "Join Waitlist"}
          </button>

          {message && (
            <p className="text-center text-red-600">{message}</p>
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
