import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import * as styles from "./cssFolder/signIN.module.css";
import { GoogleLogin } from "react-google-login";
import * as API from "../api/index";
import {
  ToastErrorMessage,
  ToastSuccessMessage,
  ToastWarnMessage,
} from "../components/sharedComponents/ToastMessage";
import FacebookLogin from "react-facebook-login";
import jwt_decode from "jwt-decode";
require("dotenv").config();

export default function SignIN() {
  ////////state
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [successfullLoggingIn, setSuccessfullLoggingIn] = useState(true);
  const [failureMsg, setFailureMsg] = useState();
  const sendObjToServer = {
    username,
    password,
  };
  ////////// if user already loggined, redirect to home page
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (token?.length > 0) {
      history.push("/");
    }
  }, [token]);

  ///////function
  useEffect(() => {
    document.title = "Đăng nhập";
  }, []);
  const _handlingUserLoggin = async () => {
    if (successfullLoggingIn) {
      try {
        const res = await API.signIn(sendObjToServer);
        localStorage.setItem("token", res.data.accessToken);
        const object_serialized = JSON.stringify(res.data.user);
        localStorage.setItem("userInfo", object_serialized);
        ///////////decode token
        const decodedToken = jwt_decode(res.data.accessToken);
        localStorage.setItem("tokenExpireIn", decodedToken.exp);
        history.goBack();
      } catch (error) {
        setFailureMsg(error.response.data.message);
        setSuccessfullLoggingIn(false);
        setTimeout(() => {
          setSuccessfullLoggingIn(true);
        }, 6000);
      }
    }
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      _handlingUserLoggin();
    }
  };

  ////////////google loggin
  const _onSuccess = async (res) => {
    const userInfo = res?.profileObj;
    const token = res?.tokenId;
    localStorage.setItem("tokenExpireIn", res.qc.expires_at); //// set token expiration
    localStorage.setItem("token", token);
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
    history.goBack();
  };
  const _onFailure = (error) => {
    console.log(error);
    console.log("Google sign in was unsuccessful. Try again later");
  };

  /////////////facebook loggin
  const responseFacebook = (res) => {
    const userInfo = {
      email: "",
      name: res.name,
      facebookUserId: res.id,
      imageUrl: res.picture.data.url,
    };
    const facebookCurrentUserId = res.id;
    const token = res?.accessToken;
    ///////////////set token expiration
    localStorage.setItem("tokenExpireIn", res.data_access_expiration_time);
    localStorage.setItem("token", token);
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
    localStorage.setItem("facebookCurrentUserId", facebookCurrentUserId);
    history.goBack();
  };

  const _failedToLogginWithFacebook = (error) => {
    console.log(error);
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
              <div className={styles.input_area}>
                <input
                  type="text"
                  placeholder="Tên đăng nhập"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <input
                  className={styles.password}
                  type="password"
                  placeholder="Mật khẩu"
                  value={password}
                  onKeyDown={handleKeyDown}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className={styles.more_func}>
                <div className={styles.new_acc}>
                  <Link to="/signUp">Chưa có tài khoản ?</Link>
                </div>
                <div className={styles.forgot_pw}>
                  <Link to="/PWRecover">Quên mật khẩu</Link>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.footer}>
            <div className={styles.confirm} onClick={_handlingUserLoggin}>
              Đăng nhập
            </div>

            <GoogleLogin
              className={styles.logginWithGoogle}
              clientId={`${process.env.REACT_APP_GOOGLE_CLIENT_ID}`}
              buttonText=" Đăng nhập bằng tài khoản google"
              onSuccess={_onSuccess}
              onFailure={_onFailure}
              cookiePolicy={"single_host_origin"}
            />
            <FacebookLogin
              cssClass={styles.logginWithFacebookBttn}
              appId={`${process.env.REACT_APP_FACEBOOK_APP_ID}`}
              autoLoad={false}
              fields="name,email,picture"
              callback={responseFacebook}
              textButton="Đăng nhập bằng FaceBook"
              onFailure={_failedToLogginWithFacebook}
            />
          </div>
        </div>
      </div>
      {!successfullLoggingIn ? (
        <ToastErrorMessage msg={failureMsg} setStt={setSuccessfullLoggingIn} />
      ) : null}
    </div>
  );
}
