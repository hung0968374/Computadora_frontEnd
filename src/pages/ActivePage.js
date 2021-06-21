import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { BaseUrl } from "../api";
import "../components/confirmAndActivateAcount/ActivePage.css";

export default function ActivePage({ match }) {
  const history = useHistory();
  const tokenReceiveFromMail = match.params.token;

  //function
  const redirectToLoginPage = () => {
    history.push("/signIn");
  };

  useEffect(() => {
    async function redirect() {
      const sendTokenToDatabaseToSaveUserInfo = await axios.post(
        `${BaseUrl}/api/user/registerConfirm/${tokenReceiveFromMail}`
      );
    }
    try {
      redirect();
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
            Chúc mừng bạn đã kích hoạt tài khoản thành công. Chúc bạn có một
            trải nghiệm thật thú vị tại Computadopra. Bấm vào icon để quay về
            trang đăng nhập
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
