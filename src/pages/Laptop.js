import React, { useState, useEffect } from "react";
import Header from "../components/sharedComponents/Header";
import Footer from "../components/LaptopPage/footer";
import axios from "axios";
import { Link } from "react-router-dom";
import "../components/LaptopPage/laptop.css";
import LaptopBoard from "../components/LaptopPage/laptopBoard";
import ItemSection from "../components/LaptopPage/ItemSection";
import WaitingScreen from "./WaitingScreen";
import { BaseUrl } from "../api";

const Laptop = () => {
  const [allData, setAllData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    document.title = "Laptop";
  }, []);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const api = await axios.get(`${BaseUrl}/products`);
        const { data } = api;
        setAllData(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <div>
      <Header />
      <div className="logo_and_name_">
        <img
          className="logo_small"
          src="/images/laptop.svg"
          alt="Computadora"
        />
        <p>Computadora / Laptop</p>
        <Link className="toSearch_" to="/Search">
          <img
            src="https://image.flaticon.com/icons/png/512/482/482631.png"
            alt=""
            className="search_"
          />
        </Link>
      </div>
      <LaptopBoard />
      {loading ? (
        <WaitingScreen />
      ) : (
        <ItemSection allData={allData} setAllData={setAllData} />
      )}
      <Footer />
    </div>
  );
};

export default Laptop;
