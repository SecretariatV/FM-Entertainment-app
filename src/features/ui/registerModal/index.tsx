import axios from "axios";
import { Input } from "../input";
import S from "./index.module.scss";
import { Button } from "../button";
import { useState } from "react";
import { useApp } from "@contexts/appContext";
import clsx from "clsx";
import { Icon } from "@assets/icon";

export const RegisterModal = () => {
  const { app, setApp } = useApp();
  const [mode, setMode] = useState<boolean>(false);

  const handleChangeMode = (mode: boolean) => {
    setMode(mode);
  };

  const handleRegister = async () => {
    try {
      await axios.post(
        `${process.env.BACKEND_URL!}/api/auth/signup`,
        {
          name: "ares",
          email: "ares.gmail11.com",
          password: "1515151515",
        },
        { withCredentials: true }
      );

      setApp((prevState) => ({ ...prevState, viewRegister: false }));
    } catch (error) {}
  };

  const handleLogin = async () => {
    try {
      await axios.post(
        `${process.env.BACKEND_URL!}/api/auth/login`,
        {
          email: "ares.gmail11.com",
          password: "1515151515",
        },
        { withCredentials: true }
      );

      setApp((prevState) => ({
        ...prevState,
        viewRegister: false,
        registered: true,
      }));
    } catch (error) {}
  };

  const handleClose = () => {
    setApp((prevState) => ({ ...prevState, viewRegister: false }));
  };

  return (
    <div className={clsx(S.root, app.viewRegister && S.active)}>
      <div className={S.container}>
        <div className={S.wrapper}>
          <div className={S.modal}>
            <div className={S.modal_header}>
              <span className={S.modal_title}>Login</span>
              <button type="button" onClick={handleClose}>
                <Icon
                  name="Close"
                  width="24"
                  height="24"
                  viewBox="0 0 32 32"
                  className={S.modal_close}
                />
              </button>
            </div>
            <div className={S.modal_form}>
              <Input id="useremail" placeholder="Email address" type="text" />
              <Input id="userpassword" placeholder="Password" type="password" />
            </div>
            <div className={S.modal_form}>
              <Button title="Login to your account" onClick={handleLogin} />
              <p className={S.modal_change_mode}>
                Don't have an account?{" "}
                <span>
                  Sign Up{" "}
                  <input
                    type="checkbox"
                    id="change_mode"
                    checked={mode}
                    onChange={() => handleChangeMode(true)}
                  />
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className={S.wrapper}>
          <div className={S.modal}>
            <div className={S.modal_header}>
              <span className={S.modal_title}>Signup</span>
              <button type="button" onClick={handleClose}>
                <Icon
                  name="Close"
                  width="24"
                  height="24"
                  viewBox="0 0 32 32"
                  className={S.modal_close}
                />
              </button>
            </div>
            <div className={S.modal_form}>
              <Input id="email" placeholder="Email address" type="text" />
              <Input id="password" placeholder="Password" type="password" />
              <Input
                id="repeat-password"
                placeholder="Repeat Password"
                type="password"
              />
              <Button title="Create an account" onClick={handleRegister} />
              <p className={S.modal_change_mode}>
                Alread have an account{" "}
                <span>
                  Login{" "}
                  <input
                    type="checkbox"
                    id="change_mode"
                    checked={mode}
                    onChange={() => handleChangeMode(false)}
                  />
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
