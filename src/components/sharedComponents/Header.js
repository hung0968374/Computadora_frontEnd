import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import {
  addToCart,
  getItemFromLocalCart,
  reNewCart,
} from "../../redux/AddToCart/AddtoCartSlice";
import * as styles from "./header_style.module.css";

const Header = ({ token }) => {
  // khai bao
  const history = useHistory();
  const reNewState = {
    inventory: [],
    quantity: 0,
  };
  const inventoryFromStore = useSelector((state) => state.AddToCart_.inventory);
  const tokenGetFromLocalStorage = localStorage.getItem("userToken");
  const inventoryFromLocalStorage = JSON.parse(
    localStorage.getItem("inventory")
  );
  const [userStatus, setUserStatus] = useState(false);
  const dispatch = useDispatch();

  const userInfoGetFromLocalStorage = JSON.parse(
    localStorage.getItem("userInfo")
  );

  //function
  const HandleLoggoutEvent = () => {
    localStorage.removeItem("userToken");
    localStorage.removeItem("userInfo");
    localStorage.removeItem("inventory");
    localStorage.removeItem("quantity");
    dispatch(reNewCart(reNewState));
    history.push("/landingPage");
  };
  const ClickLogoToReturnToLandingPage = () => {
    history.push("/landingPage");
  };
  const ClickToAccountImage = () => {
    setUserStatus(!userStatus);
  };
  const link_style = {
    color: "black",
  };

  window.onstorage = () => {
    dispatch(getItemFromLocalCart());
  };

  return (
    <div className={styles.header}>
      <div className={styles.nav_container}>
        <div className={styles.wrapper}>
          <nav>
            <div className={styles.logo}>
              <img
                onClick={ClickLogoToReturnToLandingPage}
                className={styles.logoCPT}
                src="/images/laptop.svg"
                alt=""
              />
            </div>
            <ul className={styles.nav_items}>
              <li>
                <Link style={link_style} className={styles.boldText_} to="/pc">
                  PC
                </Link>
              </li>
              <li className={styles.li_className}>
                <Link
                  style={link_style}
                  className={styles.boldText_}
                  to="/laptop"
                >
                  Laptop
                </Link>
              </li>
              <li>
                <Link
                  style={link_style}
                  className={styles.boldText_}
                  to="/accessories"
                >
                  Linh kiện
                </Link>
              </li>
              <li>
                <Link
                  style={link_style}
                  className={styles.boldText_}
                  to="/Blog"
                >
                  Blog
                </Link>
              </li>
              <li>
                <div className={styles.Account}>
                  {tokenGetFromLocalStorage ? (
                    <div className={styles.Acc_Image}>
                      <img
                        className={styles.Acc_Icon}
                        onMouseEnter={ClickToAccountImage}
                        style={styles.profileImg}
                        src={userInfoGetFromLocalStorage.imageUrl}
                        alt=""
                      />{" "}
                    </div>
                  ) : (
                    <div className={styles.Acc_Image}>
                      <img
                        className={styles.Acc_Icon1}
                        onMouseEnter={ClickToAccountImage}
                        style={styles.profileImg}
                        src="/images/account-icon.svg"
                        alt=""
                      />{" "}
                    </div>
                  )}

                  {userStatus ? (
                    tokenGetFromLocalStorage ? (
                      <div
                        className={styles.dropdown_content}
                        onMouseLeave={ClickToAccountImage}
                      >
                        <div className={styles.Content_of_DropDown_Content1}>
                          <img
                            className={styles.icon}
                            src="/images/logout.svg"
                            alt=""
                          />
                          <Link
                            className={styles.textInDDC}
                            to=""
                            onClick={HandleLoggoutEvent}
                          >
                            Đăng xuất
                          </Link>
                        </div>

                        <div className={styles.Content_of_DropDown_Content2}>
                          <img
                            className={styles.icon}
                            src="/images/userInfo.png"
                            alt=""
                          />
                          <Link
                            to="/userInformation"
                            className={styles.textInDDC}
                          >
                            Thông tin cá nhân
                          </Link>
                        </div>

                        <div className={styles.Content_of_DropDown_Content2}>
                          <img
                            className={styles.icon}
                            src="https://image.flaticon.com/icons/png/512/879/879764.png"
                            alt=""
                          />
                          <Link to="/Cart" className={styles.textInDDC}>
                            Giỏ hàng
                          </Link>
                        </div>
                      </div>
                    ) : (
                      <div
                        className={styles.dropdown_content}
                        onMouseLeave={ClickToAccountImage}
                      >
                        <div className={styles.Content_of_DropDown_Content1}>
                          <img
                            className={styles.icon}
                            src="/images/login.svg"
                            alt=""
                          />
                          <Link className={styles.textInDDC} to="/signIn">
                            Đăng nhập
                          </Link>
                        </div>
                        <div className={styles.Content_of_DropDown_Content2}>
                          <img
                            className={styles.icon}
                            src="/images/signIn.svg"
                            alt=""
                          />
                          <Link className={styles.textInDDC} to="/signUP">
                            Đăng ký
                          </Link>
                        </div>
                      </div>
                    )
                  ) : null}
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
