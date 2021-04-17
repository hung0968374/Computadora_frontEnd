import { unwrapResult } from "@reduxjs/toolkit";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as styles from "../components/blog/blog.module.css";
import { countValue } from "../redux/features/counter/counterSlice";
import {
  allPosts,
  fetchAllPostFromApi,
  fetchSpecifiedPostFromApi,
} from "../redux/features/post/postSlice";

function Blog() {
  const dispatch = useDispatch();
  const value = useSelector(countValue);
  // const postDatas = useSelector(allPosts);
  const _activateFetchPostData = () => {
    const response = dispatch(fetchAllPostFromApi());
    console.log(unwrapResult(response));
  };
  const _getPostById = () => {
    dispatch(fetchSpecifiedPostFromApi({ id: 3 }));
  };
  console.log("from blog");
  console.log(value);
  return (
    <div className={styles.blog}>
      <p onClick={_activateFetchPostData}>pussy italy</p>
      <button onClick={_getPostById}>get post by id</button>
    </div>
  );
}

export default Blog;
