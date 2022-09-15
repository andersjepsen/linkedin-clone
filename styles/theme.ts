import {
  blackA,
  blue,
  green,
  red,
  yellow,
  orange,
  amber,
} from "@radix-ui/colors";

export const theme = {
  colors: {
    common: {
      black: "#000",
      white: "#fff",
    },
    blue,
    green,
    red,
    blackA,
    yellow,
    orange,
    amber,
  },
  spacing: (space: number) => {
    return `${space * 8}px`;
  },
  fontSizes: {
    1: "12px",
  },
  breakpoints: {
    xs: 576,
    sm: 768,
    md: 992,
    lg: 1200,
  },
  radius: {
    xs: "2px",
    sm: "4px",
    md: "8px",
    lg: "12px",
    round: "50%",
    pill: "9999px",
  },
};
