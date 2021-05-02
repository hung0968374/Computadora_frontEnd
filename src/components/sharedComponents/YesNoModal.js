import React from "react";
import * as styles from "./yesNoModal.module.css";
export default function YesNoModal({ msg, confirm, reject }) {
  return (
    <div className={styles.center}>
      <div className={styles.header}>Thông báo</div>
      <div className={styles.content}>dsa</div>
      <div className={styles.confirm}>
        <div className={styles.bttn}>Cancel</div>
        <div className={styles.bttn}>Ok</div>
      </div>
    </div>
  );
}
