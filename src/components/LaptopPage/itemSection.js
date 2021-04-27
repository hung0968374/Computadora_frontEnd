import React from "react";
import { Link } from "react-router-dom";
import Item from "./Item/Item";
import * as styles from "./itemSection.module.css";

export default function item_section({ allData, setAllData }) {
  let allDt = [];
  for (var i = 0; i < 64; i++) allDt.push(i);
  console.log(allDt);
  return (
    <div className={styles.item_section}>
      <div className={styles.sort_bar}></div>
      <div className={styles.items}>
        {allDt.map((data, index) => (
          <img src={data} key={index} className={styles.itemImgs} />
        ))}
      </div>
    </div>
  );
}
