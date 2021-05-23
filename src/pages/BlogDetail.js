import React, { useEffect, useState } from "react";
import Header from "../components/sharedComponents/Header";
import Footer from "../components/sharedComponents/footer";
import "./cssFolder/blogDetail.css";
import * as API from "../api/index";
import { Link, useLocation } from "react-router-dom";
import ScrollToTop from "../components/sharedComponents/ScrollToTop";

export default function BlogDetail({ match }) {
  const location = useLocation();
  const now = new Date().getTime();
  const [blogInDetail, setBlogInDetail] = useState({});
  const [fourRelatingBlogs, setFourRelatingBlogs] = useState([]);
  useEffect(() => {
    const _fetchBlogInDetail = async () => {
      const response = await API.fetchBlogById(match.params.id);
      setBlogInDetail(response.data);
    };
    const _fetchFourRandomBlog = async () => {
      const response = await API.fetchSevenDistinctRandomBlog();
      setFourRelatingBlogs(response.data.sevenRamdomBlog.splice(0, 4));
    };
    _fetchBlogInDetail();
    _fetchFourRandomBlog();

    /////// scroll to top
    window.scroll({ top: 0, left: 0, behavior: "auto" });
  }, [location]);
  console.log("4 ran", fourRelatingBlogs);

  /////////// set title of this page
  useEffect(() => {
    if (blogInDetail?.blogTitle) document.title = blogInDetail?.blogTitle;
  }, [blogInDetail, location]);

  ////////////reformatting date to VietNam timeStamp
  const DATE_OPTIONS = {
    hour: "numeric",
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
    minute: "numeric",
  };
  const reformatDate = new Date(blogInDetail.createdAt).toLocaleDateString(
    "vi",
    DATE_OPTIONS
  );
  return (
    <>
      <ScrollToTop />
      <Header />
      <div className="blogDetail_headerContainer">
        <div className="blogDetail_title">{blogInDetail.blogTitle}</div>
        <div className="blogDetail_timeStamp">{reformatDate}</div>
        <img src={blogInDetail.blogMainImg} alt="" />
      </div>
      <div className="blogDetail_textContainer">
        {blogInDetail?.blogBody?.map((blogContent, index) => {
          if (blogContent.includes("https")) {
            return <img src={blogContent} alt="" />;
          } else if (blogContent.length > 75) {
            return <p key={index}>{blogContent}</p>;
          } else if (blogContent.length < 75) {
            return <p className="blogDetail_strongText">{blogContent}</p>;
          }
        })}
      </div>
      <div className="blogDetail_relatingTitle">Bài viết liên quan</div>
      <div className="blogDetail_relatingBlogContainer">
        {fourRelatingBlogs.map((blog, index) => {
          const blogPublishingTime = new Date(blog?.createdAt).getTime();
          var randomBlogDelta = Math.abs(now - blogPublishingTime) / 1000;
          const blogInterval = Math.floor(randomBlogDelta / 86400);
          console.log(blog);
          return (
            <Link
              to={`/blog/${blog?._id}`}
              className="blog_blogItemWrapper"
              key={index}
            >
              <img src={blog?.blogMainImg} alt="" />
              <div className="blog_blogItemContentWrapper">
                <div className="blog_blogItemTimeStamp">
                  {blogInterval > 0 ? blogInterval : "1"} ngày trước
                </div>
                <div className="blog_blogItemTitle">{blog?.blogTitle}</div>
                <div className="blog_blogItemPartOfContent">
                  {blog.blogBody[0]}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      <Footer />
    </>
  );
}
