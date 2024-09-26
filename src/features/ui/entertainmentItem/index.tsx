import { Dispatch, FC, SetStateAction } from "react";
import S from "./index.module.scss";
import { IEntertainmentType } from "@utils/typeUtils";
import { Icon } from "@assets/icon";
import clsx from "clsx";
import axios from "axios";

interface IProps {
  data: IEntertainmentType;
  setDatas: Dispatch<SetStateAction<IEntertainmentType[]>>;
  type: "movie" | "serie" | "";
  bookmark?: boolean | false;
}

export const EntertainmentItem: FC<IProps> = ({
  data,
  setDatas,
  type,
  bookmark,
}) => {
  const handleChangeBookmarkState = async () => {
    try {
      const res = await axios.post(
        `${process.env.BACKEND_URL!}/api/entertainment/changeBookmark${
          type === "movie"
            ? "?category=movie"
            : type === "serie"
            ? "?category=serie"
            : ""
        }`,
        { _id: data._id, isBookmarked: data.isBookmarked, key: bookmark }
      );

      setDatas(res.data);
    } catch (error) {}
  };

  return (
    <div className={S.root}>
      <picture className={S.root_thumbnail}>
        <source
          media="(min-width: 1024px)"
          srcSet={data.thumbnail.regular.large}
        />
        <source
          media="(min-width: 768px)"
          srcSet={data.thumbnail.regular.medium}
        />
        <img
          src={data.thumbnail.regular.small}
          alt={`${data.title}-${data.year}-image`}
          className={S.thumbnail}
        />
        <div className={S.player}>
          <Icon name="Play" width="30" height="30" viewBox="0 0 30 30" />
          <span className={S.player_play}>Play</span>
        </div>
        <button
          type="button"
          className={clsx(S.bookmark, data.isBookmarked && S.active)}
          onClick={handleChangeBookmarkState}
        >
          {data.isBookmarked ? (
            <Icon
              name="FillBookmark"
              width="12"
              height="14"
              viewBox="0 0 12 14"
            />
          ) : (
            <Icon
              name="LineBookmark"
              width="12"
              height="14"
              viewBox="0 0 12 14"
            />
          )}
        </button>
      </picture>
      <div className={S.root_marker}>
        <div className={S.root_marker_category}>
          <span className={S.category}>{data.year}</span>
          <span className={S.category}>
            <Icon
              name={`${data.category === "Movie" ? "Film" : "TV"}`}
              width="10"
              height="10"
              viewBox="0 0 16 16"
            />
            {data.category}
          </span>
          <span className={S.category}>{data.rating}</span>
        </div>
        <p>{data.title}</p>
      </div>
    </div>
  );
};
