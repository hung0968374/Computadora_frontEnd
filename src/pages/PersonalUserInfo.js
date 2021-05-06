import React, { useEffect } from "react";
import Footer from "../components/sharedComponents/footer";
import { useState } from "react";
import Header from "../components/sharedComponents/Header";
import "./cssFolder/personalInfo.css";
import { ImUser } from "react-icons/im";
import { BsFillHeartFill } from "react-icons/bs";
import { VscHistory } from "react-icons/vsc";
import Account from "../components/personalUser/Account";
export default function UserInfo() {
  ////state
  ///function

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
