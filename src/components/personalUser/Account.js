import React, { useState, useEffect } from "react";
import "./account.css";
import { BiImageAdd } from "react-icons/bi";
import * as API from "../../api/index";
import YesNoModal from "../sharedComponents/YesNoModal";
import { useHistory } from "react-router";

export default function Account() {
  const history = useHistory();
  const token = localStorage.getItem("token");
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  // const [fileInputState, setFileInputState] = useState("");
  const [previewSource, setPreviewSource] = useState();
  const [baseUserInfo, setBaseUserInfo] = useState({
    name: "",
    userPhone: "",
    email: "",
  });
  const [showModalRequestUserLoggout, setShowModalRequestUserLoggout] =
    useState(false);
  const [isSendingUpdateRequestToServer, setIsSendingUpdateRequestToServer] =
    useState(false);
  const [showMustBeImgModal, setshowMustBeImgModal] = useState(false);
  /////// function
  useEffect(() => {
    if (!token) {
      return;
    } else {
      setBaseUserInfo({
        name: userInfo.name,
        userPhone: userInfo.userPhone,
        email: userInfo.email,
      });
    }
  }, []);
  ////////convert img to base 64 then push to server
  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    previewFile(file);
  };
  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };
  const _updateUserInfo = () => {
    uploadImage(previewSource);
  };
  const uploadImage = async (base64EncodedImage) => {
    // console.log(base64EncodedImage);
    try {
      const newUserInfo = {
        ...userInfo,
        ...baseUserInfo,
        imageUrl: base64EncodedImage,
      };
      console.log("new user", newUserInfo);
      setIsSendingUpdateRequestToServer(true);
      const response = await API.updateJWTUserInfo(newUserInfo);
      setIsSendingUpdateRequestToServer(false);
      setShowModalRequestUserLoggout(true);
      ///////////clear all user inform in case they reload the page without navigate to login page as programmed
      // console.log("res", response);
    } catch (error) {
      console.log(error);
      console.log(error.response);
      setIsSendingUpdateRequestToServer(false);
      if (error.response.status === 500 || error.response.status === 413) {
        setshowMustBeImgModal(true);
      }
    }
  };
  ////////convert img to base 64 then push to server
  // console.log("base info", baseUserInfo);
  /////// take user base info
  const _handlingUserBaseInfoChanged = (e) => {
    setBaseUserInfo({ ...baseUserInfo, [e.target.name]: e.target.value });
  };

  //////// confirm loggout after user changed their base information
  const _confirmRequestModalLoggoutAfterChangingInformation = () => {
    localStorage.clear();
    history.push("/signIn");
  };
  return (
    <div className="user_profile">
      <h2>Thông tin tài khoản</h2>
      <div className="user_profile_container">
        <div className="column1">
          <ul>
            <li>
              <div className="userChangeImgArea">
                <img
                  className="acc_img"
                  src={previewSource || userInfo?.imageUrl}
                  alt=""
                />
                <div className="acc_button">
                  <input
                    type="file"
                    name=""
                    id="file"
                    accept="image/*"
                    onChange={handleFileInputChange}
                    // value={fileInputState}
                  />
                  <label for="file">
                    <BiImageAdd size={25} /> <span> Thay ảnh đại diện</span>
                  </label>
                </div>
              </div>
            </li>
            <li>
              <h3>Họ và tên</h3>
              <input
                type="text"
                maxLength="30"
                minLength="3"
                placeholder="Họ và tên"
                name="name"
                onChange={_handlingUserBaseInfoChanged}
                value={baseUserInfo.name}
              />
            </li>
            <li>
              <div className="Update_info">
                <div onClick={_updateUserInfo}>
                  Cập nhật
                  {isSendingUpdateRequestToServer ? (
                    <>
                      <img
                        src="images/loading.gif"
                        alt=""
                        className="account_loadingIcon"
                      />
                    </>
                  ) : null}
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="column2">
          <ul>
            <li className="userPhone">
              <h3>Số điện thoại</h3>
              <input
                type="tel"
                placeholder="Số điện thoại"
                maxLength="12"
                onChange={_handlingUserBaseInfoChanged}
                name="userPhone"
                value={baseUserInfo.userPhone}
              />
            </li>
            <li className="userEmail">
              <h3 className="email_input">Email</h3>
              <input
                type="text"
                placeholder="Email"
                onChange={_handlingUserBaseInfoChanged}
                name="email"
                value={baseUserInfo.email}
              />
            </li>
          </ul>
        </div>
      </div>

      <div className="passwordContainer">
        <div className="pw_change">
          <h2>Thay đổi mật khẩu</h2>
          <div className="user_profile_container">
            <div className="column1">
              <ul>
                <li>
                  <h3>Nhập mật khẩu hiện tại</h3>
                  <input
                    type="password"
                    maxLength="20"
                    minLength="6"
                    placeholder="Nhập mật khẩu hiện tại"
                  />
                </li>
                <li>
                  <h3>Nhập mật khẩu mới</h3>
                  <input
                    type="password"
                    maxLength="20"
                    minLength="6"
                    placeholder="Nhập mật khẩu mới"
                  />
                </li>
                <li>
                  <div className="Update_info">Cập nhật</div>
                </li>
              </ul>
            </div>
            <div className="column2">
              <ul>
                <li>
                  <h3>Nhập lại mật khẩu mới</h3>
                  <input
                    type="password"
                    placeholder="Nhập lại mật khẩu mới"
                    className="retypePw"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {showModalRequestUserLoggout ? (
        <>
          <YesNoModal
            notDisplayRejectBttn={true}
            confirm={_confirmRequestModalLoggoutAfterChangingInformation}
            msg="Thay đổi thông tin cá nhân thành công, chúng tôi sẽ điều hướng bạn đến trang đăng nhập."
          />
        </>
      ) : null}
      {showMustBeImgModal ? (
        <>
          <YesNoModal
            notDisplayRejectBttn={true}
            confirm={() => {
              setshowMustBeImgModal(false);
            }}
            msg="File input phải là một ảnh."
          />
        </>
      ) : null}
    </div>
  );
}
