import React from "react";
import { Link } from "react-router-dom";
import "./header_style.css";
const Header = () => {
  const link_style = {
    color: "black",
  };
  return (
    <div className="header">
      <div className="nav-container">
        <div className="wrapper">
          <nav>
            <div className="logo">
              <img src="/images/laptop.svg" alt="" />
            </div>
            <ul className="nav-items">
              <li>
                <Link to="/pc">PC </Link>
              </li>

              <li className="li_className">
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

              <li className="nav-btn-container">
                <img
                  className="search-btn"
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
