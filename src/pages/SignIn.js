import axios from "axios";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import * as styles from "./cssFolder/signIN.module.css";
import { GoogleLogin } from "react-google-login";
export default function SignIN() {
  ////////state
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const sendObjToServer = {
    username,
    password,
  };
  ///////function
  const _handlingUserLoggin = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        sendObjToServer
      );
      console.log("response received from server", res);
      localStorage.setItem("token", res.data.accessToken);
      let object_serialized = JSON.stringify(res.data.user);
      console.log("serialized", object_serialized);
      localStorage.setItem("userInfo", object_serialized);
      history.push("/");
    } catch (error) {
      const res = error.response.data;
      alert(res.message);
    }
  };

  const _onSuccess = async (res) => {
    const userInfo = res?.profileObj;
    const token = res?.tokenId;
    localStorage.setItem("token", token);
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
    history.push("/");
    try {
    } catch (error) {
      console.log(error);
    }
  };
  const _onFailure = (error) => {
    console.log(error);
    console.log("Google sign in was unsuccessful. Try again later");
  };
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.header}>
            <div className={styles.title}>
              <h2>Chào mừng bạn quay lại</h2>
            </div>
          </div>
          <div className={styles.main}>
            <div className={styles.logo}>
              <img src="/images/laptop.svg" />
            </div>
            <div className={styles.input_container}>
              <ul>
                <li>
                  <input
                    maxLength="30"
                    type="text"
                    placeholder="Tên đăng nhập"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </li>
                <li>
                  <input
                    maxLength="30"
                    minLength="6"
                    className={styles.password}
                    type="password"
                    placeholder="Mật khẩu"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </li>
                <li className={styles.more_func}>
                  <div className={styles.new_acc}>
                    <p>
                      <Link to="/signUp">Chưa có tài khoản ?</Link>
                    </p>
                    <p className={styles.forgot_pw}>
                      <Link to="/PWRecover">Quên mật khẩu</Link>
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.footer}>
            <div className={styles.confirm}>
              <div className={styles.confirmLink} onClick={_handlingUserLoggin}>
                Đăng nhập
              </div>
            </div>
            <GoogleLogin
              className={styles.logginWithGoogle}
              clientId="244922534941-5gvl9rd0log4olllbi3pbsc9jepudgcr.apps.googleusercontent.com"
              buttonText=" Đăng nhập bằng tài khoản google"
              onSuccess={_onSuccess}
              onFailure={_onFailure}
              cookiePolicy={"single_host_origin"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
