import React from "react";
import * as styles from "./slogan.module.css";
const Slogan = () => {
  return (
    <div className={styles.slogan}>
      <div className={styles.hero_content}>
        <h1>COMPUTADORA</h1>
        <p className={styles.slog}>
          Với chúng tôi trải nghiệm của khách hàng là cốt lõi
        </p>
        <div className={styles.auth}>
          <p className={styles.sign_in}>Đăng nhập</p>
          <p className={styles.sign_up}>Đăng ký</p>
        </div>
      </div>
    </div>
  );
};

export default Slogan;
