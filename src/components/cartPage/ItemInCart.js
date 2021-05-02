import React, { useState } from "react";
import * as styles from "./itemInCart.module.css";
import { ImBin } from "react-icons/im";
import { useDispatch } from "react-redux";
import {
  addingItemQuantity,
  subtractItemQuantity,
  deleteAnItemFromCart,
} from "../../redux/features/cart/cartSlice";
import YesNoModal from "../sharedComponents/YesNoModal";
export default function ItemInCart({ imgUrl, itemInfo }) {
  const dispatch = useDispatch();
  const [showYesNoModal, setShowYesNoModal] = useState(false);
  const _subtractItemQuantity = () => {
    dispatch(subtractItemQuantity({ id: itemInfo.id }));
  };
  const _increseItemQuantity = () => {
    dispatch(addingItemQuantity({ id: itemInfo.id }));
  };
  const _discardItemFromCart = () => {
    dispatch(deleteAnItemFromCart({ id: itemInfo.id }));
    // setShowYesNoModal(true);
  };
  console.log("open modal", showYesNoModal);
  return (
    <>
      <div className={styles.buyingItemContainer}>
        <div className={styles.buyingItemImgArea}>
          <div className={styles.imgStyle}>
            <img src={itemInfo.imgUrl} alt="" />
          </div>
          <div className={styles.contentStyle}>
            <div className={styles.itemName}>{itemInfo.productName}</div>
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
            <div className={styles.price}>{itemInfo.price}</div>
            <div className={styles.quantity}>
              <div className={styles.box} onClick={_subtractItemQuantity}>
                -
              </div>
              <div className={styles.quantityBox}>{itemInfo.quantity}</div>
              <div className={styles.box} onClick={_increseItemQuantity}>
                +
              </div>
            </div>
          </div>
          <div className={styles.discardItem}>
            <ImBin
              size={30}
              className={styles.discardBin}
              onClick={_discardItemFromCart}
            />
          </div>
        </div>
        {/* {showYesNoModal ? (
          <div className={styles.modal_bg}>
            <YesNoModal />
          </div>
        ) : null} */}
      </div>
    </>
  );
}
