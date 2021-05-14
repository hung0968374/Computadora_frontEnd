import React, { useEffect } from "react";
import { useHistory } from "react-router";
import * as styles from "./cssFolder/recoverAccount.module.css";
import * as API from "../api/index";

export default function ActivateRecoveringAccount({ match }) {
  const token = match.params.token;
  const sendingToServerObj = {
    token,
  };
  const history = useHistory();
  const _returnToLandingPage = () => {
    history.push("/");
  };
  useEffect(() => {
    const _sendActivateRequestToBackend = async () => {
      try {
        const res = await API.activateRecoveringPw(sendingToServerObj);
        console.log("res", res);
      } catch (error) {
        console.log(error);
      }
    };
    _sendActivateRequestToBackend();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.title}>Lấy lại tài khoản thành công!</div>
        <div
          onClick={_returnToLandingPage}
          className={styles.returnToHomePageBttn}
        >
          Trở về trang chủ
        </div>
      </div>
    </div>
  );
}
