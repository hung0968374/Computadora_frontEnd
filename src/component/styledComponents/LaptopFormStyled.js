import styled from "styled-components";

export const FormContainer = styled.div`
  width: 100%;
  height: auto;
  & .form-container {
    width: 100%;
    height: auto;
    display: flex;
  }
  & .form {
    &-propsWrapper {
      flex: 2;

      & > div {
        display: flex;
        justify-content: flex-end;
        padding: 20px 30px;
        /* border-bottom: 1px solid black; */
        font-size: 18px;
      }
    }
    &-valsWrapper {
      flex: 6.5;
      display: flex;
      flex-direction: column;
    }
  }
  & .form_imageWrapper {
    margin-top: 50px;
    width: 100%;
    height: 100px;
    display: flex;
    & .imgText {
      flex: 2;
      & > div {
        display: flex;
        justify-content: flex-end;
        padding: 20px 30px;
        /* border-bottom: 1px solid black; */
        font-size: 18px;
      }
    }
    & .imgArea {
      flex: 6.5;
    }
  }
`;
