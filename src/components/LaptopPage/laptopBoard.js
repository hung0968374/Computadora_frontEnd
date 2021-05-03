import React, { useState } from "react";
import "./laptopBoard.css";
function LaptopBoard() {
  const imgUrls = [
    "https://res.cloudinary.com/dsykf3mo9/image/upload/v1619539188/ProductImage/nitro5amd_ehsufz.jpg",
    "https://res.cloudinary.com/dsykf3mo9/image/upload/v1619539171/ProductImage/Surface_20Pro_206_20Promo_Website_kpru65.jpg",
    "https://res.cloudinary.com/dsykf3mo9/image/upload/v1619539148/ProductImage/ThinkPad_20X1_20Nano-02_cqyutl.jpg",
    "https://res.cloudinary.com/dsykf3mo9/image/upload/v1619539132/ProductImage/Acer_20Nitro_205_20Promo_Website_ghwavg.jpg",
  ];
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <div className="laptopBoard_new_feature">
      <div className="laptopBoard_main_feature">
        <div className="laptopBoard_image_feature">
          <img
            src={imgUrls[selectedIndex]}
            alt=""
            key={imgUrls[selectedIndex]}
          />
        </div>
        <div className="laptopBoard_feature_content">
          <div
            className={`laptopBoard_feature_content_list ${
              selectedIndex == 0 ? "laptopBoard_snakeBorder" : null
            }`}
            onClick={() => {
              setSelectedIndex(0);
            }}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <div className="laptopBoard_event">
              Nitro AMD 5 - Định nghĩa laptop Gaming
            </div>
          </div>
          <div
            className={`laptopBoard_feature_content_list ${
              selectedIndex == 1 ? "laptopBoard_snakeBorder" : null
            }`}
            onClick={() => {
              setSelectedIndex(1);
            }}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <div className="laptopBoard_event">
              Surface Pro 6 - Tặng ngay hàng hiệu
            </div>
          </div>
          <div
            className={`laptopBoard_feature_content_list ${
              selectedIndex == 2 ? "laptopBoard_snakeBorder" : null
            }`}
            onClick={() => {
              setSelectedIndex(2);
            }}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <div className="laptopBoard_event">
              ThinkPad X1 Nano - Bạn đồng hành của doanh nhân
            </div>
          </div>
          <div
            className={`laptopBoard_feature_content_list ${
              selectedIndex == 3 ? "laptopBoard_snakeBorder" : null
            }`}
            onClick={() => {
              setSelectedIndex(3);
            }}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <div className="laptopBoard_event">
              Acer nitro 5 - Quà tặng khủng
            </div>
          </div>
        </div>
      </div>
      <div className="laptopBoard_blog_feature">
        <div className="laptopBoard_blog_content">
          <div> Tại sao lại là Computadora ?</div>
        </div>
        <div className="laptopBoard_blog_content">
          <div> Meọ để tối ưu hoá thời gian sử dụng pin Laptop top </div>
        </div>
        <div className="laptopBoard_blog_content">
          <div> Made By Đức Quang (a.k.a Roll.I.90 )</div>
        </div>
        <div className="laptopBoard_news">
          <div> Tất cả tin tức</div>
        </div>
      </div>
    </div>
  );
}

export default LaptopBoard;
