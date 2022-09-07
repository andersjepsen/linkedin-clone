import React from "react";

interface AvatarProps {
  source: string;
  size?: "sm" | "md" | "lg";
  variant?: "round" | "square";
}

export function Avatar({
  source,
  size = "md",
  variant = "round",
}: AvatarProps) {
  const borderRadius = React.useMemo(() => {
    if (variant === "round") {
      return "50%";
    }
    if (variant === "square") {
      return "0%";
    } else {
      return undefined;
    }
  }, [variant]);

  const avatarSize = React.useMemo(() => {
    if (size === "sm") {
      return "25px";
    }
    if (size === "md") {
      return "50px";
    }
    if (size === "lg") {
      return "75px";
    }
    return undefined;
  }, [size]);

  return (
    <div
      css={{
        backgroundSize: "cover",
        backgroundImage: `url(${source})`,
        borderRadius,
        width: avatarSize,
        height: avatarSize,
      }}
    ></div>
  );
}
