import React from "react";
import { useState } from "react";
import {
  LoginContainer,
  LoginWrapper,
} from "../component/styledComponents/LoginStyled";
import * as Api from "../api/index";

function Login() {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const _loggingIn = async () => {
    const res = await Api.signIn({
      username: userName,
      password: userPassword,
    });
    console.log(res);
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
          />
          <input
            type="password"
            placeholder="Mật khẩu"
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
          />
        </div>
        <div className="login_button_container">
          <div className="login_button" onClick={_loggingIn}>
            Đăng nhập
          </div>
        </div>
      </LoginWrapper>
    </LoginContainer>
  );
}

export default Login;
