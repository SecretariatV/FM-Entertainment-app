import HomePage from "@pages/home";
import { INavType, IRouterType } from "./typeUtils";
import MainLayout from "@features/layout/mainLayout";

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
    viewBox: "13.54",
    path: "bookmark",
  },
];

export { ROUTER_DATA, NAV_DATA };
