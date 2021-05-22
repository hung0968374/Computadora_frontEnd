import React, { useState, useEffect } from "react";
import Header from "../components/sharedComponents/Header";
import ItemSection from "../components/LaptopPage/itemSection";
import * as styles from "./cssFolder/laptop.module.css";
import LaptopBoard from "../components/LaptopPage/LaptopBoard";
import MessengerCustomerChat from "react-messenger-customer-chat";
import Footer from "../components/sharedComponents/footer";
import SearchComponent from "../components/sharedComponents/SearchComponent";
import * as API from "../api/index";

const Pc = () => {
  const [pcItems, setPcItems] = useState([]);
  const [pcIsFetchingData, setPcIsFetchingData] = useState(false);
  useEffect(() => {
    try {
      const _getPcItems = async () => {
        setPcIsFetchingData(true);
        const response = await API.fetchPcs();
        setPcItems(response.data.pcs);
        setPcIsFetchingData(false);
      };
      _getPcItems();
      window.scroll({ top: 0, left: 0, behavior: "smooth" });
    } catch (error) {
      console.log(error);
    }

    ///////////////// setting page title
    document.title = "PC";
  }, []);
  // console.log("pc", pcItems);
  return (
    <div className={styles.containerForPc}>
      <Header />
      <SearchComponent isPc={true} />
      <LaptopBoard isPc={true} />
      <ItemSection
        allData={pcItems}
        isPc={true}
        pcIsFetchingData={pcIsFetchingData}
      />
      <Footer />
      <MessengerCustomerChat
        pageId="101594652091801"
        appId="1790240181155268"
      />
    </div>
  );
};

export default Pc;
