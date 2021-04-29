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
  useEffect(() => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  }, []);
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
        <div className={styles.mainProp}>
          <div className={styles.itemName}>{data.title}</div>
          <div className={styles.itemPrice}>
            <div> Giá:</div>
            <div className={styles.price}>
              {data?.price?.split("₫").join("")}₫
            </div>
          </div>
        </div>
        <div className={styles.itemParams}>
          <div className={styles.breakLine}></div>
          <div className={styles.config}>Cấu hình:</div>
          <div className={styles.configurationInDetail}>{data.processor}</div>
          <div className={styles.configurationInDetail}>{data.screen}</div>
          <div className={styles.configurationInDetail}>{data.ram}</div>
          <div className={styles.configurationInDetail}>{data.graphicCard}</div>
          <div className={styles.configurationInDetail}>{data.pin}</div>
          <div className={styles.configurationInDetail}>{data.weight}</div>
          <div className={styles.configurationInDetail}>
            {data.operatingSystem}
          </div>
          <div className={styles.breakLine}></div>
          <div className={styles.salePromotion}>
            <div className={styles.discountTitle}>
              <div className={styles.discountCotent}>
                Khuyến mãi trị giá 450.000₫
              </div>
              <div>Chương trình khuyến mãi kéo dài hết ngày 30/7/2021</div>
            </div>
            <ul className={styles.discountItem}>
              <li>Chuột không dây</li>
              <li>Balo laptop</li>
            </ul>
            <div className={styles.discountItemImg}>
              <img
                src="https://cdn.tgdd.vn/Products/Images/86/195376/chuot-khong-day-logitech-m170-den-1-200x200.jpg"
                alt=""
              />
              <img
                src="https://cdn.tgdd.vn/Products/Images/2102/86101/balo-laptop-hp-km-khuyen-mai-200x200.jpg"
                alt=""
              />
            </div>
          </div>
          <div className={styles.addingToCart}>
            <img src="/images/cart.svg" alt="" />
            Thêm vào giỏ hàng
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemProp;
