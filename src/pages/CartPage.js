import React, { useEffect, useState } from "react";
import * as styles from "./cssFolder/cart.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addingNewProductToCart,
  itemInCart,
  recoverItemsInCartEveryRefresh,
} from "../redux/features/cart/cartSlice";
import "react-toastify/dist/ReactToastify.css";
import { FaAngleLeft } from "react-icons/fa";
import { MdRemoveShoppingCart } from "react-icons/md";
import { ToastErrorMessage } from "../components/sharedComponents/ToastMessage";
import Header from "../components/sharedComponents/Header";
import { useHistory } from "react-router";
import ItemInCart from "../components/cartPage/ItemInCart";
import * as API from "../api/index";
import ModalSignUpWrapper from "../components/signUp/ModalSignUpWrapper";
import { goUp } from "../redux/features/post/screenSlice";
const CartPage = () => {
  /////state
  const history = useHistory();
  const dispatch = useDispatch();
  const initialState = {
    customerName: "",
    customerPhone: "",
    email: "",
    address: "",
  };
  const [
    totalQuantityOfItemsInCart,
    setTotalQuantityOfItemsInCart,
  ] = useState();
  const [infoMsgToUser, setInfoMsgToUser] = useState("");
  const [totalPaidMoney, setTotalPaidMoney] = useState();
  const itemsInCartTakenFromLocalStorage = localStorage.getItem("cartItems");
  const [form, setForm] = useState(initialState);
  const itemsInCart = useSelector(itemInCart);
  const [alertMsg, setAlertMsg] = useState();
  const [readyToFetchBackend, setReadyToFetchBackend] = useState(true);
  const imgUrl =
    "https://res.cloudinary.com/dsykf3mo9/image/upload/v1619539188/ProductImage/nitro5amd_ehsufz.jpg";
  ////////////function useEffect
  useEffect(() => {
    _calculateCurrentQuantityInCart();
    _calculateTotalMoney();
  }, [itemsInCart]);
  const [emailFormatIsValid, setEmailFormatIsValid] = useState(true);
  useEffect(() => {
    if (itemsInCartTakenFromLocalStorage != null) {
      dispatch(
        recoverItemsInCartEveryRefresh(
          JSON.parse(itemsInCartTakenFromLocalStorage)
        )
      );
    }
  }, []);
  /////scroll to top of screen
  useEffect(() => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(itemsInCart));
  }, [itemsInCart]);
  useEffect(() => {
    const emailIsValid = validateEmail(form.email);
    if (emailIsValid) {
      setEmailFormatIsValid(true);
    } else {
      setEmailFormatIsValid(false);
    }
  }, [form.email]);
  ////// selft defining function
  const _calculateTotalMoney = () => {
    let totalMoney = 0;
    itemsInCart?.map((item) => {
      totalMoney +=
        parseInt(item.price.split("₫").join("").split(",").join("")) *
        item.quantity;
    });
    setTotalPaidMoney(totalMoney);
  };
  const _calculateCurrentQuantityInCart = () => {
    let totalQuantity = 0;
    itemsInCart?.map((item) => {
      totalQuantity += item.quantity;
    });
    setTotalQuantityOfItemsInCart(totalQuantity);
    localStorage.setItem("quantity", totalQuantity);
  };
  const _handlingFormChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
  const _closeModal = () => {
    localStorage.setItem("cartItems", []);
    dispatch(recoverItemsInCartEveryRefresh([]));
    setInfoMsgToUser("");
  };
  const _confirmToBuy = async () => {
    dispatch(goUp(false));
    if (!alertMsg) {
      let alertToUser = [];
      const emailIsValid = validateEmail(form.email);
      if (!emailIsValid) {
        alertToUser.push("Email không đúng định dạng");
        setEmailFormatIsValid(false);
        setReadyToFetchBackend(false);
      } else {
        setEmailFormatIsValid(true);
      }
      if (form.customerName === " " || form.customerName.trim() === "") {
        alertToUser.push("Không được để trống trường họ và tên");
        setReadyToFetchBackend(false);
      }
      if (form.customerPhone === " " || form.customerPhone.trim() === "") {
        alertToUser.push("Không được để trống số điện thoại");
        setReadyToFetchBackend(false);
      }
      if (form.email === " " || form.email.trim() === "") {
        alertToUser.push("Không được để trống email");
        setReadyToFetchBackend(false);
      }
      if (form.address === " " || form.address.trim() === "") {
        alertToUser.push("Không được để trống địa chỉ");
        setReadyToFetchBackend(false);
      }
      setAlertMsg(alertToUser);
      setTimeout(() => {
        setAlertMsg("");
      }, 6000);

      //////////if theres no form error,  fetch then send data to backend
      if (alertToUser.length === 0) {
        try {
          const response = await API.createNewInvoice({
            invoiceItems: itemsInCart,
            form,
          });
          console.log("response", response);
          setInfoMsgToUser(
            "Đặt hàng thành công, chúng tôi sẽ liên lạc với bạn trong thời gian sớm nhất."
          );
        } catch (error) {
          console.log(error.message);
        }
      }
    }
  };
  const moneyToStr = totalPaidMoney
    ?.toString()
    .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
  /////function for subcomponent
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.cartContainer}>
        <Header />
        {itemsInCart?.length == 0 ? (
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
              {/* a
            a */}
              {/* show item in cart */}
              {itemsInCart?.map((item, index) => {
                return (
                  <ItemInCart imgUrl={imgUrl} itemInfo={item} key={index} />
                );
              })}
              {/* show item in cart */}
              {/* a
            a */}
              <div className={styles.temporaryTotalMoneyArea}>
                <div className={styles.totalItems}>
                  <div>
                    Tạm tính (<span>{totalQuantityOfItemsInCart}</span> sản
                    phẩm):
                  </div>
                  <div>{moneyToStr}₫</div>
                </div>
                <div className={styles.tempMoney}>
                  <div>Tổng tiền:</div>
                  <div>{moneyToStr}₫</div>
                </div>
              </div>
              <div className={styles.userInfo}>
                <div className={styles.title}>Thông tin khách hàng</div>
                <div className={styles.form}>
                  <div className={styles.name_address}>
                    <div className={styles.fillname}>
                      <input
                        type="text"
                        name="customerName"
                        placeholder="Họ và tên"
                        onChange={_handlingFormChange}
                      />
                      {form.customerName.length == 0 ||
                      form.customerName.trim() === "" ? (
                        <span>Vui lòng nhập họ và tên</span>
                      ) : null}
                    </div>
                    <div className={styles.fillname}>
                      <input
                        type="text"
                        name="customerPhone"
                        placeholder="Số điện thoại"
                        onChange={_handlingFormChange}
                      />
                      {form.customerPhone.length == 0 ||
                      form.customerPhone.trim() === "" ? (
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
                    {!emailFormatIsValid ? (
                      <span>Email không đúng định dạng</span>
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
                    {form.address.length == 0 || form.address.trim() === "" ? (
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
                    <div>{moneyToStr}₫</div>
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
        <ModalSignUpWrapper msg={infoMsgToUser} closeModal={_closeModal} />;
      </div>
    </div>
  );
};
// <ToastErrorMessage msg={alertMsg} />
export default CartPage;