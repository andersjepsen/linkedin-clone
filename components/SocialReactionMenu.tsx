import React from "react";
import { Frown, Heart, Smile, ThumbsDown, ThumbsUp } from "react-feather";
import { theme } from "../styles/theme";
import { Card } from "./Card";
import { ReactionState, ReactionType } from "./helpers/ReactionState";
import { motion } from "framer-motion";

interface SocialReactionMenuProps {
  onClick?: (type: ReactionType) => void;
}

export function SocialReactionMenu({ onClick }: SocialReactionMenuProps) {
  const outerWrapper = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.3,
      },
    },
  };

  const child = {
    hidden: { y: 10, scale: 0 },
    show: { y: 0, scale: 1, transition: { type: "spring", bounce: 0.7 } },
  };

  return (
    <motion.div variants={outerWrapper} initial="hidden" animate="show">
      <Card padding="sm" shadow="sm">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          css={{ padding: "5px", display: "flex", gap: "5px" }}
        >
          <motion.div variants={child} style={{ originY: 1 }}>
            <SocialMediaEmoji
              color={theme.colors.blue.blue9}
              onClick={() => onClick?.(ReactionState.like.text)}
            >
              <ThumbsUp />
            </SocialMediaEmoji>
          </motion.div>
          <motion.div variants={child} style={{ originY: 1 }}>
            <SocialMediaEmoji
              color={theme.colors.blue.blue9}
              onClick={() => onClick?.(ReactionState.dislike.text)}
            >
              <ThumbsDown />
            </SocialMediaEmoji>
          </motion.div>
          <motion.div variants={child} style={{ originY: 1 }}>
            <SocialMediaEmoji
              color={theme.colors.red.red9}
              onClick={() => onClick?.(ReactionState.love.text)}
            >
              <Heart />
            </SocialMediaEmoji>
          </motion.div>
          <motion.div variants={child} style={{ originY: 1 }}>
            <SocialMediaEmoji
              color={theme.colors.amber.amber10}
              onClick={() => onClick?.(ReactionState.happy.text)}
            >
              <Smile />
            </SocialMediaEmoji>
          </motion.div>
          <motion.div variants={child} style={{ originY: 1 }}>
            <SocialMediaEmoji
              color={theme.colors.amber.amber10}
              onClick={() => onClick?.(ReactionState.sad.text)}
            >
              <Frown />
            </SocialMediaEmoji>
          </motion.div>
        </motion.div>
      </Card>
    </motion.div>
  );
}
interface SocialMediaEmojiProps {
  children: React.ReactNode;
  color?: string;
  onClick?: () => void;
}

function SocialMediaEmoji({ children, color, onClick }: SocialMediaEmojiProps) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.2 }}
      transition={{ duration: 0.1 }}
      whileTap={{ scale: 0.8 }}
      css={{
        color,
        borderStyle: "none",
        backgroundColor: "transparent",
      }}
    >
      {children}
    </motion.button>
  );
}
