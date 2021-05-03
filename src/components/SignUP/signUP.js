import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import * as styles from "./SignUP.module.css";

export default function SignUP() {
  const history = useHistory();
  const [username, setUserName] = useState("");
  const [password, setPassWord] = useState("");
  const [email, setEmail] = useState("");
  const [ConfimPassWord, setConfimPassWord] = useState("");

  const HandleSubmitCreatingNewAcoount = async () => {
    if (!username) {
      alert("Missing username");
    }
    if (!password) {
      alert("Missing password");
    }
    if (!email) {
      alert("Missing email");
    }
    if (!ConfimPassWord) {
      alert("Missing confirm password");
    }
    if (password != ConfimPassWord) {
      alert("Password does not match");
    }
    if (
      password === ConfimPassWord &&
      email !== "" &&
      username != "" &&
      password != "" &&
      ConfimPassWord != ""
    ) {
      const infoSendToRegister = {
        username,
        email,
        password,
      };
      try {
        const data = await axios.post(
          "http://localhost:5000/api/user/sendUserInfoToRegisterDB",
          infoSendToRegister
        );
        console.log(data);
        alert("New account have been create, enjoy");
        history.push("/signIn");
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleEnterToProcess = (e) => {
    if (e.key === "Enter") {
      HandleSubmitCreatingNewAcoount();
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <div className={styles.title}>
            <h2>Đăng ký tài khoản mới</h2>
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
                  onChange={(e) => setUserName(e.target.value)}
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
                  onChange={(e) => setPassWord(e.target.value)}
                  onKeyDown={handleEnterToProcess}
                />
              </li>

              <li>
                <input
                  maxLength="20"
                  minLength="6"
                  className={styles.password}
                  type="password"
                  placeholder="Xác nhận mật khẩu"
                  onChange={(e) => setConfimPassWord(e.target.value)}
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
              <li className={styles.more_func}>
                <div className={styles.new_acc}>
                  <p>
                    <Link to="/signIn">Đã có tài khoản</Link>
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
          <div
            onClick={HandleSubmitCreatingNewAcoount}
            className={styles.confirm}
          >
            Đăng ký
          </div>
        </div>
      </div>
    </div>
  );
}
