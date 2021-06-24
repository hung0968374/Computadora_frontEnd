import React from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { removeItem } from "../../redux/features/LaptopSlice";

export default function LapItemProps({
  item,
  _addingThisItemToCart,
  _setOpenInfoMsg,
}) {
  const title = item.title.trim();
  const price = item.price.split("₫").join("");
  const history = useHistory();
  const dispatch = useDispatch();
  console.log("rerendering lapitemProp");
  return (
    <div className="laptop_itemContainer" key={item._id}>
      <Link
        to={`/laptop/item/${item._id} `}
        className="laptopItem_outerWrapper"
      >
        <div className="laptopItem_imgArea">
          <img src={item.imgs[0]} alt="" />
        </div>
        <div className="laptopItem_contentArea">
          <div className="laptopItem_itemName">{title}</div>
          <div className="laptopItem_itemPrice">
            <div className="laptopItem_priceText"> Giá: </div>
            <div className="laptopItem_priceInNumber">{price}₫</div>
          </div>
        </div>
      </Link>
      <div className="laptopItem_onlyRevealWhenHover">
        <div>
          <div
            onClick={() => {
              _addingThisItemToCart(
                item._id,
                item.title,
                1,
                item.price,
                item.imgs[0],
                item
              );
              _setOpenInfoMsg();
            }}
          >
            Thêm vào giỏ hàng
          </div>
        </div>
        <div>
          <span
            onClick={() => {
              history.push("/ChangeLapInfo");
            }}
          >
            Sửa
          </span>
          <span
            onClick={() => {
              dispatch(removeItem(item._id));
            }}
          >
            Xóa
          </span>
        </div>
      </div>
    </div>
  );
}
export const MemoizedLapItem = React.memo(LapItemProps);
