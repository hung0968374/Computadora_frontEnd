import React from "react";
import { Link } from "react-router-dom";
import Item from "./Item/Item";
import * as styles from "./itemSection.module.css";

export default function item_section({
  allData,
  loadMoreData,
  isLoadingData,
  isPc,
  pcIsFetchingData,
}) {
  console.log("ispc", isPc);
  console.log("prIsfetching", pcIsFetchingData);
  return (
    <>
      {isPc && pcIsFetchingData && (
        <div className={styles.pcLoadingIconContainer}>
          <img src="images/loading.gif" alt="" />
        </div>
      )}
      <div className={styles.item_section}>
        {/* <div className={styles.sort_bar}></div> */}
        <div className={styles.items}>
          {allData &&
            allData.map((data, index) => (
              <Item data={data} key={index} isPc={isPc} />
            ))}
          {!isPc && (
            <div className={styles.watchMoreContainer}>
              <div className={styles.watchMore} onClick={loadMoreData}>
                Xem thêm{" "}
                {isLoadingData ? <img src="images/loading.gif" /> : null}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
