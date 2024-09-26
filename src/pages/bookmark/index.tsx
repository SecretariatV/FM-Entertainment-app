import { EntertainmentItem, Search } from "@features/ui";
import S from "./index.module.scss";
import { useEffect, useState } from "react";
import { IEntertainmentType } from "@utils/typeUtils";
import axios from "axios";

const BookmarkPage = () => {
  const [movieDatas, setMovieDatas] = useState<IEntertainmentType[]>([]);
  const [tvDatas, setTvDatas] = useState<IEntertainmentType[]>([]);
  const [workData, setWorkData] = useState<IEntertainmentType[]>([]);
  const [basicData, setBasicData] = useState<IEntertainmentType[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await axios.get(
          `${process.env
            .BACKEND_URL!}/api/entertainment/getBookmark?category=movie`
        );
        setMovieDatas(data.data);
        const tvdata = await axios.get(
          `${process.env
            .BACKEND_URL!}/api/entertainment/getBookmark?category=serie`
        );
        setTvDatas(tvdata.data);
      } catch (error: any) {
        console.log("error", error.response.data.message);
      }
    };

    getData();
  }, []);

  useEffect(() => {
    setSearchValue("");
    setBasicData([...movieDatas, ...tvDatas]);
  }, [movieDatas, tvDatas]);

  useEffect(() => {
    if (basicData.length > 0) {
      setWorkData(basicData);
    }
  }, [basicData]);

  return (
    <div className={S.root}>
      <Search
        placeholder="Search for bookmarked shows"
        setSearchData={setWorkData}
        basicData={basicData}
        value={searchValue}
        setValue={setSearchValue}
      />
      <div className={S.content}>
        {searchValue ? (
          <>
            <span
              className={S.sectiontitle}
            >{`Found ${workData.length} results for '${searchValue}'`}</span>
            <div className={S.films}>
              {workData.length > 0 &&
                workData.map((data, index) => (
                  <EntertainmentItem
                    key={index}
                    data={data}
                    setDatas={
                      data.category === "Movie" ? setMovieDatas : setTvDatas
                    }
                    type={data.category === "Movie" ? "movie" : "serie"}
                    bookmark={true}
                  />
                ))}
            </div>
          </>
        ) : (
          <>
            <span className={S.sectiontitle}>Bookmarked Movies</span>
            <div className={S.films}>
              {movieDatas.length > 0 &&
                movieDatas.map((data, index) => (
                  <EntertainmentItem
                    key={index}
                    data={data}
                    setDatas={setMovieDatas}
                    type="movie"
                    bookmark={true}
                  />
                ))}
            </div>
            <span className={S.sectiontitle}>Bookmarked TV Series</span>
            <div className={S.films}>
              {tvDatas.length > 0 &&
                tvDatas.map((data, index) => (
                  <EntertainmentItem
                    key={index}
                    data={data}
                    setDatas={setTvDatas}
                    type="serie"
                    bookmark={true}
                  />
                ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default BookmarkPage;
