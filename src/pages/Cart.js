import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "../components/Cart/Cart.css";
import Cart_Item from "../components/Cart/Cart_Item";
import MoneyHaveToPay from "../components/Cart/MoneyHaveToPay";
import Header from "../components/sharedComponents/Header";
import { useHistory } from "react-router-dom";
function Cart() {
  const history = useHistory();
  const [inventory, setInventory] = useState([]);
  const cart = useSelector((state) => state.AddToCart_.inventory);

  useEffect(() => {
    setInventory(cart);
  }, [cart]);

  const handleShopping = () => {
    history.push("/laptop");
  };

  return (
    <div className="cart_">
      <Header />
      {cart.length === 0 ? (
        <div className="cart_wrapper">
          <div className="logo_and_name">
            <img src="/images/laptop.svg" alt="Computadora" />
            <p>Computadora / Giỏ hàng</p>
          </div>
          <div className="no_item_">
            <img
              src="https://image.flaticon.com/icons/png/512/34/34568.png"
              alt=""
            />
            <p>Bạn chưa có mặt hàng nào trong giỏ </p>
            <button onClick={handleShopping}> Quay lại mua sắm </button>
          </div>
        </div>
      ) : (
        <div className="cart_wrapper">
          <div className="logo_and_name">
            <img src="/images/laptop.svg" alt="Computadora" />
            <p>Computadora / Giỏ hàng</p>
          </div>
          <div className="bill">
            <div className="Cart_Item">
              {cart?.map((product, index) => {
                return <Cart_Item key={index} product={product} />;
              })}
            </div>
            <div className="IntoMoney">
              <MoneyHaveToPay />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
