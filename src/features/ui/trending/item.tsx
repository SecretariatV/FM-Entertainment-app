import { IEntertainmentType } from "@utils/typeUtils";
import S from "./item.module.scss";
import { FC } from "react";
import { Icon } from "@assets/icon";

interface IProps {
  data: IEntertainmentType;
}

const TrendingItem: FC<IProps> = ({ data }) => {
  return (
    <div className={S.root}>
      <picture>
        <source
          media="(min-width: 1024px)"
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
      <div className={S.root_bookmark}>
        <Icon name="LineBookmark" width="12" height="14" viewBox="0 0 12 14" />
      </div>
    </div>
  );
};

export default TrendingItem;
