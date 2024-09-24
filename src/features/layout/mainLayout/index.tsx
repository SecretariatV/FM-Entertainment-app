import Navbar from "@features/navbar";
import S from "./index.module.scss";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className={S.root}>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
