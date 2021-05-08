import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/sharedComponents/Header";
import { itemInCart } from "../redux/features/cart/cartSlice";
import Pusher from "pusher-js";
import * as styles from "./cssFolder/pc.module.css";
const Pc = () => {
  // useEffect(() => {
  //   const pusher = new Pusher("0489280acfa7987721e1", {
  //     cluster: "ap1",
  //   });

  //   var channel = pusher.subscribe("messages");
  //   channel.bind("inserted", (data) => {
  //     alert(JSON.stringify(data));
  //   });
  // }, []);
  const [input, setInput] = useState();
  return (
    <div className={styles.bttn}>
      <div className={styles.container}>
        <div className={styles.inputContainer}></div>
        <div className={styles.select}></div>
      </div>
    </div>
  );
};

export default Pc;
