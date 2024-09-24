import { IconNames } from "@assets/icon/icons";

interface IAppProps {
  viewRegister: boolean;
}

interface IRouterType {
  title: string;
  path: string;
  element: JSX.Element;
  children?: IRouterType[];
}

interface INavType {
  name: IconNames;
  width: string;
  height: string;
  viewBox?: string | "0 0 16 16";
  path: string;
}

export type { IRouterType, IAppProps, INavType };
