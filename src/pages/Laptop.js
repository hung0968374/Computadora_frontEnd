import React from "react";
import Header from "../components/sharedComponents/Header";
import Board from "../components/LaptopPage/board";
import ItemSection from "../components/LaptopPage/itemSection";
import Footer from "../components/LaptopPage/footer";
const Laptop = () => {
  return (
    <div>
      <Header />
      <Board />
      <ItemSection />
      <Footer />
    </div>
  );
};

export default Laptop;
