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

      const text = await response.text();

      let result;

      try {
        result = JSON.parse(text);
      } catch {
        console.error("Server response:", text);
        setMessage("Server error. Check terminal.");
        return;
      }

      if (!response.ok) {
        setMessage(
          result.error || "Something went wrong."
        );
        return;
      }

      window.location.href =
        `/verify?email=${encodeURIComponent(email)}`;
    } catch (error) {
      console.error("Waitlist submission error:", error);
      setMessage("Unable to connect. Try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section
      id="waitlist"
      className="bg-white py-32 px-6"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-semibold text-black">
            Join the Waitlist
          </h2>

          <p className="mt-6 text-xl text-neutral-600 leading-relaxed">
            Join traders discovering a different path
            <br />
            before Take Profit launches.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-8"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              value={firstName}
              onChange={(event) =>
                setFirstName(event.target.value)
              }
              placeholder="First Name"
              required
              className="w-full rounded-2xl border border-neutral-300 px-5 py-4 text-black"
            />

            <input
              type="text"
              value={lastName}
              onChange={(event) =>
                setLastName(event.target.value)
              }
              placeholder="Last Name"
              required
              className="w-full rounded-2xl border border-neutral-300 px-5 py-4 text-black"
            />
          </div>

          <input
            type="email"
            value={email}
            onChange={(event) =>
              setEmail(event.target.value)
            }
            placeholder="Email Address"
            required
            className="w-full rounded-2xl border border-neutral-300 px-5 py-4 text-black"
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

          <label className="flex items-center gap-3 text-lg text-black">
            <input
              type="checkbox"
              checked={beta}
              onChange={(event) =>
                setBeta(event.target.checked)
              }
              className="w-5 h-5"
            />
            I&apos;d like early beta access.
          </label>

          <button
            type="submit"
            disabled={submitting}
            className="w-full rounded-full bg-black text-white px-6 py-4 text-lg disabled:opacity-50"
          >
            {submitting
              ? "Connecting..."
              : "Join Waitlist"}
          </button>

          {message && (
            <p className="text-center text-black">
              {message}
            </p>
          )}

          <p className="text-center text-sm text-neutral-500">
            Every registration is verified before being added
            <br />
            to our early access community.
          </p>
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
