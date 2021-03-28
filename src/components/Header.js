import React from "react";
import "./header_style.css";
const Header = () => {
  return (
    <div className="header">
      <div className="nav-container">
        <div className="wrapper">
          <nav>
            <div className="logo">
              <img src="/images/laptop.svg" alt="" />
            </div>
            <ul className="nav-items">
              <li className="PC-items">PC</li>
              <li>laptop</li>
              <li className="accessories">Linh kiện</li>
              <li>Blog</li>
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
