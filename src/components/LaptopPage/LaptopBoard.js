import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./laptopBoard.css";
function LaptopBoard({ isPc = false }) {
  const imgUrls = isPc
    ? [
        "https://res.cloudinary.com/nonde/image/upload/v1621338595/computadora/1106_goc-pc-gaming-choi-game_814x320_d6deml.jpg",
        "https://res.cloudinary.com/nonde/image/upload/v1621338681/computadora/5126498_27g2_goc_gaming_1_814x320_fzz2ig.jpg",
        "https://res.cloudinary.com/nonde/image/upload/v1621338829/computadora/top-5-bo-may-tinh-gia-re-choi-game-duoi-5-trieu-2_814x320_ndcyhq.jpg",
        "https://res.cloudinary.com/nonde/image/upload/v1621338901/computadora/msi_800x450_814x320_kkeebl.jpg",
      ]
    : [
        "https://res.cloudinary.com/dsykf3mo9/image/upload/v1619539188/ProductImage/nitro5amd_ehsufz.jpg",
        "https://res.cloudinary.com/dsykf3mo9/image/upload/v1619539171/ProductImage/Surface_20Pro_206_20Promo_Website_kpru65.jpg",
        "https://res.cloudinary.com/dsykf3mo9/image/upload/v1619539148/ProductImage/ThinkPad_20X1_20Nano-02_cqyutl.jpg",
        "https://res.cloudinary.com/dsykf3mo9/image/upload/v1619539132/ProductImage/Acer_20Nitro_205_20Promo_Website_ghwavg.jpg",
      ];
  const [selectedIndex, setSelectedIndex] = useState(0);
  console.log("is pc inb board", isPc);
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
              Dịch vụ bảo hành tận nhà cùng Computadora
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
          <div> Blog 1</div>
        </div>
        <div className="laptopBoard_blog_content">
          <div> Blog 2</div>
        </div>
        <div className="laptopBoard_blog_content">
          <div> Blog 3</div>
        </div>
        <div className="laptopBoard_news">
          <div> Tất cả tin tức</div>
        </div>
      </div>
    </div>
  );
}

export default LaptopBoard;
