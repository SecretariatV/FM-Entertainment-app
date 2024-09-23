import { FC, HTMLInputTypeAttribute } from "react";
import S from "./index.module.scss";

interface IProps {
  type: HTMLInputTypeAttribute;
  placeholder: string;
  id: string;
}

export const Input: FC<IProps> = ({ type, placeholder, id }) => {
  return (
    <div className={S.root}>
      <input
        type={type}
        id={`${id}-element`}
        placeholder={placeholder}
        className={S.input}
      />
      <div className={S.border} />
    </div>
  );
};
