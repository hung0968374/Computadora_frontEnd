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
                <Link to="/pc">PC </Link>
              </li>

              <li className={styles.li_className}>
                <Link to="/laptop">laptop</Link>
              </li>
              <li>
                <Link style={link_style} to="/accessories">
                  Linh kiện
                </Link>
              </li>

              <li>
                <Link to="/blog">Blog </Link>
              </li>

              <li className={styles.nav_btn_container}>
                <img
                  className={styles.search_btn}
                  src="/images/search-icon.svg"
                  alt=""
                />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
