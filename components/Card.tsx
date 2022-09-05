import React from "react";

interface CardProps {
  children: React.ReactNode;
}

export function Card({ children }: CardProps) {
  return (
    <>
      <div
        css={(theme) => ({
          border: "1px solid grey",
          borderRadius: theme.spacing(1),
          backgroundColor: theme.colors.common.white,
          minHeight: theme.spacing(10),
          marginBottom: theme.spacing(1),
          overflow: "hidden",
        })}
      >
        {children}
      </div>
    </>
  );
}
