import React from "react";
import * as styles from "./cssFolder/boxsizing.module.css";

export default function TestBoxsizing() {
  return (
    <div className={styles.container}>
      <div className={styles.square}></div>
    </div>
  );
}
