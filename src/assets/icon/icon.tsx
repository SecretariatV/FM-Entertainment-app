import { FC } from "react";
import { IconNames, Icons } from "./icons";

interface IProps {
  name: IconNames;
  width: string;
  height: string;
  viewBox?: string | "0 0 16 16";
  className?: string;
}

export const Icon: FC<IProps> = ({
  name,
  width,
  height,
  className,
  viewBox,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {Icons[name]()}
    </svg>
  );
};
