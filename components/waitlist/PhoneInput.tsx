"use client";

import PhoneInput, { Value } from "react-phone-number-input";
import "react-phone-number-input/style.css";

type Props = {
  value?: Value;
  onChange: (value?: Value) => void;
};

export default function TPPhoneInput({
  value,
  onChange,
}: Props) {
  return (
    <div className="w-full rounded-2xl border border-neutral-300 bg-white px-5 py-4 text-black focus-within:border-black">
      <PhoneInput
        international
        defaultCountry="NG"
        value={value}
        onChange={onChange}
        placeholder="Phone Number"
        className="w-full"
      />
    </div>
  );
}