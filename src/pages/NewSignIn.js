import React, { useEffect, useState } from "react";
import "../components/SignIN/NewSignIn.css";
import { Link, useHistory } from "react-router-dom";
import ReactFacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";
import axios from "axios";
import { BaseUrl } from "../api";

function NewSignIn() {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const inventory = [];
  const quantity = 0;

  //function

  useEffect(() => {
    document.title = "Đăng nhập";
  }, []);

  const responseGoogle = (response) => {
    const { access_token } = response.tokenObj;
    localStorage.setItem("userToken", access_token);
    localStorage.setItem("userInfo", JSON.stringify(response.profileObj));
    localStorage.setItem("inventory", JSON.stringify(inventory));
    localStorage.setItem("quantity", JSON.stringify(quantity));
    history.push("/landingPage");
  };

  const responseFacebook = (response) => {
    const accessToken = response.accessToken;
    const pictureUrl = response.picture.data.url;
    const data = {
      name: response.name,
      email: response.email,
      imageUrl: pictureUrl,
    };
    localStorage.setItem("userToken", accessToken);
    localStorage.setItem("userInfo", JSON.stringify(data));
    localStorage.setItem("inventory", JSON.stringify(inventory));
    localStorage.setItem("quantity", JSON.stringify(quantity));
    history.push("/landingPage");
  };

  const HandleLoginSubmit = async () => {
    try {
      if (!username) {
        alert("Tài khoản không để trống");
      }
      if (!password) {
        alert("Mật khẩu không được để trống");
      }
      if (username !== "" && password !== "") {
        const inputAccount = {
          username,
          password,
        };
        const { data } = await axios.post(
          `${BaseUrl}/api/user/login`,
          inputAccount
        );
        setLoading(true);
        const tokenReceiveFromDatabase = data.token;

        localStorage.setItem("userInfo", JSON.stringify(data.user));
        localStorage.setItem("userToken", tokenReceiveFromDatabase);
        localStorage.setItem("inventory", JSON.stringify(inventory));
        localStorage.setItem("quantity", JSON.stringify(quantity));

        console.log(localStorage);
        history.push("/landingPage");
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
              onChange={(e) => setUsername(e.target.value)}
              onKeyDown={handleEnterToProcess}
            />
            <div className="input-underline"></div>
            <label htmlFor=""> Tên đăng nhập</label>
          </div>
          <div className="input-data">
            <input
              type="password"
              required
              maxLength="30"
              minLength="6"
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={handleEnterToProcess}
            />
            <div className="input-underline"></div>
            <label htmlFor=""> Mật khẩu</label>
          </div>
        </div>
        <div className="input-wrapper">
          {loading === true ? (
            <div className="testWrapper">
              <div className="circle_"></div>
            </div>
          ) : (
            <button className="font_" onClick={HandleLoginSubmit}>
              Đăng nhập
            </button>
          )}
        </div>
        <div className="input-wrapper">
          <div className="underline"></div>
        </div>
        {loading === true ? null : (
          <div className="input-wrapper">
            <GoogleLogin
              className="gg_login"
              clientId="773024041759-e9rq8jqlg36eabq2t9p1kqk93shu2f5p.apps.googleusercontent.com"
              buttonText="Đăng nhập với Google"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
            />
            <ReactFacebookLogin
              className="fb_login"
              appId="387472199912431"
              fields="name,email,picture"
              callback={responseFacebook}
              icon="fa-facebook"
            />
          </div>
        )}

        <div className="input-wrapper">
          <div className="split">
            <div className="left_split">
              <Link to="/signUP">Đăng ký</Link>
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

export default NewSignIn;
