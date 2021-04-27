import React, { useEffect, useState } from "react";
import "./posts.css";

function Posts() {
  const initialState = [
    "https://lumen.thinkpro.vn//backend/uploads/product/color_images/2020/7/30/razer-blade-15-advanced-Blade15A03NU-AME.jpg",
    "https://lumen.thinkpro.vn//backend/uploads/product/color_images/2020/7/30/razer-blade-15-advanced-Blade15A03NU-26A.jpg",
    "https://lumen.thinkpro.vn//backend/uploads/product/color_images/2020/7/30/razer-blade-15-advanced-Blade15A03NU-T7m.jpg",
    "https://lumen.thinkpro.vn//backend/uploads/product/color_images/2020/7/30/razer-blade-15-advanced-Blade15A03NU-co7.jpg",
    "https://lumen.thinkpro.vn//backend/uploads/product/color_images/2020/7/30/razer-blade-15-advanced-Blade15A03NU-1QT.jpg",
    "https://lumen.thinkpro.vn//backend/uploads/product/color_images/2020/7/30/razer-blade-15-advanced-Blade15A03NU-Edl.jpg",
  ];
  const [imagesUrls, setImagesUrls] = useState(initialState);
  const [selectedIndex, setSelectedIndex] = useState(0);
  useEffect(() => {}, []);

  return (
    <div className="posts_post">
      <div className="posts_image_container">
        <div className="posts_imgSliderArea">
          <img
            src={imagesUrls[selectedIndex]}
            className="posts_displayImg"
            key={imagesUrls[selectedIndex]}
          />
        </div>
        <div className="posts_dotArea">
          {imagesUrls.map((img, index) => {
            return (
              <div
                className={`posts_dots ${
                  selectedIndex === index ? "posts_selectedDot" : null
                }`}
                onClick={() => {
                  setSelectedIndex(index);
                }}
              >
                ⬤
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Posts;
