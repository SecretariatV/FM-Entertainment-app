import axios from "axios";
import { Input } from "../input";
import S from "./index.module.scss";
import { Button } from "../button";
import { useState } from "react";
import clsx from "clsx";

export const RegisterModal = () => {
  const [mode, setMode] = useState<boolean>(false);

  const handleChangeMode = (mode: boolean) => {
    setMode(mode);
  };

  const handleRegister = async () => {
    const res = await axios.post(
      "http://localhost:4000/api/auth/signup",
      {
        name: "ares",
        email: "ares.gmail11.com",
        password: "1515151515",
      },
      { withCredentials: true }
    );

    console.log("res", res);
  };

  const handleLogin = async () => {
    const res = await axios.post(
      "http://localhost:4000/api/auth/login",
      {
        email: "ares.gmail11.com",
        password: "1515151515",
      },
      { withCredentials: true }
    );

    console.log("response", res);
  };

  return (
    <div className={S.root}>
      <div className={S.container}>
        <div className={S.wrapper}>
          <div className={S.modal}>
            <span className={S.modal_title}>Login</span>
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
            <span className={S.modal_title}>Signup</span>
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
