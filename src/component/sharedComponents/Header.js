import React from "react";
import { HeaderWrapper } from "../styledComponents/header";
import { Link, useHistory } from "react-router-dom";

export default function Header() {
  const history = useHistory();
  return (
    <HeaderWrapper>
      <div className="header_navContent">
        <Link to="/laptop">Laptop</Link>
        <Link to="/cart">Giỏ hàng</Link>
        <span
          onClick={() => {
            localStorage.clear();
            history.push("/");
          }}
        >
          Đăng xuất
        </span>
      </div>
    </HeaderWrapper>
  );
}
