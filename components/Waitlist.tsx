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
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

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
        setMessage(result.error || "Unable to submit.");
        return;
      }

      window.location.href =
        `/verify?email=${encodeURIComponent(email)}`;

    } catch {
      setMessage("Unable to connect. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="bg-white py-28 px-6">

      <div className="mx-auto max-w-6xl">

        <div className="grid gap-16 lg:grid-cols-2">

          {/* Left */}

          <div>

            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              Early Access
            </span>

            <h2 className="mt-8 text-5xl font-semibold leading-tight text-black">
              Join the
              <br />
              Take Profit
              <br />
              Waitlist.
            </h2>

            <p className="mt-8 text-xl leading-9 text-neutral-600">
              You'll get early access to Take Profit,
              exclusive product updates and the opportunity
              to help shape the platform before launch.
            </p>

            <div className="mt-12 space-y-6">

              <div className="rounded-3xl bg-blue-600 p-6 text-white">

                <h3 className="text-xl font-semibold">
                  Early Access
                </h3>

                <p className="mt-3 text-blue-100">
                  Be among the first traders invited.
                </p>

              </div>

              <div className="rounded-3xl bg-red-600 p-6 text-white">

                <h3 className="text-xl font-semibold">
                  Limited Invitations
                </h3>

                <p className="mt-3 text-red-100">
                  Every application is reviewed before approval.
                </p>

              </div>

            </div>

          </div>

          {/* Right */}

          <form
            onSubmit={handleSubmit}
            className="rounded-[36px] border border-neutral-200 bg-white p-10 shadow-xl space-y-6"
          >

            <h3 className="text-3xl font-semibold">
              Apply
            </h3>

            <div className="grid gap-5 md:grid-cols-2">

              <input
                value={firstName}
                onChange={(e)=>setFirstName(e.target.value)}
                placeholder="First Name"
                required
                className="rounded-2xl border border-neutral-300 px-5 py-4"
              />

              <input
                value={lastName}
                onChange={(e)=>setLastName(e.target.value)}
                placeholder="Last Name"
                required
                className="rounded-2xl border border-neutral-300 px-5 py-4"
              />

            </div>

            <input
              type="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              placeholder="Email"
              required
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

            <label className="flex items-center gap-3">

              <input
                type="checkbox"
                checked={beta}
                onChange={(e)=>setBeta(e.target.checked)}
              />

              <span>
                I would like early beta access.
              </span>

            </label>

            <button
              disabled={submitting}
              className="w-full rounded-full bg-black py-5 text-lg font-semibold text-white transition hover:opacity-90"
            >
              {submitting
                ? "Submitting..."
                : "Join Waitlist"}
            </button>

            {message && (
              <p className="text-center text-red-600">
                {message}
              </p>
            )}

            <p className="text-center text-sm text-neutral-500">
              Applications are reviewed before approval.
            </p>

          </form>

        </div>

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