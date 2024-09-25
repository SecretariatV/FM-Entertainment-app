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

interface IImageType {
  small: string;
  medium: string;
  large: string;
}

interface ITrendingType extends Omit<IImageType, "medium"> {}

interface IEntertainmentType {
  title: string;
  thumbnail: {
    trending?: ITrendingType;
    regular: IImageType;
  };
  year: number;
  category: string;
  rating: string;
}

export type { IRouterType, IAppProps, INavType, IEntertainmentType };
