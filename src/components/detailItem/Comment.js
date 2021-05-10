import React, { useEffect, useState } from "react";
import * as styles from "./comment.module.css";
import * as API from "../../api/index";
import { ToastInfoMessage } from "../sharedComponents/ToastMessage";
import YesNoModal from "../sharedComponents/YesNoModal";
import { useHistory } from "react-router";

const Comment = ({ postId }) => {
  //state
  const history = useHistory();
  const [userComment, setUserComment] = useState();
  const [
    showingMessageInformUserCommentSent,
    setShowingMessageInformUserCommentSent,
  ] = useState(false);
  const [userNotLoggined, setUserNotLoggined] = useState(false);
  const [allCommentInParticularPost, setAllCommentInParticularPost] = useState(
    []
  );
  const [tokenHasExpired, setTokenHasExpired] = useState(false);
  //////function
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const _handlingKeyEnterPressed = async (e) => {
    const token = localStorage.getItem("token");
    if (e.keyCode == 13 && e.shiftKey == false) {
      e.preventDefault();
      console.log("token comment", token);
      if (!token) {
        setUserNotLoggined(true);
      } else {
        try {
          const response = await API.postAComment({
            comment: userComment,
            postId,
            userInfo,
          });
          setUserComment("");
          setShowingMessageInformUserCommentSent(true);
          setTimeout(() => {
            setShowingMessageInformUserCommentSent(false);
          }, 3000);
          _getAllUserCommentedInParticularPost();
        } catch (error) {
          console.log(error.response.status);
          if (error.response.status === 403) {
            setTokenHasExpired(true);
          }
        }
      }
    }
  };

  ///////handle expired token

  const _closeExpiredTokenModal = () => {
    const restoreItemsInCart = JSON.parse(localStorage.getItem("cartItems"));
    const restoreQuantity = localStorage.getItem("quantity");
    localStorage.clear();
    localStorage.setItem("cartItems", JSON.stringify(restoreItemsInCart));
    localStorage.setItem("quantity", restoreQuantity);
    setTokenHasExpired(false);
    history.push("/signIn");
  };

  /////////////handling user not loggin in but comment

  const _confirmLoggingIn = () => {
    history.push("/signIn");
    setUserNotLoggined(false);
  };
  const _rejectLoggingIn = () => {
    setUserNotLoggined(false);
  };
  /////////////useEffect
  const _getAllUserCommentedInParticularPost = async () => {
    try {
      const response = await API.getCommentsByPostId(postId);
      // console.log("user commented", response);
      setAllCommentInParticularPost(response.data.comments);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    _getAllUserCommentedInParticularPost();
  }, [postId]);
  // console.log("all comment", allCommentInParticularPost);

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
          value={userComment}
        ></textarea>
      </div>
      <div className={styles.commentOutsideWrapper}>
        {allCommentInParticularPost.map((eachComment, index) => {
          const now = new Date().getTime();
          const commentSentDate = new Date(eachComment.createdAt).getTime();
          var delta = Math.abs(now - commentSentDate) / 1000;
          // calculate (and subtract) whole days
          var days = Math.floor(delta / 86400);
          delta -= days * 86400;
          // calculate (and subtract) whole hours
          var hours = Math.floor(delta / 3600) % 24;
          delta -= hours * 3600;
          // calculate (and subtract) whole minutes
          var minutes = Math.floor(delta / 60) % 60;
          delta -= minutes * 60;
          console.log(" minutes ", minutes, " hour ", hours, "days", days);
          return (
            <div className={styles.userCommentedContainer}>
              <div className={styles.userImg}>
                <img src={eachComment.user.imageUrl} alt="" />
              </div>
              <div className={styles.commentedContainer} key={index}>
                <div className={styles.userName}>{eachComment.user.name}</div>
                <div className={styles.userCommentContent}>
                  {eachComment.commentContent}
                </div>
                <div className={styles.timeStamp}>
                  {days > 0 ? (
                    <>{days} trước</>
                  ) : (
                    <>
                      {hours > 0 ? (
                        <>
                          {hours} giờ {minutes} phút trước
                        </>
                      ) : (
                        <>{minutes} phút trước</>
                      )}
                    </>
                  )}
                </div>
                {/* <div className={styles.timeStamp}>{interval}</div> */}
              </div>
            </div>
          );
        })}
      </div>

      {showingMessageInformUserCommentSent ? (
        <>
          <ToastInfoMessage msg={"Comment đã được gửi"} />
        </>
      ) : null}
      {userNotLoggined ? (
        <YesNoModal
          msg={"Bạn phải đăng nhập để sử dụng chức năng bình luận."}
          confirm={_confirmLoggingIn}
          reject={_rejectLoggingIn}
        />
      ) : null}
      {/* handling token expired */}
      {tokenHasExpired ? (
        <>
          <YesNoModal
            msg={"Phiên đăng nhập của bạn đã hết, bạn cần phải đăng nhập lại."}
            confirm={_closeExpiredTokenModal}
            notDisplayRejectBttn={true}
          />
        </>
      ) : null}
    </div>
  );
};

export default Comment;
