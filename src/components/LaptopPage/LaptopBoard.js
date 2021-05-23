import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./laptopBoard.css";
import * as API from "../../api/index";
import { FaAngleRight } from "react-icons/fa";

function LaptopBoard({ isPc = false }) {
  const imgUrls = isPc
    ? [
        "https://www.phucanh.vn/media/news/1007_233.jpg",
        "https://res.cloudinary.com/nonde/image/upload/v1621338681/computadora/5126498_27g2_goc_gaming_1_814x320_fzz2ig.jpg",
        "https://res.cloudinary.com/nonde/image/upload/v1621338901/computadora/msi_800x450_814x320_kkeebl.jpg",
        "https://res.cloudinary.com/nonde/image/upload/v1621338829/computadora/top-5-bo-may-tinh-gia-re-choi-game-duoi-5-trieu-2_814x320_ndcyhq.jpg",
      ]
    : [
        "https://res.cloudinary.com/dsykf3mo9/image/upload/v1619539188/ProductImage/nitro5amd_ehsufz.jpg",
        "https://res.cloudinary.com/dsykf3mo9/image/upload/v1619539171/ProductImage/Surface_20Pro_206_20Promo_Website_kpru65.jpg",
        "https://res.cloudinary.com/dsykf3mo9/image/upload/v1619539148/ProductImage/ThinkPad_20X1_20Nano-02_cqyutl.jpg",
        "https://res.cloudinary.com/dsykf3mo9/image/upload/v1619539132/ProductImage/Acer_20Nitro_205_20Promo_Website_ghwavg.jpg",
      ];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [normalBlog, setNormalBlog] = useState([]);
  const [blogWithImage, setBlogWithImage] = useState([]);
  useEffect(() => {
    const _getSenvenRandomBlog = async () => {
      const response = await API.fetchSevenDistinctRandomBlog();
      setBlogWithImage(response.data.sevenRamdomBlog.splice(0, 4));
      setNormalBlog(response.data.sevenRamdomBlog.splice(0, 3));
    };
    _getSenvenRandomBlog();
  }, []);
  if (normalBlog.length > 0) console.log("nor blog", normalBlog);
  if (blogWithImage.length > 0) console.log(" blog with img", blogWithImage);
  return (
    <div className="laptopBoard_new_feature">
      <div className="laptopBoard_main_feature">
        <div className="laptopBoard_image_feature">
          <Link to={`/blog/${blogWithImage[selectedIndex]?._id}`}>
            <img
              src={blogWithImage[selectedIndex]?.blogMainImg}
              alt=""
              key={imgUrls[selectedIndex]}
            />
          </Link>
        </div>
        <div className="laptopBoard_feature_content">
          {blogWithImage.map((blog, index) => {
            return (
              <div
                className={`laptopBoard_feature_content_list ${
                  selectedIndex == index ? "laptopBoard_snakeBorder" : null
                }`}
                onClick={() => {
                  setSelectedIndex(index);
                }}
              >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <div className="laptopBoard_event">{blog.blogTitle}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="laptopBoard_blog_feature">
        {normalBlog.map((blog, index) => {
          return (
            <Link
              to={`/blog/${blog?._id}`}
              className="laptopBoard_blog_content"
            >
              <p>{blog?.blogTitle}</p>
            </Link>
          );
        })}
        <div className="laptopBoard_news">
          <Link to="/blog">
            Tất cả tin tức
            <i>
              <FaAngleRight size={24} />
            </i>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LaptopBoard;
