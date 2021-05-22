import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import * as styles from "./cssFolder/signUP.module.css";
import * as API from "../api/index";
import { ToastErrorMessage } from "../components/sharedComponents/ToastMessage";
import YesNoModal from "../components/sharedComponents/YesNoModal";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";

export default function SignUP() {
  //state
  const history = useHistory();
  const initialState = {
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
  };
  const [form, setForm] = useState(initialState);
  const [errorMsgShownToUser, setErrorMsgShownToUser] = useState("");
  const [infoMsgToUser, setInfoMsgToUser] = useState("");
  const [loadingSigningUpResponse, setLoadingSigningUpResponse] =
    useState(false);
  const [showYesNoModalToUser, setShowYesNoModalToUser] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  /// function
  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
  const _handlingFormChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const _handlingRegister = async () => {
    let msg = [];
    function validateUsername(username) {
      if (username.length === 0) {
        msg.push("Không được để trống tên đăng nhập");
      } else if (username.length < 5) {
        msg.push("Tên đăng nhập tối thiểu phải đạt 6 kí tự");
      }
      var nameRegex = /^[a-zA-Z0-9]+$/;
      var validUsername = username.match(nameRegex);
      if (validUsername == null) {
        msg.push(
          "Tên đăng nhập không hợp lệ, chỉ những kí tự từ A-Z, a-z, - , 0-9 được chấp nhận"
        );
        return false;
      }
    }
    validateUsername(form.username);
    if (!errorMsgShownToUser) {
      console.log("form", form);
      const emailIsValid = validateEmail(form.email);
      if (!emailIsValid) {
        msg.push("Email không đúng định dạng");
      }

      if (!form.password || !form.confirmPassword) {
        msg.push("Không được để trống mật khấu hoặc nhập lại mật khẩu");
      } else if (form.password.length < 5 || form.confirmPassword < 5) {
        msg.push("Mật khẩu tối thiểu phải đạt 6 kí tự.");
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
        setTimeout(() => {
          setErrorMsgShownToUser("");
        }, 6000);
      } else if (msg.length === 0) {
        try {
          setLoadingSigningUpResponse(true);
          const res = await API.signUp(form);
          setLoadingSigningUpResponse(false);
          console.log(res.data.message);
          setInfoMsgToUser(res.data.message);
          setShowYesNoModalToUser(true);
        } catch (error) {
          const res = error?.response?.data;
          setErrorMsgShownToUser((prev) => [...prev, res?.message]);
          setTimeout(() => {
            setErrorMsgShownToUser("");
          }, 6000);
          console.log(error);
          setLoadingSigningUpResponse(false);
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
    setShowYesNoModalToUser(false);
    setForm(initialState);
  };
  ////////// if user already loggined, redirect to home page
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (token?.length > 0) {
      history.push("/");
    }
  }, [token]);
  useEffect(() => {
    document.title = "Đăng kí";
  }, []);
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
                value={form.username}
              />
              <div className={styles.passwordContainer}>
                <input
                  type={`${showPassword ? "text" : "password"}`}
                  placeholder="Mật khẩu"
                  name="password"
                  onChange={_handlingFormChange}
                  onKeyDown={handleKeyDown}
                  value={form.password}
                />
                <i
                  className={styles.iconForPassword}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaRegEye /> : <FaEyeSlash />}
                </i>
              </div>
              <div className={styles.passwordContainer}>
                <input
                  type={`${showConfirmPassword ? "text" : "password"}`}
                  name="confirmPassword"
                  placeholder="Xác nhận mật khẩu"
                  onChange={_handlingFormChange}
                  onKeyDown={handleKeyDown}
                  value={form.confirmPassword}
                />
                <i
                  className={styles.iconForPassword}
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <FaRegEye /> : <FaEyeSlash />}
                </i>
              </div>
              <input
                name="email"
                placeholder="Email"
                onChange={_handlingFormChange}
                onKeyDown={handleKeyDown}
                value={form.email}
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
      {showYesNoModalToUser ? (
        <YesNoModal
          msg={infoMsgToUser}
          confirm={_closeModal}
          notDisplayRejectBttn={true}
        />
      ) : null}
    </div>
  );
}
