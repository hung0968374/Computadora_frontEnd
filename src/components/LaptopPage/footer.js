import React from 'react'
import { Link } from "react-router-dom";
import * as styles from "./footer.module.css";

export default function footer() {
    return (
        <div>
            <section className={styles.footer}>
       <div className={styles.footer_container}>
           <div className={styles.section}>
                <img className={styles.footer_logo} src="/images/laptop.svg" alt="" />
           </div>
           <div className={styles.section}>
            <h2 className={styles.h2_footer}> Về chúng tôi</h2>
            <ul className={styles.ul_footer}>
                <li>
                    <Link>Lịch sử thành lập</Link>
                </li>
                <li>
                    <Link>Giá trị cốt lõi</Link>
                </li>
                <li>
                    <Link>Tầm nhìn, sứ mệnh</Link>
                </li>
            </ul>
        </div>
        <div className={styles.section}>
            <h2  className={styles.h2_footer}> Chính sách</h2>
            <ul className={styles.ul_footer}>
                <li>
                    <Link>Bảo hành</Link>
                </li>
                <li>
                    <Link>Vận chuyển</Link>
                </li>
                <li>
                    <Link>Thanh toán</Link>
                </li>
            </ul>
        </div>
        <div className={styles.section}>
            <h2 > Sản phẩm và dịch vụ</h2>
            <div className={styles.table_1}>
                <ul className={styles.ul_footer}>
                    <li>
                      <Link>Laptop Dell</Link>
            </li>
            <li>
                <Link>Laptop HP</Link>
            </li>
            <li>
               <Link>Laptop ThinkPad</Link>
            </li>
            <li>
                <Link>Laptop Lenovo</Link>
            </li>
            </ul>
            </div>
            <div className={styles.table_2}>
                <ul className={styles.ul_footer}>
                    <li>
                        <Link>Alienware</Link>
                    </li>
                    <li>
                        <Link>Macbook</Link>
                    </li>
                    <li>
                        <Link>Laptop Razor</Link>
                    </li>
                    <li>
                        <Link>Phụ kiện</Link>
                    </li>
                </ul>   
            </div>
        </div>
       </div>
    </section>
        </div>
    )
}
