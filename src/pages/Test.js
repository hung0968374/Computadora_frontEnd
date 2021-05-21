import React, { useState } from "react";
import * as styles from "./cssFolder/test.module.css";

export default function Test() {
  const urls = [
    "https://tmp.phongvu.vn/wp-content/uploads/2020/02/PC-Asus-ROG-Huracan-G21-1.jpg",
    "https://image.freepik.com/free-psd/high-view-desk-concept-with-laptop_23-2148300257.jpg",
    "https://lumen.thinkpro.vn/backend/uploads/editor/v2/nitro5amd.jpg",
  ];
  const [imgIndexDisplaying, setImgIndexDisplaying] = useState(0);
  return (
    <section className={styles.landingPage}>
      <div className={styles.imgContainer} key={imgIndexDisplaying}>
        <img src={urls[imgIndexDisplaying]} alt="" />
      </div>
      <div className={styles.cardsContainer}>
        {urls.map((url, index) => {
          return (
            <div
              className={styles.cards}
              onMouseEnter={() => setImgIndexDisplaying(index)}
            >
              <img src={url} alt="" />
              <div className={styles.cardContent}>
                <div className={styles.cardContentTitle}>PC</div>
                <div className={styles.cardTextContent}>
                  Khám phá thế giới PC cùng Computadora Khám phá thế giới PC
                  cùng Computadora Khám phá thế giới PC cùng Computadora
                </div>
              </div>
              <div className={styles.watchMoreContainer}>
                <div className={styles.watchMore} onClick={() => alert(index)}>
                  Xem thêm
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.title}>
        <img
          src="https://res.cloudinary.com/nonde/image/upload/v1621595390/computadora/logo_nilhsn.png"
          alt=""
        />
      </div>
    </section>
  );
}
