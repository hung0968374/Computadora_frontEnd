import React from "react";
import { useHistory } from "react-router-dom";
import * as styles from "./Item.module.css";

export default function Item({ data }) {
  const BaseUrl = "https://res.cloudinary.com/dsykf3mo9/image/upload/";
  const history = useHistory();
  console.log("data in item compo", data);
  const redirectToItemDetrails = () => {
    history.push(`/laptop/${data._id}`);
  };
  const title = data.title.trim();
  console.log("title", title);
  return (
    <div className={styles.itemImgs}>
      <div className={styles.outerWrapper}>
        <div className={styles.imgArea}>
          <img src={data.imgs[0]} alt="" />
        </div>
        <div className={styles.contentArea}>
          <div className={styles.itemName}>{title}</div>
          <div className={styles.itemPrice}>
            <text className={styles.priceText}> Giá: </text>
            <div className={styles.priceInNumber}>
              {data.price.split("₫").join("")}
            </div>
            <div className={styles.currencyMark}>₫</div>
          </div>
        </div>
      </div>
    </div>
  );
}
