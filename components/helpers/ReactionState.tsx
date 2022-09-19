import { ThumbsUp, ThumbsDown, Heart, Smile, Frown } from "react-feather";
import { theme } from "../../styles/theme";

export enum ReactionType {
  Like = "Like",
  Dislike = "Dislike",
  Love = "Love",
  Happy = "Happy",
  Sad = "Sad",
}

export const ReactionState = {
  like: {
    text: ReactionType.Like,
    icon: <ThumbsUp />,
    color: theme.colors.blue.blue9,
  },
  dislike: {
    text: ReactionType.Dislike,
    icon: <ThumbsDown />,
    color: theme.colors.blue.blue9,
  },
  love: {
    text: ReactionType.Love,
    icon: <Heart />,
    color: theme.colors.red.red9,
  },
  happy: {
    text: ReactionType.Happy,
    icon: <Smile />,
    color: theme.colors.amber.amber10,
  },
  sad: {
    text: ReactionType.Sad,
    icon: <Frown />,
    color: theme.colors.amber.amber10,
  },
};
