import React from "react";
import { PostData } from "../types/index";

interface CardProps {
  children: React.ReactNode;
}

export function Card({ children }: CardProps) {
  return (
    <>
      <div
        css={(theme) => ({
          border: `1px solid ${theme.colors.blackA[2]}`,
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

interface CardHeaderProps {
  postdata: PostData;
}

function CardHeader({ postdata }: CardHeaderProps) {
  return (
    <div
      css={{
        height: "100px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div
        css={{
          height: "100px",
          display: "flex",
          flex: "0 0 100px",
          backgroundColor: "red",
        }}
      ></div>
      <div
        css={{
          height: "100px",
          display: "flex",
          flex: "0 1 300px",
          backgroundColor: "green",
        }}
      ></div>
      <div
        css={{
          height: "100px",
          display: "flex",
          flex: "0 0 100px",
          backgroundColor: "blue",
        }}
      ></div>
    </div>
  );
}

function CardContent({
  children,
  padding,
}: {
  children: React.ReactNode;
  padding?: "sm" | "md" | "lg";
}) {
  return (
    <div
      css={(theme) => ({
        ...(padding === "sm" && {
          padding: `${theme.spacing(0.25)} ${theme.spacing(0.5)}`,
        }),
        ...(padding === "md" && {
          padding: `${theme.spacing(0.5)} ${theme.spacing(1)}`,
        }),
        ...(padding === "lg" && {
          padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
        }),
      })}
    >
      {children}
    </div>
  );
}

Card.Content = CardContent;

Card.Header = CardHeader;
