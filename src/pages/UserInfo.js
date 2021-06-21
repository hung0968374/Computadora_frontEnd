import React from "react";
import Header from "../components/sharedComponents/Header";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Footer from "../components/LaptopPage/footer";
import "../components/UserInfo/UserInfo.css";
import { BaseUrl } from "../api";

export default function UserInfo() {
  const history = useHistory();
  const InformationFromLocalstorage = JSON.parse(
    localStorage.getItem("userInfo")
  );
  const username = InformationFromLocalstorage.username;
  const password = InformationFromLocalstorage.password;

  //hooks
  const [token, setToken] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [subDistrict, setSubDistrict] = useState("");

  const [recentPassword, setRecentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  //event
  useEffect(() => {
    document.title = "Thông tin cá nhân";
  }, []);

  const handleUpdateShipAdress = async () => {
    const shipInfoSendToBackEnd = {
      username,
      password,
      city,
      district,
      subDistrict,
    };

    try {
      const data = await axios.put(
        `${BaseUrl}/api/updateUserInfo/updateShip`,
        shipInfoSendToBackEnd
      );

      alert(
        `${data.data.message} và để trải nghiệm của bạn tốt hơn chúng tôi sẽ thoát ra và điều hướng bạn tới trang đăng nhập`
      );
      localStorage.removeItem("userToken");
      history.push("/signIn");
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangePassword = async () => {
    // check;
    if (!recentPassword) alert("Bạn chưa nhập mật khẩu hiện tại");
    if (!newPassword) alert("Bạn chưa nhập mật khẩu mới");
    if (!confirmNewPassword) alert("Bạn chưa nhập xác nhận mât khẩu mới");
    if (newPassword === confirmNewPassword && recentPassword.trim() !== "") {
      const sendInfoToBackend = {
        password: recentPassword,
        username: username,
        newPassword: newPassword,
      };
      console.log(sendInfoToBackend);
      try {
        const response = await axios.put(
          `${BaseUrl}/api/updateUserInfo/updatePassWord`,
          sendInfoToBackend
        );

        alert(
          `${response.data.message}  và để trải nghiệm của bạn tốt hơn chúng tôi sẽ thoát ra và điều hướng bạn tới trang đăng nhậ`
        );
        localStorage.removeItem("userToken");
        history.push("/signIn");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div>
      <Header token={token} />
      <div className="container1">
        <div className="wrapper1">
          <div className="function1">
            <div className="list">
              <ul>
                <li>
                  <img src="/images/account-icon.svg" alt="" />
                  <Link to="/userInformation">Tài khoản</Link>
                </li>
                <li>
                  <img src="/images/heart-icon.svg" alt="" />
                  <Link to="">Sản phẩm ưa thích</Link>
                </li>
                <li>
                  <img src="/images/clock-icon.svg" alt="" />
                  <Link to="">Lịch sử mua hàng</Link>
                </li>
                {InformationFromLocalstorage.isAdmin ? (
                  <ul>
                    <li>
                      <img src="/images/admin-icon.svg" alt="" />
                      <Link to="">Thống kê số liệu (Admin)</Link>
                    </li>
                    <li>
                      <img src="/images/admin-icon.svg" alt="" />
                      <Link to="">Quản lý vận chuyển (Admin)</Link>
                    </li>
                  </ul>
                ) : null}
              </ul>
            </div>
          </div>

          <div className="current_function">
            <div className="user_profile">
              <h2>Thông tin tài khoản</h2>
              <div className="user_profile_container">
                <div className="column1">
                  <ul>
                    <li>
                      <div className="first">
                        <img
                          className="acc_img"
                          src={InformationFromLocalstorage.imageUrl}
                          alt=""
                        />
                        <button className="acc_button">
                          Thay ảnh đại diện
                        </button>
                      </div>
                    </li>
                    <li>
                      <h3>Họ và tên</h3>
                      <input
                        type="text"
                        placeholder={InformationFromLocalstorage.name}
                        maxLength="30"
                        minLength="3"
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
                      <h3>Số điện thoại</h3>
                      <input
                        type="text"
                        placeholder="Số điện thoại"
                        maxLength="10"
                      />
                    </li>
                    <li>
                      <h3 className="email_input">Email</h3>
                      <input
                        type="email"
                        placeholder={InformationFromLocalstorage.email}
                      />
                    </li>
                  </ul>
                </div>
              </div>

              <div className="ship_address">
                <h2>Địa chỉ giao hàng</h2>
                <div className="user_profile_container">
                  <div className="column1">
                    <ul>
                      <li>
                        <h3 className="distric_input"> Tỉnh/Thành phố</h3>
                        {InformationFromLocalstorage.shipCity === "" ? (
                          <input
                            type="text"
                            placeholder="Tỉnh/Thành phố"
                            maxLength="20"
                            minLength="4"
                            onChange={(e) => setCity(e.target.value)}
                          />
                        ) : (
                          <input
                            type="text"
                            placeholder={InformationFromLocalstorage.shipCity}
                            maxLength="20"
                            minLength="4"
                            onChange={(e) => setCity(e.target.value)}
                          />
                        )}
                      </li>
                      <li>
                        <h3>Phường/Xã</h3>
                        {InformationFromLocalstorage.shipSubDistrict === "" ? (
                          <input
                            type="text"
                            placeholder="Phường/Xã"
                            maxLength="20"
                            minLength="4"
                            onChange={(e) => setSubDistrict(e.target.value)}
                          />
                        ) : (
                          <input
                            type="text"
                            placeholder={
                              InformationFromLocalstorage.shipSubDistrict
                            }
                            maxLength="20"
                            minLength="4"
                            onChange={(e) => setSubDistrict(e.target.value)}
                          />
                        )}
                      </li>
                      <li>
                        <div
                          onClick={handleUpdateShipAdress}
                          className="Update_info"
                        >
                          Cập Nhật
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="column2">
                    <ul>
                      <li>
                        <h3 className="distric_input">Quận/Huyện</h3>
                        {InformationFromLocalstorage.shipDistrict === "" ? (
                          <input
                            type="text"
                            placeholder="Quận/Huyện"
                            maxLength="15"
                            onChange={(e) => setDistrict(e.target.value)}
                          />
                        ) : (
                          <input
                            type="text"
                            placeholder={
                              InformationFromLocalstorage.shipDistrict
                            }
                            maxLength="15"
                            onChange={(e) => setDistrict(e.target.value)}
                          />
                        )}
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="pw_change">
                  <h2>Đổi mật khẩu</h2>
                  <div className="user_profile_container">
                    <div className="column1">
                      <ul>
                        <li>
                          <h3>Nhập mật khẩu hiện tại</h3>
                          <input
                            type="password"
                            maxLength="30"
                            minLength="6"
                            onChange={(e) => setRecentPassword(e.target.value)}
                          />
                        </li>
                        <li>
                          <h3>Nhập mật khẩu mới</h3>
                          <input
                            type="password"
                            maxLength="30"
                            minLength="6"
                            onChange={(e) => setNewPassword(e.target.value)}
                          />
                        </li>
                        <li>
                          <div
                            onClick={handleChangePassword}
                            className="Update_info"
                          >
                            Cập nhật
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="column2">
                      <ul>
                        <li>
                          <h3>Nhập lại mật khẩu mới</h3>
                          <input
                            type="password"
                            maxLength="30"
                            minLength="6"
                            onChange={(e) =>
                              setConfirmNewPassword(e.target.value)
                            }
                          />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="margin_block"></div>
      <Footer />
    </div>
  );
}
