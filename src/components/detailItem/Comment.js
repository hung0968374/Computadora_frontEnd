import React, { useEffect, useState } from "react";
import * as styles from "./comment.module.css";
import * as API from "../../api/index";
import { ToastInfoMessage } from "../sharedComponents/ToastMessage";
import YesNoModal from "../sharedComponents/YesNoModal";
import { useHistory } from "react-router";
import Pusher from "pusher-js";
import { useDispatch } from "react-redux";
import { goUp } from "../../redux/features/post/screenSlice";

const Comment = ({ postId }) => {
  //state
  const history = useHistory();
  const dispatch = useDispatch();
  const [userComment, setUserComment] = useState();
  const [
    showingMessageInformUserCommentSent,
    setShowingMessageInformUserCommentSent,
  ] = useState(false);
  const [userNotLoggined, setUserNotLoggined] = useState(false);
  const [slicedCommentInParticularPost, setSlicedCommentInParticularPost] =
    useState([]);
  const [tokenHasExpired, setTokenHasExpired] = useState(false);
  const [totalComment, setTotalComment] = useState();
  const [commentPage, setCommentPage] = useState(1);
  const [commentLeft, setCommentLeft] = useState();
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  //////////// press enter
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
          /////// pushing nav bar to upper or make it disappear
          dispatch(goUp(false));
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

  //////// handle watch more cmt
  const _getCommentAmountLeft = () => {
    setCommentLeft(() => {
      return totalComment - 5 * commentPage;
    });
  };
  const _handleWatchingMoreCmt = () => {
    setCommentPage((prev) => prev + 1);
    _getCommentAmountLeft();
  };

  ///////////// get total comment, left comment, slice comment
  const _getTotalAmountOfCmtInThisPost = async () => {
    try {
      const response = await API.getCommentsByPostId(postId);
      // console.log("user commented", response);
      setTotalComment(response.data.comments.length);
    } catch (error) {
      console.log(error);
    }
  };
  const _getSliceComment = async () => {
    const response = await API.getSlicedCommentsByPostId(postId, commentPage);
    // console.log("slice cmt", response);
    setSlicedCommentInParticularPost([
      ...slicedCommentInParticularPost,
      ...response.data.slicedComments,
    ]);
  };
  useEffect(() => {
    _getTotalAmountOfCmtInThisPost();
    _getSliceComment();
  }, [postId, commentPage]);
  useEffect(() => {
    _getCommentAmountLeft();
  }, [totalComment, commentPage]);

  //////////// real time comment
  useEffect(() => {
    const pusher = new Pusher("0489280acfa7987721e1", {
      cluster: "ap1",
    });

    var channel = pusher.subscribe("comment");
    channel.bind("inserted", (data) => {
      // console.log("real time comment", data);
      if (data.postId == postId) {
        const newComment = {
          commentContent: data.comment,
          createdAt: data.sentCommentTime,
          user: {
            name: data.name,
            imageUrl: data.userImg,
          },
        };
        // console.log("new comment", newComment);

        ////////// day comment moi len tren dau cac comment cu
        setSlicedCommentInParticularPost([
          newComment,
          ...slicedCommentInParticularPost,
        ]);

        //////////  update so luong comment
        _getTotalAmountOfCmtInThisPost();
      }
    });
    return () => {
      channel.unbind_all();
    };
  }, [postId, slicedCommentInParticularPost]);
  return (
    <div className={styles.commentArea}>
      <div className={styles.title}>
        Bình luận <span>({totalComment} bình luận)</span>
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
        {slicedCommentInParticularPost.map((eachComment, index) => {
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
          // console.log(" minutes ", minutes, " hour ", hours, "days", days);
          return (
            <div className={styles.userCommentedContainer}>
              <div className={styles.userImg}>
                <img src={eachComment?.user?.imageUrl} alt="" />
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
      <div className={styles.watchMoreCmt} onClick={_handleWatchingMoreCmt}>
        {commentLeft > 0 ? (
          <>Xem thêm {commentLeft > 5 ? "5" : commentLeft} bình luận</>
        ) : null}
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
