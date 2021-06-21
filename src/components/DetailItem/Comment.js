import React, { useState } from "react";
import "../DetailItem/Comment.css";

export default function Comment({ SpecificItemById }) {
  const { review } = SpecificItemById;
  const [seeMore, setSeeMore] = useState(false);

  const handleSeeMoreEvent = () => {
    setSeeMore(!seeMore);
  };

  return (
    <div className="comment">
      <div className="admin_comments">
        <h2> Đánh giá chi tiết</h2>
        {seeMore
          ? review?.map((data, index) => {
              if (data.includes("https")) {
                return <img src={data} alt={data} />;
              }
              if (data.length < 100) {
                return <h3>{data}</h3>;
              }
              if (data.length > 100) {
                return <p>{data}</p>;
              }
            })
          : review?.slice(0, 2).map((data, index) => {
              if (data.includes("https")) {
                return <img src={data} alt={data} />;
              }
              if (data.length < 100) {
                return <h3>{data}</h3>;
              }
              if (data.length > 100) {
                return <p>{data}</p>;
              }
            })}
        {review?.length === 0 || review?.length === 1 ? null : seeMore ? (
          <button onClick={handleSeeMoreEvent}>
            Thu Gọn
            <img
              src="https://image.flaticon.com/icons/png/512/467/467293.png"
              alt=""
            />
          </button>
        ) : (
          <button onClick={handleSeeMoreEvent}>
            Xem thêm
            <img
              src="https://image.flaticon.com/icons/png/512/467/467264.png"
              alt=""
            />
          </button>
        )}
      </div>
      <div className="block"> </div>
      <div className="guess_comments">
        <h2>Bình luận</h2>
        <h3>Bình luận của bạn</h3>
        <textarea
          className="textArea"
          name=""
          id=""
          cols="90"
          rows="6"
          placeholder="Để lại bình luận của bạn"
        ></textarea>
        <button>Gửi</button>
      </div>
      <div className="block"> </div>
    </div>
  );
}
