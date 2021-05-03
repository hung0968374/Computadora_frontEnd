import React, { useState, useEffect } from "react";
import Header from "../components/sharedComponents/Header";
import Footer from "../components/LaptopPage/footer";
import axios from "axios";
import LaptopBoard from "../components/LaptopPage/laptopBoard";
import ItemSection from "../components/LaptopPage/ItemSection";
const Laptop = () => {
  const [allData, setAllData] = useState([]);
  useEffect(async () => {
    const api = await axios.get("http://localhost:5000/products");
    const { data } = api;
    setAllData(data);
  }, []);

  console.log("data from laptop", allData);
  return (
    <div>
      <Header />
      <LaptopBoard />
      <ItemSection allData={allData} setAllData={setAllData} />
      <Footer />
    </div>
  );
};

export default Laptop;
