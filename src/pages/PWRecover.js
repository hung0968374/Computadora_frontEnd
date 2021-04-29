import React from "react";
import { Link } from "react-router-dom";
import * as styles from "./cssFolder/PWrecover.module.css";

export default function PWRecover() {
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
              <input maxlength="15" type="text" placeholder="Tên đăng nhập" />
              <input
                class="password"
                type="email"
                placeholder="Email xác thực"
              />
              <input
                class="password"
                type="password"
                placeholder="Mật khẩu mới"
              />
            </div>
            <div className={styles.more_func}>
              <div className={styles.new_acc}>
                <Link to="/signIn">Đã có tài khoản?</Link>
              </div>
              <div className={styles.forgot_pw}>
                <Link to="/signUp">Chưa có tài khoản?</Link>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footer}>
          <div className={styles.confirm}>Xác nhận</div>
        </div>
      </div>
    </div>
  );
}
