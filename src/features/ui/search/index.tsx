import { Icon } from "@assets/icon";
import S from "./index.module.scss";
import { ChangeEvent, Dispatch, FC, SetStateAction } from "react";
import { IEntertainmentType } from "@utils/typeUtils";

interface IProps {
  placeholder: string;
  setSearchData: Dispatch<SetStateAction<IEntertainmentType[]>>;
  basicData: IEntertainmentType[];
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}

export const Search: FC<IProps> = ({
  placeholder,
  setSearchData,
  basicData,
  value,
  setValue,
}) => {
  const changeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);

    const result = basicData.filter((data) =>
      data.title.toLowerCase().includes(e.target.value.toLowerCase())
    );

    setSearchData([...result]);
  };

  return (
    <div className={S.root}>
      <Icon name="Search" width="32" height="32" viewBox="0 0 32 32" />
      <div className={S.root_search}>
        <input
          type="text"
          placeholder={placeholder}
          className={S.search}
          value={value}
          onChange={(e) => changeInputValue(e)}
        />
        <div className={S.border} />
      </div>
    </div>
  );
};
