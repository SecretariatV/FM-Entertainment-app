import HomePage from "@pages/home";
import { INavType, IRouterType } from "./typeUtils";
import MainLayout from "@features/layout/mainLayout";
import MoviePage from "@pages/movie";
import SeriePage from "@pages/serie";
import BookmarkPage from "@pages/bookmark";

const ROUTER_DATA: IRouterType[] = [
  {
    title: "Main Layout",
    path: "/",
    element: <MainLayout />,
    children: [
      {
        title: "Home",
        path: "",
        element: <HomePage />,
      },
      { title: "Movie", path: "movie", element: <MoviePage /> },
      { title: "Series", path: "series", element: <SeriePage /> },
      { title: "Bookmark", path: "bookmark", element: <BookmarkPage /> },
    ],
  },
];

const NAV_DATA: INavType[] = [
  {
    name: "Shape",
    width: "16",
    height: "16",
    path: "",
  },
  {
    name: "Film",
    width: "16",
    height: "16",
    path: "movie",
  },
  {
    name: "TV",
    width: "16",
    height: "16",
    path: "series",
  },
  {
    name: "Bookmark",
    width: "13.54",
    height: "16",
    viewBox: "0 0 13.54 16",
    path: "bookmark",
  },
];

export { ROUTER_DATA, NAV_DATA };
