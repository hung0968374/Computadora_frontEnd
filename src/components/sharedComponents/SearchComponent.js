import React, { useEffect, useRef, useState } from "react";
import * as styles from "./searchComponent.module.css";
import { BsSearch } from "react-icons/bs";
import * as API from "../../api/index";
import { useHistory } from "react-router";

export default function SearchComponent() {
  const displaySearchPoolRef = useRef(null);
  const history = useHistory();
  const [searchInput, setSearchInput] = useState("");
  const [showSearchChoicesForUser, setShowSearchChoicesForUser] = useState(
    false
  );
  const [searchPool, setSearchPool] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    if (searchInput.length >= 2) {
      setShowSearchChoicesForUser(true);
      if (searchPool.length > 0) {
        const searchRes = searchPool.filter(function (value) {
          return value.title.toUpperCase().includes(searchInput.toUpperCase());
        });
        setSearchResult(searchRes);
      }
    } else {
      setShowSearchChoicesForUser(false);
      setSearchResult([]);
    }
  }, [searchInput]);
  useEffect(() => {
    const _fetchAllItemsName = async () => {
      try {
        const { data } = await API.getSearchResultsPool();
        setSearchPool(data.searchResultsPool);
      } catch (error) {
        console.log(error);
      }
    };
    _fetchAllItemsName();
  }, []);
  /////////handling click outside search area
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        displaySearchPoolRef.current &&
        !displaySearchPoolRef.current.contains(event.target)
      ) {
        setShowSearchChoicesForUser(false);
      } else {
        setShowSearchChoicesForUser(true);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [displaySearchPoolRef]);
  /////////handling click outside search area
  console.log("show user choice", showSearchChoicesForUser);
  return (
    <div className={styles.container}>
      <div className={styles.mainLogoArea}>
        <img src="/images/insta-icon.svg" alt="" />
        <span> COMPUTADORA</span>
      </div>
      <div className={styles.searchArea} ref={displaySearchPoolRef}>
        <span className={styles.search_icon}>
          <BsSearch size={30} color="#7e8080" />
        </span>
        <input
          type="text"
          className={styles.inputArea}
          placeholder="Nhập tối thiểu 2 từ để tìm kiếm"
          onChange={(e) => setSearchInput(e.target.value)}
          value={searchInput}
        />
        {showSearchChoicesForUser ? (
          <>
            <div
              className={`${styles.selectionSearch} ${
                searchResult.length > 5
                  ? styles.makeSearchResPoolScrollable
                  : null
              }`}
            >
              {searchResult.map((item, index) => {
                return (
                  <div
                    className={styles.selectionItem}
                    key={index}
                    onClick={() => {
                      history.push(`/laptop/${item._id}`);
                      setSearchInput("");
                    }}
                  >
                    <div className={styles.search_imgAndTitleArea}>
                      <div className={styles.searchImgArea}>
                        <img src={item.imgs[0]} alt="" />
                      </div>
                      <div className={styles.searchTitleArea}>{item.title}</div>
                    </div>
                    <div className={styles.searchPriceArea}>
                      {item.price.split("₫").join("")}₫
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}
