import { ThumbsUp, ThumbsDown, Heart, Smile, Frown } from "react-feather";
import { theme } from "../../styles/theme";

export const ReactionState = {
  like: { text: "Like", icon: <ThumbsUp />, color: theme.colors.blue.blue9 },
  dislike: {
    text: "Dislike",
    icon: <ThumbsDown />,
    color: theme.colors.blue.blue9,
  },
  love: { text: "Love", icon: <Heart />, color: theme.colors.red.red9 },
  happy: { text: "Happy", icon: <Smile />, color: theme.colors.amber.amber10 },
  sad: { text: "Sad", icon: <Frown />, color: theme.colors.amber.amber10 },
};
