import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import * as styles from "./cssFolder/PWrecover.module.css";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";
import YesNoModal from "../components/sharedComponents/YesNoModal";
import * as API from "../api/index";

export default function PWRecover() {
  const history = useHistory();
  const token = localStorage.getItem("token");
  const initialState = {
    username: "",
    email: "",
    newPassword: "",
  };
  const [showPassword, setShowPassword] = useState(false);
  const [retakePwForm, setRetakePwForm] = useState(initialState);
  const [errorMsg, setErrorMsg] = useState([]);
  const [recoverPwSttMsg, setRecoverPwSttMsg] = useState("");
  const [isSendingRequest, setIsSendingRequest] = useState(false);
  useEffect(() => {
    if (token) {
      history.push("/");
    }
  }, [token]);

  ///////retake pw
  const retakePwFormChange = (e) => {
    setRetakePwForm({ ...retakePwForm, [e.target.name]: e.target.value });
  };

  ///////// pressing confirm
  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
  const _confirmRetakePw = async () => {
    let msg = [];
    if (retakePwForm?.username.length < 5) {
      msg.push("Tên đăng nhập tối thiểu phải đạt 6 kí tự");
    }
    if (!validateEmail(retakePwForm.email)) {
      msg.push("Email không đúng định dạng");
    }
    if (retakePwForm.newPassword.length < 5) {
      msg.push("Mật khẩu mới tối thiểu phải đạt 6 kí tự");
    }
    setErrorMsg(msg);
    if (msg.length === 0) {
      try {
        setIsSendingRequest(true);
        const response = await API.requireRecoveringPw(retakePwForm);
        console.log("recore pw res", response.data.message);
        setIsSendingRequest(false);
        setRecoverPwSttMsg(response.data.message);
      } catch (error) {
        console.log(error.response);
        setErrorMsg([...errorMsg, error.response.data.message]);
        setIsSendingRequest(false);
      }
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
          <div className={styles.content_area}>
            <div className={styles.input_container}>
              <input
                maxlength="15"
                type="text"
                name="username"
                placeholder="Tên đăng nhập"
                maxLength="50"
                onChange={retakePwFormChange}
                value={retakePwForm.username}
              />
              <input
                class="password"
                type="email"
                name="email"
                placeholder="Email xác thực"
                maxLength="50"
                onChange={retakePwFormChange}
                value={retakePwForm.email}
              />
              <div className={styles.passwordContainer}>
                <input
                  type={`${showPassword ? "text" : "password"}`}
                  placeholder="Mật khẩu mới"
                  maxLength="50"
                  name="newPassword"
                  onChange={retakePwFormChange}
                  value={retakePwForm.newPassword}
                />
                <i
                  className={styles.iconForPassword}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaRegEye /> : <FaEyeSlash />}
                </i>
              </div>
            </div>
            <div className={styles.more_func}>
              <div className={styles.new_acc}>
                <Link to="/signIn">Đã có tài khoản?</Link>
              </div>
              <div>
                <Link className={styles.forgot_pw} to="/signUp">
                  Chưa có tài khoản?
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footer}>
          <div className={styles.confirm} onClick={_confirmRetakePw}>
            Xác nhận
            <i>{isSendingRequest && <img src="images/loading.gif" alt="" />}</i>
          </div>
        </div>
      </div>
      {errorMsg.length > 0 ? (
        <>
          <YesNoModal
            notDisplayRejectBttn={true}
            msg={errorMsg}
            isArray={true}
            confirm={() => setErrorMsg([])}
          />
        </>
      ) : null}
      {recoverPwSttMsg.length > 0 ? (
        <>
          <YesNoModal
            notDisplayRejectBttn={true}
            msg={recoverPwSttMsg}
            confirm={() => {
              setRecoverPwSttMsg("");
              setRetakePwForm(initialState);
            }}
          />
        </>
      ) : null}
    </div>
  );
}
