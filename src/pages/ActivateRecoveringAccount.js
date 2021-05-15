import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import * as styles from "./cssFolder/recoverAccount.module.css";
import * as API from "../api/index";
import { FcHome } from "react-icons/fc";

export default function ActivateRecoveringAccount({ match }) {
  const token = match.params.token;
  const sendingToServerObj = {
    token,
  };
  const history = useHistory();
  const [messageToUser, setMessageToUser] = useState("");
  const _returnToLandingPage = () => {
    history.push("/");
  };
  useEffect(() => {
    const _sendActivateRequestToBackend = async () => {
      try {
        const res = await API.activateRecoveringPw(sendingToServerObj);
        console.log("res", res);
        setMessageToUser("Lấy lại tài khoản thành công!");
      } catch (error) {
        console.log(error.response);
        setMessageToUser(
          "Đường link này đã được sử dụng, lấy lại mật khẩu thất bại!"
        );
      }
    };
    _sendActivateRequestToBackend();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.title}>{messageToUser}</div>
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
