import "../components/SignIN/NewSignIn.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { BaseUrl } from "../api";

function NewSignUp() {
  const history = useHistory();
  const [username, setUserName] = useState("");
  const [password, setPassWord] = useState("");
  const [email, setEmail] = useState("");
  const [ConfimPassWord, setConfimPassWord] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    document.title = "Đăng ký";
  }, []);

  const HandleSubmitCreatingNewAcoount = async () => {
    if (!username) {
      alert("Tài khoản không được để trống");
    }
    if (!password) {
      alert("Mật khẩu không được để trống");
    }
    if (!email) {
      alert("Email không được để trống");
    }
    if (!ConfimPassWord) {
      alert("Xác nhận mật khẩu không được để trống");
    }
    if (password !== ConfimPassWord) {
      alert("Xác nhận mật khẩu không đúng");
    }
    if (
      password === ConfimPassWord &&
      email !== "" &&
      username !== "" &&
      password !== "" &&
      ConfimPassWord !== ""
    ) {
      setIsLoading(true);
      const infoSendToRegister = {
        username,
        email,
        password,
      };
      try {
        const data = await axios.post(
          `${BaseUrl}/api/user/sendUserInfoToRegisterDB`,
          infoSendToRegister
        );
        console.log("data cua dang ky", data.data.message);
        alert(data.data.message);
        history.push("/signIn");
      } catch (error) {
        alert(error.response.data);
      }
    }
  };

  const handleEnterToProcess = (e) => {
    if (e.key === "Enter") {
      HandleSubmitCreatingNewAcoount();
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
              onChange={(e) => setUserName(e.target.value)}
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
              onChange={(e) => setPassWord(e.target.value)}
              onKeyDown={handleEnterToProcess}
            />
            <div className="input-underline"></div>
            <label htmlFor=""> Mật khẩu</label>
          </div>
          <div className="input-data">
            <input
              type="password"
              required
              maxLength="30"
              minLength="6"
              onChange={(e) => setConfimPassWord(e.target.value)}
              onKeyDown={handleEnterToProcess}
            />
            <div className="input-underline"></div>
            <label htmlFor=""> Xác nhận mật khẩu </label>
          </div>
        </div>
        <div className="input-wrapper">
          <button className="font_" onClick={HandleSubmitCreatingNewAcoount}>
            Đăng ký
          </button>
        </div>
        <div className="input-wrapper">
          <div className="underline"></div>
        </div>
        <div className="input-wrapper">
          <div className="split">
            <div className="left_split">
              <Link to="/signIn">Đăng nhập</Link>
            </div>
            <div className="right_split">
              <Link to="/PWRecover">Quên mật khẩu</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewSignUp;
