import React, { useState, useEffect } from "react";
import * as styles from "./itemProp.module.css";
const ItemProp = ({ data }) => {
  const imgs = data?.imgs;
  //function
  const [displayImg, setdisplayImg] = useState();
  useEffect(() => {
    if (imgs) {
      setdisplayImg(imgs[0]);
    }
  }, [imgs]);
  console.log(data);
  return (
    <div className={styles.itemPropContainer}>
      <div className={styles.imgArea}>
        <div className={styles.imgWrapper}>
          <div className={styles.displayImg}>
            {imgs ? <img src={displayImg} alt="" key={displayImg} /> : null}
          </div>
          <div className={styles.ImgGallery}>
            {imgs?.map((image) => {
              if (image !== displayImg) {
                return (
                  <img
                    key={image}
                    src={image}
                    alt="dog"
                    onClick={() => {
                      setdisplayImg(image);
                    }}
                  />
                );
              } else {
                return (
                  <img
                    className={styles.selectedImgInGallery}
                    src={image}
                    key={image}
                    alt="dog"
                    onClick={() => {
                      setdisplayImg(image);
                    }}
                  />
                );
              }
            })}
          </div>
        </div>
      </div>
      <div className={styles.itemConfiguration}>
        <div className={styles.itemName}>{data.title}</div>
        <div className={styles.itemParams}> </div>
      </div>
    </div>
  );
};

export default ItemProp;
