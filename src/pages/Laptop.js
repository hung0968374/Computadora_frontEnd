import React, { useState, useEffect } from "react";
import Header from "../components/sharedComponents/Header";
import ItemSection from "../components/LaptopPage/itemSection";
import * as styles from "./cssFolder/laptop.module.css";
import LaptopBoard from "../components/LaptopPage/LaptopBoard";
import { useDispatch, useSelector } from "react-redux";
import MessengerCustomerChat from "react-messenger-customer-chat";
import {
  fetchLaptopByPage,
  laptopByPage,
} from "../redux/features/post/laptopItemSlice";
import Footer from "../components/sharedComponents/footer";
import { unwrapResult } from "@reduxjs/toolkit";
import { useLocation } from "react-router";
import SearchComponent from "../components/sharedComponents/SearchComponent";
import ScrollToTop from "../components/sharedComponents/ScrollToTop";

const Laptop = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const laptopItemsInSeperatedPage = useSelector(laptopByPage);
  const dataByPage = laptopItemsInSeperatedPage.arrayOfLaptopItems;
  const [currentPage, setCurrentPage] = useState(1);
  const [disableWatchMoreBttn, setDisableWatchMoreBttn] = useState(false);
  useEffect(async () => {}, []);
  const _loadMoreData = async () => {
    setCurrentPage((prev) => prev + 1);
    console.log("current page", currentPage);
    const actionRes = await dispatch(fetchLaptopByPage(currentPage + 1));
    console.log("unwrap", unwrapResult(actionRes).data);
    if (unwrapResult(actionRes).data.length == 0) {
      setDisableWatchMoreBttn(true);
    }
  };
  useEffect(() => {
    dispatch(fetchLaptopByPage(1));
  }, []);
  useEffect(() => {
    window.scroll({ top: 0, left: 0, behavior: "auto" });
    ///////// setting page title
    document.title = "Laptop";
  }, []);
  return (
    <div className={styles.container}>
      <ScrollToTop />
      <Header />
      <SearchComponent />
      <LaptopBoard />
      <ItemSection
        allData={dataByPage}
        loadMoreData={_loadMoreData}
        isLoadingData={laptopItemsInSeperatedPage.isFetchingLaptopItemsByPage}
        disableWatchMoreBttn={disableWatchMoreBttn}
      />
      <Footer />
      <MessengerCustomerChat
        pageId="101594652091801"
        appId="1790240181155268"
      />
    </div>
  );
};

export default Laptop;
