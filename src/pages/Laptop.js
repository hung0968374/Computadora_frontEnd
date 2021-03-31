import React from "react";
import Header from "../components/sharedComponents/Header";
import "../components/LaptopPage/main.css";
const Laptop = () => {
  return (
    <div classNameName="laptop">
      <Header />
      <div className="new-feature">
        <div className="main-feature">
          <div className="image-feature">
            <img src="" alt="" />
          </div>
          <div className="feature-content">
            <ul>
              <li>Computadora-công nghệ rộng mở</li>
              <li>Phụ kiện giảm giá sốc!</li>
              <li>Dịch vụ bảo hành tận nhà cùng LG</li>
              <li>"Khai Xuân Thần Tốc" cùng MSI</li>
            </ul>
          </div>
        </div>
        <div className="blog-feature">
          <div className="blog-content">Blog 1</div>
          <div className="blog-content">Blog 2</div>
          <div className="blog-content">Blog 3</div>
          <div className="news">Tất cả tin tức</div>
        </div>
      </div>
      <section>
        <div className="container">
          <div className="sort-bar"></div>
          <div className="items">
            <div className="item">
              <div className="item-image">
                <img src="/img/laptop-icon.svg" alt="" />
              </div>
              <h2>Lenovo Legion Y540</h2>
              <p>
                Giá từ:
                <p className="price">24.499.000 ₫</p>
              </p>
            </div>

            <div className="item1">
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

      <section className="footer">
        <div className="footer-container">
          <div className="section">
            <img className="footer-logo" src="/img/laptop.svg" alt="" />
          </div>
          <div className="section">
            <h2 className="h2-footer"> Về chúng tôi</h2>
            <ul className="ul-footer">
              <li>Lịch sử thành lập</li>
              <li>Giá trị cốt lõi</li>
              <li>Tầm nhìn, sứ mệnh</li>
            </ul>
          </div>
          <div className="section">
            <h2 className="h2-footer"> Chính sách</h2>
            <ul className="ul-footer">
              <li>Bảo hành</li>
              <li>Vận chuyển</li>
              <li>Thanh toán</li>
            </ul>
          </div>
          <div className="section">
            <h2> Sản phẩm và dịch vụ</h2>
            <div className="table-1">
              <ul className="ul-footer">
                <li>Laptop Dell</li>
                <li>Laptop HP</li>
                <li>Laptop ThinkPad</li>
                <li>Laptop Lenovo</li>
              </ul>
            </div>
            <div className="table-2">
              <ul className="ul-footer">
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
