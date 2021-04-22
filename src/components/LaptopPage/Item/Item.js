import React from "react";
import { useHistory } from "react-router-dom";
import * as styles from "./Item.module.css";

export default function Item({ data }) {
  const BaseUrl = "https://res.cloudinary.com/dsykf3mo9/image/upload/";
  const history = useHistory();
  const redirectToItemDetrails = () => {
    history.push(`/laptop/${data._id}`);
  };

  return (
    <div  onClick={redirectToItemDetrails} className={styles.item}>
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
