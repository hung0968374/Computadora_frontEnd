import React from "react";
import { useSelector } from "react-redux";
import * as styles from "../components/blog/blog.module.css";
import { countValue } from "../redux/features/counter/counterSlice";

const Blog = () => {
  const value = useSelector(countValue);
  console.log(value);
  return <div className={styles.blog}>pussy</div>;
};

export default Blog;
