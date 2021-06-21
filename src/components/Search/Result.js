import axios from "axios";
import React, { useEffect, useState } from "react";
import { BaseUrl } from "../../api";
import "../Search/Result.css";
import Item from "../LaptopPage/Item/Item";

function Result({ inputSearch }) {
  const [dataFromBE, setDataFromBE] = useState([]);
  let data = [];
  // work with data
  async function fetchData() {
    const { data } = await axios.get(`${BaseUrl}/products`);
    setDataFromBE(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="result_container">
      <div className="final_result">
        {!inputSearch ? null : (
          <p>
            Với từ khoá
            <strong> {inputSearch} </strong>
            cho ra kết quả tìm kiếm :
          </p>
        )}
        <div className="result_hero">
          {dataFromBE
            ?.filter((value) => {
              if (!inputSearch) {
                return;
              }
              if (
                value.name.toLowerCase().includes(inputSearch.toLowerCase())
              ) {
                return value;
              }
            })
            .map((data, index) => {
              return <Item data={data} key={index} />;
            })}
        </div>
      </div>
    </div>
  );
}

export default Result;
