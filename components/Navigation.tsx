import React from "react";
import Link from "next/link";

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
      <Link href={href} passHref>
        <a
          css={(theme) => ({
            color: active ? theme.colors.blackA[9] : theme.colors.blackA[6],
            "&:hover": {
              color: theme.colors.blackA[9],
            },
          })}
        >
          <div
            css={(theme) => ({
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              paddingBottom: theme.spacing(0.25),
              marginBottom: theme.spacing(-0.25),

              ...(active && {
                borderBottom: `${theme.spacing(0.25)} solid ${
                  theme.colors.blackA[9]
                }`,
              }),
            })}
          >
            <div>{icon}</div>
            <span>{label}</span>
          </div>
        </a>
      </Link>
    </li>
  );
}

Navigation.Item = NavigationItem;
