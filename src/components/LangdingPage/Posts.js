import React, { useState } from "react";
import * as styles from "./posts.module.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";

function Posts() {
  const initialState = [
    "/images/laptop1.jpg",
    "/images/laptop2.jpg",
    "/images/laptop3.jpg",
    "/images/laptop4.jpg",
  ];
  const [imagesUrl, setImagesUrl] = useState(initialState);
  return (
    <div className={styles.post}>
      <div className={styles.image_container}>
        <div className={styles.hero_image}>
          <OwlCarousel className="owl-theme" items="1" loop autoplay nav dots>
            <div className={styles.item}>
              <img src={imagesUrl[0]} alt="" className={styles.imgs} />
            </div>
            <div className="item">
              <img src={imagesUrl[1]} alt="" className={styles.imgs} />
            </div>
            <div className="item">
              <img src={imagesUrl[2]} alt="" className={styles.imgs} />
            </div>
            <div className="item">
              <img src={imagesUrl[3]} alt="" className={styles.imgs} />
            </div>
          </OwlCarousel>
          <div className={styles.photobg}></div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
