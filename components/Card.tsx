import React from "react";
import { theme } from "../styles/theme";
import { PostData } from "../types/index";
import { Avatar } from "./Avatar";
import { Globe, MoreHorizontal } from "react-feather";
import styled from "@emotion/styled";

import { Seperator } from "./Seperator";
interface CardProps {
  children: React.ReactNode;
  padding?: "sm" | "md" | "lg";
}

export function Card({ children, padding }: CardProps) {
  return (
    <>
      <div
        css={(theme) => ({
          border: `1px solid ${theme.colors.blackA[2]}`,
          borderRadius: theme.spacing(1),
          backgroundColor: theme.colors.common.white,
          minHeight: theme.spacing(10),
          ...(padding === "sm" && {
            padding: `${theme.spacing(0.5)} ${theme.spacing(1)}`,
          }),
          ...(padding === "md" && {
            padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
          }),
          ...(padding === "lg" && {
            padding: `${theme.spacing(1.5)} ${theme.spacing(3)}`,
          }),

          marginBottom: theme.spacing(1),
          overflow: "hidden",
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
  color: theme.colors.blackA[10], //"rgb(0, 0, 0, 1)",
  fontSize: "14px",
  fontWeight: "bolder",
  display: "block",
}));

const AutherSubtitle = styled.div({
  color: "rgb(0, 0, 0, 0.6)",
  fontSize: "12px",
  display: "block",
});

const PostAgeAndPrivacy = styled.div({
  color: "rgb(0, 0, 0, 0.6)",
  fontSize: "12px",
  display: "flex",
  justifyItems: "flex-start",
});

interface CardHeaderProps {
  postdata: PostData;
}

function CardHeader({ postdata }: CardHeaderProps) {
  return (
    <div
      css={{
        display: "flex",
        justifyContent: "space-between",
        gap: theme.spacing(1),
        paddingBottom: theme.spacing(1),
      }}
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
      <div css={{ color: theme.colors.blackA[6] }}>
        <MoreHorizontal />
      </div>
    </div>
  );
}

function CardContent({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}

Card.Content = CardContent;

Card.Header = CardHeader;
