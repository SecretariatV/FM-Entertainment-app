import { Button } from "@features/ui";
import S from "./index.module.scss";
import avatar from "@assets/avatar.png";
import { useApp } from "@contexts/appContext";
import clsx from "clsx";
import useCookie from "@hooks/useCookie";
import { Icon } from "@assets/icon";
import { NAV_DATA } from "@utils/dataUtils";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { setApp } = useApp();
  const navigate = useNavigate();
  const cookie = useCookie("jwt");

  const handleViewRegisterModal = () => {
    setApp((prevState) => ({ ...prevState, viewRegister: true }));
  };

  const handleChangePath = (path: string) => {
    navigate(path);
  };

  return (
    <div className={S.root}>
      <div className={S.wrapper}>
        <button type="button" className={S.logo} />
        <nav className={S.navbar}>
          {NAV_DATA.map((data, index) => (
            <li key={index} onClick={() => handleChangePath(data.path)}>
              <Icon
                name={data.name}
                width={data.width}
                height={data.height}
                viewBox={data.viewBox}
              />
            </li>
          ))}
        </nav>
        <Button
          title="Register"
          onClick={handleViewRegisterModal}
          className={clsx(S.register, cookie && S.hidden)}
        />
        <button type="button" className={clsx(S.avatar, !cookie && S.hidden)}>
          <img src={avatar} alt="avatar" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
