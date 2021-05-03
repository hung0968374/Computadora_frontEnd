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
                <Link to="">Lịch sử thành lập</Link>
              </li>
              <li>
                <Link to="">Giá trị cốt lõi</Link>
              </li>
              <li>
                <Link to="">Tầm nhìn, sứ mệnh</Link>
              </li>
            </ul>
          </div>
          <div className={styles.section}>
            <h2 className={styles.h2_footer}> Chính sách</h2>
            <ul className={styles.ul_footer}>
              <li>
                <Link to="">Bảo hành</Link>
              </li>
              <li>
                <Link to="">Vận chuyển</Link>
              </li>
              <li>
                <Link to="">Thanh toán</Link>
              </li>
            </ul>
          </div>
          <div className={styles.section}>
            <h2> Sản phẩm và dịch vụ</h2>
            <div className={styles.table_1}>
              <ul className={styles.ul_footer}>
                <li>
                  <Link to="">Laptop Dell</Link>
                </li>
                <li>
                  <Link to="">Laptop HP</Link>
                </li>
                <li>
                  <Link to="">Laptop ThinkPad</Link>
                </li>
                <li>
                  <Link to="">Laptop Lenovo</Link>
                </li>
              </ul>
            </div>
            <div className={styles.table_2}>
              <ul className={styles.ul_footer}>
                <li>
                  <Link to="">Alienware</Link>
                </li>
                <li>
                  <Link to="">Macbook</Link>
                </li>
                <li>
                  <Link to="">Laptop Razor</Link>
                </li>
                <li>
                  <Link to="">Phụ kiện</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
