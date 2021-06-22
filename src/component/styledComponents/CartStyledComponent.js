import styled from "styled-components";

export const ItemStyled = styled.div`
  width: 100%;
  height: 9rem;
  border-bottom: 1px solid #888888;
  display: flex;

  & .cartItem_buyingItemImgArea {
    flex: 7;
    display: flex;
  }
  & .cartItem_imgStyle {
    flex: 4;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  & .cartItem_imgStyle img {
    width: 90%;
    height: 90%;
    object-fit: contain;
  }
  & .cartItem_contentStyle {
    flex: 6;
  }
  & .cartItem_itemName {
    width: 90%;
    height: 38%;
    padding: 7% 5% 5% 5%;
    display: flex;
    word-break: break-all;
    font-size: 16px;
    color: #333;
    font-weight: 700;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  & .cartItem_salePromotion {
    width: 100%;
    height: 50%;
    display: flex;
  }
  & .cartItem_promotion {
    flex: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgb(10, 98, 214);
    margin-bottom: 18px;
  }
  & .cartItem_promotionItems {
    flex: 5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: #202020;
    margin-bottom: 18px;
  }

  & .cartItem_buyingItemQuantityArea {
    flex: 3;
    display: flex;
  }
  & .cartItem_priceAndQuantity {
    flex: 6;
  }
  & .cartItem_price {
    width: 100%;
    height: 40%;
    padding: 10% 0% 0% 0%;
    display: flex;
    justify-content: flex-end;
    font-size: 1.4rem;
    color: red;
    font-weight: 520;
  }
  & .cartItem_quantity {
    width: 100%;
    height: 40%;
    display: flex;
    padding: 0% 0 10% 0;
    justify-content: flex-end;
    align-items: flex-end;
  }
  & .cartItem_box {
    border: 1px solid #888888;
    width: 25%;
    height: 60%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    color: rgb(10, 98, 214);
  }
  & .cartItem_box:hover {
    border: 1px solid rgb(10, 98, 214);
    box-shadow: 0 0 4px rgb(10, 98, 214);
  }
  & .cartItem_quantityBox {
    border: 1px solid #888888;
    width: 30%;
    height: 60%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
  }
  & .cartItem_quantityBox :hover {
    border: 1px solid rgb(10, 98, 214);
    box-shadow: 0 0 4px rgb(10, 98, 214);
  }
  & .cartItem_discardItem {
    flex: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgb(192, 5, 5);
  }
  & .cartItem_discardBin {
    transition: 200ms ease;
  }
  & .cartItem_discardBin:hover {
    transform: scale(1.1);
  }
`;
