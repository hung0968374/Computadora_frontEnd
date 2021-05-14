import React, { useEffect, useState } from "react";
import * as styles from "./cssFolderOfSharedComponent/comment.module.css";
import * as API from "../../api/index";
import { ToastInfoMessage } from "./ToastMessage";
import YesNoModal from "./YesNoModal";
import { useHistory } from "react-router";
import Pusher from "pusher-js";
import { useDispatch } from "react-redux";
import { goUp } from "../../redux/features/post/screenSlice";
import EachComment from "./EachComment";
require("dotenv").config();

const Comment = ({ postId }) => {
  //state
  const history = useHistory();
  const dispatch = useDispatch();
  const [userComment, setUserComment] = useState();
  const [messageInformUserCommentStatus, setMessageInformUserCommentStatus] =
    useState([]);
  const [userNotLoggined, setUserNotLoggined] = useState(false);
  const [slicedCommentInParticularPost, setSlicedCommentInParticularPost] =
    useState([]);
  const [tokenHasExpired, setTokenHasExpired] = useState(false);
  const [totalComment, setTotalComment] = useState();
  const [commentPage, setCommentPage] = useState(1);
  const [commentLeft, setCommentLeft] = useState();
  const [variableToMakeReactUpdateCmt, setVariableToMakeReactUpdateCmt] =
    useState(false);
  ////// this variable is used to show the delete post without checking anything
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  //////////// press enter
  const _handlingKeyEnterPressed = async (e) => {
    const token = localStorage.getItem("token");
    if (e.keyCode == 13 && e.shiftKey == false) {
      e.preventDefault();
      // console.log("token comment", token);
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
          setVariableToMakeReactUpdateCmt(!variableToMakeReactUpdateCmt);
          /////// pushing nav bar to upper or make it disappear
          dispatch(goUp(false));
          setMessageInformUserCommentStatus([
            ...messageInformUserCommentStatus,
            "Đã gửi comment",
          ]);
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
    setTimeout(() => {
      localStorage.setItem("cartItems", JSON.stringify(restoreItemsInCart));
      localStorage.setItem("quantity", restoreQuantity);
      setTokenHasExpired(false);
      history.push("/signIn");
    }, 5000);
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
    const pusher = new Pusher(process.env.REACT_APP_PUSHER_KEY, {
      cluster: process.env.REACT_APP_PUSHER_CLUSTER,
    });

    var channel = pusher.subscribe("comment");
    channel.bind("inserted", (data) => {
      // console.log("real time comment", data);
      if (data.postId == postId) {
        const newComment = {
          commentContent: data.comment,
          _id: data.commentId,
          createdAt: data.sentCommentTime,
          user: {
            name: data.name,
            imageUrl: data.userImg,
            id: data.userIdSentComment,
          },
        };
        console.log("new comment", newComment);

        //////// day comment moi len tren dau cac comment cu
        setSlicedCommentInParticularPost([
          newComment,
          ...slicedCommentInParticularPost,
        ]);
        //////////  update so luong comment
        _getTotalAmountOfCmtInThisPost();
      }
    });
    channel.bind("deleted", (data) => {
      // console.log("comment deleted", data);
      const idCommentDeleted = data.idCommentDeleted;
      // console.log("id", idCommentDeleted);
      setSlicedCommentInParticularPost((slicedCommentInParticularPost) =>
        slicedCommentInParticularPost.filter(
          (comment) => comment._id !== idCommentDeleted
        )
      );
      _getTotalAmountOfCmtInThisPost();
    });
    return () => {
      channel.unbind_all();
    };
  }, [postId, slicedCommentInParticularPost]);
  /////////// click deleting comment

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
          // console.log(eachComment);
          return (
            <EachComment
              key={index}
              eachComment={eachComment}
              userInfo={userInfo}
              setMessageInformUserCommentStatus={
                setMessageInformUserCommentStatus
              }
              messageInformUserCommentStatus={messageInformUserCommentStatus}
            />
          );
        })}
      </div>
      <div className={styles.watchMoreCmt} onClick={_handleWatchingMoreCmt}>
        {commentLeft > 0 ? (
          <>Xem thêm {commentLeft > 5 ? "5" : commentLeft} bình luận</>
        ) : null}
      </div>
      {messageInformUserCommentStatus.map((message, index) => {
        return (
          <>
            <ToastInfoMessage msg={message} key={index} />
          </>
        );
      })}

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
