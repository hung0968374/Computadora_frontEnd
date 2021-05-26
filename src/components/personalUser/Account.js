import React, { useState, useEffect } from "react";
import "./account.css";
import { BiImageAdd } from "react-icons/bi";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import * as API from "../../api/index";
import YesNoModal from "../sharedComponents/YesNoModal";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { goUp } from "../../redux/features/post/screenSlice";

export default function Account() {
  const dispatch = useDispatch();
  const history = useHistory();
  const token = localStorage.getItem("token");
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const initialPasswordState = {
    currentPassword: null,
    newPassword: null,
    confirmNewPassword: null,
  };
  // const [fileInputState, setFileInputState] = useState("");
  const [previewSource, setPreviewSource] = useState();
  const [baseUserInfo, setBaseUserInfo] = useState({
    name: "",
    userPhone: "",
    email: "",
  });
  const [passwordForm, setPasswordForm] = useState(initialPasswordState);
  const [showModalRequestUserLoggout, setShowModalRequestUserLoggout] =
    useState(false);
  const [isSendingUpdateRequestToServer, setIsSendingUpdateRequestToServer] =
    useState(false);
  const [showMustBeImgModal, setshowMustBeImgModal] = useState(false);
  const [showNewPwText, setshowNewPwText] = useState(false);
  const [showConfirmPwText, setshowConfirmPwText] = useState(false);
  const [msgSendToUser, setMsgSendToUser] = useState([]);
  const [updatedPwSuccessfully, setUpdatedPwSuccessfully] = useState("");
  const [updatingPwFailedMsg, setUpdatingPwFailedMsg] = useState("");
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
      // console.log("new user", newUserInfo);
      setIsSendingUpdateRequestToServer(true);
      const response = await API.updateJWTUserBaseInfo(newUserInfo);
      setIsSendingUpdateRequestToServer(false);
      setShowModalRequestUserLoggout(true);
      // console.log("res", response);
      localStorage.clear();
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

  /////////// change password
  const _handleChangePassword = (e) => {
    setPasswordForm({ ...passwordForm, [e.target.name]: e.target.value });
  };
  const _handleUserPasswordChanged = async () => {
    dispatch(goUp(false));
    let msg = [];
    if (
      passwordForm?.currentPassword?.length < 5 ||
      !passwordForm.currentPassword
    ) {
      msg.push("Mật khẩu hiện tại tối thiểu phải đủ 6 kí tự. ");
    }
    if (passwordForm?.newPassword?.length < 5 || !passwordForm.newPassword) {
      msg.push("Mật khẩu mới tối thiểu phải đủ 6 kí tự. ");
    }
    if (
      passwordForm?.confirmNewPassword?.length < 5 ||
      !passwordForm.confirmNewPassword
    ) {
      msg.push("Mật khẩu nhập lại tối thiểu phải đủ 6 kí tự.");
    }
    if (passwordForm.newPassword !== passwordForm.confirmNewPassword) {
      msg.push("Mật khẩu mới và nhập lại mật khẩu không khớp.");
    }
    setMsgSendToUser(msg);
    if (msg.length === 0) {
      try {
        const response = await API.updateJWTUserPassword(passwordForm);
        // console.log("up user pw", response);
        setUpdatedPwSuccessfully(
          "Thay đổi mật khẩu thành công, chúng tôi sẽ điều hướng bạn về trang đăng nhập."
        );
      } catch (error) {
        // console.log(error.response.data.message);
        setUpdatingPwFailedMsg(error.response.data.message);
      }
    }
  };
  // console.log("pw form", passwordForm);
  return (
    <div className="user_profile">
      <h2>Thông tin cá nhân</h2>
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
                    maxLength="50"
                    name="currentPassword"
                    placeholder="Nhập mật khẩu hiện tại"
                    onChange={_handleChangePassword}
                    className={`${
                      passwordForm?.currentPassword?.length < 6
                        ? "redBorder"
                        : null
                    }`}
                  />
                </li>
                <li>
                  <h3>Nhập mật khẩu mới</h3>
                  <input
                    type={showNewPwText ? "text" : "password"}
                    name="newPassword"
                    maxLength="50"
                    placeholder="Nhập mật khẩu mới"
                    onChange={_handleChangePassword}
                    className={`typeNewPassword ${
                      passwordForm?.newPassword?.length < 6 ? "redBorder" : null
                    }`}
                  />
                  <i
                    className="typePwIcon"
                    onClick={() => setshowNewPwText(!showNewPwText)}
                  >
                    {showNewPwText ? <FaRegEye /> : <FaRegEyeSlash />}
                  </i>
                </li>
                <li>
                  <div
                    className="Update_info"
                    onClick={_handleUserPasswordChanged}
                  >
                    Cập nhật
                  </div>
                </li>
              </ul>
            </div>
            <div className="column2">
              <ul>
                <li className="retypePasswordContainer">
                  <h3>Nhập lại mật khẩu mới</h3>
                  <input
                    type={showConfirmPwText ? "text" : "password"}
                    name="confirmNewPassword"
                    placeholder="Nhập lại mật khẩu mới"
                    className={`retypePw ${
                      passwordForm?.confirmNewPassword?.length < 6
                        ? "redBorder"
                        : null
                    }`}
                    onChange={_handleChangePassword}
                    maxLength="50"
                  />
                  <i
                    className="retypePwIcon"
                    onClick={() => setshowConfirmPwText(!showConfirmPwText)}
                  >
                    {showConfirmPwText ? <FaRegEye /> : <FaRegEyeSlash />}
                  </i>
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
      {msgSendToUser?.length > 0 ? (
        <>
          <YesNoModal
            notDisplayRejectBttn={true}
            msg={msgSendToUser}
            isArray={true}
            confirm={() => setMsgSendToUser([])}
          />
        </>
      ) : null}
      {updatedPwSuccessfully?.length ? (
        <>
          <YesNoModal
            notDisplayRejectBttn={true}
            msg={updatedPwSuccessfully}
            confirm={() => {
              setUpdatedPwSuccessfully("");
              localStorage.clear();
              history.push("/signIn");
            }}
          />
        </>
      ) : null}
      {updatingPwFailedMsg?.length > 0 ? (
        <>
          <YesNoModal
            notDisplayRejectBttn={true}
            msg={updatingPwFailedMsg}
            confirm={() => {
              setUpdatingPwFailedMsg("");
            }}
          />
        </>
      ) : null}
    </div>
  );
}
