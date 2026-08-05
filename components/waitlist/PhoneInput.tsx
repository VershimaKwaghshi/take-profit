"use client";

import PhoneInput, { Value } from "react-phone-number-input";
import "react-phone-number-input/style.css";

type Props = {
  value?: Value;
  onChange: (value?: Value) => void;
};

export default function TPPhoneInput({ value, onChange }: Props) {
  return (
    <div className="tp-phone-input w-full rounded-md border border-line bg-paper px-5 py-4 text-ink transition focus-within:border-ink">
      <PhoneInput
        international
        defaultCountry="NG"
        value={value}
        onChange={onChange}
        placeholder="Phone number"
        className="w-full"
      />

      <style jsx global>{`
        .tp-phone-input .PhoneInputInput {
          background: transparent;
          border: none;
          outline: none;
          color: #14151a;
          font-size: 1rem;
        }
        .tp-phone-input .PhoneInputInput::placeholder {
          color: #6b6b6e;
        }
        .tp-phone-input .PhoneInputCountrySelect {
          background: transparent;
        }
        .tp-phone-input .PhoneInputCountryIcon {
          box-shadow: 0 0 0 1px #e6e4e1;
        }
      `}</style>
    </div>
  );
}