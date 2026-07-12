"use client";

import Select from "react-select";

type Props = {
  value?: string;
  onChange: (value?: string) => void;
};

const options = [
  {
    value: "daily",
    label: "Daily",
  },
  {
    value: "weekly",
    label: "Weekly",
  },
  {
    value: "occasionally",
    label: "Occasionally",
  },
  {
    value: "not_active",
    label: "Not currently trading",
  },
];

export default function FrequencySelect({
  value,
  onChange,
}: Props) {
  const selectedOption = options.find(
    (option) => option.value === value
  );

  return (
    <Select
      instanceId="frequency-select"
      inputId="frequency-select"
      options={options}
      value={selectedOption}
      onChange={(option) =>
        onChange(option?.value)
      }
      placeholder="Trading Frequency"
      isSearchable={false}
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
        }),

        singleValue: (base) => ({
          ...base,
          color: "#000000",
        }),

        placeholder: (base) => ({
          ...base,
          color: "#737373",
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