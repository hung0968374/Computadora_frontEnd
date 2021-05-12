import React from "react";
import * as styles from "./cssFolderOfSharedComponent/comment.module.css";
import * as API from "../../api/index";

export default function EachComment({ eachComment, userInfo }) {
  const now = new Date().getTime();
  // console.log("each cmt", eachComment);
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

  ///// delete a comment
  const _deleteThisComment = async () => {
    const response = await API.deleteComment(eachComment);
  };
  //   console.log("each", eachComment);
  return (
    <div className={styles.userCommentedContainer}>
      <div className={styles.userImg}>
        <img src={eachComment?.user?.imageUrl} alt="" />
      </div>
      <div className={styles.commentedContainer}>
        <div className={styles.userName}>{eachComment.user.name}</div>
        <div className={styles.userCommentContent}>
          {eachComment.commentContent}
        </div>
        <div className={styles.timeStampAndDelCmt}>
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
          {(userInfo?.googleId &&
            eachComment?.user?.googleId &&
            userInfo?.googleId === eachComment?.user?.googleId) ||
          (userInfo?.facebookUserId &&
            eachComment?.user?.facebookUserId &&
            userInfo?.facebookUserId === eachComment.user?.facebookUserId) ||
          (userInfo?._id &&
            eachComment?.user?._id &&
            userInfo?._id === eachComment?.user?._id) ? (
            <>
              <div onClick={_deleteThisComment} className={styles.deleteCmt}>
                Xóa bình luận
              </div>
            </>
          ) : null}
          {(eachComment?.user?.id &&
            eachComment?.user?.id === userInfo?.facebookUserId) ||
          (eachComment?.user?.id && eachComment?.user?.id === userInfo?._id) ||
          (eachComment?.user?.id &&
            eachComment?.user?.id === userInfo?.googleId) ? (
            <>
              <div onClick={_deleteThisComment} className={styles.deleteCmt}>
                Xóa bình luận
              </div>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}
