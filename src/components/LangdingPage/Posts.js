import React, { useEffect, useState } from "react";
import "./posts.css";

function Posts() {
  const initialState = [
    "https://cdn.tgdd.vn/ValueIcons/1/cao-cap.jpg",
    "https://cdn.tgdd.vn/ValueIcons/1/do-hoa-(tgdd).jpg",
    "https://cdn.tgdd.vn/ValueIcons/1/gaming.jpg",
    "https://cdn.tgdd.vn/ValueIcons/1/mong-nhe.jpg",
  ];
  const [imagesUrls, setImagesUrls] = useState(initialState);
  const [selectedIndex, setSelectedIndex] = useState(0);

  console.log(selectedIndex);
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
