import React, { useEffect, useState } from "react";
import * as styles from "./reviewItem.module.css";
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
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
  return (
    <div className={styles.reviewArea}>
      {isTruncated ? (
        <>
          {fullReviewContent?.map((text, idx) => {
            if (text.length > 100) {
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
              if (text.length > 100) {
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
        {!isTruncated ? (
          <div>
            Xem thêm đánh giá <FaAngleDown size={20} />
          </div>
        ) : (
          <div>
            Thu gọn đánh giá <FaAngleUp size={20} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ReviewItem;
