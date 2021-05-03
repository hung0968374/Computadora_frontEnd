import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import * as styles from "./header_style.module.css";

const Header = ({ token }) => {
  // khai bao
  const history = useHistory();
  const tokenGetFromLocalStorage = localStorage.getItem("userToken");
  const HandleLoggoutEvent = () => {
    localStorage.removeItem("userToken");
    localStorage.removeItem("userInfo");
  };
  const [userStatus, setUserStatus] = useState(false);

  //function
  const ClickLogoToReturnToLandingPage = () => {
    history.push("/");
  };
  const ClickToAccountImage = () => {
    setUserStatus(!userStatus);
  };
  const link_style = {
    color: "black",
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
                <Link style={link_style} to="/pc">
                  PC{" "}
                </Link>
              </li>
              <li className={styles.li_className}>
                <Link style={link_style} to="/laptop">
                  Laptop
                </Link>
              </li>
              <li>
                <Link style={link_style} to="/accessories">
                  Linh kiện
                </Link>
              </li>
              <li>
                <Link style={link_style} to="/blog">
                  Blog{" "}
                </Link>
              </li>
              <li>
                <div className={styles.Account}>
                  <div className={styles.Acc_Image}>
                    <img
                      className={styles.Acc_Icon}
                      onClick={ClickToAccountImage}
                      style={styles.profileImg}
                      src="/images/account-icon.svg"
                      alt=""
                    />{" "}
                  </div>
                  {userStatus ? (
                    tokenGetFromLocalStorage ? (
                      <div className={styles.dropdown_content}>
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
                      </div>
                    ) : (
                      <div className={styles.dropdown_content}>
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
