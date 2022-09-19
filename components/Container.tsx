import { Interpolation, Theme } from "@emotion/react";
import { theme } from "../styles/theme";

interface ContainerProps {
  children: React.ReactNode;
}

export function Container({ children }: ContainerProps) {
  return (
    <div
      css={(theme) => ({
        margin: "0 auto",
        [`@media (min-width: ${theme.breakpoints.xs}px)`]: {
          width: theme.breakpoints.xs,
        },
        [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
          width: theme.breakpoints.sm,
        },
        [`@media (min-width: ${theme.breakpoints.md}px)`]: {
          width: theme.breakpoints.md,
        },
        [`@media (min-width: ${theme.breakpoints.lg}px)`]: {
          width: theme.breakpoints.lg,
        },
      })}
    >
      {children}
    </div>
  );
}
