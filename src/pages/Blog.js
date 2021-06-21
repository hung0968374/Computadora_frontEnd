import React, { useEffect, useState } from "react";
import "../components/blog/Blog.css";
import Footer from "../components/LaptopPage/footer";
import Header from "../components/sharedComponents/Header";
import { BaseUrl } from "../api";
import axios from "axios";
import { Link } from "react-router-dom";
import Blog_main from "../components/blog/Blog_main";
import WaitingScreen from "./WaitingScreen";

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [currentBlog, setCurrentBlog] = useState(2);
  const [loading, setLoading] = useState(true);
  const [seeMore, setSeeMore] = useState(6);

  async function fetchBlogs() {
    try {
      const { data } = await axios.get(`${BaseUrl}/blogs`);
      setBlogs(data);
      setLoading(!loading);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    document.title = "Tổng hợp blog";
    fetchBlogs();
  }, []);

  const handleNextBlog = () => {
    if (currentBlog < 5) {
      setCurrentBlog(currentBlog + 1);
    } else if (currentBlog === 5) {
      setCurrentBlog(2);
    }
  };

  const handlePrevBlog = () => {
    if (currentBlog <= 5 && currentBlog > 2) {
      setCurrentBlog(currentBlog - 1);
    } else if (currentBlog === 2) {
      setCurrentBlog(5);
    }
  };
  const handleSeeMoreEvent = () => {
    setSeeMore(seeMore + 6);
  };
  return (
    <div className="blog_wrapper_">
      <Header />
      <div className="logo_and_name_">
        <img
          className="logo_small"
          src="/images/laptop.svg"
          alt="Computadora"
        />
        <p>Computadora / Blog</p>
      </div>
      <div className="blog_container_">
        <div className="blog_first_look">
          <div className="blog_first_look_img">
            {loading ? (
              <WaitingScreen />
            ) : (
              <img src={blogs[currentBlog]?.imgHeadline} alt="" />
            )}
          </div>
          <Link to={`/Blog/${blogs[currentBlog]?._id}`}>
            <div className="blog_first_look_headline">
              <div className="bold_headline">
                {loading === true ? (
                  <h3>Loading...</h3>
                ) : (
                  <h3>{blogs[currentBlog]?.headline}</h3>
                )}
              </div>
              <div className="see_detailsPost">
                <p>Xem thông tin chi tiết</p>
                <img
                  src="https://image.flaticon.com/icons/png/512/854/854184.png"
                  alt=""
                />
              </div>
            </div>
          </Link>

          <div className="next_" onClick={handleNextBlog}>
            <p className="next_text">NEXT</p>
            <span className="next_arr_">
              <img
                src="https://image.flaticon.com/icons/png/512/892/892533.png"
                alt=""
              />
            </span>
          </div>
          <div className="prev_" onClick={handlePrevBlog}>
            <span className="next_arr_">
              <img
                src="https://image.flaticon.com/icons/png/512/892/892517.png"
                alt=""
              />
            </span>
            <p className="next_text">PREV</p>
          </div>
        </div>
        {loading === true ? (
          <div className="blog_main_">
            <div className="loading_block_"></div>;
            <div className="loading_block_"></div>;
            <div className="loading_block_"></div>;
            <div className="loading_block_"></div>;
            <div className="loading_block_"></div>;
            <div className="loading_block_"></div>;
          </div>
        ) : (
          <div className="blog_main_">
            {blogs?.slice(0, seeMore).map((blog, index) => {
              return <Blog_main key={index} blog={blog} />;
            })}
          </div>
        )}

        <div className="see_more_blog_div">
          <button className="see_more_blog" onClick={handleSeeMoreEvent}>
            Xem thêm{" "}
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
