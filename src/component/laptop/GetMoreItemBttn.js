import React from "react";
import { Button } from "../styledComponents/laptopStyled";
import loadingImg from "../../assets/Spinner.svg";

function GetMoreItemBttn({ currentPage, setCurrentPage, lapItems }) {
  console.log("rerendering Button");
  return (
    <Button onClick={() => setCurrentPage(currentPage + 1)}>
      {lapItems?.status === "loading" ? (
        <>
          <img src={loadingImg} alt="" />
        </>
      ) : (
        <>fetch more laptop items</>
      )}
    </Button>
  );
}

export default GetMoreItemBttn;
export const MemoizedGetMoreItemBtn = React.memo(GetMoreItemBttn);
