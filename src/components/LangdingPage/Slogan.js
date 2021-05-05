import React from "react";
import { Link, useHistory } from "react-router-dom";
import * as styles from "./slogan.module.css";
const Slogan = () => {
  const userToken = localStorage.getItem("token");
  const currentUserInfo = JSON.parse(localStorage.getItem("userInfo"));
  const history = useHistory();
  const _signIn = () => {
    history.push("/signIn");
  };
  const _signUp = () => {
    history.push("/signUp");
  };
  const link_style1 = {
    color: "white",
  };
  return (
    <div className={styles.slogan}>
      <div className={styles.styleTheSlogan}>
        <h1>COMPUTADORA</h1>
        <p className={styles.slog}>
          Với chúng tôi trải nghiệm của khách hàng là cốt lõi
        </p>
      </div>
      <div className={styles.auth}>
        {!userToken ? (
          <>
            <div className={styles.sign_in} onClick={_signIn}>
              Đăng nhập
            </div>
            <div className={styles.sign_up} onClick={_signUp}>
              Đăng ký
            </div>
          </>
        ) : (
          <div className={styles.welcomeUser}>
            Cảm ơn <span>{currentUserInfo.name}</span> đã giành thời gian đặt
            chân đến mảnh đất này 🥰🥰🥰
          </div>
        )}
      </div>
    </div>
  );
};

export default Slogan;
