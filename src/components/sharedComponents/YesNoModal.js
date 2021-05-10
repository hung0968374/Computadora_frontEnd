import React from "react";
import * as styles from "./cssFolderOfSharedComponent/yesNoModal.module.css";
import { FcInfo } from "react-icons/fc";

export default function YesNoModal({
  msg,
  confirm,
  reject,
  notDisplayRejectBttn,
}) {
  return (
    <div className={styles.modal_bg}>
      <div className={styles.center}>
        <div className={styles.header}>
          <i>
            <FcInfo size={60} color="rgb(0, 132, 255)" />
          </i>
          Thông báo
        </div>
        <div className={styles.content}>{msg}</div>
        <div className={styles.confirm}>
          {notDisplayRejectBttn === true ? null : (
            <div className={styles.cancelBttn} onClick={reject}>
              Cancel
            </div>
          )}
          <div
            className={`${styles.okBttn} ${
              notDisplayRejectBttn ? styles.onlyOkBttnExist : null
            }`}
            onClick={confirm}
          >
            Ok
          </div>
        </div>
      </div>
    </div>
  );
}
