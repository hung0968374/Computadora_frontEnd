import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/sharedComponents/Header";
import { itemInCart } from "../redux/features/cart/cartSlice";
import Pusher from "pusher-js";

import "./cssFolder/pc.css";
const Pc = () => {
  useEffect(() => {
    const pusher = new Pusher("0489280acfa7987721e1", {
      cluster: "ap1",
    });

    var channel = pusher.subscribe("messages");
    channel.bind("inserted", (data) => {
      alert(JSON.stringify(data));
    });
  }, []);
  return (
    <div className="bttn">
      <Header />
      <div>
        <div className="a">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Pc;
