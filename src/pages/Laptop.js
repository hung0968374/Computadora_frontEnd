import React from "react";
import Header from "../components/sharedComponents/Header";
import * as styles from "../components/LaptopPage/main.module.css";
const Laptop = () => {
  return (
    <div className={styles.laptop}>
      <Header />
      <div className={styles.new_feature}>
        <div className={styles.main_feature}>
          <div className={styles.image_feature}>
            <img src="" alt="" />
          </div>
          <div className={styles.feature_content}>
            <ul>
              <li>Computadora-công nghệ rộng mở</li>
              <li>Phụ kiện giảm giá sốc!</li>
              <li>Dịch vụ bảo hành tận nhà cùng LG</li>
              <li>Khai Xuân Thần Tốc" cùng MSI</li>
            </ul>
          </div>
        </div>
        <div className={styles.blog_feature}>
          <div className={styles.blog_content}>Blog 1</div>
          <div className={styles.blog_content}>Blog 2</div>
          <div className={styles.blog_content}>Blog 3</div>
          <div className={styles.news}>Tất cả tin tức</div>
        </div>
      </div>
      <section>
        <div className={styles.container}>
          <div className={styles.sort_bar}></div>
          <div className={styles.items}>
            <div className={styles.item}>
              <div className={styles.item_image}>
                <img src="/img/laptop-icon.svg" alt="" />
              </div>
              <h2>Lenovo Legion Y540</h2>
              <p>
                Giá từ:
                <p className={styles.price}>24.499.000 ₫</p>
              </p>
            </div>

            <div className={styles.item1}>
              <button></button>
              <button>1</button>
              <button>2</button>
              <button>3</button>
              <button>4</button>
              <button>5</button>
              <button>6</button>
              <button></button>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.footer}>
        <div className={styles.footer_container}>
          <div className={styles.section}>
            <img className={styles.footer_logo} alt="" />
          </div>
          <div className={styles.section}>
            <h2 className={styles.h2_footer}> Về chúng tôi</h2>
            <ul className={styles.ul_footer}>
              <li>Lịch sử thành lập</li>
              <li>Giá trị cốt lõi</li>
              <li>Tầm nhìn, sứ mệnh</li>
            </ul>
          </div>
          <div className={styles.section}>
            <h2 className={styles.h2_footer}> Chính sách</h2>
            <ul className={styles.ul_footer}>
              <li>Bảo hành</li>
              <li>Vận chuyển</li>
              <li>Thanh toán</li>
            </ul>
          </div>
          <div className={styles.section}>
            <h2> Sản phẩm và dịch vụ</h2>
            <div className={styles.table_1}>
              <ul className={styles.ul_footer}>
                <li>Laptop Dell</li>
                <li>Laptop HP</li>
                <li>Laptop ThinkPad</li>
                <li>Laptop Lenovo</li>
              </ul>
            </div>
            <div className={styles.table_2}>
              <ul className={styles.ul_footer}>
                <li>Alienware</li>
                <li>Macbook</li>
                <li>Laptop Razor</li>
                <li>Phụ kiện</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Laptop;
