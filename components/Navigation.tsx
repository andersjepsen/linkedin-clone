import React from "react";

interface NavigationProps {
  children: React.ReactNode;
  direction?: "vertical" | "horizontal";
}

export function Navigation({
  children,
  direction = "vertical",
}: NavigationProps) {
  return (
    <ul
      css={{
        listStyleType: "none",
        padding: 0,
        margin: 0,
        ...(direction === "horizontal" && {
          "& li": {
            display: "inline-block",
          },
        }),
      }}
    >
      {children}
    </ul>
  );
}

interface NavigationItemProps {
  label: string;
  icon?: React.ReactNode;
  active?: boolean;
  href?: string;
}

function NavigationItem({
  label,
  icon,
  active = false,
  href = "#",
}: NavigationItemProps) {
  return (
    <li
      css={{
        minWidth: 80,
      }}
    >
      <a
        href={href}
        css={{
          color: active ? "rgba(0,0,0,0.9)" : "rgba(0,0,0,0.6)",
          "&:hover": {
            color: "rgba(0,0,0,0.9)",
          },
        }}
      >
        <div
          css={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div>{icon}</div>
          <span>{label}</span>
        </div>
      </a>
    </li>
  );
}

Navigation.Item = NavigationItem;
