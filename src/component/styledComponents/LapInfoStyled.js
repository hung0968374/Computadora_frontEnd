import { LoginContainer } from "./LoginStyled";

import styled from "styled-components";

export const LapInfoHandlerContainer = styled(LoginContainer)`
  flex-direction: column;
  background: white;
  & .addLap {
    &-title {
      width: 60rem;
      height: 70px;
      color: red;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 30px;
    }

    &-wrapper {
      width: 60rem;
      height: auto;
    }
  }
`;
