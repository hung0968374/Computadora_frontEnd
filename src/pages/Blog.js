import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import * as styles from "../components/blog/blog.module.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";

function Blog() {
  const imagesUrls = [
    "https://lumen.thinkpro.vn//backend/uploads/product/color_images/2020/7/30/razer-blade-15-advanced-Blade15A03NU-AME.jpg",
    "https://lumen.thinkpro.vn//backend/uploads/product/color_images/2020/7/30/razer-blade-15-advanced-Blade15A03NU-26A.jpg",
    "https://lumen.thinkpro.vn//backend/uploads/product/color_images/2020/7/30/razer-blade-15-advanced-Blade15A03NU-T7m.jpg",
    "https://lumen.thinkpro.vn//backend/uploads/product/color_images/2020/7/30/razer-blade-15-advanced-Blade15A03NU-co7.jpg",
    "https://lumen.thinkpro.vn//backend/uploads/product/color_images/2020/7/30/razer-blade-15-advanced-Blade15A03NU-1QT.jpg",
    "https://lumen.thinkpro.vn//backend/uploads/product/color_images/2020/7/30/razer-blade-15-advanced-Blade15A03NU-Edl.jpg",
  ];
  const [selectedImg, setSelectedImg] = useState(imagesUrls[0]);
  const [displayImg, setdisplayImg] = useState();
  useEffect(() => {
    setdisplayImg(selectedImg);
  }, [selectedImg]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <img
          src={displayImg}
          alt="selected"
          className={styles.selectedImg}
          key={displayImg}
        />
        <div className={styles.imgContainer}>
          {imagesUrls.map((image, index) => (
            <img
              className={styles.imgStyle}
              key={index}
              src={image}
              alt="dog"
              onClick={() => {
                setSelectedImg(image);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;
