import React from "react";
import * as styles from "./cssFolderOfSharedComponent/modal.module.css";
const ShowModal = ({ msg, closeModal }) => {
  return (
    <div className={styles.center}>
      <div className={styles.header}>Thông báo</div>
      <div className={styles.content}>{msg}</div>
      <div className={styles.confirm}>
        <div className={styles.bttn} onClick={closeModal}>
          Ok
        </div>
      </div>
    </div>
  );
};

export default ShowModal;
