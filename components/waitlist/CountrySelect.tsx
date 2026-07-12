"use client";

import Select from "react-select";
import {
  getCountries,
  getCountryCallingCode,
  Country,
} from "react-phone-number-input";
import en from "react-phone-number-input/locale/en";

type Props = {
  value?: Country;
  onChange: (value?: Country) => void;
};

const countries = getCountries().map((country) => ({
  value: country,
  label: `${en[country]} +${getCountryCallingCode(country)}`,
}));

export default function CountrySelect({
  value,
  onChange,
}: Props) {
  const selectedCountry = countries.find(
    (country) => country.value === value
  );

  return (
    <Select
      instanceId="country-select"
      inputId="country-select"
      options={countries}
      value={selectedCountry}
      onChange={(option) =>
        onChange(option?.value)
      }
      placeholder="Select Country"
      isSearchable
      className="text-black"
      styles={{
        control: (base, state) => ({
          ...base,
          minHeight: 60,
          borderRadius: 16,
          borderColor: state.isFocused
            ? "#000000"
            : "#d4d4d4",
          boxShadow: "none",
          backgroundColor: "#ffffff",
          paddingLeft: 8,
        }),

        singleValue: (base) => ({
          ...base,
          color: "#000000",
        }),

        input: (base) => ({
          ...base,
          color: "#000000",
        }),

        placeholder: (base) => ({
          ...base,
          color: "#737373",
        }),

        menu: (base) => ({
          ...base,
          backgroundColor: "#ffffff",
          borderRadius: 16,
          overflow: "hidden",
          zIndex: 50,
        }),

        option: (base, state) => ({
          ...base,
          backgroundColor: state.isFocused
            ? "#f5f5f5"
            : "#ffffff",
          color: "#000000",
          cursor: "pointer",
        }),
      }}
    />
  );
}