import { EntertainmentItem, Search, TrendingComponent } from "@features/ui";
import S from "./index.module.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { IEntertainmentType } from "@utils/typeUtils";

const HomePage = () => {
  const [datas, setDatas] = useState<IEntertainmentType[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await axios.get("http://localhost:4000/api/entertainment");
        setDatas(data.data);
      } catch (error: any) {
        console.log("error", error.response.data.message);
      }
    };

    getData();
  }, []);
  return (
    <div className={S.root}>
      <Search placeholder="Search for movies or TV series" />
      <div className={S.content}>
        <span className={S.sectiontitle}>Trending</span>
        <TrendingComponent />
        <span className={S.sectiontitle}>Recommended for you</span>
        <div className={S.films}>
          {datas.length > 0 &&
            datas.map((data, index) => (
              <EntertainmentItem key={index} data={data} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
