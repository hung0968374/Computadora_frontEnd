import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import * as styles from "../components/LaptopPage/DetailItem.module.css";
import Header from "../components/sharedComponents/Header";
import { BaseUrl } from "../api";
import Comment from "../components/DetailItem/Comment";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/AddToCart/AddtoCartSlice";

export default function DetailItem({ match }) {
  const [SpecificItemById, setSpecificItemById] = useState([]);
  const [imgGallery, setImgGallery] = useState([]);
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("userToken");
  const quantity = useSelector((state) => state.AddToCart_.quantity);
  const dispatch = useDispatch();
  document.title = "Computadora";

  async function fetchData() {
    const dataFromSpecificId = await axios.get(
      `${BaseUrl}/products/${match.params.id}`
    );
    const { data } = dataFromSpecificId;
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
    setSpecificItemById(data);
    setImgGallery(data.imgs);
  }
  useEffect(() => {
    try {
      setLoading(true);
      fetchData();
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, []);

  document.title = `${SpecificItemById.name}`;

  // imgs
  const [selectedImg, setselectedImg] = useState(imgGallery[0]);

  const infoStoredProduct = {
    name: SpecificItemById.name,
    card: SpecificItemById.card,
    chip: SpecificItemById.chip,
    price: SpecificItemById.price,
    imgs: SpecificItemById.imgs,
    quantity: 1,
  };

  function addCart() {
    if (!token) alert("Xin mời bạn đăng nhập để thực hiện chức năng này");
    if (token) {
      dispatch(addToCart(infoStoredProduct));
      alert(
        `Sản phẩm ${SpecificItemById.name} đã được thêm vào giỏ hàng thành công`
      );
    }
  }

  return (
    <div>
      <Header />
      <div className="logo_and_name_">
        <img
          className="logo_small"
          src="/images/laptop.svg"
          alt="Computadora"
        />
        <p>{`Computadora / Laptop / ${SpecificItemById.name}`}</p>
      </div>
      <div className={styles.contact_us}>
        <div className={styles.telephone}>
          <p>Hotline</p>
          <h2>096.484.9119</h2>
        </div>
        <div className={styles.priceAndBuy}>
          <p> {SpecificItemById.price} </p>
          <button onClick={addCart}>Thêm vào giỏ hàng</button>
          <img className={styles.heart_icon} src="/images/heart.png" alt="" />
        </div>
        <div className={styles.livechat}>
          <img src="/images/messenger.svg" alt="" />
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.product_img}>
            <div className={styles.img_show}>
              <div className={styles.img_selected}>
                {!imgGallery[selectedImg] ? (
                  <img
                    src={imgGallery[0]}
                    key={imgGallery[selectedImg]}
                    alt="productSelected"
                  />
                ) : (
                  <img
                    src={imgGallery[selectedImg]}
                    key={imgGallery[selectedImg]}
                    alt="productSelected"
                  />
                )}
              </div>
              <div className={styles.block_}> </div>
              <div className={styles.img_gallery}>
                {imgGallery.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt="_products"
                    onClick={() => setselectedImg(index)}
                  />
                ))}
              </div>
            </div>
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
                    <p className={styles.boldText}>Độ phủ màu: </p>
                    <p>{SpecificItemById.color}</p>
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
                    <p>{SpecificItemById.connection}</p>
                  </li>
                  <li>
                    <p className={styles.boldText}>Cân nặng:</p>
                    <p>{SpecificItemById.weight}</p>
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
            <div className={styles.block_}> </div>
            <div className={styles.gift_}>
              <h3> Quà tặng khi mua sản phẩm</h3>
              <div className={styles.gift_product}>
                <div className={styles.left_}>
                  <p>Chuột Logitech G102 LIGHTSYNC</p>
                  <img
                    src="https://lumen.thinkpro.vn//backend/uploads/product/color_images/2020/9/15/g102-01jpg"
                    alt=""
                  />
                </div>
                <p className={styles.Or_}>Hoặc</p>
                <div className={styles.right_}>
                  <p>Balo Laptop Gaming ReeYee RY1027</p>
                  <img
                    src="https://lumen.thinkpro.vn//backend/uploads/product/color_images/2021/1/19/1027-01.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.block}> </div>
        <Comment SpecificItemById={SpecificItemById} />
      </div>
    </div>
  );
}
