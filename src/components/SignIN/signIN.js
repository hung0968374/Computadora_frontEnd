import React from "react";
import { Link } from "react-router-dom";
import styles from "./signIN.module.css";

export default function signIN() {
  return (
    <div className= {styles.wrapper}>
        <h1>
            Chào mừng bạn quay lại
        </h1>

        <div className={styles.main_section}>
            <div className= {styles.logo}>
                <img src="/images/laptop.svg" alt=""/>
            </div>

            <div className={styles.container}>
                <ul>
                    <li>
                        <input maxlength="15" type="text" placeholder="Tên đăng nhập" />
                    </li>

                    <li>
                        <input maxlength="12" minlength="6" class="password" type="password" placeholder="Mật khẩu"/>
                    </li>
                    <li >
                            <p class="acc_check">
                                <Link to = "/signUP"> Chưa có tài khoản</Link>
                            </p>
                            <p class="forgot_password">
                                <Link to = "/signUP"> Quên mật khẩu</Link>
                            </p>

                    </li>
                </ul>
            </div>
        </div>

    </div>
  );
}

