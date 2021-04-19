import { unwrapResult } from "@reduxjs/toolkit";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import * as styles from "../components/blog/blog.module.css";
import Blog1 from "../components/blog/Blog1";
import { countValue } from "../redux/features/counter/counterSlice";
function Blog() {
  // const dispatch = useDispatch();
  // const value = useSelector(countValue);
  // // const postDatas = useSelector(allPosts);
  // const _activateFetchPostData = () => {
  //   const response = dispatch(fetchAllPostFromApi());
  //   console.log(unwrapResult(response));
  // };
  // const _getPostById = () => {
  //   dispatch(fetchSpecifiedPostFromApi({ id: 3 }));
  // };
  // console.log("from blog");
  // console.log(value);

  const [Data, setData] = useState();
  const [AllData, setAllData] = useState([]);

  useEffect(async () => {
    const data = await axios.get("http://localhost:5000/users");
    setAllData(data.data);
  }, []);

  console.log(AllData);
  return (
    <div className={styles.blog}>
      {/* <p onClick={_activateFetchPostData}>pussy italy</p>
      <button onClick={_getPostById}>get post by id</button> */}
      <div className={styles.board}>
        {AllData.map((data) => (
          <Blog1 data={data} />
        ))}
      </div>
    </div>
  );
}

export default Blog;
