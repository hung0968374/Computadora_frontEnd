import React, { useEffect, useState } from "react";
import * as styles from "./cssFolder/cart.module.css";
import { useDispatch, useSelector } from "react-redux";
import { itemInCart } from "../redux/features/cart/cartSlice";
import "react-toastify/dist/ReactToastify.css";
import { FaAngleLeft } from "react-icons/fa";
import { ImBin } from "react-icons/im";
import { MdRemoveShoppingCart } from "react-icons/md";
import {
  ToastBaseMessage,
  ToastErrorMessage,
  ToastInfoMessage,
  ToastWarnMessage,
} from "../components/sharedComponents/ToastMessage";
import Header from "../components/sharedComponents/Header";
import { useHistory } from "react-router";
const CartPage = () => {
  /////state
  const history = useHistory();
  const initialState = {
    username: " ",
    userPhone: " ",
    email: " ",
    address: " ",
  };
  const [form, setForm] = useState(initialState);
  const itemsInCart = useSelector(itemInCart);
  const [alertMsg, setAlertMsg] = useState();
  const imgUrl =
    "https://res.cloudinary.com/dsykf3mo9/image/upload/v1619539188/ProductImage/nitro5amd_ehsufz.jpg";
  ////////////function
  useEffect(() => {
    console.log("item in cart", itemsInCart);
  }, [itemsInCart]);
  const _handlingFormChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
  const _confirmToBuy = () => {
    if (!alertMsg) {
      let alertToUser = [];
      const emailIsValid = validateEmail(form.email);
      if (!emailIsValid) {
        alertToUser.push("Email không đúng định dạng");
      }
      if (form.username === " " || form.username.trim() === "") {
        alertToUser.push("Không được để trống trường họ và tên");
      }
      if (form.userPhone === " " || form.userPhone.trim() === "") {
        alertToUser.push("Không được để trống số điện thoại");
      }
      if (form.email === " " || form.email.trim() === "") {
        alertToUser.push("Không được để trống email");
      }
      if (form.address === " " || form.address.trim() === "") {
        alertToUser.push("Không được để trống địa chỉ");
      }
      setAlertMsg(alertToUser);
      setTimeout(() => {
        setAlertMsg("");
      }, 6000);
    }
  };
  console.log(alertMsg);
  return (
    <div className={styles.cartContainer}>
      <Header />
      {itemsInCart.length == 0 ? (
        <>
          <div className={styles.blankItemContainer}>
            <section className={styles.cartEmptyArea}>
              <div className={styles.wrapper}>
                <div>
                  <MdRemoveShoppingCart className={styles.cartEmptyIcon} />
                </div>
                <div>Giỏ hàng trống</div>
                <div
                  onClick={() => {
                    history.push("/laptop");
                  }}
                >
                  <FaAngleLeft />
                  Tiếp tục mua sắm
                </div>
              </div>
            </section>
          </div>
        </>
      ) : (
        <>
          <div className={styles.subNav}>
            <div>
              <FaAngleLeft size={20} />
              Mua thêm sản phẩm khác
            </div>
            <div>Giỏ hàng của bạn</div>
          </div>
          <div className={styles.contentContainer}>
            <div className={styles.buyingItemContainer}>
              <div className={styles.buyingItemImgArea}>
                <div className={styles.imgStyle}>
                  <img src={imgUrl} alt="" />
                </div>
                <div className={styles.contentStyle}>
                  <div className={styles.itemName}>
                    fasddddddddfffffffffffffffffffffffffffffffasddddddddffffffffffffffffffffffffffffff
                  </div>
                  <div className={styles.salePromotion}>
                    <div className={styles.promotion}>2 khuyến mãi</div>
                    <ul className={styles.promotionItems}>
                      <li>Chuột không dây</li>
                      <li>Balo Laptop Acer</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className={styles.buyingItemQuantityArea}>
                <div className={styles.priceAndQuantity}>
                  <div className={styles.price}>12.990.990d</div>
                  <div className={styles.quantity}>
                    <div className={styles.box}>-</div>
                    <div className={styles.quantityBox}>3</div>
                    <div className={styles.box}>+</div>
                  </div>
                </div>
                <div className={styles.discardItem}>
                  <ImBin size={30} />
                </div>
              </div>
            </div>

            <div className={styles.buyingItemContainer}>
              <div className={styles.buyingItemImgArea}>
                <div className={styles.imgStyle}>
                  <img src={imgUrl} alt="" />
                </div>
                <div className={styles.contentStyle}>
                  <div className={styles.itemName}>
                    fasddddddddfffffffffffffffffffffffffffffffasddddddddffffffffffffffffffffffffffffff
                  </div>
                  <div className={styles.salePromotion}>
                    <div className={styles.promotion}>2 khuyến mãi</div>
                    <ul className={styles.promotionItems}>
                      <li>Chuột không dây</li>
                      <li>Balo Laptop Acer</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className={styles.buyingItemQuantityArea}>
                <div className={styles.priceAndQuantity}>
                  <div className={styles.price}>12.990.990d</div>
                  <div className={styles.quantity}>
                    <div className={styles.box}>-</div>
                    <div className={styles.quantityBox}>3</div>
                    <div className={styles.box}>+</div>
                  </div>
                </div>
                <div className={styles.discardItem}>
                  <ImBin size={30} />
                </div>
              </div>
            </div>

            <div className={styles.temporaryTotalMoneyArea}>
              <div className={styles.totalItems}>
                <div>Tạm tính (6 sản phẩm):</div>
                <div>123.123.123d</div>
              </div>
              <div className={styles.tempMoney}>
                <div>Tổng tiền:</div>
                <div>1123</div>
              </div>
            </div>
            <div className={styles.userInfo}>
              <div className={styles.title}>Thông tin khách hàng</div>
              <div className={styles.form}>
                <div className={styles.name_address}>
                  <div className={styles.fillname}>
                    <input
                      type="text"
                      name="username"
                      placeholder="Họ và tên"
                      onChange={_handlingFormChange}
                    />
                    {form.username.length == 0 ? (
                      <span>Vui lòng nhập họ và tên</span>
                    ) : null}
                  </div>
                  <div className={styles.fillname}>
                    <input
                      type="text"
                      name="userPhone"
                      placeholder="Số điện thoại"
                      onChange={_handlingFormChange}
                    />
                    {form.userPhone.length == 0 ? (
                      <span>Vui lòng nhập số điện thoại</span>
                    ) : null}
                  </div>
                </div>
                <div className={styles.emailContainer}>
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    className={styles.email}
                    onChange={_handlingFormChange}
                  ></input>
                  {form.email.length == 0 ? (
                    <span>Vui lòng nhập gmail</span>
                  ) : null}
                </div>
                <div className={styles.addressContainer}>
                  <textarea
                    name="address"
                    id=""
                    cols="80"
                    rows="5"
                    placeholder="Địa chỉ"
                    onChange={_handlingFormChange}
                  ></textarea>
                  {form.address.length == 0 ? (
                    <span>Vui lòng nhập dia chi</span>
                  ) : null}
                </div>
                <div className={styles.address}></div>
              </div>
            </div>
            {/* tong tien */}
            <div className={styles.finalTotal}>
              <div className={styles.totalMoney}>
                <div className={styles.money}>
                  <div>Tong tien</div>
                  <div>12d</div>
                </div>
                <div className={styles.bttn} onClick={_confirmToBuy}>
                  Đặt hàng
                </div>
              </div>
            </div>
          </div>
          <div className={styles.footer}></div>
        </>
      )}
      {alertMsg?.length > 0 ? (
        <>
          {alertMsg.map((msg, index) => {
            return <ToastErrorMessage msg={msg} key={index} />;
          })}
        </>
      ) : null}
    </div>
  );
};
// <ToastErrorMessage msg={alertMsg} />
export default CartPage;
