import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import * as styles from "./cssFolder/DetailItem.module.css";
import Header from "../components/sharedComponents/Header";
import Footer from "../components/sharedComponents/footer";
import ItemProp from "../components/detailItem/ItemProp";
import Comment from "../components/detailItem/Comment";
import { fetchItemById } from "../api";
import ReviewItem from "../components/detailItem/ReviewItem";
import MessengerCustomerChat from "react-messenger-customer-chat";
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
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  const BaseUrl = "https://res.cloudinary.com/dsykf3mo9/image/upload/";
  return (
    <>
      <Header />
      {specificItemById ? <ItemProp data={specificItemById} /> : null}
      <div className={styles.reviewSection}>Đánh giá chi tiết</div>
      <ReviewItem data={specificItemById} />
      {/* <Comment /> */}
      <MessengerCustomerChat
        pageId="101594652091801"
        appId="1790240181155268"
      />
      <Footer />
    </>
  );
}
