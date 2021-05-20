import React, { useEffect, useState } from "react";
import "./cssFolder/blog.css";
import * as API from "../api/index";
import Header from "../components/sharedComponents/Header";
import Footer from "../components/sharedComponents/footer";
import { useHistory } from "react-router";
import BlogSearchComponent from "../components/blog/BlogSearchComponent";

function Blog() {
  const history = useHistory();
  const [blogs, setBlogs] = useState([]);
  const [randomBlog, setRandomBlog] = useState();
  const [currentBlogPage, setCurrentBlogPage] = useState(1);
  const [isLoadingBlog, setIsLoadingBlog] = useState(false);
  const [notDisplayWatchingMoreBttn, setNotDisplayWatchingMoreBttn] =
    useState(false);

  ////////////handling timeStamp
  const now = new Date().getTime();
  const ramdomBlogPublishedTime = new Date(randomBlog?.createdAt).getTime();
  var randomBlogDelta = Math.abs(now - ramdomBlogPublishedTime) / 1000;
  const randomBlogDay = Math.floor(randomBlogDelta / 86400);
  randomBlogDelta -= randomBlogDay * 86400;
  useEffect(() => {
    const _fetchBlogs = async () => {
      setIsLoadingBlog(true);
      const response = await API.fetchBlogsByPagination(currentBlogPage);
      if (response.data.blogs.length === 0) {
        setNotDisplayWatchingMoreBttn(true);
      }
      setBlogs([...blogs, ...response.data.blogs]);
      setIsLoadingBlog(false);
    };
    _fetchBlogs();
  }, [currentBlogPage]);
  useEffect(() => {
    const _fetchRandomBlog = async () => {
      const response = await API.fetchRandomBlog();
      setRandomBlog(response.data.blog);
    };
    _fetchRandomBlog();

    ////// auto scroll screen
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <Header />
      <BlogSearchComponent />
      <div className="blog_container">
        <article onClick={() => history.push(`/blog/${randomBlog._id}`)}>
          <img src={randomBlog?.blogMainImg} alt="" />
          <div className="article_content">
            <div className="article_timeStamp">
              {randomBlogDay > 0 ? randomBlogDay : "1"} ngày trước
            </div>
            <div className="article_title">{randomBlog?.blogTitle}</div>
            <div className="article_smallPartOfContent">
              {randomBlog?.blogBody[0]}
            </div>
          </div>
        </article>
      </div>
      <div className="blog_blogItemContainer">
        {blogs.map((blog, index) => {
          return (
            <article
              className="blog_blogItemWrapper"
              key={index}
              onClick={() => history.push(`/blog/${blog._id}`)}
            >
              <img src={blog.blogMainImg} alt="" />
              <div className="blog_blogItemContentWrapper">
                <div className="blog_blogItemTimeStamp">
                  {randomBlogDay > 0 ? randomBlogDay : "1"} ngày trước
                </div>
                <div className="blog_blogItemTitle">{blog.blogTitle}</div>
                <div className="blog_blogItemPartOfContent">
                  {blog.blogBody[0]}
                </div>
              </div>
            </article>
          );
        })}
      </div>
      {!notDisplayWatchingMoreBttn && (
        <div
          className="blog_watchMore"
          onClick={() => {
            setCurrentBlogPage((prev) => prev + 1);
          }}
        >
          {isLoadingBlog ? (
            <>
              <img src="images/loading.gif" />
            </>
          ) : (
            <>Xem thêm</>
          )}
        </div>
      )}
      <Footer />
    </>
  );
}

export default Blog;
