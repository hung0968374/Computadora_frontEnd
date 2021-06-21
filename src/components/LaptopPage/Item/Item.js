import React from "react";
import { Link } from "react-router-dom";
import * as styles from "./Item.module.css";

export default function Item({ data }) {
  const imgUpload = data.imgs[0];
  const dataProductName = data.name;
  let productName = "";

  if (dataProductName.length > 20) {
    for (let i = 0; i < dataProductName.length; i++) {
      productName += dataProductName[i];
      if (i === 16) {
        productName += "...";
        break;
      }
    }
  } else {
    productName = data.name;
  }

  return (
    <Link to={`/laptop/${data._id}`} className="hover_link">
      <div className={styles.item}>
        <div className={styles.item_image}>
          <img src={imgUpload} alt="" />
        </div>
        <h2>{productName}</h2>
        <p>
          Giá từ:
          <p className={styles.price}>{data.price}</p>
        </p>
        <span className={styles.tooltiptext}>
          <ul>
            <div className={styles.name_P}>
              <p className="font_18">{data.name}</p>
            </div>
            <div className={styles.details_span}>
              <img
                src="https://image.flaticon.com/icons/png/512/4412/4412281.png"
                alt=""
              />
              <p>Thông tin sản phẩm</p>
            </div>
            <li>
              <p>Card: {data.card}</p>
            </li>
            <li>
              <p>Ram: {data.ram}</p>
            </li>
            <li>
              <p>Lưu trữ: {data.storage}</p>
            </li>
            <li>
              <p>Hệ điều hành: {data.window}</p>
            </li>
            <div className={styles.details_span}>
              <img
                src="https://image.flaticon.com/icons/png/512/1139/1139931.png"
                alt=""
              />
              <p>Quà tặng kèm</p>
            </div>
            <div className={styles.gift_Info_}>
              <div className={styles.left_gift_layout}>
                <p>Chuột Logitech G102 LIGHTSYNC</p>
                <img
                  src="https://lumen.thinkpro.vn//backend/uploads/product/color_images/2020/9/15/g102-01jpg"
                  alt=""
                />
                <p>
                  {" "}
                  Giá từ :<strong> 450.000 đ</strong>
                </p>
              </div>
              <p className={styles.Choices_1}> Hoặc</p>
              <div className={styles.right_gift_layout}>
                <p>Balo Laptop Gaming ReeYee RY1027</p>
                <img
                  src="https://lumen.thinkpro.vn//backend/uploads/product/color_images/2021/1/19/1027-01.jpg"
                  alt=""
                />
                <p>
                  {" "}
                  Giá từ :<strong> 600.000 đ</strong>
                </p>
              </div>
            </div>
          </ul>
        </span>
      </div>
    </Link>
  );
}
