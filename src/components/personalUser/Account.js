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
      msg.push("M???t kh???u hi???n t???i t???i thi???u ph???i ????? 6 k?? t???. ");
    }
    if (passwordForm?.newPassword?.length < 5 || !passwordForm.newPassword) {
      msg.push("M???t kh???u m???i t???i thi???u ph???i ????? 6 k?? t???. ");
    }
    if (
      passwordForm?.confirmNewPassword?.length < 5 ||
      !passwordForm.confirmNewPassword
    ) {
      msg.push("M???t kh???u nh???p l???i t???i thi???u ph???i ????? 6 k?? t???.");
    }
    if (passwordForm.newPassword !== passwordForm.confirmNewPassword) {
      msg.push("M???t kh???u m???i v?? nh???p l???i m???t kh???u kh??ng kh???p.");
    }
    setMsgSendToUser(msg);
    if (msg.length === 0) {
      try {
        const response = await API.updateJWTUserPassword(passwordForm);
        // console.log("up user pw", response);
        setUpdatedPwSuccessfully(
          "Thay ?????i m???t kh???u th??nh c??ng, ch??ng t??i s??? ??i???u h?????ng b???n v??? trang ????ng nh???p."
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
      <h2>Th??ng tin c?? nh??n</h2>
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
                    <BiImageAdd size={25} /> <span> Thay ???nh ?????i di???n</span>
                  </label>
                </div>
              </div>
            </li>
            <li>
              <h3>H??? v?? t??n</h3>
              <input
                type="text"
                maxLength="30"
                minLength="3"
                placeholder="H??? v?? t??n"
                name="name"
                onChange={_handlingUserBaseInfoChanged}
                value={baseUserInfo.name}
              />
            </li>
            <li>
              <div className="Update_info">
                <div onClick={_updateUserInfo}>
                  C???p nh???t
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
              <h3>S??? ??i???n tho???i</h3>
              <input
                type="tel"
                placeholder="S??? ??i???n tho???i"
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
          <h2>Thay ?????i m???t kh???u</h2>
          <div className="user_profile_container">
            <div className="column1">
              <ul>
                <li>
                  <h3>Nh???p m???t kh???u hi???n t???i</h3>
                  <input
                    type="password"
                    maxLength="50"
                    name="currentPassword"
                    placeholder="Nh???p m???t kh???u hi???n t???i"
                    onChange={_handleChangePassword}
                    className={`${
                      passwordForm?.currentPassword?.length < 6
                        ? "redBorder"
                        : null
                    }`}
                  />
                </li>
                <li>
                  <h3>Nh???p m???t kh???u m???i</h3>
                  <input
                    type={showNewPwText ? "text" : "password"}
                    name="newPassword"
                    maxLength="50"
                    placeholder="Nh???p m???t kh???u m???i"
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
                    C???p nh???t
                  </div>
                </li>
              </ul>
            </div>
            <div className="column2">
              <ul>
                <li className="retypePasswordContainer">
                  <h3>Nh???p l???i m???t kh???u m???i</h3>
                  <input
                    type={showConfirmPwText ? "text" : "password"}
                    name="confirmNewPassword"
                    placeholder="Nh???p l???i m???t kh???u m???i"
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
            msg="Thay ?????i th??ng tin c?? nh??n th??nh c??ng, ch??ng t??i s??? ??i???u h?????ng b???n ?????n trang ????ng nh???p."
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
            msg="File input ph???i l?? m???t ???nh."
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
