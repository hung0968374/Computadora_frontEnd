import React, { useEffect, useState } from "react";
import Header from "../components/sharedComponents/Header";
import Footer from "../components/sharedComponents/footer";
import "./cssFolder/blogDetail.css";
import * as API from "../api/index";

export default function BlogDetail({ match }) {
  console.log(match.params.id);
  const [blogInDetail, setBlogInDetail] = useState({});
  useEffect(() => {
    const _fetchBlogInDetail = async () => {
      const response = await API.fetchBlogById(match.params.id);
      setBlogInDetail(response.data);
    };
    _fetchBlogInDetail();
  }, []);

  ////////////reformatting date to VietNam timeStamp
  const DATE_OPTIONS = {
    hour: "numeric",
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
    minute: "numeric",
  };
  const reformatDate = new Date(blogInDetail.createdAt).toLocaleDateString(
    "vi",
    DATE_OPTIONS
  );
  return (
    <>
      <Header />
      <div className="blogDetail_headerContainer">
        <div className="blogDetail_title">{blogInDetail.blogTitle}</div>
        <div className="blogDetail_timeStamp">{reformatDate}</div>
        <img src={blogInDetail.blogMainImg} alt="" />
      </div>
      <div className="blogDetail_textContainer">
        {blogInDetail?.blogBody?.map((blogContent, index) => {
          if (blogContent.includes("https")) {
            return <img src={blogContent} alt="" />;
          } else if (blogContent.length > 50) {
            return <p key={index}>{blogContent}</p>;
          } else if (blogContent.length < 50) {
            return <p className="blogDetail_strongText">{blogContent}</p>;
          }
        })}
      </div>
      <Footer />
    </>
  );
}
