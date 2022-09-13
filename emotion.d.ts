import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    colors: {
      common: {
        white: string;
        black: string;
      };
      blackA: {
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
      };
      blue: {
        blue1: string;
        blue2: string;
        blue3: string;
        blue4: string;
        blue5: string;
        blue6: string;
        blue7: string;
        blue8: string;
        blue9: string;
        blue10: string;
        blue11: string;
        blue12: string;
      };
      green: {
        green1: string;
        green2: string;
        green3: string;
        green4: string;
        green5: string;
        green6: string;
        green7: string;
        green8: string;
        green9: string;
        green10: string;
        green11: string;
        green12: string;
      };
      red: {
        red1: string;
        red2: string;
        red3: string;
        red4: string;
        red5: string;
        red6: string;
        red7: string;
        red8: string;
        red9: string;
        red10: string;
        red11: string;
        red12: string;
      };
    };
    spacing: (value: number) => string;
    breakpoints: {
      xs: number;
      sm: number;
      md: number;
      lg: number;
    };
    radius: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      round: string;
      pill: string;
    };
  }
}
