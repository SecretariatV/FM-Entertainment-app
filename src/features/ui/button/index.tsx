import { FC } from "react";
import S from "./index.module.scss";
import clsx from "clsx";

interface IProps {
  title: string;
  onClick: () => void;
  className?: string;
}

export const Button: FC<IProps> = ({ title, onClick, className }) => {
  return (
    <button type="button" className={clsx(S.root, className)} onClick={onClick}>
      {title}
    </button>
  );
};
