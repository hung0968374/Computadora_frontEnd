import * as styles from "../components/LangdingPage/App.module.css";
import React, { useState, useEffect } from "react";
import Header from "../components/sharedComponents/Header";
import Slogan from "../components/LangdingPage/Slogan";
import Posts from "../components/LangdingPage/Posts";
import Footer from "../components/LangdingPage/Footer";
import * as Api from "../api";
import { useSelector, useDispatch } from "react-redux";
import {
  countValue,
  incrementByAmount,
} from "../redux/features/counter/counterSlice";
import { getData } from "../redux/features/post/postSlice";

function LandingPage() {
  const [allData, setAllData] = useState([]);
  const [changeStt, setChangeStt] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    // async function getAllData() {
    //   let data1 = await (await Api.fetchPosts()).data;
    //   console.log(data1);
    //   setAllData(data1);
    //   dispatch(incrementByAmount(data1));
    //   dispatch(getData(data1));
    // }
    // getAllData();
    console.log(localStorage);
    console.log(localStorage.getItem("token"));
    let user_deserialized = JSON.parse(localStorage.getItem("userInfo"));
    console.log("deseri", user_deserialized);
  }, []);

  return (
    <div className={styles.App}>
      <Header />
      <div className={styles.slo_auth_post}>
        <div className={styles.slo_auth}>
          <Slogan />
        </div>
        <div className={styles.posts}>
          <Posts />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage;
