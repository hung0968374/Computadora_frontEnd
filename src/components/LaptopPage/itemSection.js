import React from "react";
import Item from "./Item/Item";
import * as styles from "./itemSection.module.css";

export default function item_section({
  allData,
  loadMoreData,
  isLoadingData,
  isPc,
  pcIsFetchingData,
  disableWatchMoreBttn,
}) {
  return (
    <>
      {isPc && pcIsFetchingData && (
        <div className={styles.pcLoadingIconContainer}>
          <img src="images/loading.gif" alt="" />
        </div>
      )}
      <div className={styles.item_section}>
        <div className={styles.items}>
          {allData &&
            allData.map((data, index) => (
              <Item data={data} key={index} isPc={isPc} />
            ))}
          {!isPc && !disableWatchMoreBttn && (
            <div className={styles.watchMoreContainer}>
              <div className={styles.watchMore} onClick={loadMoreData}>
                {isLoadingData ? <img src="images/loading.gif" /> : "Xem thêm"}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
