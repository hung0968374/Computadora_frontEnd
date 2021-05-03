import React, { useEffect, useRef, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import * as styles from "./header_style.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  itemInCart,
  recoverItemsInCartEveryRefresh,
} from "../../redux/features/cart/cartSlice";
import {
  goingToUpper,
  goUp,
  goDown,
} from "../../redux/features/post/screenSlice";
const Header = () => {
  ///////////state
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const [token, setToken] = useState("");
  const [userInfo, setUserInfo] = useState({});
  const [openUserInfo, setOpenUserInfo] = useState(false);
  const [totalQuantityOfItemsInCart, setTotalQuantityOfItemsInCart] = useState(
    0
  );
  const prevScrollY = useRef(0);
  const [goingUp, setGoingUp] = useState(true);
  const screenGoUp = useSelector(goingToUpper);
  const userOptionRef = useRef();
  ///function
  const _clickedToUserImg = () => {
    if (!token) {
      history.push("/signIn");
    } else {
      setOpenUserInfo(true);
    }
  };
  const _logOut = () => {
    localStorage.clear();
    history.push("/");
    dispatch(recoverItemsInCartEveryRefresh([]));
  };
  const _redirectToCartPage = () => {
    history.push("/cart");
  };

  useEffect(() => {
    if (localStorage.getItem("quantity") != null) {
      setTotalQuantityOfItemsInCart(localStorage.getItem("quantity"));
    }
  }, [localStorage.getItem("quantity")]);
  // tinh tong so luong gio hang

  useEffect(() => {
    setToken(localStorage.getItem("token"));
    setUserInfo(JSON.parse(localStorage.getItem("userInfo")));
  }, [location]);
  ///////////set scrool up state
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
        <div
          ref={userOptionRef}
          className={styles.userImg}
          onClick={_clickedToUserImg}
        >
          {token ? (
            <>
              <img
                src={userInfo.imageUrl}
                alt=""
                className={styles.userImgStyle}
              />
              <i className={styles.amountOfNotification}>
                {totalQuantityOfItemsInCart || 0}
              </i>
            </>
          ) : (
            <img
              src="/images/account-icon.svg"
              alt=""
              className={styles.userImgStyle}
            />
          )}
          {token?.length && openUserInfo ? (
            <div className={styles.userOption}>
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
              </div>
            </div>
          ) : null}
        </div>
        {/* {token?.length && openUserInfo ? (
          <div className={styles.userOption}>
            <div className={styles.userOptionContentWrapper}>
              <div className={styles.optionItem} onClick={_logOut}>
                Đăng xuất
              </div>
              <div className={styles.optionItem} onClick={_redirectToCartPage}>
                Giỏ hàng ( <span>{totalQuantityOfItemsInCart}</span> )
              </div>
            </div>
          </div>
        ) : null} */}
      </div>
    </div>
  );
};

export default Header;
