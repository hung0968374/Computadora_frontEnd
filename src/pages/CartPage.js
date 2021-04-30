import React, { useEffect } from "react";
import * as styles from "./cssFolder/cart.module.css";
import { useDispatch, useSelector } from "react-redux";
import { itemInCart } from "../redux/features/cart/cartSlice";
import "react-toastify/dist/ReactToastify.css";
import {
  ToastBaseMessage,
  ToastErrorMessage,
  ToastInfoMessage,
  ToastWarnMessage,
} from "../components/sharedComponents/ToastMessage";
const CartPage = () => {
  const itemsInCart = useSelector(itemInCart);
  useEffect(() => {
    console.log("item in cart", itemsInCart);
  }, [itemsInCart]);
  return (
    <div>
      asfdasd
      <div>
        {/* <ToastBaseMessage /> */}
        <ToastErrorMessage msg={"ah anh oi dit em di"} />
        {/* <ToastInfoMessage /> */}
        {/* <ToastWarnMessage /> */}
      </div>
    </div>
  );
};

export default CartPage;
