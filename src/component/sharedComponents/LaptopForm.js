import axios from "axios";
import React from "react";
import { useState } from "react";
import { FormContainer } from "../styledComponents/LaptopFormStyled";
import { Input } from "../styledComponents/sharedStyle/InputStyled";
import * as API from "../../api/index";

function LaptopForm() {
  const [files, setFiles] = useState();

  const submitToServer = async () => {
    const formData = new FormData();
    // console.log("files", files);

    for (const file of files) {
      formData.append("images", file);
    }
    formData.append("title", "dsadsadsa");
    formData.append("processor", "abc");
    formData.append("screen", "abc");
    formData.append("ram", "abc");
    formData.append("graphicCard", "abc");
    formData.append("pin", "abc");
    formData.append("weight", "abc");
    formData.append("operatingSystem", "abc");
    formData.append("price", "abc");
    try {
      const res = await API.sendFormIncludingFilesToServer(formData);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
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
          <input
            type="file"
            multiple
            onChange={(e) => setFiles(e.target.files)}
          />
        </div>
      </div>
      <button onClick={submitToServer}>submit</button>
    </FormContainer>
  );
}

export default LaptopForm;
