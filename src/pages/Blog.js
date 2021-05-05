import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import * as styles from "./cssFolder/blog.module.css";

function Blog() {
  return (
    <div>
      <div className={styles.square}>
        <div className={styles.child}>fasdfs</div>
        <div className={styles.child}>fasdfs</div>
      </div>
    </div>
  );
}

export default Blog;
