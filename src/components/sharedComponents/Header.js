import React from "react";
import { Link } from "react-router-dom";
import * as styles from "./header_style.module.css";
const Header = () => {
  const link_style = {
    color: "black",
  };
  return (
    <div className={styles.header}>
      <div className={styles.nav_container}>
        <div className={styles.wrapper}>
          <nav>
            <div className={styles.logo}>
              <img src="/images/laptop.svg" alt="" />
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
                    <img src="/images/account-icon.svg" alt="" />{" "}
                  </div>

                  <div className={styles.dropdown_content}>
                    <Link to="/signIn">
                      <p>Đăng nhập</p>
                    </Link>
                    <Link to="/signUP">
                      <p>Đăng ký</p>
                    </Link>
                  </div>
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
