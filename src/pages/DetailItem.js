import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import * as styles from "./cssFolder/DetailItem.module.css";
import Header from "../components/sharedComponents/Header";
import Footer from "../components/sharedComponents/footer";
import ItemProp from "../components/detailItem/ItemProp";
import Comment from "../components/detailItem/Comment";
import { fetchItemById } from "../api";
export default function DetailItem({ match }) {
  const [specificItemById, setSpecificItemById] = useState([]);
  useEffect(async () => {
    try {
      const dataFromSpecificId = await fetchItemById(match.params.id);
      const { data } = dataFromSpecificId;
      setSpecificItemById(data[0]);
    } catch (error) {
      console.log(error);
    }
  }, []);
  const BaseUrl = "https://res.cloudinary.com/dsykf3mo9/image/upload/";
  return (
    <>
      <Header />
      {specificItemById ? <ItemProp data={specificItemById} /> : null}
      <div className={styles.reviewArea}></div>
      <Comment />
      <Footer />
    </>
  );
}
