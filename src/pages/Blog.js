import React from "react";
import { Link } from "react-router-dom";
import * as blogStyle from "../components/blog/blog.module.css";
const Blog = () => {
  return (
    <div className={blogStyle.blog}>
      this is blog
      <div>
        <Link to="/productDetail">product detail</Link>
      </div>
    </div>
  );
};

export default Blog;
