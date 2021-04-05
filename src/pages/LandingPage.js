import * as styles from "../components/LangdingPage/App.module.css";
import React, { useState, useEffect } from "react";
import Header from "../components/sharedComponents/Header";
import Slogan from "../components/LangdingPage/Slogan";
import Posts from "../components/LangdingPage/Posts";
import Footer from "../components/LangdingPage/Footer";
import * as Api from "../api";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  countValue,
  increment,
  incrementByAmount,
} from "../redux/features/counter/counterSlice";
function LandingPage() {
  const [allData, setAllData] = useState([]);
  const [changeStt, setChangeStt] = useState(false);
  const value = useSelector(countValue);
  const dispatch = useDispatch();
  useEffect(() => {
    async function getAllData() {
      // let { data } = await api.fetchPosts();
      let data1 = await (await Api.fetchPosts()).data;
      console.log(data1);
      setAllData(data1);
    }
    getAllData();
  }, [changeStt]);
  const _changeStt = () => {
    setChangeStt(!changeStt);
    dispatch(incrementByAmount(5));
  };
  console.log(value);
  return (
    <div className={styles.App}>
      <Header />
      <div className={styles.slo_auth_post}>
        <div className={styles.slo_auth}>
          <Slogan changeStt={_changeStt} />
        </div>
        <div className={styles.posts}>
          <Posts />
        </div>
      </div>
      {value}
      <Footer />
    </div>
  );
}

export default LandingPage;
