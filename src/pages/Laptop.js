import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  isFetchingLaptopDatasByPage,
  laptopItemsFromRdx,
} from "../redux/features/LaptopSlice";
import Header from "../component/sharedComponents/Header";
import { Button, Wrapper } from "../component/styledComponents/laptopStyled";
import { addingNewProductToCart } from "../redux/features/cartSlice";
import { Link } from "react-router-dom";
import loadingImg from "../assets/Spinner.svg";
import { ToastInfoMsg } from "../component/sharedComponents/ToastComponent";

export default function Laptop() {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [openInfoMsg, setOpenInfoMsg] = useState(false);
  const lapItems = useSelector(laptopItemsFromRdx);

  console.log("lap items", lapItems);
  useEffect(() => {
    dispatch(isFetchingLaptopDatasByPage(currentPage));
  }, [currentPage, dispatch]);
  /////////// self define function
  const _addingThisItemToCart = (
    itemId,
    itemTitle,
    quantity,
    itemPrice,
    itemThumbnail
  ) => {
    dispatch(
      addingNewProductToCart({
        id: itemId,
        productName: itemTitle,
        quantity,
        price: itemPrice,
        imgUrl: itemThumbnail,
      })
    );
  };
  console.log("open", openInfoMsg);
  return (
    <>
      <Header />
      <Wrapper>
        {lapItems.arrayOfLaptopItems.map((item, index) => {
          const title = item.title.trim();
          const price = item.price.split("₫").join("");
          return (
            <div className="laptop_itemContainer" key={index}>
              <Link
                to={`/laptop/${item._id} `}
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
                        item.imgs[0]
                      );
                      if (openInfoMsg === true) {
                        setOpenInfoMsg(false);
                        setTimeout(() => {
                          setOpenInfoMsg(true);
                        }, 100);
                      } else {
                        setOpenInfoMsg(true);
                      }
                    }}
                  >
                    Thêm vào giỏ hàng
                  </div>
                </div>
                <div>
                  <span>Sửa</span>
                  <span>Xóa</span>
                </div>
              </div>
            </div>
          );
        })}
      </Wrapper>
      <Button onClick={() => setCurrentPage(currentPage + 1)}>
        {lapItems.status === "loading" ? (
          <>
            <img src={loadingImg} alt="" />
          </>
        ) : (
          <>fetch more laptop items</>
        )}
      </Button>

      {openInfoMsg && <ToastInfoMsg resetHandleVal={setOpenInfoMsg} />}
    </>
  );
}
