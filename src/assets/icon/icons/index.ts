import Bookmark from "./Bookmark";
import Close from "./Close";
import Film from "./Film";
import Shape from "./Shape";
import TV from "./Tv";

export const Icons = {
  Bookmark,
  Close,
  Film,
  Shape,
  TV,
} as const;

export type IconNames = keyof typeof Icons;
