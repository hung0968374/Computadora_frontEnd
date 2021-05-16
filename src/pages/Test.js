import React, { useState } from "react";
import * as styles from "./cssFolder/test.module.css";

export default function Test() {
  const [click, setclick] = useState(false);
  return (
    <div>
      <div
        onClick={() => setclick(!click)}
        className={`${styles.base}  ${click && styles.fancy} ${
          click && styles.wrapper
        } ${styles.after}`}
      >
        <img
          alt=""
          src="https://nhattientuu.com/wp-content/uploads/2020/08/hinh-anh-dep-1.jpg"
        />
      </div>
    </div>
  );
}
