import React, { useEffect, useState } from "react";
import Result from "../components/Search/Result";
import "../components/Search/Search.css";
import Header from "../components/sharedComponents/Header";

function Search() {
  const [inputSearch, setInputSearch] = useState("");
  useEffect(() => {
    document.title = "Tìm kiếm";
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
        <p>Computadora / Tìm kiếm</p>
      </div>
      <div className="search_box_">
        <input
          type="text"
          placeholder="Gõ gì đó để tìm kiếm ..."
          onChange={(e) => setInputSearch(e.target.value.trim())}
        />
        <div className="button_search">
          <img
            src="https://image.flaticon.com/icons/png/512/482/482631.png"
            alt=""
          />
        </div>
      </div>
      <Result inputSearch={inputSearch} />
    </div>
  );
}

export default Search;
