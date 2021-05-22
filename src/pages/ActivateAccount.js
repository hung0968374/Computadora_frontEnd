import axios from "axios";
import React, { useEffect } from "react";
import { useHistory } from "react-router";
import * as styles from "./cssFolder/activateAccount.module.css";
import * as API from "../api/index";
import jwt_decode from "jwt-decode";
import { FcHome } from "react-icons/fc";

export default function ActivateAccount({ match }) {
  const token = match.params.token;
  const name = "Huu hung";
  const sendingToServerObj = {
    token,
  };
  const decodedToken = jwt_decode(token);
  const history = useHistory();
  const _returnToLandingPage = () => {
    history.push("/");
  };
  useEffect(() => {
    const _sendActivateRequestToBackend = async () => {
      try {
        const res = await API.activateAccount(sendingToServerObj);
        console.log("res", res);
      } catch (error) {
        console.log(error);
      }
    };
    _sendActivateRequestToBackend();
  }, []);
  useEffect(() => {
    document.title = "Kích hoạt tài khoản";
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.title}>Account của bạn đã được kích hoạt!</div>
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
