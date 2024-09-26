import { IEntertainmentType } from "@utils/typeUtils";
import S from "./item.module.scss";
import { Dispatch, FC, SetStateAction } from "react";
import { Icon } from "@assets/icon";
import clsx from "clsx";
import axios from "axios";

interface IProps {
  data: IEntertainmentType;
  setDatas: Dispatch<SetStateAction<IEntertainmentType[]>>;
}

const TrendingItem: FC<IProps> = ({ data, setDatas }) => {
  const handleChangeBookmarkState = async () => {
    try {
      const res = await axios.post(
        `${process.env
          .BACKEND_URL!}/api/entertainment/changeBookmark?category=trending`,
        { _id: data._id, isBookmarked: data.isBookmarked }
      );

      setDatas(res.data);
    } catch (error) {}
  };

  return (
    <div className={S.root}>
      <picture>
        <source
          media="(min-width: 768px)"
          srcSet={data.thumbnail.trending?.large}
        />
        <img
          src={data.thumbnail.trending?.small}
          alt={`${data.title}-${data.year}-image`}
          className={S.thumbnail}
        />
        <div className={S.player}>
          <Icon name="Play" width="30" height="30" viewBox="0 0 30 30" />
          <span className={S.player_play}>Play</span>
        </div>
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
      <button
        type="button"
        className={clsx(S.root_bookmark, data.isBookmarked && S.active)}
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
    </div>
  );
};

export default TrendingItem;
