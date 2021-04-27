import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as styles from "./board.module.css";
function LaptopBoard() {
  const imgUrls = [
    "https://res.cloudinary.com/dsykf3mo9/image/upload/v1619539188/ProductImage/nitro5amd_ehsufz.jpg",
    "https://res.cloudinary.com/dsykf3mo9/image/upload/v1619539171/ProductImage/Surface_20Pro_206_20Promo_Website_kpru65.jpg",
    "https://res.cloudinary.com/dsykf3mo9/image/upload/v1619539148/ProductImage/ThinkPad_20X1_20Nano-02_cqyutl.jpg",
    "https://res.cloudinary.com/dsykf3mo9/image/upload/v1619539132/ProductImage/Acer_20Nitro_205_20Promo_Website_ghwavg.jpg",
  ];
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <div className={styles.new_feature}>
      <div className={styles.main_feature}>
        <div className={styles.image_feature}>
          <img
            src={imgUrls[selectedIndex]}
            alt=""
            key={imgUrls[selectedIndex]}
          />
        </div>
        <div className={styles.feature_content}>
          <ul>
            <li
              onClick={() => {
                setSelectedIndex(0);
              }}
            >
              <div className={styles.event}>Computadora-công nghệ rộng mở</div>
            </li>
            <li
              onClick={() => {
                setSelectedIndex(1);
              }}
            >
              <div className={styles.event}>Phụ kiện giảm giá sốc!</div>
            </li>
            <li
              onClick={() => {
                setSelectedIndex(2);
              }}
            >
              <div className={styles.event}>
                Dịch vụ bảo hành tận nhà cùng LG
              </div>
            </li>
            <li
              onClick={() => {
                setSelectedIndex(3);
              }}
            >
              <div className={styles.event}>"Khai Xuân Thần Tốc" cùng MSI</div>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.blog_feature}>
        <div className={styles.blog_content}>
          <Link> Blog 1</Link>
        </div>
        <div className={styles.blog_content}>
          <Link> Blog 2</Link>
        </div>
        <div className={styles.blog_content}>
          <Link> Blog 3</Link>
        </div>
        <div className={styles.news}>
          <Link> Tất cả tin tức</Link>
        </div>
      </div>
    </div>
  );
}

export default LaptopBoard;
