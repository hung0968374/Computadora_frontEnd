import React from "react";
import LaptopForm from "../component/sharedComponents/LaptopForm";
import { LapInfoHandlerContainer } from "../component/styledComponents/LapInfoStyled";

function AddLaptop() {
  return (
    <LapInfoHandlerContainer>
      <div className="addLap-title">Thêm sản phẩm</div>
      <div className="addLap-wrapper">
        <LaptopForm />
      </div>
    </LapInfoHandlerContainer>
  );
}

export default AddLaptop;
