import React from "react";
import * as styles from "./yesNoModal.module.css";
export default function YesNoModal({ msg, confirm, reject }) {
  return (
    <div className={styles.center}>
      <div className={styles.header}>Thông báo</div>
      <div className={styles.content}>{msg}</div>
      <div className={styles.confirm}>
        <div className={styles.bttn} onClick={reject}>
          Cancel
        </div>
        <div className={styles.bttn} onClick={confirm}>
          Ok
        </div>
      </div>
    </div>
  );
}
