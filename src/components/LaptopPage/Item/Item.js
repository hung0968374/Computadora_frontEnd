import React from "react";
import { useHistory } from "react-router-dom";
import * as styles from "./Item.module.css";

export default function Item({ data }) {
  const history = useHistory();
  const redirectToItemDetrails = () => {
    history.push(`/laptop/${data._id}`);
  };
  console.log("data", data);
  const title = data.title.trim();
  return (
    <div className={styles.itemImgs}>
      <div className={styles.outerWrapper}>
        <div className={styles.imgArea}>
          <img src={data.imgs[0]} alt="" />
        </div>
        <div className={styles.contentArea}>
          <div className={styles.itemName}>{title}</div>
          <div className={styles.itemPrice}>
            <div className={styles.priceText}> Giá: </div>
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
