import React from "react";
import { Link } from "react-router-dom";
import * as styles from "./slogan.module.css";
const Slogan = ({ changeStt }) => {
  return (
    <div className={styles.slogan}>
      <div className={styles.hero_content}>
        <h1>COMPUTADORA</h1>
        <p className={styles.slog}>
          Với chúng tôi trải nghiệm của khách hàng là cốt lõi
        </p>
        <div className={styles.auth}>
          <p onClick={changeStt} className={styles.sign_in}>
            <Link to="/">Đăng nhập</Link>
          </p>
          <p onClick={changeStt} className={styles.sign_up}>
            <Link to="/">Đăng ký</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Slogan;
