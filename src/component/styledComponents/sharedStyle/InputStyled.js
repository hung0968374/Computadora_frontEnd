import styled from "styled-components";

export const Input = styled.input`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height};
  box-sizing: border-box;
  padding: 10px 15px;
  font-size: 18px;
  border-radius: 5px;
  margin: 4px 0px;
  border: 1px solid #8c8c8c;

  &:focus {
    outline: none;
  }
`;
