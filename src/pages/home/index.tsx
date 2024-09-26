import { EntertainmentItem, Search, TrendingComponent } from "@features/ui";
import S from "./index.module.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { IEntertainmentType } from "@utils/typeUtils";
import clsx from "clsx";

const HomePage = () => {
  const [datas, setDatas] = useState<IEntertainmentType[]>([]);
  const [workData, setWorkData] = useState<IEntertainmentType[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await axios.get(
          `${process.env.BACKEND_URL!}/api/entertainment`
        );
        setDatas(data.data);
      } catch (error: any) {
        console.log("error", error.response.data.message);
      }
    };

    getData();
  }, []);

  useEffect(() => {
    if (datas.length > 0) {
      setWorkData(datas);
    }
  }, [datas]);

  return (
    <div className={S.root}>
      <Search
        placeholder="Search for movies or TV series"
        setSearchData={setWorkData}
        basicData={datas}
        value={searchValue}
        setValue={setSearchValue}
      />
      <div className={clsx(S.content, searchValue && S.search)}>
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
                    setDatas={setDatas}
                    type=""
                  />
                ))}
            </div>
          </>
        ) : (
          <>
            <span className={S.sectiontitle}>Trending</span>
            <TrendingComponent />
            <span className={S.sectiontitle}>Recommended for you</span>
            <div className={S.films}>
              {datas.length > 0 &&
                datas.map((data, index) => (
                  <EntertainmentItem
                    key={index}
                    data={data}
                    setDatas={setDatas}
                    type=""
                  />
                ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default HomePage;
