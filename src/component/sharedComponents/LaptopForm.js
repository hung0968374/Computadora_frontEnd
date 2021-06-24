import React from "react";
import { FormContainer } from "../styledComponents/LaptopFormStyled";
import { Input } from "../styledComponents/sharedStyle/InputStyled";

function LaptopForm() {
  return (
    <FormContainer>
      <div className="form-container">
        <div className="form-propsWrapper">
          <div>Tên sản phẩm</div>
          <div>Giá</div>
          <div>Vi xử lý</div>
          <div>Màn hình</div>
          <div>RAM</div>
          <div>Card đồ họa</div>
          <div>Pin</div>
          <div>Cân nặng</div>
          <div>Hệ điều hành</div>
        </div>
        <div className="form-valsWrapper">
          <Input height="54px" placeholder="Tên sản phẩm" />
          <Input height="54px" placeholder="Giá" />
          <Input height="54px" placeholder="Vi xử lý" />
          <Input height="54px" placeholder="Màn hình" />
          <Input height="54px" placeholder="RAM" />
          <Input height="54px" placeholder="Card đồ họa" />
          <Input height="54px" placeholder="Pin" />
          <Input height="54px" placeholder="Cân nặng" />
          <Input height="52px" placeholder="Hệ điều hành" />
        </div>
      </div>
      <div className="form_imageWrapper">
        <div className="imgText">
          <div>Ảnh</div>
        </div>
        <div className="imgArea">
          <input type="file" />
        </div>
      </div>
    </FormContainer>
  );
}

export default LaptopForm;
