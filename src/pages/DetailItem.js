import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import * as styles from "./cssFolder/DetailItem.module.css";
import Header from "../components/sharedComponents/Header";
import Footer from "../components/sharedComponents/footer";
import ItemProp from "../components/detailItem/ItemProp";
import * as API from "../api/index";
import ReviewItem from "../components/detailItem/ReviewItem";
import { useSelector } from "react-redux";
import { discardNavOrNot } from "../redux/features/post/screenSlice";
import SearchComponent from "../components/sharedComponents/SearchComponent";
import { useLocation } from "react-router";
import Comment from "../components/sharedComponents/Comment";
import queryString from "query-string";
import ScrollToTop from "../components/sharedComponents/ScrollToTop";
import MessengerChat from "../components/sharedComponents/MessengerChat";

export default function DetailItem({}) {
  const { search } = useLocation();
  const values = queryString.parse(search);
  const itemId = values.id;
  const genre = values.genre;
  const showNavOrNot = useSelector(discardNavOrNot);
  const [specificItemById, setSpecificItemById] = useState([]);
  const location = useLocation();

  /////// function
  useEffect(() => {
    if (specificItemById?.title) document.title = specificItemById?.title;
  }, [specificItemById]);
  useEffect(async () => {
    var dataFromSpecificId;
    try {
      if (genre === "Laptop") {
        dataFromSpecificId = await API.fetchItemById(itemId);
      } else if (genre === "pc") {
        dataFromSpecificId = await API.fetchParticularPc(itemId);
      }
      setSpecificItemById(dataFromSpecificId.data);
    } catch (error) {
      console.log(error);
    }
    window.scroll({ top: 0, left: 0, behavior: "auto" });
  }, [location]);
  return (
    <>
      {showNavOrNot ? null : <Header />}
      <SearchComponent isPc={genre === "pc" ? true : false} />
      <ScrollToTop />
      {specificItemById ? (
        <ItemProp data={specificItemById} genre={genre} />
      ) : null}
      <div className={styles.reviewSection}>Đánh giá chi tiết</div>
      <ReviewItem data={specificItemById} />
      <Comment postId={itemId} />
      <MessengerChat />
      <Footer />
    </>
  );
}
