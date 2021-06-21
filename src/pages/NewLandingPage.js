import React from "react";
import "../components/NewLandingPage/NewLandingPage.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
export default function NewLandingPage() {
  const location = useLocation();
  const history = useHistory();
  const [token, setToken] = useState("");
  useEffect(() => {
    document.title = "Computadora";
  }, []);

  const link_style = {
    color: "#1B8FA8",
  };
  const link_style1 = {
    color: "#68CBE1",
  };
  const handleLapTopclick = () => {
    history.push("/laptop");
  };

  useEffect(() => {
    setToken(localStorage.getItem("userToken"));
  }, [location]);

  return (
    <div className="NewLandingPage">
      <div className="wrapper_NewLandingPage">
        <div className="wrapper_left_newLD">
          <img
            src="https://images.pexels.com/photos/5483070/pexels-photo-5483070.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt=""
            className="img_left"
          />
        </div>
        <div className="wrapper_right_newLD">
          <div className="mainstory">
            <div className="top_mainstory">
              <div className="mainstory_navbar">
                <ul>
                  <li>
                    <Link style={link_style} to="">
                      team phát triển
                    </Link>
                  </li>
                  {token ? null : (
                    <li>
                      <Link style={link_style} to="/signIn">
                        Đăng nhập
                      </Link>
                    </li>
                  )}

                  <li>
                    <Link style={link_style} to="/laptop">
                      Sản phẩm
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mainstory_socialIcon">
                <img
                  src="https://image.flaticon.com/icons/png/512/747/747957.png"
                  alt=""
                />
                <img
                  src="https://image.flaticon.com/icons/png/512/747/747976.png"
                  alt=""
                />
              </div>
            </div>
            <div className="bottom_mainstory">
              <h1>Computadora</h1>
              <h4>Nơi trải nghiệm khách hàng được nâng tầm</h4>
              <div className="introduction">
                <div className="intro_left">
                  <div className="text_intro">
                    <p>
                      Computadora được thành lập vào năm 2021 là kết quả của em
                      tuy web còn sơ sài, nhiều vấn đề còn tồn đọng nhưng mong
                      anh/chị có thể giơ cao đánh khẽ, em chỉ làm tập chung vào
                      phần laptop blog thông tin người dùng nên các phần như
                      footer sẽ không hoạt động đúng 100%.
                    </p>
                  </div>
                  <p className="readmore"> Đọc thêm </p>
                </div>
                <div className="intro_right">
                  <ul>
                    <li>
                      <Link style={link_style1} to="/accessories">
                        Linh kiện
                      </Link>
                    </li>
                    <li className="first_one">
                      <Link style={link_style1} to="/laptop">
                        Laptop
                      </Link>
                    </li>
                    <li className="first_one">
                      <Link style={link_style1} to="/blog">
                        Blog
                      </Link>
                    </li>
                    <li className="first_one">
                      <Link style={link_style1} to="">
                        PC
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="footer_mainstory">
                <img
                  src="https://image.flaticon.com/icons/png/512/2004/2004580.png"
                  alt=""
                  className="footer_mainstory_img1"
                />
                <img
                  src=" https://image.flaticon.com/icons/png/512/689/689374.png"
                  alt=""
                  className="footer_mainstory_img2"
                />
                <img
                  src="https://image.flaticon.com/icons/png/512/689/689396.png"
                  alt=""
                  className="footer_mainstory_img3"
                  onClick={handleLapTopclick}
                />
                <img
                  src="https://image.flaticon.com/icons/png/128/681/681662.png"
                  alt=""
                  className="footer_mainstory_img4"
                />
                <div className="card"></div>
                <div className="card1"></div>
                <div className="card2"></div>
                <div className="card3"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="imagestory">
          <div className="top_img">
            <img
              src="https://images.unsplash.com/photo-1593679721739-a828424ab162?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt=""
              className="top_img_hero"
            />
          </div>
          <div className="bottom_img">
            <img
              src="https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt=""
              className="bottom_img_hero"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
