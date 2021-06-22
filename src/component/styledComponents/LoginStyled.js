import styled from "styled-components";
import { CenterEl } from "./laptopStyled";

export const LoginContainer = styled(CenterEl)`
  width: 100%;
  height: 100vh;
  background: linear-gradient(
    to bottom,
    #99ccff 0%,
    ${({ theme }) => theme.green} 100%
  );
`;
export const LoginWrapper = styled(CenterEl)`
  width: 20rem;
  height: 20rem;
  margin: auto;
  border: 2px solid white;
  flex-direction: column;
  border-radius: 10px;
  overflow: hidden;
  & .login_title {
    flex: 0.7;
    width: 100%;
    font-size: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.8;
  }
  & .login_input {
    width: 100%;
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    & input {
      width: 80%;
      height: 30%;
      border-radius: 5px;
      font-size: 20px;
      box-sizing: border-box;
      padding: 5px 10px;
      border-color: white;
      &:focus {
        outline: none;
      }
    }
  }
  & .login_button_container {
    flex: 1;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    & .login_button {
      width: 65%;
      height: 65%;
      font-size: 24px;
      margin: auto;
      border: 1px solid whiteSmoke;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
      transition: 0.8s;
      cursor: pointer;
      background-color: white;

      &:hover {
        background-color: ${({ theme }) => theme.grey};
      }
    }
  }
`;
