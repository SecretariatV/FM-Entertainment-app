import { FC } from "react";
import S from "./index.module.scss";
import { IEntertainmentType } from "@utils/typeUtils";
import { Icon } from "@assets/icon";

interface IProps {
  data: IEntertainmentType;
}

export const EntertainmentItem: FC<IProps> = ({ data }) => {
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
