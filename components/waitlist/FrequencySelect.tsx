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
  { value: "daily", label: "Daily" },
  { value: "weekly", label: "Weekly" },
  { value: "occasionally", label: "Occasionally" },
  { value: "not_active", label: "Not currently trading" },
];

export default function FrequencySelect({ value, onChange }: Props) {
  const selectId = useId();
  const selectedOption = options.find((option) => option.value === value);

  return (
    <Select<Option>
      instanceId={selectId}
      inputId={selectId}
      options={options}
      value={selectedOption}
      onChange={(option) => onChange(option?.value)}
      placeholder="Trading frequency"
      isSearchable={false}
      styles={selectStyles<Option>()}
    />
  );
}