import axios from "axios";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import * as styles from "./PWrecover.module.css";

export default function PWRecover() {
  const history = useHistory();
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [email, setEmail] = useState("");

  //function
  const HandleSubmitForgotPassWord = async () => {
    try {
      if (!username) alert("Missing username");
      if (!password) alert("Missing password");
      if (!email) alert("Missing email");
      if (username != "" && password != "" && email != "") {
        const InfoUserSendToForgotPassword = { username, password, email };
        console.log(InfoUserSendToForgotPassword);
        const { data } = await axios.put(
          "pwRecoverSendRequestToBackEnd",
          InfoUserSendToForgotPassword
        );
        alert(
          "Check your mailbox to confirm that IS you, thanks and  love you <3"
        );
        history.push("/signIn");
      }
    } catch (error) {
      alert(error.response.data);
    }
  };

  const handleEnterToProcess = (e) => {
    if (e.key === "Enter") {
      HandleSubmitForgotPassWord();
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <div className={styles.title}>
            <h2>Lấy lại mật khẩu</h2>
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
                  onChange={(e) => setusername(e.target.value)}
                  onKeyDown={handleEnterToProcess}
                />
              </li>
              <li>
                <input
                  minLength="6"
                  className={styles.password}
                  type="email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={handleEnterToProcess}
                />
              </li>
              <li>
                <input
                  maxLength="20"
                  minLength="6"
                  className={styles.password}
                  type="password"
                  placeholder="Mật khẩu mới"
                  onChange={(e) => setpassword(e.target.value)}
                  onKeyDown={handleEnterToProcess}
                />
              </li>
              <li className={styles.more_func}>
                <div className={styles.new_acc}>
                  <p>
                    <Link to="/signIn">Đã có tài khoản?</Link>
                  </p>
                  <p className={styles.forgot_pw}>
                    <Link to="/signUp">Chưa có tài khoản?</Link>
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.footer}>
          <div onClick={HandleSubmitForgotPassWord} className={styles.confirm}>
            Xác nhận
          </div>
        </div>
      </div>
    </div>
  );
}
