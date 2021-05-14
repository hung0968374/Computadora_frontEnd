import React from "react";
import * as styles from "./cssFolderOfSharedComponent/yesNoModal.module.css";
import { MdInfo } from "react-icons/md";

export default function YesNoModal({
  msg,
  confirm,
  reject,
  notDisplayRejectBttn,
  isArray = false,
}) {
  return (
    <div className={styles.modal_bg}>
      <div className={styles.center}>
        <div className={`${styles.header} ${isArray && styles.redHeader}`}>
          <i>
            <MdInfo className={styles.headerIcon} />
          </i>
          Thông báo
        </div>
        <div className={styles.content}>
          {isArray ? (
            <div>
              {msg.map((message, idx) => {
                return <li key={idx}>{message}</li>;
              })}
            </div>
          ) : (
            <li>{msg}</li>
          )}
        </div>
        <div className={styles.confirm}>
          {notDisplayRejectBttn === true ? null : (
            <div className={styles.cancelBttn} onClick={reject}>
              Cancel
            </div>
          )}
          <div
            className={`${styles.okBttn} ${
              notDisplayRejectBttn && styles.onlyOkBttnExist
            } ${isArray && styles.redOkBttn}
            `}
            onClick={confirm}
          >
            Ok
          </div>
        </div>
      </div>
    </div>
  );
}
