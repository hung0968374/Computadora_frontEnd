import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { BaseUrl } from "../api";
import "../components/SignIN/NewSignIn.css";

export default function NewPWRecover() {
  const history = useHistory();
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  //function
  useEffect(() => {
    document.title = "Quên mật khẩu";
  }, []);

  const HandleSubmitForgotPassWord = async () => {
    try {
      if (!username) alert("Missing username");
      if (!password) alert("Missing password");
      if (!email) alert("Missing email");
      if (username !== "" && password !== "" && email !== "") {
        const InfoUserSendToForgotPassword = { username, password, email };
        setLoading(true);
        const data = await axios.post(
          `${BaseUrl}/api/user/pwRecoverSendRequestToBackEnd`,
          InfoUserSendToForgotPassword
        );
        console.log("PW recover data", data);
        alert(data.data.message);
        history.push("/signIn");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleEnterToProcess = (e) => {
    if (e.key === "Enter") {
      HandleSubmitForgotPassWord();
    }
  };
  return (
    <div className="newSignIn_background">
      <h1 className="text-center">
        <img src="/images/laptop.svg" alt="" />
      </h1>

      <div className="newSignIn_container">
        <div className="input-wrapper">
          <div className="input-data">
            <input
              type="text"
              required
              maxLength="30"
              minLength="6"
              onChange={(e) => setusername(e.target.value)}
              onKeyDown={handleEnterToProcess}
            />
            <div className="input-underline"></div>
            <label htmlFor=""> Tên đăng nhập</label>
          </div>
          <div className="input-data">
            <input
              type="email"
              required
              maxLength="30"
              minLength="6"
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={handleEnterToProcess}
            />
            <div className="input-underline"></div>
            <label htmlFor=""> Email</label>
          </div>
          <div className="input-data">
            <input
              type="password"
              required
              maxLength="30"
              minLength="6"
              onChange={(e) => setpassword(e.target.value)}
              onKeyDown={handleEnterToProcess}
            />
            <div className="input-underline"></div>
            <label htmlFor=""> Mật khẩu</label>
          </div>
        </div>
        <div className="input-wrapper">
          {loading === true ? (
            <div className="testWrapper">
              <div className="circle_"></div>
            </div>
          ) : (
            <button className="font_" onClick={HandleSubmitForgotPassWord}>
              Lấy lại tài khoản
            </button>
          )}
        </div>
        <div className="input-wrapper">
          <div className="underline"></div>
        </div>
        <div className="input-wrapper">
          <div className="split">
            <div className="left_split">
              <Link to="/signUP">Đăng ký</Link>
            </div>
            <div className="right_split">
              <Link to="/signIN">Đăng nhập</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
