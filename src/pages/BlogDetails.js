import axios from "axios";
import React, { useEffect, useState } from "react";
import { BaseUrl } from "../api";
import Header from "../components/sharedComponents/Header";
import "../components/blog/BlogDetails.css";

function BlogDetails({ match }) {
  const blog_id = match.params.id;
  const [blogDetails, setBlogDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  // function
  async function fetchData() {
    try {
      const { data } = await axios.get(`${BaseUrl}/Blogs/${blog_id}`);
      setBlogDetails(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
    setLoading(!loading);
  }, []);
  document.title = `${blogDetails.headline}`;

  console.log(blogDetails);
  return (
    <div className="blog_details_container">
      <Header />
      <div className="logo_and_name_">
        <img
          className="logo_small"
          src="/images/laptop.svg"
          alt="Computadora"
        />
        <p>{`Computadora / Blog / ${blogDetails.headline}`}</p>
      </div>
      <div className="blog_details_hero">
        <h1>{blogDetails.headline}</h1>
        <div className="author">
          <p>
            By:
            <strong>Nguyễn Đức Quang</strong>
            <br />
            Số điện thoại:
            <strong>0964849119</strong>
          </p>
        </div>
        <div className="Headline_img">
          <img src={blogDetails?.imgHeadline} alt="" />
        </div>
        <div className="blog_info">
          {blogDetails.blog?.map((blog, index) => {
            if (blog.includes("https")) {
              return <img src={blog} alt={blog} key={index} />;
            }
            if (blog.length < 100) {
              return <h3 key={index}>{blog}</h3>;
            }
            if (blog.length > 100) {
              return <p key={index}>{blog}</p>;
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default BlogDetails;
