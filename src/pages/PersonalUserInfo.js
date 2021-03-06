import React, { useEffect } from "react";
import Footer from "../components/sharedComponents/footer";
import Header from "../components/sharedComponents/Header";
import "./cssFolder/personalInfo.css";
import Account from "../components/personalUser/Account";
import { useHistory } from "react-router";

export default function UserInfo() {
  ////state
  ///function
  ////////////redirect if user not loggined
  const history = useHistory();
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (!token) {
      history.push("/");
    }
    window.scroll({ top: 0, left: 0, behavior: "auto" });
  }, []);
  useEffect(() => {
    document.title = "Thông tin cá nhân";
  }, []);
  return (
    <div className="personalInfo">
      <Header />
      <Account />
      <div className="footerMarginTop"></div>
      <Footer />
    </div>
  );
}
