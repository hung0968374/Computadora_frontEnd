import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import * as styles from "./cssFolder/blog.module.css";

function Blog() {
  return (
    <div>
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
                    <button className="acc_button">Thay ảnh đại diện</button>
                  </div>
                </li>
                <li>
                  <h3>Họ và tên</h3>
                  <input type="text" placeholder="Họ và tên" />
                </li>
                <li>
                  <div className="Update_info">
                    <div>Cập nhật</div>
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
                  <input type="email" placeholder="email" />
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
                    />
                  </li>
                  <li>
                    <h3>Phường/Xã</h3>
                    <input
                      type="text"
                      placeholder="Phường/Xã"
                      maxLength="20"
                      minLength="4"
                    />
                  </li>
                  <li>
                    <div className="Update_info">
                      <div>Cập nhật</div>
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
                      <input
                        type="password"
                        placeholder="Nhập mật khẩu hiện tại"
                      />
                    </li>
                    <li>
                      <h3>Nhập mật khẩu mới</h3>
                      <input type="password" placeholder="Nhập mật khẩu mới" />
                    </li>
                    <li>
                      <div className="Update_info">
                        <div>Cập nhật</div>
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
                        placeholder="Nhập lại mật khẩu mới"
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
  );
}

export default Blog;
