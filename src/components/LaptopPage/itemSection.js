import React from "react";
import { Link } from "react-router-dom";
import Item from "./Item/Item";
import * as styles from "./itemSection.module.css";

export default function item_section({ allData }) {
  console.log("all dat", allData);
  return (
    <div className={styles.item_section}>
      <div className={styles.sort_bar}></div>
      <div className={styles.items}>
        {allData.map((data, index) => (
          <Item data={data} key={index} />
        ))}
      </div>
    </div>
  );
}
