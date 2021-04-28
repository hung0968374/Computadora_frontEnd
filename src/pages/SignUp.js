import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as styles from "./cssFolder/signUP.module.css";

export default function SignUP() {
  //state
  const initialState = {
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
  };
  const [form, setForm] = useState(initialState);

  /// function
  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
  const _handlingFormChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const _handlingRegister = () => {
    console.log("form", form);
    let msg = [];
    const emailIsValid = validateEmail(form.email);
    if (!emailIsValid) {
      msg.push("email khong dung dinh dang");
    }
    if (!form.username) {
      msg.push("k dc de trong username");
    }
    if (!form.password || !form.confirmPassword) {
      msg.push("k dc de trong password hoac confir mpassword");
    }

    var passAndConfirmPassAreTheSame = form.password.localeCompare(
      form.confirmPassword
    );
    if (passAndConfirmPassAreTheSame !== 0) {
      msg.push("mat khau va xac nhan mat khau khong trung khop");
    }
    if (msg.length !== 0) {
      alert(msg);
    } else if (msg.length === 0) {
      axios
        .post("http://localhost:5000/api/auth/register/verifyAccount", form)
        .then((res) => {
          console.log("res", res);
          alert(res.data.message);
        })
        .catch((error) => {
          const res = error.response.data;
          alert(res.message);
        });
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
            <div className={styles.input_area}>
              <input
                name="username"
                type="text"
                placeholder="Tên đăng nhập"
                onChange={_handlingFormChange}
              />
              <input
                className={styles.password}
                type="password"
                placeholder="Mật khẩu"
                name="password"
                onChange={_handlingFormChange}
              />
              <input
                className={styles.password}
                type="password"
                name="confirmPassword"
                placeholder="Xác nhận mật khẩu"
                onChange={_handlingFormChange}
              />
              <input
                name="email"
                placeholder="email"
                onChange={_handlingFormChange}
              />
            </div>
            <div className={styles.more_func}>
              <div>
                <Link to="/signIn">Đã có tài khoản</Link>
              </div>
              <div>
                <Link to="/PWRecover">Quên mật khẩu</Link>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.footer}>
          <div className={styles.confirm} onClick={_handlingRegister}>
            Đăng ký
          </div>
        </div>
      </div>
    </div>
  );
}
