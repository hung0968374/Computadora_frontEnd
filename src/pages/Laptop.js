import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  isFetchingLaptopDatasByPage,
  laptopItemsFromRdx,
} from "../redux/features/LaptopSlice";
import Header from "../component/sharedComponents/Header";
import { Wrapper } from "../component/styledComponents/laptopStyled";
import { addingNewProductToCart } from "../redux/features/cartSlice";
import { MemoizedToast } from "../component/sharedComponents/ToastComponent";
import { MemoizedGetMoreItemBtn } from "../component/laptop/GetMoreItemBttn";
import LapItemProps, {
  MemoizedLapItem,
} from "../component/laptop/LapItemProps";
import { createSelector } from "reselect";
import { useCallback } from "react";

export default function Laptop() {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [openInfoMsg, setOpenInfoMsg] = useState(false);
  const [counter, setCounter] = useState(0);
  const lapItems = useSelector(laptopItemsFromRdx);
  const shopItemsSelector = (state) => state.arrayOfLaptopItems;
  ///test reselect
  const itemsSelected = createSelector(shopItemsSelector, (items) => items);
  const items = itemsSelected(lapItems);

  // console.log("item selected", items);
  useEffect(() => {
    dispatch(isFetchingLaptopDatasByPage(currentPage));
  }, [currentPage, dispatch]);
  /////////// self define function

  const _addingThisItemToCart = useCallback(
    (itemId, itemTitle, quantity, itemPrice, itemThumbnail) => {
      dispatch(
        addingNewProductToCart({
          id: itemId,
          productName: itemTitle,
          quantity,
          price: itemPrice,
          imgUrl: itemThumbnail,
        })
      );
    },
    [dispatch]
  );

  const _setOpenInfoMsg = useCallback(() => {
    if (openInfoMsg === true) {
      setOpenInfoMsg(false);
      setTimeout(() => {
        setOpenInfoMsg(true);
      }, 100);
    } else {
      setOpenInfoMsg(true);
    }
  }, [openInfoMsg]);

  const _setOpenInfoMsgWithoutCallback = () => {
    if (openInfoMsg === true) {
      setOpenInfoMsg(false);
      setTimeout(() => {
        setOpenInfoMsg(true);
      }, 100);
    } else {
      setOpenInfoMsg(true);
    }
  };

  console.log("open info msg", openInfoMsg);
  console.log("lap item", lapItems);
  return (
    <>
      <Header />
      <Wrapper>
        <div onClick={() => setCounter(counter + 1)}>counter: {counter}</div>
        {/* {lapItems.arrayOfLaptopItems.map((item, index) => { */}
        {items.map((item, index) => {
          return (
            <MemoizedLapItem
              item={item}
              _addingThisItemToCart={_addingThisItemToCart}
              _setOpenInfoMsg={_setOpenInfoMsg}
              key={index}
            />
          );
        })}
      </Wrapper>

      <MemoizedGetMoreItemBtn
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        lapItems={lapItems}
      />
      {openInfoMsg && <MemoizedToast resetHandleVal={setOpenInfoMsg} />}
    </>
  );
}
