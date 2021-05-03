import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as styles from "./slogan.module.css";
const Slogan = ({ token }) => {
  const link_style1 = {
    color: "white",
  };
  console.log("token from slogan", token);

  return (
    <div className={styles.slogan}>
      <div className={styles.hero_content}>
        <h1>COMPUTADORA</h1>
        <p className={styles.slog}>
          Với chúng tôi trải nghiệm của khách hàng là cốt lõi
        </p>
        {!token ? (
          <div className={styles.auth}>
            <p className={styles.sign_in}>
              <Link style={link_style1} to="/signIn">
                Đăng nhập
              </Link>
            </p>

            <p className={styles.sign_up}>
              <Link style={link_style1} to="/signUp">
                Đăng ký
              </Link>
            </p>
          </div>
        ) : (
          <div className={styles.searchBox}>
            <img src="/images/search-icon.svg" alt="" />
            <input
              type="text"
              placeholder="Chào mừng bạn quay lại với Computadora"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Slogan;
