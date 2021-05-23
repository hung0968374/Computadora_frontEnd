import React from "react";
import { FaAngleUp } from "react-icons/fa";
import * as styles from "./cssFolderOfSharedComponent/scrolling.module.css";

export default function ScrollToTop() {
  return (
    <div
      className={styles.scrollContainer}
      onClick={() => window.scroll({ top: 0, left: 0, behavior: "smooth" })}
    >
      <FaAngleUp size={50} />
    </div>
  );
}
