import { ThumbsUp, ThumbsDown, Smile, Heart, Frown } from "react-feather";
import React from "react";

export function SocialReactionMenu() {
  const [popUpMenu, setPopUpMenu] = React.useState(false);
  return (
    <>
      <div css={{ display: "flex" }}>
        <ThumbsUp />
        <ThumbsDown />
        <Heart />
        <Smile />
        <Frown />
      </div>
    </>
  );
}
