import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemInCart } from "../redux/features/cart/cartSlice";

import {
  fetchLaptopByPage,
  laptopByPage,
} from "../redux/features/post/laptopItemSlice";
import "./cssFolder/pc.css";
const Pc = () => {
  const cartItems = useSelector(itemInCart);
  const data = useSelector(laptopByPage);
  const imagesUrls = [
    "https://lumen.thinkpro.vn//backend/uploads/product/color_images/2020/7/30/razer-blade-15-advanced-Blade15A03NU-AME.jpg",
    "https://lumen.thinkpro.vn//backend/uploads/product/color_images/2020/7/30/razer-blade-15-advanced-Blade15A03NU-26A.jpg",
    "https://lumen.thinkpro.vn//backend/uploads/product/color_images/2020/7/30/razer-blade-15-advanced-Blade15A03NU-T7m.jpg",
    "https://lumen.thinkpro.vn//backend/uploads/product/color_images/2020/7/30/razer-blade-15-advanced-Blade15A03NU-co7.jpg",
    "https://lumen.thinkpro.vn//backend/uploads/product/color_images/2020/7/30/razer-blade-15-advanced-Blade15A03NU-1QT.jpg",
    "https://lumen.thinkpro.vn//backend/uploads/product/color_images/2020/7/30/razer-blade-15-advanced-Blade15A03NU-Edl.jpg",
  ];
  console.log("lap by page in pc", data);
  const dispatch = useDispatch();
  const [currentImgIndex, setcurrentImgIndex] = useState(0);
  useEffect(() => {
    dispatch(fetchLaptopByPage(1));
  }, []);
  console.log("cartitems", cartItems);
  return (
    <div className="bttn">
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
