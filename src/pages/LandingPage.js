import * as styles from "./cssFolder/landingPage.module.css";
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
  useEffect(() => {
    if (localStorage.getItem("quantity") === null) {
      localStorage.setItem("quantity", 0);
    }
  }, [location]);

  return (
    <>
      <div className={styles.App}>
        <Header />
        <div className={styles.pageWrapper}>
          <div className={styles.slo_auth_post}>
            <Slogan />
            <Posts />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default LandingPage;
