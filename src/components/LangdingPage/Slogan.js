import React from "react";
import { Link } from "react-router-dom";
import * as styles from "./slogan.module.css";
const Slogan = () => {
  const link_style1 = {
    color: "white",
  };
  return (
    <div className={styles.slogan}>
      <div className={styles.hero_content}>
        <h1>COMPUTADORA</h1>
        <p className={styles.slog}>
          Với chúng tôi trải nghiệm của khách hàng là cốt lõi
        </p>
        <div className={styles.auth}>
          <p className={styles.sign_in}>
            <Link style={link_style1} to="/signIn">
              Đăng nhập
            </Link>
          </p>

          <p className={styles.sign_up}>
            <Link style={link_style1} to="/signIn">
              Đăng ký{" "}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Slogan;
