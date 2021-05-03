import axios from "axios";
import React, { useState, useEffect } from "react";
import GoogleLogin from "react-google-login";
import { Link, useHistory } from "react-router-dom";
import * as styles from "./SignIN.module.css";
export default function SignIN() {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //function
  const responseGoogle = (response) => {
    console.log(response);
    const { access_token } = response.tokenObj;
    localStorage.setItem("userToken", access_token);
    localStorage.setItem("userInfo", JSON.stringify(response.profileObj));
    history.push("/");
  };

  const HandleLoginSubmit = async () => {
    try {
      if (!username) {
        alert("You have not enter your username");
      }
      if (!password) {
        alert("You have not enter your password");
      }
      if (username != "" && password != "") {
        const inputAccount = {
          username,
          password,
        };
        const { data } = await axios.post(
          "http://localhost:5000/api/user/login",
          inputAccount
        );
        const tokenReceiveFromDatabase = data.token;
        console.log("token from api ", tokenReceiveFromDatabase);

        localStorage.setItem("userInfo", JSON.stringify(data.user));
        localStorage.setItem("userToken", tokenReceiveFromDatabase);

        console.log(localStorage);
        alert("Loggin succesfully, Welcome back ");
        history.push("/");
      }
    } catch (error) {
      alert(error.response.data);
    }
  };

  const handleEnterToProcess = (e) => {
    if (e.key === "Enter") {
      HandleLoginSubmit();
    }
  };

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.header}>
            <div className={styles.title}>
              <h2>Chào mừng bạn quay lại</h2>
            </div>
          </div>

          <div className={styles.main}>
            <div className={styles.logo}>
              <img src="/images/laptop.svg" />
            </div>
            <div className={styles.input_container}>
              <ul>
                <li>
                  <input
                    maxLength="20"
                    type="text"
                    placeholder="Tên đăng nhập"
                    onChange={(e) => setUsername(e.target.value)}
                    onKeyDown={handleEnterToProcess}
                  />
                </li>
                <li>
                  <input
                    maxLength="20"
                    minLength="6"
                    className={styles.password}
                    type="password"
                    placeholder="Mật khẩu"
                    onChange={(e) => setPassword(e.target.value)}
                    onKeyDown={handleEnterToProcess}
                  />
                </li>
                <li className={styles.more_func}>
                  <div className={styles.new_acc}>
                    <p>
                      <Link to="/signUp">Chưa có tài khoản ?</Link>
                    </p>
                    <p className={styles.forgot_pw}>
                      <Link to="/PWRecover">Quên mật khẩu</Link>
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.footer}>
            <div className={styles.confirm} onClick={HandleLoginSubmit}>
              Đăng nhập
            </div>
          </div>
          <div className={styles.signInGoogle}>
            <GoogleLogin
              clientId="773024041759-e9rq8jqlg36eabq2t9p1kqk93shu2f5p.apps.googleusercontent.com"
              buttonText="Đăng nhập với Google"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
