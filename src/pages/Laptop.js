import React, { useState, useEffect } from "react";
import Header from "../components/sharedComponents/Header";
import ItemSection from "../components/LaptopPage/itemSection";
import Footer from "../components/LaptopPage/footer";
import * as styles from "./cssFolder/laptop.module.css";
import axios from "axios";
import LaptopBoard from "../components/LaptopPage/LaptopBoard";
const Laptop = () => {
  const initialArray = [
    "https://res.cloudinary.com/dsykf3mo9/image/upload/v1619539188/ProductImage/nitro5amd_ehsufz.jpg",
    "https://res.cloudinary.com/dsykf3mo9/image/upload/v1619539171/ProductImage/Surface_20Pro_206_20Promo_Website_kpru65.jpg",
    "https://res.cloudinary.com/dsykf3mo9/image/upload/v1619539148/ProductImage/ThinkPad_20X1_20Nano-02_cqyutl.jpg",
    "https://res.cloudinary.com/dsykf3mo9/image/upload/v1619539132/ProductImage/Acer_20Nitro_205_20Promo_Website_ghwavg.jpg",
  ];
  const [imageUrls, setImageUrls] = useState(initialArray);
  const [allData, setAllData] = useState([]);
  useEffect(async () => {
    const api = await axios.get("http://localhost:5000/products");
    const { data } = api;
    setAllData(data);
  }, []);

  return (
    <div className={styles.container}>
      <Header />
      <LaptopBoard />
      <ItemSection allData={allData} setAllData={setAllData} />
      <Footer />
    </div>
  );
};

export default Laptop;
