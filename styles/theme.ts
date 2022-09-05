export const theme = {
  colors: {
    common: {
      black: "#000",
      white: "#fff",
    },
    blackA: {
      1: "rgba(0,0,0,0.1)",
      2: "rgba(0,0,0,0.2)",
      3: "rgba(0,0,0,0.3)",
      4: "rgba(0,0,0,0.4)",
      5: "rgba(0,0,0,0.5)",
      6: "rgba(0,0,0,0.6)",
      7: "rgba(0,0,0,0.7)",
      8: "rgba(0,0,0,0.8)",
      9: "rgba(0,0,0,0.9)",
      10: "rgba(0,0,0,1)",
    },
  },
  spacing: (space: number) => {
    return `${space * 8}px`;
  },
  fontSizes: {
    1: "12px",
  },
  breakpoints: {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
  },
};
