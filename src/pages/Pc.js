import React, { useState } from "react";
import "./cssFolder/pc.css";
const Pc = () => {
  const imagesUrls = [
    "https://lumen.thinkpro.vn//backend/uploads/product/color_images/2020/7/30/razer-blade-15-advanced-Blade15A03NU-AME.jpg",
    "https://lumen.thinkpro.vn//backend/uploads/product/color_images/2020/7/30/razer-blade-15-advanced-Blade15A03NU-26A.jpg",
    "https://lumen.thinkpro.vn//backend/uploads/product/color_images/2020/7/30/razer-blade-15-advanced-Blade15A03NU-T7m.jpg",
    "https://lumen.thinkpro.vn//backend/uploads/product/color_images/2020/7/30/razer-blade-15-advanced-Blade15A03NU-co7.jpg",
    "https://lumen.thinkpro.vn//backend/uploads/product/color_images/2020/7/30/razer-blade-15-advanced-Blade15A03NU-1QT.jpg",
    "https://lumen.thinkpro.vn//backend/uploads/product/color_images/2020/7/30/razer-blade-15-advanced-Blade15A03NU-Edl.jpg",
  ];
  const [currentImgIndex, setcurrentImgIndex] = useState(0);
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
