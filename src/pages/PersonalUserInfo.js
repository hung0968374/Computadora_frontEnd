import React from "react";
import Footer from "../components/sharedComponents/footer";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Header from "../components/sharedComponents/Header";
import "./cssFolder/personalInfo.css";

export default function UserInfo() {
  const InformationFromLocalstorage = JSON.parse(
    localStorage.getItem("userInfo")
  );
  console.log(InformationFromLocalstorage);
  const username = InformationFromLocalstorage.username;

  //hooks
  const [token, setToken] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [subDistrict, setSubDistrict] = useState("");

  //event
  const handleUpdateShipAdress = () => {
    const shipInfoSendToBackEnd = {
      username,
      city,
      district,
      subDistrict,
    };

    const data = axios.put(
      "http://localhost:5000/api/updateUserInfo/updateShip",
      shipInfoSendToBackEnd
    );
  };

  return (
    <div>
      <Header />
      <div className="container1">
        <div className="wrapper1">
          <div className="function1">
            <div className="list">
              <ul>
                <li>
                  <div className="list_container1">
                    <img src="/images/account-icon.svg" alt="" />
                    <Link to="/userInformation">Tài khoản</Link>
                  </div>
                </li>
                <li>
                  <div className="list_container2">
                    <img src="/images/heart-icon.svg" alt="" />
                    <Link to="">Sản phẩm ưa thích</Link>
                  </div>
                </li>
                <li>
                  <div className="list_container3">
                    <img src="/images/clock-icon.svg" alt="" />
                    <Link to="">Lịch sử mua hàng</Link>
                  </div>
                </li>
                {InformationFromLocalstorage.isAdmin ? (
                  <ul>
                    <li>
                      <div className="list_container4">
                        <img src="/images/admin-icon.svg" alt="" />
                        <Link to="">Thống kê số liệu (Admin)</Link>
                      </div>
                    </li>
                    <li>
                      <div className="list_container5">
                        <img src="/images/admin-icon.svg" alt="" />
                        <Link to="">Quản lý vận chuyển (Admin)</Link>
                      </div>
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
                          src="/images/account-icon.svg"
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
                      <div className="Update_info">
                        <Link to="">Cập nhật</Link>
                      </div>
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
                        <input
                          type="text"
                          placeholder="Tỉnh/Thành phố"
                          maxLength="20"
                          minLength="4"
                          onChange={(e) => setCity(e.target.value)}
                        />
                      </li>
                      <li>
                        <h3>Phường/Xã</h3>
                        <input
                          type="text"
                          placeholder="Phường/Xã"
                          maxLength="20"
                          minLength="4"
                          onChange={(e) => setSubDistrict(e.target.value)}
                        />
                      </li>
                      <li>
                        <div
                          onClick={handleUpdateShipAdress}
                          className="Update_info"
                        >
                          <Link to="">Cập nhật</Link>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="column2">
                    <ul>
                      <li>
                        <h3 className="distric_input">Quận/Huyện</h3>
                        <input
                          type="text"
                          placeholder="Quận/Huyện"
                          maxLength="15"
                          onChange={(e) => setDistrict(e.target.value)}
                        />
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="pw_change">
                  <h2>Thông tin tài khoản</h2>
                  <div className="user_profile_container">
                    <div className="column1">
                      <ul>
                        <li>
                          <h3>Nhập mật khẩu hiện tại</h3>
                          <input type="password" maxLength="20" minLength="6" />
                        </li>
                        <li>
                          <h3>Nhập mật khẩu mới</h3>
                          <input type="password" maxLength="20" minLength="6" />
                        </li>
                        <li>
                          <div className="Update_info">
                            <Link to="">Cập nhật</Link>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="column2">
                      <ul>
                        <li>
                          <h3>Nhập lại mật khẩu mới</h3>
                          <input type="password" />
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
