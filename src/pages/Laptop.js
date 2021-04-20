import React, { useState, useEffect } from "react";
import Header from "../components/sharedComponents/Header";
import Board from "../components/LaptopPage/board";
import ItemSection from "../components/LaptopPage/itemSection";
import Footer from "../components/LaptopPage/footer";
import axios from "axios";
const Laptop = () => {
  const [allData, setAllData] = useState([]);
  useEffect(async () => {
    const api = await axios.get("http://localhost:5000/products");
    const { data } = api;
    setAllData(data);
  }, []);

  return (
    <div>
      <Header />
      <Board />
      <ItemSection allData={allData} setAllData={setAllData} />
      <Footer />
    </div>
  );
};

export default Laptop;
