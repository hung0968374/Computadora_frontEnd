import React from "react";
import { Link } from "react-router-dom";
import * as styles from "./board.module.css";

export default function board() {
  return (
    <div className={styles.new_feature}>
      <div className={styles.main_feature}>
        <div className={styles.image_feature}>
          <img src="" alt="" />
        </div>
        <div className={styles.feature_content}>
          <ul>
            <li>
              <Link className={styles.event}>
                Computadora-công nghệ rộng mở
              </Link>
            </li>
            <li>
              <Link className={styles.event}> Phụ kiện giảm giá sốc!</Link>
            </li>
            <li>
              <Link className={styles.event}>
                {" "}
                Dịch vụ bảo hành tận nhà cùng LG
              </Link>
            </li>
            <li>
              <Link className={styles.event}>
                {" "}
                "Khai Xuân Thần Tốc" cùng MSI{" "}
              </Link>
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
