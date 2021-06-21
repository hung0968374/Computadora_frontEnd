import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { BaseUrl } from "../api";
import "../components/confirmAndActivateAcount/ConfirmPage.css";

export default function ConfirmPage({ match }) {
  const history = useHistory();
  const tokenReceiveFromMail = match.params.token;
  console.log("token receive from mail", tokenReceiveFromMail);

  //function
  const redirectToLoginPage = () => {
    history.push("/signIn");
  };

  async function sendToConfirm() {
    const sendTokenToDatabaseToSaveUserInfo = await axios.put(
      `${BaseUrl}/api/user/pwRecoverConfirmation/${tokenReceiveFromMail}`
    );
  }

  useEffect(() => {
    try {
      sendToConfirm();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="Container">
      <div className="wrapper">
        <div className="textConfirm">
          <h3>
            {" "}
            Chúc mừng bạn đã xác thực tài khoản thành công, Bấm vào icon để quay
            về trang đăng nhập
          </h3>
        </div>
        <div className="imageConfirm">
          <img
            onClick={redirectToLoginPage}
            src="/images/tick-icon.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
