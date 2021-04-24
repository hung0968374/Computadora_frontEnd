import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import * as styles from "./header_style.module.css";
const Header = () => {
  const link_style = {
    color: "black",
  };
  const history = useHistory();
  const token = localStorage.getItem("token");
  console.log("token from common header", token);
  const _logOut = () => {
    localStorage.clear();
    history.push("/");
  };
  return (
    <div className={styles.header}>
      <div className={styles.content_wrapper}>
        <div className={styles.laptopImg}>
          <Link to="/" className={styles.linkWrapper}>
            <img
              className={styles.lapImgStyle}
              src="/images/laptop.svg"
              alt=""
            />
          </Link>
        </div>
        <div className={styles.textWrapper}>
          <div className={[styles.commonContentStyle]}>
            <Link to="/pc">PC</Link>
          </div>
          <div className={[styles.commonContentStyle]}>
            <Link to="/laptop">Laptop</Link>
          </div>
          <div className={[styles.commonContentStyle]}>
            <Link to="/accessories"> Linh kiện</Link>
          </div>
          <div className={[styles.commonContentStyle]}>
            <Link to="/blog"> Blog</Link>
          </div>
        </div>
        <div className={styles.userImg}>
          {token ? (
            <img
              src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"
              alt=""
              className={styles.userImgStyle}
            />
          ) : (
            <img
              src="/images/account-icon.svg"
              alt=""
              className={styles.userImgStyle}
            />
          )}
        </div>
        <div className={styles.userOption} id="nav">
          <div className={styles.userOptionContentWrapper}>
            <div className={styles.logOut} onClick={_logOut}>
              Đăng xuất
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
