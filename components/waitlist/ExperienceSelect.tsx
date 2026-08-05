"use client";

import { useId } from "react";
import Select from "react-select";
import { selectStyles } from "./selectStyles";

type Props = {
  value?: string;
  onChange: (value?: string) => void;
};

type Option = { value: string; label: string };

const options: Option[] = [
  { value: "new", label: "New to trading" },
  { value: "1_year", label: "1 year" },
  { value: "3_years", label: "3 years" },
  { value: "5_plus_years", label: "5+ years" },
];

export default function ExperienceSelect({ value, onChange }: Props) {
  const selectId = useId();
  const selectedOption = options.find((option) => option.value === value);

  return (
    <Select<Option>
      instanceId={selectId}
      inputId={selectId}
      options={options}
      value={selectedOption}
      onChange={(option) => onChange(option?.value)}
      placeholder="Trading experience"
      isSearchable={false}
      styles={selectStyles<Option>()}
    />
  );
}