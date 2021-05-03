import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import "../confirmAndActivateAcount/ConfirmPage.css";

export default function ConfirmPage({ match }) {
  const history = useHistory();
  const tokenReceiveFromMail = match.params.token;
  console.log("token receive from mail", tokenReceiveFromMail);

  //function
  const redirectToLoginPage = () => {
    history.push("/signIn");
  };

  useEffect(() => {
    const sendTokenToDatabaseToSaveUserInfo = axios.put(
      `http://localhost:5000/api/user/pwRecoverConfirmation/${tokenReceiveFromMail}`
    );
    console.log(sendTokenToDatabaseToSaveUserInfo);
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
