import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router";
import * as styles from "./blogSearchComponent.module.css";
import * as API from "../../api/index";
import { BsSearch } from "react-icons/bs";

export default function BlogSearchComponent() {
  const displaySearchPoolRef = useRef(null);
  const history = useHistory();
  const [searchInput, setSearchInput] = useState("");
  const [showSearchChoicesForUser, setShowSearchChoicesForUser] =
    useState(false);
  const [searchPool, setSearchPool] = useState([]);
  const [searchResult, setSearchResult] = useState([]);

  // console.log("sesarch lat", searchInputAlt);
  //////// get-set item pool result
  useEffect(() => {
    const _fetchAllItemsName = async () => {
      try {
        const { data } = await API.fetchBlogSearchPoolResult();
        setSearchPool(data.searchResultsPool);
        setSearchResult(data.searchResultsPool);
      } catch (error) {
        console.log(error);
      }
    };
    _fetchAllItemsName();
  }, []);
  // console.log("search res pool blog", searchPool);
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

  /////////// handling search result
  useEffect(() => {
    if (searchPool.length > 0) {
      let searchResult = [];
      searchPool.map(function (value, index) {
        var stringToCompare = value.blogTitle
          .trim()
          .split(" ")
          .join("")
          .toLowerCase();
        const stringNeedComparing = searchInput
          .trim()
          .split(" ")
          .join("")
          .toLowerCase();
        if (stringToCompare.includes(stringNeedComparing)) {
          searchResult.push(value);
        }
      });
      searchPool.map(function (value, index) {
        var stringToCompare = value.blogTitle
          .trim()
          .split(" ")
          .join("")
          .toLowerCase();
        const stringNeedComparing = searchInput
          .trim()
          .split(" ")
          .join("")
          .toLowerCase();
        let count = 0;
        if (!stringToCompare.includes(stringNeedComparing)) {
          for (var i = 0; i < stringNeedComparing.length; i++) {
            if (stringToCompare.includes(stringNeedComparing[i])) {
              count++;
              stringToCompare = stringToCompare.replace(
                stringNeedComparing[i],
                ""
              );
            }
          }
          if (count === stringNeedComparing.length) {
            searchResult.push(value);
          }
        }
      });
      setSearchResult(searchResult);
    }
  }, [searchInput]);

  return (
    <div className={styles.container}>
      <div className={styles.mainLogoArea}>
        <img src="/images/insta-icon.svg" alt="" />
        <span>COMPU</span>
        <span>TADORA</span>
      </div>
      <div className={styles.searchArea} ref={displaySearchPoolRef}>
        <span className={styles.search_icon}>
          <BsSearch size={30} color="#7e8080" />
        </span>
        <input
          type="text"
          className={styles.inputArea}
          placeholder={"Tìm kiếm Blog"}
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
                const DATE_OPTIONS = {
                  hour: "numeric",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  weekday: "long",
                  minute: "numeric",
                };
                const reformatDate = new Date(
                  item?.createdAt
                ).toLocaleDateString("vi", DATE_OPTIONS);

                var searchInputAlt;
                if (searchInput) searchInputAlt = searchInput;
                var i = 0;
                console.log("seach input", searchInputAlt);
                return (
                  <div
                    className={styles.selectionItem}
                    key={index}
                    onClick={() => {
                      history.push(`/blog/${item._id}`);
                      setSearchInput("");
                      setShowSearchChoicesForUser(false);
                    }}
                  >
                    <div className={styles.searchImgArea}>
                      <img src={item?.blogMainImg} alt="" />
                    </div>
                    <div className={styles.searchTitleArea_timeStamp}>
                      <div className={styles.searchTitleRes}>
                        {item?.blogTitle?.split("").map((char) => {
                          if (searchInputAlt?.toUpperCase()?.includes(char)) {
                            searchInputAlt = searchInputAlt.replace(char, "");
                            return <span>{char}</span>;
                          } else if (searchInputAlt?.includes(char)) {
                            searchInputAlt = searchInputAlt.replace(char, "");
                            return <span>{char}</span>;
                          } else return <>{char}</>;
                        })}
                        {/* {item?.blogTitle?.split("").map((char) => {
                          while (i < searchInputAlt?.length) {
                            if (searchInputAlt[i] === char) {
                              i++;
                              return <span>{char}</span>;
                            } else {
                              return <>{char}</>;
                            }
                          }
                        })} */}
                      </div>
                      <div className={styles.searchResTimeStamp}>
                        {reformatDate}
                      </div>
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
