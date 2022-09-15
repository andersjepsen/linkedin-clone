import styled from "@emotion/styled";
import React from "react";
import { Globe, MoreHorizontal } from "react-feather";
import { theme } from "../styles/theme";
import { PostData } from "../types/index";
import { Avatar } from "./Avatar";

interface CardProps {
  children: React.ReactNode;
  padding?: "sm" | "md" | "lg";
  shadow?: "sm" | "md" | "lg";
}

export function Card({ children, padding, shadow }: CardProps) {
  return (
    <>
      <div
        css={(theme) => ({
          border: `1px solid ${theme.colors.blackA.blackA9}`,
          borderRadius: theme.spacing(1),
          backgroundColor: theme.colors.common.white,
          minHeight: theme.spacing(1),
          ...(padding === "sm" && {
            padding: `${theme.spacing(0.5)} ${theme.spacing(1)}`,
          }),
          ...(padding === "md" && {
            padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
          }),
          ...(padding === "lg" && {
            padding: `${theme.spacing(1.5)} ${theme.spacing(3)}`,
          }),

          ...(shadow === "sm" && {
            boxShadow: `0 ${theme.spacing(0.5)} ${theme.spacing(1)} ${
              theme.colors.blackA.blackA9
            }`,
          }),
          ...(shadow === "md" && {
            boxShadow: `0 ${theme.spacing(1)} ${theme.spacing(
              2
            )} ${theme.spacing(1)} ${theme.colors.blackA.blackA9}`,
          }),
          ...(shadow === "lg" && {
            boxShadow: `0 ${theme.spacing(2)} ${theme.spacing(
              3
            )} ${theme.spacing(1)} ${theme.colors.blackA.blackA9}`,
          }),
          marginBottom: theme.spacing(1),
        })}
      >
        {children}
      </div>
    </>
  );
}

const AvatarWrapper = styled.div({ display: "flex", flex: "0 0 0" });

const AuthorInfo = styled.div({
  display: "flex",
  flex: "1 1 0",
  flexDirection: "column",
  justifyContent: "space-between",
  textOverflow: "ellipsis",
});

const AuthorName = styled.div(({ theme }) => ({
  color: theme.colors.common.black,
  fontSize: "14px",
  fontWeight: "bolder",
  display: "block",
}));

const AutherSubtitle = styled.div(({ theme }) => ({
  color: theme.colors.blackA.blackA11,
  fontSize: "12px",
  display: "block",
}));

const PostAgeAndPrivacy = styled.div(({ theme }) => ({
  color: theme.colors.blackA.blackA11,
  fontSize: "12px",
  display: "flex",
  justifyItems: "flex-start",
}));

interface CardHeaderProps {
  postdata: PostData;
}

function CardHeader({ postdata }: CardHeaderProps) {
  return (
    <div
      css={(theme) => ({
        display: "flex",
        justifyContent: "space-between",
        gap: theme.spacing(1),
        paddingBottom: theme.spacing(1),
      })}
    >
      <AvatarWrapper>
        <Avatar source={postdata.createdBy.avatarUrl}></Avatar>
      </AvatarWrapper>
      <AuthorInfo>
        <AuthorName>{postdata.createdBy.name}</AuthorName>
        <AutherSubtitle>{postdata.createdBy.subTitle}</AutherSubtitle>
        <PostAgeAndPrivacy>
          <span>30m &#183;</span>
          {<Globe css={{ height: "14px" }} />}
        </PostAgeAndPrivacy>
      </AuthorInfo>
      <div
        css={(theme) => ({
          color: theme.colors.blackA.blackA11,
        })}
      >
        <MoreHorizontal />
      </div>
    </div>
  );
}

function CardContent({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}

function CardFooter({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}

Card.Header = CardHeader;
Card.Content = CardContent;
Card.Footer = CardFooter;
