import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/sharedComponents/Header";
import { itemInCart } from "../redux/features/cart/cartSlice";

import {
  fetchLaptopByPage,
  laptopByPage,
} from "../redux/features/post/laptopItemSlice";
import "./cssFolder/pc.css";
const Pc = () => {
  return (
    <div className="bttn">
      <Header />
      <div>
        <div className="a">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Pc;
