import React, { useEffect, useRef, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import * as styles from "./cssFolderOfSharedComponent/header_style.module.css";
import { useDispatch, useSelector } from "react-redux";
import { recoverItemsInCartEveryRefresh } from "../../redux/features/cart/cartSlice";
import { goingToUpper, goUp } from "../../redux/features/post/screenSlice";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { HiShoppingCart } from "react-icons/hi";
import { BiHistory } from "react-icons/bi";
import { IoIosPerson } from "react-icons/io";
import { GrLogin } from "react-icons/gr";
import { IoIosPersonAdd } from "react-icons/io";
import { IoMdKey } from "react-icons/io";
import {
  isCustomizedUser,
  toggleIsCustomizedUser,
} from "../../redux/features/user/userSlice";
import queryString from "query-string";

const Header = () => {
  ///////////state
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const [token, setToken] = useState("");
  const [userInfo, setUserInfo] = useState({});
  const [totalQuantityOfItemsInCart, setTotalQuantityOfItemsInCart] =
    useState(0);
  const prevScrollY = useRef(0);
  const [goingUp, setGoingUp] = useState(true);
  const screenGoUp = useSelector(goingToUpper);
  const isCustomUser = useSelector(isCustomizedUser);
  ///// detect url includes pc or laptop or not
  const { search } = useLocation();
  const values = queryString.parse(search);
  // console.log("search", values.genre);

  ///function
  const _logOut = () => {
    localStorage.clear();
    history.push("/");
    dispatch(recoverItemsInCartEveryRefresh([]));
  };

  // tinh tong so luong gio hang
  useEffect(() => {
    if (localStorage.getItem("quantity") != null) {
      setTotalQuantityOfItemsInCart(localStorage.getItem("quantity"));
    } else {
      localStorage.setItem("quantity", 0);
    }
  }, [localStorage.getItem("quantity")]);

  //////////////handle set token and token expire
  useEffect(() => {
    setToken(localStorage.getItem("token"));
    setUserInfo(JSON.parse(localStorage.getItem("userInfo")));
  }, [location]);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 160) {
        const currentScrollY = window.scrollY;
        if (prevScrollY.current < currentScrollY && goingUp) {
          setGoingUp(false);
          dispatch(goUp(false));
        }
        if (prevScrollY.current > currentScrollY && !goingUp) {
          setGoingUp(true);
          dispatch(goUp(true));
        }
        prevScrollY.current = currentScrollY;
      } else {
        setGoingUp(true);
        dispatch(goUp(true));
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [goingUp]);
  const isGoingUp = screenGoUp ? styles.goingDown : styles.goingUp;

  ///////// is customized user
  // console.log("userinfo", userInfo);

  useEffect(() => {
    if (userInfo?._id?.length > 0) {
      dispatch(toggleIsCustomizedUser(true));
    } else {
      dispatch(toggleIsCustomizedUser(false));
    }
  }, [location, userInfo]);
  //////////    localstorage real time
  window.onstorage = () => {
    setInterval(() => {
      if (localStorage.getItem("token")?.length > 0) {
        setToken(localStorage.getItem("token"));
        setTotalQuantityOfItemsInCart(localStorage.getItem("quantity"));
        setUserInfo(JSON.parse(localStorage.getItem("userInfo")));
      } else {
        localStorage.clear();
        setToken("");
        setUserInfo({});
        setTotalQuantityOfItemsInCart(0);
      }
    }, 1000);
    if (JSON.parse(localStorage.getItem("cartItems")) !== null) {
      setTimeout(() => {
        dispatch(
          recoverItemsInCartEveryRefresh(
            JSON.parse(localStorage.getItem("cartItems"))
          )
        );
      }, 1000);
    }
  };

  // console.log(location.pathname);
  ///////handle expired token or user log out
  return (
    <div className={`${styles.header} ${isGoingUp}`}>
      <div className={styles.content_wrapper}>
        <div className={styles.laptopImg}>
          <img src="/images/insta-icon.svg" alt="" />
          <span>COMPU</span>
          <span>TADORA</span>
        </div>
        <div className={styles.textWrapper}>
          <Link
            className={`${styles.commonContentStyle} ${
              location.pathname === "/" && styles.hightlightHeaderLink
            }`}
            to="/"
          >
            Home
          </Link>

          <Link
            className={`${styles.commonContentStyle} ${
              (location.pathname === "/pc" || values.genre === "pc") &&
              styles.hightlightHeaderLink
            }`}
            to="/pc"
          >
            PC
          </Link>

          <Link
            className={`${styles.commonContentStyle} ${
              (location.pathname === "/laptop" || values.genre === "Laptop") &&
              styles.hightlightHeaderLink
            }`}
            to="/laptop"
          >
            Laptop
          </Link>
          <Link
            className={`${styles.commonContentStyle} ${
              location.pathname.includes("/blog") && styles.hightlightHeaderLink
            }`}
            to="/blog"
          >
            Blog
          </Link>
        </div>
        <div className={styles.userImg}>
          {token ? (
            <>
              {totalQuantityOfItemsInCart > 0 ? (
                <i className={styles.amountOfNotification}>
                  {totalQuantityOfItemsInCart}
                </i>
              ) : null}
              <div className={styles.userImgWrapper}>
                <img
                  src={userInfo?.imageUrl}
                  alt=""
                  className={styles.userImgStyle}
                />
              </div>
            </>
          ) : (
            <div className={styles.userImgWrapper}>
              <img
                src="/images/account-icon.svg"
                alt=""
                className={styles.userImgStyle}
              />
            </div>
          )}
          {!token ? (
            <div
              className={`${styles.userOption} ${styles.userOptionForNotLoggingIn}`}
            >
              <div className={styles.optionItem}>
                <Link to="/signIn">
                  <i>
                    <GrLogin />
                  </i>
                  Đăng nhập
                </Link>
              </div>
              <div className={styles.optionItem}>
                <Link to="/signUp">
                  <i>
                    <IoIosPersonAdd />
                  </i>
                  Đăng kí
                </Link>
              </div>
              <div className={styles.optionItem}>
                <Link to="/PWRecover">
                  <i>
                    <IoMdKey />
                  </i>
                  <p>Quên mật khẩu</p>
                </Link>
              </div>
            </div>
          ) : null}
          {token ? (
            <div
              className={`${styles.userOption}  ${
                !isCustomUser && styles.styleForNotCustomUser
              } ${
                totalQuantityOfItemsInCart > 0 &&
                styles.userOptionWhenQuantityExist
              }`}
            >
              <div className={styles.optionItem} onClick={_logOut}>
                <i>
                  <RiLogoutBoxRFill />
                </i>
                <p>Đăng xuất</p>
              </div>
              <div className={styles.optionItem}>
                <Link to="/cart">
                  <i>
                    <HiShoppingCart />
                  </i>
                  Giỏ hàng (<span>{totalQuantityOfItemsInCart}</span> )
                </Link>
              </div>
              <div className={styles.optionItem}>
                <Link to="/boughtItemsRecord">
                  <i>
                    <BiHistory />
                  </i>
                  <p>Lịch sử mua hàng</p>
                </Link>
              </div>
              <div
                className={`${styles.optionItem} ${
                  !isCustomUser && styles.isNotCustomUser
                }`}
              >
                <Link to="/personalInfo">
                  <i>
                    <IoIosPerson />
                  </i>
                  <p>Thông tin cá nhân</p>
                </Link>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Header;
