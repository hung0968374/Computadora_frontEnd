import React, { useState } from "react";
import * as styles from "./posts.module.css";

function Posts() {
  const [dotStatus, setDotStatus] = useState(0);
  const ImagesUrl = [
    "https://res.cloudinary.com/dsykf3mo9/image/upload/v1619836124/ProductImage/m17r2dark-01_pmbbx1.png",
    "https://res.cloudinary.com/dsykf3mo9/image/upload/v1619836567/ProductImage/g5-desktop-1_fe9dco.png",
    "https://res.cloudinary.com/dsykf3mo9/image/upload/v1619836522/ProductImage/win10pro-1_l9fns1.png",
    "https://res.cloudinary.com/dsykf3mo9/image/upload/v1619836261/ProductImage/predatorutility-01_kglbnl.png",
  ];

  //function
  return (
    <div className={styles.Post_Wrapper}>
      <div className={styles.antenna1}></div>
      <div className={styles.antenna2}></div>
      <div className={styles.imagePost}>
        <div className={styles.backgroundHolderForImages}>
          <img
            className={styles.ChangeEffect}
            src={ImagesUrl[dotStatus]}
            key={ImagesUrl[dotStatus]}
            alt=""
          />
        </div>
        <div className={styles.changeChanel}>
          {ImagesUrl.map((image, index) => (
            <div
              onClick={() => {
                setDotStatus(index);
              }}
              key={index}
              className={styles.buttonChangeChanel}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Posts;
