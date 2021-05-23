import React, { useEffect, useRef, useState } from "react";
import * as styles from "./reviewItem.module.css";
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { goUp } from "../../redux/features/post/screenSlice";
import { useDispatch } from "react-redux";
const ReviewItem = ({ data }) => {
  const [isTruncated, setIsTruncated] = useState(false);
  const [truncatedReview, setTruncatedReview] = useState();
  const [fullReviewContent, setFullReviewContent] = useState();
  const myRef = useRef(null);
  const dispatch = useDispatch();
  const _handleShowingText = () => {
    if (!isTruncated) {
      // myRef.current.scrollIntoView();
      window.scrollTo({ top: myRef.current.offsetTop, behavior: "smooth" });
      setTimeout(() => {
        dispatch(goUp(false));
      }, 200);
    }
    setIsTruncated(!isTruncated);
    dispatch(goUp(false));
    setTimeout(() => {
      dispatch(goUp(false));
    }, 0);
  };
  useEffect(() => {
    setFullReviewContent(data.review);
    setTruncatedReview(data.review);
  }, [data, isTruncated]);
  return (
    <div className={styles.reviewArea} ref={myRef}>
      {isTruncated ? (
        <>
          {fullReviewContent?.map((text, idx) => {
            if (text.includes("https://")) {
              return <img src={text} alt="" key={idx} />;
            } else if (text.length > 100) {
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
            Xem thêm <FaAngleDown size={20} />
          </div>
        ) : (
          <div>
            Thu gọn <FaAngleUp size={20} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ReviewItem;
