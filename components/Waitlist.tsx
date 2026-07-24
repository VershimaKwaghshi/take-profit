"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import type { Country, Value } from "react-phone-number-input";

import CountrySelect from "./waitlist/CountrySelect";
import TPPhoneInput from "./waitlist/PhoneInput";
import ExperienceSelect from "./waitlist/ExperienceSelect";
import FrequencySelect from "./waitlist/FrequencySelect";
import AssetSelector from "./waitlist/AssetSelector";

function WaitlistForm() {
  const searchParams = useSearchParams();

  const referredBy = searchParams.get("ref");

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

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
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
          referred_by: referredBy || null,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        setMessage(result.error || "Unable to join.");
        return;
      }

      window.location.href =
        `/verify?email=${encodeURIComponent(email)}`;

    } catch {
      setMessage("Unable to connect.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="pb-32 px-6">

      <div className="mx-auto max-w-7xl grid lg:grid-cols-[420px_1fr] gap-12">

        {/* LEFT PANEL */}

        <div className="space-y-8">

          <div className="rounded-[36px] bg-black p-8 text-white">

            <div className="text-blue-400 text-sm font-semibold uppercase tracking-[0.3em]">
              EARLY ACCESS
            </div>

            <h2 className="mt-6 text-3xl font-semibold">
              Why Join?
            </h2>

            <p className="mt-6 text-neutral-300 leading-8">
              Join the earliest members helping shape
              Take Profit before launch.
            </p>

          </div>

          <div className="rounded-[36px] bg-blue-600 p-8 text-white">

            <h3 className="text-2xl font-semibold">
              Learn Before Launch
            </h3>

            <p className="mt-5 text-blue-100 leading-8">
              Watch short learning sessions explaining
              exactly how Take Profit works.
            </p>

          </div>

          <div className="rounded-[36px] bg-red-600 p-8 text-white">

            <h3 className="text-2xl font-semibold">
              Referral Access
            </h3>

            <p className="mt-5 text-red-100 leading-8">
              Invite verified traders and unlock
              additional platform features before launch.
            </p>

          </div>

        </div>

        {/* FORM */}

        <form
          onSubmit={handleSubmit}
          className="rounded-[40px] border border-neutral-200 bg-white p-10 shadow-xl space-y-6"
        >

          <h2 className="text-4xl font-semibold">
            Application
          </h2>

          <p className="text-neutral-600">
            Complete your application below.
          </p>

          <div className="grid md:grid-cols-2 gap-5">

            <input
              required
              value={firstName}
              onChange={(e)=>setFirstName(e.target.value)}
              placeholder="First Name"
              className="rounded-2xl border border-neutral-300 px-5 py-4"
            />

            <input
              required
              value={lastName}
              onChange={(e)=>setLastName(e.target.value)}
              placeholder="Last Name"
              className="rounded-2xl border border-neutral-300 px-5 py-4"
            />

          </div>

          <input
            required
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            placeholder="Email"
            className="w-full rounded-2xl border border-neutral-300 px-5 py-4"
          />

          <TPPhoneInput
            value={phone}
            onChange={setPhone}
          />

          <CountrySelect
            value={country}
            onChange={setCountry}
          />

          <ExperienceSelect
            value={experience}
            onChange={setExperience}
          />

          <AssetSelector
            value={assets}
            onChange={setAssets}
          />

          <FrequencySelect
            value={frequency}
            onChange={setFrequency}
          />

          <label className="flex gap-3 items-center">

            <input
              type="checkbox"
              checked={beta}
              onChange={(e)=>setBeta(e.target.checked)}
            />

            <span>
              Notify me when beta begins.
            </span>

          </label>

          <button
            disabled={submitting}
            className="w-full rounded-full bg-black py-5 text-lg font-semibold text-white transition hover:opacity-90"
          >
            {submitting ? "Submitting..." : "Join Waitlist"}
          </button>

          {message && (
            <p className="text-center text-red-600">
              {message}
            </p>
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