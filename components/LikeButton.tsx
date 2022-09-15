import * as HoverCard from "@radix-ui/react-hover-card";
import { useState } from "react";
import { theme } from "../styles/theme";
import { Button } from "./Button";
import { ReactionState } from "./helpers/ReactionState";
import { SocialReactionMenu } from "./SocialReactionMenu";

export function LikeButton() {
  const [reaction, setReaction] = useState<string | undefined>(undefined);
  const selectedReaction = Object.values(ReactionState).find(
    (val) => val.text === reaction
  ) ?? { ...ReactionState.like, color: theme.colors.blackA.blackA11 };

  const handleReactionState = () => {
    if (reaction == undefined) {
      setReaction(ReactionState.like.text);
    } else {
      setReaction(undefined);
    }
  };

  return (
    <HoverCard.Root>
      <HoverCard.HoverCardTrigger asChild>
        <Button
          onClick={handleReactionState}
          icon={selectedReaction?.icon}
          color={selectedReaction?.color}
        >
          {selectedReaction?.text}
        </Button>
      </HoverCard.HoverCardTrigger>
      <HoverCard.Content side="top">
        <SocialReactionMenu onClick={setReaction} />
      </HoverCard.Content>
    </HoverCard.Root>
  );
}
