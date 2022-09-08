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

Card.Header = CardHeader;
