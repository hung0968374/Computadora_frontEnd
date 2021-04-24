import axios from "axios";
import React, { useEffect } from "react";
import { useHistory } from "react-router";
import * as styles from "./activateAccount.module.css";
export default function ActivateAccount({ match }) {
  const token = match.params.token;
  const name = "Huu hung";
  const sendingToServerObj = {
    token,
  };
  const history = useHistory();
  const _returnToLandingPage = () => {
    history.push("/");
  };
  useEffect(() => {
    const _sendActivateRequestToBackend = async () => {
      const res = await axios.post(
        "http://localhost:5000/api/auth/register/activateAccount",
        sendingToServerObj
      );
      console.log("res", res);
    };
    _sendActivateRequestToBackend();
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.title}>account của bạn đã được kích hoạt</div>
        <div
          onClick={_returnToLandingPage}
          className={styles.returnToHomePageBttn}
        >
          tro ve trang chu
        </div>
      </div>
    </div>
  );
}
