import React from "react";
import * as styles from "./footer.module.css";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.social_icon}>
        <img
          className={styles.insta_icon}
          src="/images/insta-icon.svg"
          alt=""
        />
        <div>COMPUTADORA</div>
      </div>
    </div>
  );
};

export default Footer;
