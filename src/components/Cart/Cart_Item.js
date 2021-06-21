import React from "react";
import { useDispatch } from "react-redux";
import {
  decrementQuantity,
  deleteOneFromCart,
  incrementQuantity,
} from "../../redux/AddToCart/AddtoCartSlice";
import "../Cart/Cart_item.css";

export default function Cart_Item({ product }) {
  const dispatch = useDispatch();
  return (
    <div className="Cart_Item_">
      <div className="Cart_img">
        <img src={product.imgs[0]} alt="{product.imgs[0]}" />
      </div>
      <div className="Cart_info">
        <ul>
          <li>
            Tên:
            <p>{product.name}</p>
          </li>
          <li>
            Card đồ hoạ :<p>{product.card}</p>
          </li>
          <li>
            Vi xử lý:
            <p>{product.chip}</p>
          </li>
          <li>
            Giá Tiền:
            <p className="boldText">{product.price}</p>
          </li>
          <li>
            <button
              className="minus"
              onClick={() => dispatch(decrementQuantity(product.name))}
            >
              -
            </button>
            <div className="amount">
              <p>{product.quantity}</p>
            </div>
            <button
              className="add"
              onClick={() => dispatch(incrementQuantity(product.name))}
            >
              +
            </button>
            <button
              className="delete_"
              onClick={() => dispatch(deleteOneFromCart(product.name))}
            >
              <img
                src="https://image.flaticon.com/icons/png/512/1214/1214428.png"
                alt=""
              />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
