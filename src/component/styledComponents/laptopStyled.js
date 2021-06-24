import styled from "styled-components";

export const CenterEl = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: ${(props) => props.width || "75rem"};
  height: ${(props) => props.height || "auto"};
  background-color: ${(props) => props.backgroundColor || "whiteSmoke"};
  margin: auto;
  display: ${(props) => props.display || "flex"};
  flex-wrap: wrap;
  cursor: pointer;
  margin-top: 5rem;

  & .laptop_itemContainer {
    width: 25%;
    height: 20em;
    box-sizing: border-box;
    border: 1px solid ${({ theme }) => theme.grey};
    background-color: white;
    transition: 0.8s;
    position: relative;

    &:hover {
      border-bottom: none;

      & .laptopItem_onlyRevealWhenHover {
        height: 100px;
        overflow: hidden;
        opacity: 1;

        & * {
          color: #313131;
        }
      }
    }
  }

  & .laptopItem_outerWrapper {
    width: 92%;
    height: 92%;
    margin: auto;
    margin-top: 4%;
  }
  & .laptopItem_imgArea {
    width: 100%;
    height: 75%;

    & img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  & .laptopItem_contentArea {
    width: 100%;
    height: 25%;
    display: flex;
    flex-direction: column;
  }
  & .laptopItem_itemName {
    width: 100%;
    height: 40%;
    text-overflow: ellipsis;
    overflow: hidden !important;
    white-space: nowrap;
    font-size: 1.3rem;
    font-weight: 550;
  }
  & .laptopItem_itemPrice {
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: row;
  }
  & .laptopItem_priceText {
    font-size: 20px;
    font-weight: 550;
  }
  & .laptopItem_priceInNumber {
    font-size: 20px;
    color: red;
    margin-left: 20px;
  }

  & .laptopItem_onlyRevealWhenHover {
    box-sizing: border-box;
    width: 100%;
    height: 0px;
    background-color: ${({ theme }) => theme.white};
    background-color: #d6d4d4;
    position: absolute;
    top: calc(20em - 2px);
    transition: 0.5s ease;
    z-index: 999;
    overflow: hidden;
    border-left: 0px solid ${({ theme }) => theme.grey};
    border-right: 0px solid ${({ theme }) => theme.grey};
    border-bottom: 0px solid ${({ theme }) => theme.grey};
    opacity: 0.2;
    & * {
      color: transparent;
    }
    & div:nth-child(1) {
      width: 100%;
      height: 50%;
      display: flex;
      align-items: center;
      justify-content: center;

      & div {
        width: 75%;
        height: 75%;
        margin: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        border-radius: 5px;
        border: 1px solid ${({ theme }) => theme.gray};
        transition: 0.5s ease;

        &:hover {
          background-color: ${({ theme }) => theme.green};
        }
      }
    }

    & div:nth-child(2) {
      width: 50%;
      margin: auto;
      height: 50%;
      display: flex;
      align-items: center;
      justify-content: space-around;
      box-sizing: border-box;

      & span {
        border: 1px solid ${({ theme }) => theme.gray};
        padding: 5px 10px;
        border-radius: 5px;
        transition: 0.5s ease;

        &:hover {
          background-color: ${({ theme }) => theme.green};
        }
      }
    }
  }
`;

export const Button = styled(CenterEl)`
  width: 250px;
  margin: 5rem auto;
  height: 50px;
  background-color: ${({ theme }) => theme.green};
  background-color: white;
  border: 2px solid ${({ theme }) => theme.green};
  border-radius: 10px;
  box-sizing: border-box;
  transition: 0.5s;

  &:hover {
    background-color: ${({ theme }) => theme.green};
  }
  img {
    width: 50px;
    height: 100%;
    object-fit: contain;
  }
`;
