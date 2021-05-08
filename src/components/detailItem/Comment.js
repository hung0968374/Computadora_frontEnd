import React, { useState } from "react";
import * as styles from "./comment.module.css";
const Comment = () => {
  //state
  const [userComment, setUserComment] = useState();
  //////function
  const _handlingKeyEnterPressed = (e) => {
    if (e.keyCode == 13 && e.shiftKey == false) {
      e.preventDefault();
      alert("enter");
    }
  };
  console.log(userComment);
  return (
    <div className={styles.commentArea}>
      <div className={styles.title}>
        Bình luận <span>(0 bình luận)</span>
      </div>
      <div className={styles.yourComment}>Bình luận của bạn</div>
      <div className={styles.cmtContainer}>
        <textarea
          name=""
          id=""
          placeholder="Viết bình luận"
          onChange={(e) => setUserComment(e.target.value)}
          onKeyDown={_handlingKeyEnterPressed}
        ></textarea>
      </div>
      <div className={styles.userCommentedContainer}>
        <div className={styles.userImg}>
          <img
            src=" https://i.pinimg.com/236x/24/21/85/242185eaef43192fc3f9646932fe3b46.jpg"
            alt=""
          />
        </div>
        <div className={styles.commentedContainer}>
          <div className={styles.userName}>Huu hung</div>
          <div className={styles.userCommentContent}>
            hung huuhung huuhung huuhung huuhung huuhung huuhung huuhung huuhung
            huuhung huuhung huuhung huuhung huuhung huuhung huuhung huuhung
            huuhung huuhung huuhung huuhung huuhung huuhung huuhung huuhung
            huuhung huuhung huuhung huuhung huuhung huuhung huuhung huuhung
            huuhung huuhung huuhung huuhung huuhung huuhung huuhung huuhung
            huuhung huuhung huuhung huuhung huuhung huuhung huuhung huuhung
            huuhung huu
          </div>
          <div className={styles.timeStamp}>1 thang truoc</div>
        </div>
      </div>
      <div className={styles.userCommentedContainer}>
        <div className={styles.userImg}>
          <img
            src=" https://i.pinimg.com/236x/24/21/85/242185eaef43192fc3f9646932fe3b46.jpg"
            alt=""
          />
        </div>
        <div className={styles.commentedContainer}>
          <div className={styles.userName}>Huu hung</div>
          <div className={styles.userCommentContent}>hung huuhung</div>
          <div className={styles.timeStamp}>1 thang truoc</div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
