import React from "react";
import { useState } from "react";
import {
  LoginContainer,
  LoginWrapper,
} from "../component/styledComponents/LoginStyled";
import * as Api from "../api/index";
import { useRef } from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import loadingImg from "../assets/Spinner.svg";
import { MemoizedToast } from "../component/sharedComponents/ToastComponent";
import { useDispatch } from "react-redux";
import { setToken } from "../redux/features/userToken";
// import { BsExclamationCircle } from "react-icons/bs";

function Login() {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const inputRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [openInfoMsg, setOpenInfoMsg] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    // inputRef.current.focus();
  }, []);
  const _loggingIn = async () => {
    console.log("rerender loggin in");
    setLoading(true);
    try {
      const res = await Api.signIn({
        username: userName,
        password: userPassword,
      });
      console.log(res);
      const accessToken = res.data.accessToken;
      if (res.status === 200) {
        setTimeout(() => {
          history.push("/laptop");
        }, 1000);
      }
      localStorage.setItem("token", accessToken);
      dispatch(setToken(accessToken));
      setLoading(false);
    } catch (error) {
      console.log("rerender log error");
      setLoading(false);
      if (openInfoMsg === true) {
        setOpenInfoMsg(false);
        setTimeout(() => {
          setOpenInfoMsg(true);
        }, 100);
      } else {
        setOpenInfoMsg(true);
      }
    }
  };
  return (
    <LoginContainer>
      <LoginWrapper>
        <div className="login_title">Đăng nhập</div>
        <div className="login_input">
          <input
            type="text"
            placeholder="Tên đăng nhập"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            ref={inputRef}
          ></input>
          {/* <i>
            <BsExclamationCircle size={30} color="red" />
          </i> */}
          <input
            type="password"
            placeholder="Mật khẩu"
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
          />
          {/* <i>
            <BsExclamationCircle size={30} color="red" />
          </i> */}
        </div>
        <div className="login_button_container">
          <div className="login_button" onClick={_loggingIn}>
            {loading ? (
              <>
                <img src={loadingImg} alt="" />
              </>
            ) : (
              <>Đăng nhập</>
            )}
          </div>
        </div>
      </LoginWrapper>
      {openInfoMsg === true && (
        <MemoizedToast
          resetHandleVal={setOpenInfoMsg}
          msg="Đăng nhập thất bại!"
        />
      )}
    </LoginContainer>
  );
}

export default Login;
