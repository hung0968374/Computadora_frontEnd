import * as styles from "../components/LangdingPage/App.module.css";
import Header from "../components/sharedComponents/Header";
import Slogan from "../components/LangdingPage/Slogan";
import Posts from "../components/LangdingPage/Posts";
import Footer from "../components/LangdingPage/Footer";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

function LandingPage() {
  const location = useLocation();
  const [token, setToken] = useState("");

  useEffect(() => {
    setToken(localStorage.getItem("userToken"));
  }, [location]);

  return (
    <div className={styles.App}>
      <Header token={token} />
      <div className={styles.slo_auth_post}>
        <div className={styles.slo_auth}>
          <Slogan token={token} />
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
