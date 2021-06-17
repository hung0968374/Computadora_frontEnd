import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity:1
  }
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: ${(props) => (props.turnToDark ? "black" : "red")};
  background-color: #33ff00;
  padding: 80px;
  animation: ${rotate} 1s ease;

  & button {
    color: red;
  }
  &:hover {
    & button {
      color: blue;
    }
  }
`;
const Wrapper = styled.section`
  width: 50em;
  height: 40em;
  margin: auto;

  flex-direction: column;
  background-color: whitesmoke;
  padding: 50px;
  box-sizing: border-box !important;
`;

const SubstitubeTitle = styled(Title)`
  background-color: #710080;
`;

const Input = styled.input`
  height: 50px;
  width: 200px;
  box-sizing: border-box;
  padding: 10px;
  font-size: 16px;
  margin: 20px 0px 20px 0px;
  &:focus {
    border: 2px solid blue;
  }
`;
const Detail = styled.details`
  background-color: red;
`;
function StyledComponent() {
  const [toggleColorToDark, setToggleColorToDark] = useState(false);

  return (
    <Wrapper>
      <Title turnToDark={toggleColorToDark}>
        abc
        <button onClick={() => setToggleColorToDark(!toggleColorToDark)}>
          Toggle to darkness
        </button>
      </Title>
      <br />

      <Input type={`${toggleColorToDark ? "password" : "file"}`} />
      <Detail>
        <summary>title</summary>
        <p>Contentnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn</p>
      </Detail>
      <br />
      <br />
      <Input type="text" list="food"></Input>
      <datalist id="food">
        <option value="abc"></option>
        <option value="abc1"></option>
        <option value="abc2"></option>
        <option value="abc3"></option>
      </datalist>
    </Wrapper>
  );
}

export default StyledComponent;
