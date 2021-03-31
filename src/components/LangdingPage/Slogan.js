import React from "react";
import "./slogan.css";
const Slogan = () => {
  return (
    <div className="slogan">
      <div className="hero-content">
        <h1>COMPUTADORA</h1>
        <p className="slog">
          Với chúng tôi trải nghiệm của khách hàng là cốt lõi
        </p>
        <div className="auth">
          <p className="sign-in" href="/signIN.html">
            Đăng nhập
          </p>
          <p className="sign-up" href="/signUp.html">
            Đăng ký
          </p>
        </div>
      </div>
    </div>
  );
};

export default Slogan;
