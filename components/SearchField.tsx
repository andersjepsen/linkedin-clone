import React from "react";

export function SearchField(
  props: React.ClassAttributes<HTMLInputElement> &
    React.InputHTMLAttributes<HTMLInputElement>
) {
  return (
    <input
      css={(theme) => ({
        color: theme.colors.blackA.blackA12,
        backgroundColor: "#eef3f8",
        border: 0,
        borderRadius: theme.radius.sm,
        padding: theme.spacing(1),
        height: theme.spacing(4),
      })}
      {...props}
    />
  );
}
