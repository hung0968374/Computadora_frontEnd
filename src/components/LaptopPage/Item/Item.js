import React from "react";
import { Link } from "react-router-dom";
import * as styles from "./Item.module.css";

export default function Item({ data, isPc }) {
  // console.log("item", data);
  const title = data.title.trim();
  let price;
  if (!isPc) {
    price = data.price.split("₫").join("");
  } else if (isPc) {
    price = data.price.split("đ").join("");
  }
  return (
    <Link
      to={`/item?genre=${data.genre}&id=${data._id}`}
      className={styles.itemImgs}
    >
      <div className={styles.outerWrapper}>
        <div className={styles.imgArea}>
          <img src={data.imgs[0]} alt="" />
        </div>
        <div className={styles.contentArea}>
          <div className={styles.itemName}>{title}</div>
          <div className={styles.itemPrice}>
            <div className={styles.priceText}> Giá: </div>
            <div className={styles.priceInNumber}>{price}₫</div>
            {/* <div className={styles.currencyMark}>₫</div> */}
          </div>
        </div>
      </div>
    </Link>
  );
}
