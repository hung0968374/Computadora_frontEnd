import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as styles from "./cssFolder/signUP.module.css";
import * as API from "../api/index";
import {
  ToastErrorMessage,
  ToastInfoMessage,
  ToastWarnMessage,
} from "../components/sharedComponents/ToastMessage";
import ShowModal from "../components/sharedComponents/ShowModal";
import ModalSignUpWrapper from "../components/signUp/ModalSignUpWrapper";
export default function SignUP() {
  //state
  const initialState = {
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
  };
  const [form, setForm] = useState(initialState);
  const [errorMsgShownToUser, setErrorMsgShownToUser] = useState("");
  const [infoMsgToUser, setInfoMsgToUser] = useState("");
  const [testData, settestData] = useState("qweqwewq");
  const [loadingSigningUpResponse, setLoadingSigningUpResponse] = useState(
    false
  );

  /// function
  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
  const _handlingFormChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const _handlingRegister = async () => {
    if (!errorMsgShownToUser) {
      console.log("form", form);
      let msg = [];
      const emailIsValid = validateEmail(form.email);
      if (!emailIsValid) {
        msg.push("Email không đúng định dạng");
      }
      if (!form.username) {
        msg.push("Không được để trống tên đăng nhập");
      }
      if (!form.password || !form.confirmPassword) {
        msg.push("Không được để trống mật khấu hoặc nhập lại mật khẩu");
      }
      var passAndConfirmPassAreTheSame = form.password.localeCompare(
        form.confirmPassword
      );
      if (passAndConfirmPassAreTheSame !== 0) {
        msg.push("Mật khẩu và nhập lại mật khẩu không trùng khớp");
      }
      if (msg.length !== 0) {
        setErrorMsgShownToUser(msg);
        console.log(errorMsgShownToUser);
        settestData("lhadsffhsalkfjds");
        setTimeout(() => {
          setErrorMsgShownToUser("");
          settestData("");
        }, 6000);
      } else if (msg.length === 0) {
        try {
          setLoadingSigningUpResponse(true);
          const res = await API.signUp(form);
          console.log(res.data.message);
          setInfoMsgToUser(res.data.message);
        } catch (error) {
          const res = error?.response?.data;
          setErrorMsgShownToUser((prev) => [...prev, res?.message]);
          setTimeout(() => {
            setErrorMsgShownToUser("");
          }, 6000);
          console.log(error);
        }
      }
    }
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      _handlingRegister();
    }
  };
  const _closeModal = () => {
    setInfoMsgToUser("");
    setLoadingSigningUpResponse(false);
  };
  console.log("testdata", testData);
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
                onKeyDown={handleKeyDown}
              />
              <input
                className={styles.password}
                type="password"
                placeholder="Mật khẩu"
                name="password"
                onChange={_handlingFormChange}
                onKeyDown={handleKeyDown}
              />
              <input
                className={styles.password}
                type="password"
                name="confirmPassword"
                placeholder="Xác nhận mật khẩu"
                onChange={_handlingFormChange}
                onKeyDown={handleKeyDown}
              />
              <input
                name="email"
                placeholder="email"
                onChange={_handlingFormChange}
                onKeyDown={handleKeyDown}
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
            {loadingSigningUpResponse ? (
              <div>
                <img
                  className={styles.loadingIcon}
                  src="images/loading.gif"
                  alt=""
                />
              </div>
            ) : null}
          </div>
        </div>
      </div>
      {errorMsgShownToUser.length > 0 ? (
        <>
          {errorMsgShownToUser.map((msg, index) => {
            return <ToastErrorMessage msg={msg} key={index} />;
          })}
        </>
      ) : null}
      <ModalSignUpWrapper testData={infoMsgToUser} closeModal={_closeModal} />
    </div>
  );
}
// <div className={styles.bg_active}>
