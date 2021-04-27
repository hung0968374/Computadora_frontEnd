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
  const [screenIsLoading, setScreenIsLoading] = useState(false);
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
    }, 0);
  }, [location]);

  return (
    <>
      {!screenIsLoading ? (
        <div className={styles.App}>
          <Header />
          <div className={styles.slo_auth_post}>
            <Slogan />
            <Posts />
          </div>
          <Footer />
        </div>
      ) : (
        <div className={styles.greenScreen}>screen loading</div>
      )}
    </>
  );
}

export default LandingPage;
