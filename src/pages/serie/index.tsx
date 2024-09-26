import { EntertainmentItem, Search } from "@features/ui";
import S from "./index.module.scss";
import { useEffect, useState } from "react";
import { IEntertainmentType } from "@utils/typeUtils";
import axios from "axios";

const SeriePage = () => {
  const [datas, setDatas] = useState<IEntertainmentType[]>([]);
  const [workData, setWorkData] = useState<IEntertainmentType[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await axios.get(
          `${process.env.BACKEND_URL!}/api/entertainment?category=serie`
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
        placeholder="Search for TV series"
        basicData={datas}
        setSearchData={setWorkData}
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
                    setDatas={setDatas}
                    type="serie"
                  />
                ))}
            </div>
          </>
        ) : (
          <>
            <span className={S.sectiontitle}>TV Series</span>
            <div className={S.films}>
              {datas.length > 0 &&
                datas.map((data, index) => (
                  <EntertainmentItem
                    key={index}
                    data={data}
                    setDatas={setDatas}
                    type="serie"
                  />
                ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SeriePage;
