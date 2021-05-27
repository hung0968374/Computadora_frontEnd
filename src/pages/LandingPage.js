import * as styles from "./cssFolder/landingPage.module.css";
import React, { useEffect, useState } from "react";
import Header from "../components/sharedComponents/Header";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";

function LandingPage() {
  const urls = [
    "https://cmcdistribution.com.vn/en/wp-content/uploads/2020/12/The-BEST-Wallpapers-For-Your-Gaming-Setup-Wallpaper-Engine.jpg",
    "https://lumen.thinkpro.vn//backend/uploads/baiviet/2021/4/3/blade14AMDThumb.jpg",
    // "https://lumen.thinkpro.vn/backend/uploads/editor/v2/nitro5amd.jpg",
    "https://lumen.thinkpro.vn//backend/uploads/baiviet/2020/12/22/laptopplaycp2077-1thumb.jpg",
  ];
  const history = useHistory();
  const location = useLocation();
  const [imgIndexDisplaying, setImgIndexDisplaying] = useState(0);
  useEffect(() => {
    if (localStorage.getItem("quantity") === null) {
      localStorage.setItem("quantity", 0);
    }
    document.title = "Home";
  }, [location]);

  return (
    <section className={styles.landingPage}>
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
                {index === 0 && (
                  <Link to="/pc" className={styles.watchMore}>
                    Xem thêm
                  </Link>
                )}
                {index === 1 && (
                  <Link to="/laptop" className={styles.watchMore}>
                    Xem thêm
                  </Link>
                )}
                {index === 2 && (
                  <Link to="/blog" className={styles.watchMore}>
                    Xem thêm
                  </Link>
                )}
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

export default LandingPage;
