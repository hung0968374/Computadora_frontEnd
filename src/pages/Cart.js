import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../component/sharedComponents/Header";
import { Wrapper } from "../component/styledComponents/laptopStyled";
import {
  addingItemQuantity,
  deleteAnItemFromCart,
  itemInCart,
  subtractItemQuantity,
} from "../redux/features/cartSlice";
import { ItemStyled } from "../component/styledComponents/CartStyledComponent";
import { ImBin } from "react-icons/im";

export default function Cart() {
  const cartItem = useSelector(itemInCart);
  const dispatch = useDispatch();
  console.log("item in cart", cartItem);
  return (
    <>
      <Header />
      <Wrapper width="44rem" display="block" backgroundColor="whiteSmoke">
        {cartItem &&
          cartItem.map((item, index) => {
            console.log("item in cart", item);
            return (
              <ItemStyled key={index}>
                <div className="cartItem_buyingItemImgArea">
                  <div className="cartItem_imgStyle">
                    <img src={item.imgUrl} alt="" />
                  </div>
                  <div className="cartItem_contentStyle">
                    <div className="cartItem_itemName">{item.productName}</div>
                    <div className="cartItem_salePromotion">
                      <div className="cartItem_promotion">2 khuyến mãi</div>
                      <ul className="cartItem_promotionItems">
                        <li>Chuột không dây</li>
                        <li>Balo Laptop Acer</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="cartItem_buyingItemQuantityArea">
                  <div className="cartItem_priceAndQuantity">
                    <div className="cartItem_price">{item.price}</div>
                    <div className="cartItem_quantity">
                      <div
                        className="cartItem_box"
                        onClick={() =>
                          dispatch(subtractItemQuantity({ id: item.id }))
                        }
                      >
                        -
                      </div>
                      <div className="cartItem_quantityBox">
                        {item.quantity}
                      </div>
                      <div
                        className="cartItem_box"
                        onClick={() =>
                          dispatch(addingItemQuantity({ id: item.id }))
                        }
                      >
                        +
                      </div>
                    </div>
                  </div>
                  <div className="cartItem_discardItem">
                    <ImBin
                      size={30}
                      className="cartItem_discardBin"
                      onClick={() =>
                        dispatch(deleteAnItemFromCart({ id: item.id }))
                      }
                    />
                  </div>
                </div>
              </ItemStyled>
            );
          })}
      </Wrapper>
    </>
  );
}
