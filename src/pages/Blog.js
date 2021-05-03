import { unwrapResult } from "@reduxjs/toolkit";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import * as styles from "../components/blog/blog.module.css";
import Blog1 from "../components/blog/Blog1";
import { countValue } from "../redux/features/counter/counterSlice";
function Blog() {
  const [Data, setData] = useState();
  const [AllData, setAllData] = useState([]);

  useEffect(async () => {
    const data = await axios.get("http://localhost:5000/users");
    setAllData(data.data);
  }, []);

  console.log(AllData);
  return (
    <div className={styles.blog}>
      <div className={styles.board}>
        {AllData.map((data) => (
          <Blog1 data={data} />
        ))}
      </div>
    </div>
  );
}

export default Blog;
