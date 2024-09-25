import Bookmark from "./Bookmark";
import Close from "./Close";
import FillBookmark from "./FillBookmark";
import Film from "./Film";
import LineBookmark from "./LineBookmark";
import Play from "./Play";
import Search from "./Search";
import Shape from "./Shape";
import TV from "./Tv";

export const Icons = {
  Bookmark,
  Close,
  FillBookmark,
  Film,
  LineBookmark,
  Play,
  Search,
  Shape,
  TV,
} as const;

export type IconNames = keyof typeof Icons;
