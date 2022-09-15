import React, { MouseEventHandler } from "react";

interface ButtonProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  active?: boolean;
  href?: string;
  onClick?: () => void;
  color?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { children, icon, active = false, href = "#", onClick, color, ...props },
    forwardRef
  ) => {
    return (
      <button
        {...props}
        ref={forwardRef}
        onClick={onClick}
        css={(theme) => ({
          flex: "1",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: theme.spacing(0.5),
          color: color ?? theme.colors.blackA.blackA11,
          fontWeight: "bolder",
          fontSize: "14px",
          padding: theme.spacing(1),
          backgroundColor: "Transparent",
          cursor: "pointer",
          border: "none",
          borderRadius: theme.spacing(0.5),
          ":hover": { backgroundColor: theme.colors.blackA.blackA6 },
          ":active": {},
        })}
      >
        <div css={{ flex: 0 }}>{icon}</div>
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
