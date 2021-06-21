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
                <Link to="/laptop">Lịch sử thành lập</Link>
              </li>
              <li>
                <Link to="/laptop">Giá trị cốt lõi</Link>
              </li>
              <li>
                <Link to="/laptop">Tầm nhìn, sứ mệnh</Link>
              </li>
            </ul>
          </div>
          <div className={styles.section}>
            <h2 className={styles.h2_footer}> Chính sách</h2>
            <ul className={styles.ul_footer}>
              <li>
                <Link to="/laptop">Bảo hành</Link>
              </li>
              <li>
                <Link to="/laptop">Vận chuyển</Link>
              </li>
              <li>
                <Link to="/laptop">Thanh toán</Link>
              </li>
            </ul>
          </div>
          <div className={styles.section}>
            <h2> Sản phẩm và dịch vụ</h2>
            <div className={styles.table_1}>
              <ul className={styles.ul_footer}>
                <li>
                  <Link to="/laptop">Laptop Dell</Link>
                </li>
                <li>
                  <Link to="/laptop">Laptop HP</Link>
                </li>
                <li>
                  <Link to="/laptop">Laptop ThinkPad</Link>
                </li>
                <li>
                  <Link to="/laptop">Laptop Lenovo</Link>
                </li>
              </ul>
            </div>
            <div className={styles.table_2}>
              <ul className={styles.ul_footer}>
                <li>
                  <Link to="/laptop">Alienware</Link>
                </li>
                <li>
                  <Link to="/laptop">Macbook</Link>
                </li>
                <li>
                  <Link to="/laptop">Laptop Razor</Link>
                </li>
                <li>
                  <Link to="/laptop">Phụ kiện</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
