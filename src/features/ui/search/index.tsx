import { Icon } from "@assets/icon";
import S from "./index.module.scss";
import { FC } from "react";

interface IProps {
  placeholder: string;
}

export const Search: FC<IProps> = ({ placeholder }) => {
  return (
    <div className={S.root}>
      <Icon name="Search" width="32" height="32" viewBox="0 0 32 32" />
      <div className={S.root_search}>
        <input type="text" placeholder={placeholder} className={S.search} />
        <div className={S.border} />
      </div>
    </div>
  );
};
