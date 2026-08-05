"use client";

import { useId } from "react";
import Select from "react-select";
import {
  getCountries,
  getCountryCallingCode,
  Country,
} from "react-phone-number-input";
import en from "react-phone-number-input/locale/en";
import { selectStyles } from "./selectStyles";

type Props = {
  value?: Country;
  onChange: (value?: Country) => void;
};

type Option = { value: Country; label: string };

const countries: Option[] = getCountries().map((country) => ({
  value: country,
  label: `${en[country]} +${getCountryCallingCode(country)}`,
}));

export default function CountrySelect({ value, onChange }: Props) {
  const selectId = useId();
  const selectedCountry = countries.find((country) => country.value === value);

  return (
    <Select<Option>
      instanceId={selectId}
      inputId={selectId}
      options={countries}
      value={selectedCountry}
      onChange={(option) => onChange(option?.value)}
      placeholder="Select country"
      isSearchable
      styles={selectStyles<Option>()}
    />
  );
}