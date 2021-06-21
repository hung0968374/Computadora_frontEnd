import React, { useEffect, useState } from "react";
import "./laptopBoard.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { BaseUrl } from "../../api";
import WaitingScreen from "../../pages/WaitingScreen";

function LaptopBoard() {
  const [blogs, setBlogs] = useState([]);
  const [randomNumber, setrandomNumber] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const imgUrls = [];

  //function

  function random() {
    const randomNumberArray = [];
    for (let i = 0; i < 4; i++) {
      let randomNumber = Math.floor(Math.random() * 30);
      randomNumberArray.push(randomNumber);
    }
    setrandomNumber(randomNumberArray);
  }

  useEffect(() => {
    async function get() {
      try {
        const { data } = await axios.get(`${BaseUrl}/blogs`);
        setBlogs(data);
      } catch (error) {
        console.log(error);
      }
    }
    get();
    random();
    setLoading(!loading);
  }, []);

  console.log(blogs);
  for (const value of randomNumber) {
    imgUrls.push(blogs[value]?.imgHeadline);
  }

  return (
    <div className="laptopBoard_new_feature">
      <div className="laptopBoard_main_feature">
        <div className="laptopBoard_image_feature">
          {loading === true ? (
            <WaitingScreen />
          ) : (
            <Link to="">
              <img
                src={imgUrls[selectedIndex]}
                alt=""
                key={imgUrls[selectedIndex]}
              />
            </Link>
          )}
        </div>
        <div className="laptopBoard_feature_content">
          <div
            className={`laptopBoard_feature_content_list ${
              selectedIndex === 0 ? "laptopBoard_snakeBorder" : null
            }`}
            onClick={() => {
              setSelectedIndex(0);
            }}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <div className="laptopBoard_event">
              {loading === true
                ? `Loading...`
                : blogs[randomNumber[0]]?.headline}
            </div>
          </div>
          <div
            className={`laptopBoard_feature_content_list ${
              selectedIndex === 1 ? "laptopBoard_snakeBorder" : null
            }`}
            onClick={() => {
              setSelectedIndex(1);
            }}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <div className="laptopBoard_event">
              {loading === true ? `...` : blogs[randomNumber[1]]?.headline}
            </div>
          </div>
          <div
            className={`laptopBoard_feature_content_list ${
              selectedIndex === 2 ? "laptopBoard_snakeBorder" : null
            }`}
            onClick={() => {
              setSelectedIndex(2);
            }}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <div className="laptopBoard_event">
              {loading === true ? `...` : blogs[randomNumber[2]]?.headline}
            </div>
          </div>
          <div
            className={`laptopBoard_feature_content_list ${
              selectedIndex === 3 ? "laptopBoard_snakeBorder" : null
            }`}
            onClick={() => {
              setSelectedIndex(3);
            }}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <div className="laptopBoard_event">
              {loading === true ? `...` : blogs[randomNumber[3]]?.headline}
            </div>
          </div>
        </div>
      </div>
      <div className="laptopBoard_blog_feature">
        <div className="laptopBoard_blog_content">
          <div> Tại sao lại là Computadora ?</div>
        </div>
        <div className="laptopBoard_blog_content">
          <div> Meọ để tối ưu hoá thời gian sử dụng pin Laptop top </div>
        </div>
        <div className="laptopBoard_blog_content">
          <div> Made By Đức Quang (a.k.a Roll.I.90 )</div>
        </div>
        <div className="laptopBoard_news">
          <div>
            {" "}
            <Link to="/Blog">Tất cả tin tức</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LaptopBoard;
