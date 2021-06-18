import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { countVal, incrementSaga } from "../redux/saga/counter/counterSlice";
import styled from "styled-components";
import {
  fetchingItems,
  laptopItemsFromRdx,
} from "../redux/saga/laptopItems/laptopItemsSlice";
import { useState } from "react";

const ContainerDiv = styled.div`
  margin: auto;
  background-color: greenyellow;
  height: 20rem;
  width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 30px;
  color: red;

  & .incrsCountVal {
    margin-top: 20px;
    padding: 10px;
    color: black;
  }
`;

function TestSaga() {
  const dispatch = useDispatch();
  const countValue = useSelector(countVal);
  const laptopItems = useSelector(laptopItemsFromRdx);
  const [laptopPage, setLaptopPage] = useState(1);
  console.log("lapopItem taken from redux", laptopItems);
  return (
    <ContainerDiv>
      {countValue}
      <button
        className="incrsCountVal"
        onClick={() => dispatch(incrementSaga(5))}
      >
        increase count
      </button>
      <br />
      <button
        className="incrsCountVal"
        onClick={() => {
          dispatch(fetchingItems(laptopPage));
          setLaptopPage(laptopPage + 1);
        }}
      >
        fetch {laptopPage} page for additional 24 laptop items
        <br />
      </button>
      {laptopItems.status === "loading" && <>loading</>}
    </ContainerDiv>
  );
}

export default TestSaga;
