import React, { useState } from "react";
import { useHistory } from "react-router";
import Header from "../components/sharedComponents/Header";
import ScrollToTop from "../components/sharedComponents/ScrollToTop";
import * as styles from "./cssFolder/test.module.css";

export default function Test() {
  const urls = [
    "https://cmcdistribution.com.vn/en/wp-content/uploads/2020/12/The-BEST-Wallpapers-For-Your-Gaming-Setup-Wallpaper-Engine.jpg",
    "https://lumen.thinkpro.vn//backend/uploads/baiviet/2021/4/3/blade14AMDThumb.jpg",
    "https://lumen.thinkpro.vn/backend/uploads/editor/v2/nitro5amd.jpg",
  ];
  const history = useHistory();
  const [imgIndexDisplaying, setImgIndexDisplaying] = useState(0);
  return (
    <section className={styles.landingPage}>
      <ScrollToTop />
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.imgContainer} key={imgIndexDisplaying}>
        <img src={urls[imgIndexDisplaying]} alt="" />
      </div>
      <div className={styles.cardsContainer}>
        {urls.map((url, index) => {
          return (
            <div
              className={`${styles.cards} ${
                index === imgIndexDisplaying && styles.snakeBorder
              }`}
              onMouseEnter={() => setImgIndexDisplaying(index)}
            >
              <img src={url} alt="" />
              <div className={styles.cardContent}>
                <div className={styles.cardContentTitle}>
                  {index === 0 && "PC"}
                  {index === 1 && "Laptop"}
                  {index === 2 && "Blog"}
                </div>
                <div className={styles.cardTextContent}>
                  {index === 0 &&
                    "Ghé thăm thế giới PC gaming cùng Computadora"}
                  {index === 1 &&
                    "Khám phá thế giới Laptop sắc màu cùng Computadora"}
                  {index === 2 &&
                    "Cùng cập nhật những tin tức công nghệ mới nhất với Computadora"}
                </div>
              </div>
              <div className={styles.watchMoreContainer}>
                <div
                  className={styles.watchMore}
                  onClick={() => {
                    if (index === 0) history.push("/pc");
                    else if (index === 1) history.push("/laptop");
                    else if (index === 2) history.push("/blog");
                  }}
                >
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
