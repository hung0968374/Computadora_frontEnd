import styled from "styled-components";
import { keyframes } from "styled-components";

export const rotate = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity:1
  }
`;

export const Title = styled.h1`
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
export const Wrapper = styled.section`
  width: 50em;
  height: 40em;
  margin: auto;
  flex-direction: column;
  background-color: ${({ theme }) => theme.origin};
  padding: 50px;
  box-sizing: border-box !important;
`;

const SubstitubeTitle = styled(Title)`
  background-color: #710080;
`;

export const Input = styled.input`
  height: 50px;
  width: 200px;
  box-sizing: border-box;
  padding: 10px;
  font-size: 16px;
  margin: 20px 0px 20px 0px;
  border: 1px solid red;
  &:focus {
    border: 2px solid blue;
  }
`;
export const Detail = styled.details`
  background-color: red;
`;
