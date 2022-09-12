import React from "react";
import { theme } from "../styles/theme";
import { PostData } from "../types/index";
import { Avatar } from "./Avatar";
import { Globe } from "react-feather";
import styled from "@emotion/styled";
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

const AuthorInfo = styled.div({
  display: "flex",
  flex: "1 1 0",
  flexDirection: "column",
  justifyContent: "space-between",
  textOverflow: "ellipsis",
});

interface CardHeaderProps {
  postdata: PostData;
}

function CardHeader({ postdata }: CardHeaderProps) {
  return (
    <div
      css={{
        //height: "100px",
        display: "flex",
        justifyContent: "space-between",
        gap: theme.spacing(1),
        padding: theme.spacing(1),
      }}
    >
      <div
        css={{
          //Avatar
          display: "flex",
          flex: "0 0 0",
          textOverflow: "ellipsis",
        }}
      >
        <Avatar source={postdata.createdBy.avatarUrl}></Avatar>
      </div>
      <AuthorInfo>
        <span
          css={{
            //Name
            color: "rgb(0, 0, 0, 1)",
            fontSize: "14px",
            fontWeight: "bolder",
            display: "block",
          }}
        >
          {postdata.createdBy.name}
        </span>
        <span
          css={{
            //Subtitle
            color: "rgb(0, 0, 0, 0.6)",
            fontSize: "12px",
            display: "block",
          }}
        >
          {postdata.createdBy.subTitle}
        </span>
        <span
          css={{
            //Post age and privacy
            color: "rgb(0, 0, 0, 0.6)",
            fontSize: "12px",
            display: "flex",
            justifyItems: "flex-start",
          }}
        >
          <span>32m &#183;</span>
          {<Globe css={{ height: "14px", strokeWidth: "bold" }} />}
        </span>
      </AuthorInfo>
      <div
        css={{
          //more options
          display: "flex",
          flex: "0 0 0",
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
