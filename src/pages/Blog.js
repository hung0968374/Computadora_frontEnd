import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import * as styles from "./cssFolder/blog.module.css";
import FacebookLogin from "react-facebook-login";

function Blog() {
  const responseFacebook = (response) => {
    console.log(response);
  };
  const componentClicked = () => {
    console.log("clicked to facebook button");
  };
  return (
    <div>
      <FacebookLogin
        appId="312211730529505"
        autoLoad={false}
        fields="name,email,picture"
        onClick={componentClicked}
        callback={responseFacebook}
      />
    </div>
  );
}

export default Blog;
