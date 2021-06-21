import React from "react";
import "../blog/Blog_main.css";
import { Link } from "react-router-dom";

export default function Blog_main({ blog }) {
  return (
    <Link to={`/Blog/${blog._id}`} className="blog_hover">
      <div className="blog_main_container">
        <div className="blog_main_container_top">
          <img src={blog?.imgHeadline[0]} alt="" />
        </div>
        <div className="blog_main_container_bottom">
          <p>
            By <strong>Nguyễn Đức Quang | 0964849119</strong>
          </p>
          <h4>{blog?.headline}</h4>
        </div>
      </div>
    </Link>
  );
}
