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
    };
    spacing: (value: number) => string;
    breakpoints: {
      xs: number;
      sm: number;
      md: number;
      lg: number;
    };
  }
}
