import React from "react";
import { Frown, Heart, Smile, ThumbsDown, ThumbsUp } from "react-feather";
import { theme } from "../styles/theme";
import { Card } from "./Card";
import { ReactionState, ReactionType } from "./helpers/ReactionState";

interface SocialReactionMenuProps {
  onClick?: (type: ReactionType) => void;
}

export function SocialReactionMenu({ onClick }: SocialReactionMenuProps) {
  return (
    <Card padding="sm" shadow="sm">
      <div>
        <div css={{ padding: "5px", display: "flex", gap: "5px" }}>
          <SocialMediaEmoji
            color={theme.colors.blue.blue9}
            onClick={() => onClick?.(ReactionState.like.text)}
          >
            <ThumbsUp />
          </SocialMediaEmoji>
          <SocialMediaEmoji
            color={theme.colors.blue.blue9}
            onClick={() => onClick?.(ReactionState.dislike.text)}
          >
            <ThumbsDown />
          </SocialMediaEmoji>
          <SocialMediaEmoji
            color={theme.colors.red.red9}
            onClick={() => onClick?.(ReactionState.love.text)}
          >
            <Heart />
          </SocialMediaEmoji>
          <SocialMediaEmoji
            color={theme.colors.amber.amber10}
            onClick={() => onClick?.(ReactionState.happy.text)}
          >
            <Smile />
          </SocialMediaEmoji>
          <SocialMediaEmoji
            color={theme.colors.amber.amber10}
            onClick={() => onClick?.(ReactionState.sad.text)}
          >
            <Frown />
          </SocialMediaEmoji>
        </div>
      </div>
    </Card>
  );
}

interface SocialMediaEmojiProps {
  children: React.ReactNode;
  color?: string;
  onClick?: () => void;
}

function SocialMediaEmoji({ children, color, onClick }: SocialMediaEmojiProps) {
  return (
    <button
      onClick={onClick}
      css={{
        ":hover": { transform: "scale(1.5)" },
        transition: "0.1s ease-out",
        transformOrigin: "50% 100%",
        color,
        borderStyle: "none",
        backgroundColor: "transparent",
      }}
    >
      {children}
    </button>
  );
}
