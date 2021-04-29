import React from "react";
import { Link } from "react-router-dom";
import * as styles from "./footer.module.css";

export default function footer() {
  return (
    <div>
      <section className={styles.footer}>
        <div className={styles.footer_container}>
          <div className={styles.section}>
            <img
              className={styles.footer_logo}
              src="/images/laptop.svg"
              alt=""
            />
          </div>
          <div className={styles.section}>
            <h2 className={styles.h2_footer}> Về chúng tôi</h2>
            <ul className={styles.ul_footer}>
              <li>
                <div>Lịch sử thành lập</div>
              </li>
              <li>
                <div>Giá trị cốt lõi</div>
              </li>
              <li>
                <div>Tầm nhìn, sứ mệnh</div>
              </li>
            </ul>
          </div>
          <div className={styles.section}>
            <h2 className={styles.h2_footer}> Chính sách</h2>
            <ul className={styles.ul_footer}>
              <li>
                <div>Bảo hành</div>
              </li>
              <li>
                <div>Vận chuyển</div>
              </li>
              <li>
                <div>Thanh toán</div>
              </li>
            </ul>
          </div>
          <div className={styles.section}>
            <h2> Sản phẩm và dịch vụ</h2>
            <div className={styles.table_1}>
              <ul className={styles.ul_footer}>
                <li>
                  <div>Laptop Dell</div>
                </li>
                <li>
                  <div>Laptop HP</div>
                </li>
                <li>
                  <div>Laptop ThinkPad</div>
                </li>
                <li>
                  <div>Laptop Lenovo</div>
                </li>
              </ul>
            </div>
            <div className={styles.table_2}>
              <ul className={styles.ul_footer}>
                <li>
                  <div>Alienware</div>
                </li>
                <li>
                  <div>Macbook</div>
                </li>
                <li>
                  <div>Laptop Razor</div>
                </li>
                <li>
                  <div>Phụ kiện</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
