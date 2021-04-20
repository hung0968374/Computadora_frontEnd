import React from "react";
import * as styles from "./Item.module.css";

export default function Item({ data }) {
  const BaseUrl = "https://res.cloudinary.com/dsykf3mo9/image/upload/";
  return (
    <div className={styles.item}>
      <div className={styles.item_image}>
        <img src={BaseUrl + data.imageLink} alt="" />
      </div>
      <h2>{data.name}</h2>
      <p>
        Giá từ:
        <p className={styles.price}>{data.price}</p>
      </p>
    </div>
  );
}
