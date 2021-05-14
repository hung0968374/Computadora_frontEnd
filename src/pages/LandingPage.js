import * as styles from "./cssFolder/landingPage.module.css";
import React, { useEffect, useState } from "react";
import Header from "../components/sharedComponents/Header";
import Slogan from "../components/LangdingPage/Slogan";
import Posts from "../components/LangdingPage/Posts";
import Footer from "../components/LangdingPage/Footer";
import { useLocation } from "react-router";
import { goUp } from "../redux/features/post/screenSlice";
import { useDispatch } from "react-redux";

function LandingPage() {
  const location = useLocation();
  const dispatch = useDispatch();
  const [reloadPage, setReloadPage] = useState(true);
  useEffect(() => {
    if (localStorage.getItem("quantity") === null) {
      localStorage.setItem("quantity", 0);
    }
    dispatch(goUp(true));
    setReloadPage(false);
    setInterval(() => {
      setReloadPage(true);
    }, 0);
  }, [location]);

  return (
    <>
      <div className={styles.App}>
        {reloadPage ? (
          <>
            <Header />
            <div className={styles.pageWrapper}>
              <div className={styles.slo_auth_post}>
                <Slogan />
                <Posts />
              </div>
              <Footer />
            </div>
          </>
        ) : null}
      </div>
    </>
  );
}

export default LandingPage;
