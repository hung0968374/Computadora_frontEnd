import React from "react";
import { useHistory } from "react-router";
import * as styles from "./cssFolder/activateAccount.module.css";
import { FcHome } from "react-icons/fc";

function Accessories() {
  const history = useHistory();
  const _returnToLandingPage = () => {
    history.push("/");
  };
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          Page này đang trong quá trình phát triển, cảm ơn bạn đã ghé thăm.
        </div>
        <div
          onClick={_returnToLandingPage}
          className={styles.returnToHomePageBttn}
        >
          <i>
            <FcHome />
          </i>
          Trở về trang chủ
        </div>
      </div>
    </div>
  );
}

export default Accessories;
