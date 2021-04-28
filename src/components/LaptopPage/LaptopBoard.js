import React, { useState } from "react";
import { Link } from "react-router-dom";
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
              Computadora-công nghệ rộng mở
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
            <div className="laptopBoard_event">Phụ kiện giảm giá sốc!</div>
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
              Dịch vụ bảo hành tận nhà cùng LG
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
              "Khai Xuân Thần Tốc" cùng MSI
            </div>
          </div>
        </div>
      </div>
      <div className="laptopBoard_blog_feature">
        <div className="laptopBoard_blog_content">
          <Link> Blog 1</Link>
        </div>
        <div className="laptopBoard_blog_content">
          <Link> Blog 2</Link>
        </div>
        <div className="laptopBoard_blog_content">
          <Link> Blog 3</Link>
        </div>
        <div className="laptopBoard_news">
          <Link> Tất cả tin tức</Link>
        </div>
      </div>
    </div>
  );
}

export default LaptopBoard;
