import React, { useEffect, useRef, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import * as styles from "./cssFolderOfSharedComponent/header_style.module.css";
import { useDispatch, useSelector } from "react-redux";
import { recoverItemsInCartEveryRefresh } from "../../redux/features/cart/cartSlice";
import { goingToUpper, goUp } from "../../redux/features/post/screenSlice";

const Header = () => {
  ///////////state
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const [token, setToken] = useState("");
  const [userInfo, setUserInfo] = useState({});
  const [totalQuantityOfItemsInCart, setTotalQuantityOfItemsInCart] = useState(
    0
  );

  const prevScrollY = useRef(0);
  const [goingUp, setGoingUp] = useState(true);
  const screenGoUp = useSelector(goingToUpper);

  ///function
  const _logOut = () => {
    localStorage.clear();
    history.push("/");
    dispatch(recoverItemsInCartEveryRefresh([]));
  };
  const _redirectToCartPage = () => {
    history.push("/cart");
  };
  // tinh tong so luong gio hang

  useEffect(() => {
    if (localStorage.getItem("quantity") != null) {
      setTotalQuantityOfItemsInCart(localStorage.getItem("quantity"));
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
  var userOptionAnimation = null;
  // const userOptionAnimation = openUserInfo ? styles.dropDown : styles.goUp;
  return (
    <div className={`${styles.header} ${isGoingUp}`}>
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
            <>
              <div className={styles.userImgWrapper}>
                <img
                  src={userInfo.imageUrl}
                  alt=""
                  className={styles.userImgStyle}
                />
              </div>
              {totalQuantityOfItemsInCart > 0 ? (
                <>
                  <i className={styles.amountOfNotification}>
                    {totalQuantityOfItemsInCart}
                  </i>
                </>
              ) : null}
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
              <div className={styles.userOptionContentWrapper}>
                <div
                  className={styles.optionItem}
                  onClick={() => {
                    history.push("/signIn");
                  }}
                >
                  Đăng nhập
                </div>
                <div
                  className={styles.optionItem}
                  onClick={() => {
                    history.push("/signUp");
                  }}
                >
                  Đăng kí
                </div>
              </div>
            </div>
          ) : null}
          {token ? (
            <div className={`${styles.userOption} `}>
              <div className={styles.userOptionContentWrapper}>
                <div className={styles.optionItem} onClick={_logOut}>
                  Đăng xuất
                </div>
                <div
                  className={styles.optionItem}
                  onClick={_redirectToCartPage}
                >
                  Giỏ hàng ( <span>{totalQuantityOfItemsInCart}</span> )
                </div>
                <div
                  className={styles.optionItem}
                  onClick={() => {
                    history.push("/boughtItemsRecord");
                  }}
                >
                  Lịch sử mua hàng
                </div>
                <div
                  className={styles.optionItem}
                  onClick={() => {
                    history.push("/personalInfo");
                  }}
                >
                  Thông tin cá nhân
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Header;
