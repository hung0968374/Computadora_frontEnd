import React, { useState, useEffect } from "react";
import Header from "../components/sharedComponents/Header";
import ItemSection from "../components/LaptopPage/itemSection";
import Footer from "../components/LaptopPage/footer";
import * as styles from "./cssFolder/laptop.module.css";
import axios from "axios";
import LaptopBoard from "../components/LaptopPage/LaptopBoard";
import * as API from "../api/index";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchLaptopByPage,
  laptopByPage,
} from "../redux/features/post/laptopItemSlice";
import { unwrapResult } from "@reduxjs/toolkit";
const Laptop = () => {
  const dispatch = useDispatch();
  const laptopItemsInSeperatedPage = useSelector(laptopByPage);
  const dataByPage = laptopItemsInSeperatedPage.arrayOfLaptopItems;
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(async () => {
    await dispatch(fetchLaptopByPage(currentPage));
  }, []);
  const _loadMoreData = async () => {
    setCurrentPage((prev) => prev + 1);
    const actionRes = await dispatch(fetchLaptopByPage(currentPage));
    // console.log("unwrap", unwrapResult(actionRes));
  };
  useEffect(() => {
    // console.log(laptopItemsInSeperatedPage.arrayOfLaptopItems[0]?.posts);
    console.log("lap slice", laptopItemsInSeperatedPage);
  }, [currentPage]);
  return (
    <div className={styles.container}>
      <Header />
      <LaptopBoard />
      <ItemSection
        allData={dataByPage}
        loadMoreData={_loadMoreData}
        isLoadingData={laptopItemsInSeperatedPage.isFetchingLaptopItemsByPage}
      />
      <Footer />
    </div>
  );
};

export default Laptop;
