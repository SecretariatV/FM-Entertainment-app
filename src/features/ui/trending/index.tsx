import { useEffect, useState } from "react";
import S from "./index.module.scss";
import { IEntertainmentType } from "@utils/typeUtils";
import axios from "axios";
import TrendingItem from "./item";

export const TrendingComponent = () => {
  const [datas, setDatas] = useState<IEntertainmentType[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await axios.get(
          `${process.env.BACKEND_URL!}/api/entertainment?category=trending`
        );

        setDatas(data.data);
      } catch (error) {}
    };

    getData();
  }, []);

  return (
    <div className={S.root}>
      <div className={S.container}>
        {datas.map((data, index) => (
          <TrendingItem key={index} data={data} setDatas={setDatas} />
        ))}
      </div>
    </div>
  );
};
