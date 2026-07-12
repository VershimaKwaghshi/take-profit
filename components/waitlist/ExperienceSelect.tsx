"use client";

import Select from "react-select";

type Props = {
  value?: string;
  onChange: (value?: string) => void;
};

const options = [
  {
    value: "new",
    label: "New to trading",
  },
  {
    value: "1_year",
    label: "1 year",
  },
  {
    value: "3_years",
    label: "3 years",
  },
  {
    value: "5_plus_years",
    label: "5+ years",
  },
];

export default function ExperienceSelect({
  value,
  onChange,
}: Props) {
  const selectedOption = options.find(
    (option) => option.value === value
  );

  return (
    <Select
      instanceId="experience-select"
      inputId="experience-select"
      options={options}
      value={selectedOption}
      onChange={(option) =>
        onChange(option?.value)
      }
      placeholder="Trading Experience"
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