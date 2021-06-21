import React from "react";
import("../testLoading/loading.css");

export default function loading() {
  return (
    <div className="testWrapper">
      <div className="circle_"></div>
      <div className="test_container">
        <div className="dot1"></div>
        <div className="dot2"></div>
        <div className="dot3"></div>
      </div>
      <div className="test_container">
        <div className="box1"></div>
        <div className="box2"></div>
        <div className="box3"></div>
        <div className="box4"></div>
      </div>
    </div>
  );
}
