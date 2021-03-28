import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Slogan from "./components/Slogan";
import Posts from "./components/Posts";
import Footer from "./components/Footer";
import * as api from "./api";
function App() {
  const [allData, setAllData] = useState([]);
  const [count, setCount] = useState(0);
  useEffect(() => {
    async function getAllData() {
      let { data } = await api.fetchPostsById(count);
      setAllData(data);
    }
    getAllData();
  }, [count]);
  // console.log(allData);
  return (
    <div className="App">
      <Header />
      <div className="slo_auth_post">
        <div className="slo_auth">
          <Slogan />
        </div>
        <div className="posts">
          <Posts />
        </div>
      </div>
      <Footer count={count} setCount={setCount} />
    </div>
  );
}

export default App;
