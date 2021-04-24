import React from "react";
import { Link } from "react-router-dom";
import * as styles from "./signUP.module.css";

export default function SignUP() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <div className={styles.title}>
            <h2>Đăng ký tài khoản mới</h2>
          </div>
        </div>

        <div className={styles.main}>
          <div className={styles.logo}>
            <img src="/images/laptop.svg" />
          </div>
          <div className={styles.input_container}>
            <ul>
              <li>
                <input maxlength="15" type="text" placeholder="Tên đăng nhập" />
              </li>
              <li>
                <input
                  maxlength="12"
                  minlength="6"
                  class="password"
                  type="password"
                  placeholder="Mật khẩu"
                />
              </li>
              <li>
                <input
                  maxlength="12"
                  minlength="6"
                  class="password"
                  type="password"
                  placeholder="Xác nhận mật khẩu"
                />
              </li>
              <li className={styles.more_func}>
                <div className={styles.new_acc}>
                  <p>
                    <Link to="/signIn">Đã có tài khoản</Link>
                  </p>
                  <p className={styles.forgot_pw}>
                    <Link to="/PWRecover">Quên mật khẩu</Link>
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.footer}>
          <div className={styles.confirm}>
            <Link className={styles.confirmLink}>Đăng ký</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
