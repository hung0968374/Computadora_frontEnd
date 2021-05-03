import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import * as styles from "../components/LaptopPage/DetailItem.module.css";
import Header from "../components/sharedComponents/Header";
import Footer from "../components/LaptopPage/footer";

export default function DetailItem({ match }) {
  const [SpecificItemById, setSpecificItemById] = useState([]);

  useEffect(async () => {
    const dataFromSpecificId = await axios.get(
      `http://localhost:5000/products/${match.params.id}`
    );
    const { data } = dataFromSpecificId;
    setSpecificItemById(data);
  }, []);

  useEffect(() => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const BaseUrl = "https://res.cloudinary.com/dsykf3mo9/image/upload/";

  console.log("data", SpecificItemById);
  console.log(match);
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.product_img}>
            <img
              className={styles.imgThumbnail}
              src={BaseUrl + SpecificItemById.imageLink}
              alt=""
            />
          </div>
          <div className={styles.product_details}>
            <h1>{SpecificItemById.name} </h1>
            <h3>MPN: 82AU004XVN</h3>
            <div className={styles.info}>
              <div className={styles.info_product}>
                <ul>
                  <li>
                    <p className={styles.boldText}>Vi xử lý:</p>
                    <p>{SpecificItemById.chip}</p>
                  </li>
                  <li>
                    <p className={styles.boldText}>Màn hình:</p>
                    <p>{SpecificItemById.screen}</p>
                  </li>
                  <li>
                    <p className={styles.boldText}>RAM: </p>
                    <p>{SpecificItemById.ram}</p>
                  </li>
                  <li>
                    <p className={styles.boldText}> Card đồ họa: </p>
                    <p>{SpecificItemById.card}</p>
                  </li>
                  <li>
                    <p className={styles.boldText}> Lưu trữ: </p>
                    <p>{SpecificItemById.storage}</p>
                  </li>
                  <li>
                    <p className={styles.boldText}> Pin: </p>
                    <p>{SpecificItemById.pin}</p>
                  </li>
                  <li>
                    <p className={styles.boldText}>Kết nối chính:</p>
                    <p>1 x USB-C, Thunderbolt 3, 2 x USB-A, 1 x Micro-SD</p>
                  </li>
                  <li>
                    <p className={styles.boldText}> Hệ điều hành: </p>
                    <p> {SpecificItemById.window}</p>
                  </li>
                </ul>
              </div>
              <div className={styles.guarantee}>
                <div className={styles.box}>
                  <h3>Bảo hành </h3>
                  <ul>
                    <li>
                      Bảo hành chính hãng tại nhà 12 tháng (Hotline:
                      096.484.9119)
                    </li>
                    <li>Đổi mới trong 15 ngày đầu tiên</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.block}> </div>
        <div className={styles.contact_us}>
          <div className={styles.telephone}>
            <p>Hotline</p>
            <h2>096.484.9119</h2>
          </div>
          <div className={styles.priceAndBuy}>
            <p> {SpecificItemById.price} </p>
            <button>Thêm vào giỏ hàng</button>
            <img src="/images/heart.png" alt="" />
          </div>
          <div className={styles.livechat}>
            <img src="/images/messenger.svg" alt="" />
          </div>
        </div>
        <div className={styles.comment}>
          <div className={styles.admin_comments}>
            <h2> Đánh giá chi tiết</h2>
            <div className={styles.first_comment}>
              <h3>Người dùng nào sẽ phù hợp với {SpecificItemById.name}?</h3>
              <h6>
                {SpecificItemById.name} với thiết kế mỏng, siêu nhẹ, thời lượng
                pin dài cùng độ bền ấn tượng là sản phẩm phù hợp dành cho doanh
                nhân hay rộng hơn là dân công sở. Bên cạnh đó, mẫu laptop của LG
                cũng sẽ là lựa chọn của các bạn nữ với màu trắng đẹp mắt, hợp
                thời trang và đặc tính cơ độ nhờ trọng lượng chưa đến 1kg.
              </h6>
            </div>
            <div className={styles.first_comment}>
              <h3>Thiết kế sang trọng, siêu gọn nhẹ, độ bền cao</h3>
              <h6>
                {SpecificItemById.name} được coi là sản phẩm chủ lực của LG tại
                thị trường Việt Nam với những thay đổi mạnh mẽ về chất lượng
                hoàn thiện và khắc phục tất cả các khiếm khuyết từ phiên bản
                trước. Việc sử dụng chất liệu hợp kim Magie Carbon Nano do LG
                độc quyền phát triển giúp Gram 14 2020 đạt trọng lượng lý tưởng
                với chỉ 999g, nhẹ hơn hẳn so với các mẫu Ultrabook 14 inches,
                thậm chí là cả 13 inches như Dell XPS 13, HP Spectre 13, ASUS
                ZenBook S13 hay Razer Blade Stealth.
              </h6>
            </div>
          </div>
          <div className={styles.block}> </div>
          <div className={styles.guess_comments}>
            <h2>Bình luận</h2>
            <h3>Bình luận của bạn</h3>
            <textarea
              className={styles.textArea}
              name=""
              id=""
              cols="108"
              rows="10"
              placeholder="Để lại bình luận của bạn"
            ></textarea>
            <button>Gửi</button>
          </div>
        </div>
      </div>
      <div className={styles.block1}></div>
      <Footer />
    </div>
  );
}
