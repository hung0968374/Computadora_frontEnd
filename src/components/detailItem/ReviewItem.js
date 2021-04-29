import React, { useEffect, useState } from "react";
import * as styles from "./reviewItem.module.css";
const ReviewItem = ({ data }) => {
  const [isTruncated, setIsTruncated] = useState(false);
  const [truncatedReview, setTruncatedReview] = useState();
  const [fullReviewContent, setFullReviewContent] = useState();
  const _handleShowingText = () => {
    setIsTruncated(!isTruncated);
  };
  useEffect(() => {
    setFullReviewContent(data.review);
    setTruncatedReview(data.review);
  }, [data, isTruncated]);
  console.log("trun review", truncatedReview);
  console.log("bool", isTruncated);
  return (
    <div className={styles.reviewArea}>
      {isTruncated ? (
        <>
          {fullReviewContent?.map((text, idx) => {
            if (text.length > 50) {
              return (
                <div key={idx} className={styles.normalText}>
                  {text}
                </div>
              );
            } else {
              return (
                <div key={idx} className={styles.boldText}>
                  {text}
                </div>
              );
            }
          })}
        </>
      ) : (
        <div className={styles.normalText}>
          {truncatedReview?.map((text, index) => {
            if (index < 2) {
              if (text.length > 50) {
                return (
                  <div key={index} className={styles.normalText}>
                    {text}
                  </div>
                );
              } else {
                return (
                  <div key={index} className={styles.boldText}>
                    {text}
                  </div>
                );
              }
            }
          })}
          <div className={styles.dots}>...</div>
        </div>
      )}

      <div className={styles.readingBttn} onClick={_handleShowingText}>
        {!isTruncated ? "   Xem thêm đánh giá" : "Thu gọn đánh giá"}
      </div>
    </div>
  );
};

export default ReviewItem;
