import "./App.css";
import React, { useState, useEffect } from "react";
import Auth from "./components/Auth";
import Header from "./components/Header";
import Slogan from "./components/Slogan";
import Posts from "./components/Posts";
import Footer from "./components/Footer";
import * as api from "./api";
function App() {
  const [allData, setAllData] = useState([]);
  useEffect(() => {
    async function getAllData() {
      let { data } = await api.fetchPosts();
      setAllData(data);
    }
    getAllData();
  }, []);
  console.log(allData);
  return (
    <div className="App">
      <Header />
      <div className="slo_auth_post">
        <div className="slo_auth">
          <Slogan />
          <Auth />
        </div>
        <div className="posts">
          <Posts />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
