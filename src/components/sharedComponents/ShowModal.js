import React from "react";
import * as styles from "./modal.module.css";
const ShowModal = ({ msg, closeModal }) => {
  return (
    <div className={styles.center}>
      <div className={styles.header}>Thong bao</div>
      <div className={styles.content}>{msg}</div>
      <div className={styles.confirm}></div>
    </div>
  );
};

export default ShowModal;
