import React from "react";
import { HeaderWrapper } from "../styledComponents/header";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <HeaderWrapper>
      <div className="header_navContent">
        <Link to="/laptop">Laptop</Link>
        <Link to="/cart">Giỏ hàng</Link>
      </div>
    </HeaderWrapper>
  );
}
