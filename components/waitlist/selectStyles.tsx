import type { StylesConfig } from "react-select";

// Mirrors the tokens in app/globals.css. react-select needs raw values,
// it can't read Tailwind's CSS custom properties directly.
const tokens = {
  paper: "#ffffff",
  mist: "#f6f5f3",
  ink: "#14151a",
  ash: "#6b6b6e",
  line: "#e6e4e1",
  oxblood: "#7a2620",
};

export function selectStyles<
  Option extends { value?: unknown; label: string },
>(): StylesConfig<Option, false> {
  return {
    control: (base, state) => ({
      ...base,
      minHeight: 60,
      borderRadius: 20,
      borderColor: state.isFocused ? tokens.ink : tokens.line,
      boxShadow: "none",
      backgroundColor: tokens.paper,
      paddingLeft: 8,
      "&:hover": {
        borderColor: tokens.ink,
      },
    }),
    singleValue: (base) => ({
      ...base,
      color: tokens.ink,
    }),
    input: (base) => ({
      ...base,
      color: tokens.ink,
    }),
    placeholder: (base) => ({
      ...base,
      color: tokens.ash,
    }),
    menu: (base) => ({
      ...base,
      backgroundColor: tokens.paper,
      border: `1px solid ${tokens.line}`,
      borderRadius: 20,
      overflow: "hidden",
      zIndex: 50,
    }),
    option: (base, state) => ({
      ...base,
      backgroundColor: state.isSelected
        ? tokens.oxblood
        : state.isFocused
          ? tokens.mist
          : tokens.paper,
      color: state.isSelected ? tokens.paper : tokens.ink,
      cursor: "pointer",
    }),
    indicatorSeparator: (base) => ({
      ...base,
      backgroundColor: tokens.line,
    }),
  };
}