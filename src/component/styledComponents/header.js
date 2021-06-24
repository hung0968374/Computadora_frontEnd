import styled from "styled-components";

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 5em;
  background-color: ${({ theme }) => theme.white};
  box-shadow: 0px 4px 8px rgba(160, 159, 159, 0.25);

  & .header_navContent {
    width: 60%;
    height: 100%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-around;

    & span {
      font-size: 25px;
      cursor: pointer;
      transition: 0.3s ease;
      &:hover {
        color: ${({ theme }) => theme.red};
      }
    }
  }
  & .header_navContent p {
    font-size: 25px;
    cursor: pointer;
    transition: 0.3s ease;
  }
  & .header_navContent p:hover {
    color: ${({ theme }) => theme.red};
  }
  & .header_navContent a {
    font-size: 25px;
    cursor: pointer;
    transition: 0.3s ease;
  }
  & .header_navContent a:hover {
    color: ${({ theme }) => theme.red};
  }
`;
