import React from "react";
import { Link, useHistory } from "react-router-dom";
import * as styles from "./Item.module.css";

export default function Item({ data }) {
  const history = useHistory();
  const title = data.title.trim();
  const _navigateToDetailItem = () => {
    // history.push(`/laptop/${data._id}`);
  };
  return (
    <Link
      to={`/laptop/${data._id}`}
      className={styles.itemImgs}
      onClick={_navigateToDetailItem}
    >
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
    </Link>
  );
}
