import React, { useState } from "react";
import "./posts.css";
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
  console.log(imagesUrl);
  return (
    <div className="posts">
      <div className="image-container">
        <div className="hero-image">
          <OwlCarousel className="owl-theme" items="1" loop autoplay nav dots>
            <div className="item">
              <img src={imagesUrl[0]} alt="" className="imgs" />
            </div>
            <div className="item">
              <img src={imagesUrl[1]} alt="" className="imgs" />
            </div>
            <div className="item">
              <img src={imagesUrl[2]} alt="" className="imgs" />
            </div>
            <div className="item">
              <img src={imagesUrl[3]} alt="" className="imgs" />
            </div>
          </OwlCarousel>
          <div className="photobg"></div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
