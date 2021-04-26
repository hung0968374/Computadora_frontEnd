import * as styles from "../components/LangdingPage/App.module.css";
import React, { useState, useEffect } from "react";
import Header from "../components/sharedComponents/Header";
import Slogan from "../components/LangdingPage/Slogan";
import Posts from "../components/LangdingPage/Posts";
import Footer from "../components/LangdingPage/Footer";
import * as Api from "../api";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router";

function LandingPage() {
  const location = useLocation();
  const [allData, setAllData] = useState([]);
  const [screenIsLoading, setScreenIsLoading] = useState(true);
  const [changeStt, setChangeStt] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    setScreenIsLoading(true);
    // async function getAllData() {
    //   let data1 = await (await Api.fetchPosts()).data;
    //   console.log(data1);
    //   setAllData(data1);
    //   dispatch(incrementByAmount(data1));
    //   dispatch(getData(data1));
    // }
    // getAllData();
    let user_deserialized = JSON.parse(localStorage.getItem("userInfo"));
    setTimeout(() => {
      setScreenIsLoading(false);
    }, 1000);
  }, [location]);

  return (
    <div className={styles.App}>
      {!screenIsLoading ? (
        <div>
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
      ) : (
        <div>screen loading</div>
      )}
    </div>
  );
}

export default LandingPage;
