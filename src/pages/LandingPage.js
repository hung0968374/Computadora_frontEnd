import * as styles from "../components/LangdingPage/App.module.css";
import React, { useState, useEffect } from "react";
import Header from "../components/sharedComponents/Header";
import Slogan from "../components/LangdingPage/Slogan";
import Posts from "../components/LangdingPage/Posts";
import Footer from "../components/LangdingPage/Footer";
import * as Api from "../api";
import axios from "axios";
function LandingPage() {
  const [allData, setAllData] = useState([]);
  const [count, setCount] = useState(0);
  useEffect(() => {
    async function getAllData() {
      // let { data } = await api.fetchPosts();
      let data1 = await (await Api.fetchPosts()).data;
      console.log(data1);
    }
    getAllData();
  }, [count]);

  console.log(allData);
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
      <Footer count={count} setCount={setCount} />
    </div>
  );
}

export default LandingPage;
