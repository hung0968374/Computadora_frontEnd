import React from "react";
import { Link } from "react-router-dom";
import * as styles from "./signIN.module.css";
function signIN() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.header}>
            <div className={styles.title}>
              <h2>Chào mừng bạn quay lại</h2>
            </div>
          </div>

          <div className={styles.main}>
            <div className={styles.logo}>
              <img src="/images/laptop.svg" />
            </div>
            <div className={styles.input_container}>
              <ul>
                <li>
                  <input
                    maxlength="15"
                    type="text"
                    placeholder="Tên đăng nhập"
                  />
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
                <li className={styles.more_func}>
                  <div className={styles.new_acc}>
                    <p>
                      <Link to="/signUp">Chưa có tài khoản ?</Link>
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
              <Link className={styles.confirmLink}>Đăng nhập</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default signIN;
