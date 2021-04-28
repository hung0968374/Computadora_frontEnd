import React, { useEffect, useRef, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import * as styles from "./header_style.module.css";
const Header = () => {
  ///////////state
  const location = useLocation();
  const history = useHistory();
  const [token, setToken] = useState("");
  const [userInfo, setUserInfo] = useState({});
  const [openUserInfo, setOpenUserInfo] = useState(false);
  ///function
  const _clickedToUserImg = () => {
    setOpenUserInfo(!openUserInfo);
  };
  const userOptionRef = useRef();
  const _logOut = () => {
    localStorage.clear();
    history.push("/");
  };
  useEffect(() => {
    setToken(localStorage.getItem("token"));
    setUserInfo(JSON.parse(localStorage.getItem("userInfo")));
  }, [location]);
  console.log("uesr", userInfo);
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        userOptionRef.current &&
        !userOptionRef.current.contains(event.target)
      ) {
        setOpenUserInfo(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [userOptionRef]);
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
        <div className={styles.userImg} onClick={_clickedToUserImg}>
          {token ? (
            <img
              src={userInfo.imageUrl}
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
        {token?.length && openUserInfo ? (
          <div ref={userOptionRef} className={styles.userOption} id="nav">
            <div className={styles.userOptionContentWrapper}>
              <div className={styles.logOut} onClick={_logOut}>
                Đăng xuất
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Header;
