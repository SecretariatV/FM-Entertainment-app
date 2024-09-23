import { FC } from "react";
import S from "./index.module.scss";

interface IProps {
  title: string;
  onClick: () => void;
}

export const Button: FC<IProps> = ({ title, onClick }) => {
  return (
    <button type="button" className={S.root} onClick={onClick}>
      {title}
    </button>
  );
};
