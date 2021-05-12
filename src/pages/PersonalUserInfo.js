import React, { useEffect } from "react";
import Footer from "../components/sharedComponents/footer";
import { useState } from "react";
import Header from "../components/sharedComponents/Header";
import "./cssFolder/personalInfo.css";
import { ImUser } from "react-icons/im";
import { BsFillHeartFill } from "react-icons/bs";
import { VscHistory } from "react-icons/vsc";
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
  }, []);
  return (
    <div className="personalInfo">
      <Header />
      <div className="container1">
        <Account />
      </div>
      <div className="footerMarginTop"></div>
      <Footer />
    </div>
  );
}
