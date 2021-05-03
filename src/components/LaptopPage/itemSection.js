import React, { useState } from "react";
import { Link } from "react-router-dom";
import Item from "./Item/Item";
import * as styles from "./ItemSection.module.css";

export default function ItemSection({ allData }) {
  const [changeStateOfFilterBrand, setchangeStateOfFilterBrand] = useState(
    false
  );
  const [changeStateOfFilterPrice, setchangeStateOfFilterPrice] = useState(
    false
  );
  const [changeStateOfFilterCPU, setchangeStateOfFilterCPU] = useState(false);
  const [changeStateOfFilterRAM, setchangeStateOfFilterRAM] = useState(false);

  //handle
  const handleChangeStateOfFilterBrand = () => {
    setchangeStateOfFilterBrand(!changeStateOfFilterBrand);
  };
  const handlechangeStateOfFilterPrice = () => {
    setchangeStateOfFilterPrice(!changeStateOfFilterPrice);
  };
  const handlechangeStateOfFilterCPU = () => {
    setchangeStateOfFilterCPU(!changeStateOfFilterCPU);
  };
  const handlechangeStateOfFilterRAM = () => {
    setchangeStateOfFilterRAM(!changeStateOfFilterRAM);
  };
  return (
    <div>
      <section>
        <div className={styles.container}>
          <div className={styles.sort_bar}>
            <div className={styles.sort_Container}>
              <h3>Máy tính xách tay</h3>
              <div className={styles.remove_filter}>
                <p>Bỏ lọc được áp dụng</p>
              </div>
              <div
                onClick={handleChangeStateOfFilterBrand}
                className={styles.sort_By_Brand}
              >
                <p>Theo thương hiệu</p>
                {changeStateOfFilterBrand ? (
                  <div>
                    <ul className={styles.Detail_Brand_Sort}>
                      <li>HP</li>
                      <li>Dell</li>
                      <li>Acer</li>
                      <li>Asus</li>
                      <li>Lenovo</li>
                      <li>Razor</li>
                    </ul>
                  </div>
                ) : null}
              </div>
              <div
                onClick={handlechangeStateOfFilterPrice}
                className={styles.sort_By_Price}
              >
                <p>Theo giá tiền</p>
                {changeStateOfFilterPrice ? (
                  <div>
                    <ul className={styles.Detail_Brand_Sort}>
                      <li>Dưới 10 triệu</li>
                      <li>10 - 15 triệu</li>
                      <li>15 - 20 triệu</li>
                      <li>20 - 25 triêu</li>
                      <li>25 - 30 triệu</li>
                      <li>30 - 35 triệu</li>
                      <li>35 - 40 triệu</li>
                      <li>Trên 40 triệu</li>
                    </ul>
                  </div>
                ) : null}
              </div>
              <div
                onClick={handlechangeStateOfFilterCPU}
                className={styles.sort_by_CPU}
              >
                <p>Theo CPU</p>
                {changeStateOfFilterCPU ? (
                  <div>
                    <ul className={styles.Detail_Brand_Sort}>
                      <li>Intel Dual Core</li>
                      <li>Intel Core i3</li>
                      <li>Intel Core i5</li>
                      <li>Intel Core i9</li>
                      <li>Intel Xeon</li>
                      <li>AMD Ryzen 3</li>
                      <li>AMD Ryzen 5</li>
                      <li>AMD Ryzen 7</li>
                    </ul>
                  </div>
                ) : null}
              </div>
              <div
                onClick={handlechangeStateOfFilterRAM}
                className={styles.sort_by_RAM}
              >
                <p>Theo RAM</p>
                {changeStateOfFilterRAM ? (
                  <div>
                    <ul className={styles.Detail_Brand_Sort}>
                      <li>4GB</li>
                      <li>6GB</li>
                      <li>8GB</li>
                      <li>10GB</li>
                      <li>12GB</li>
                      <li>14GB</li>
                    </ul>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
          <div className={styles.items}>
            {allData.map((data) => (
              <Item data={data} key={data._id} />
            ))}

            <div className={styles.item1}>
              <div className={styles.pages}>
                <Link to="">Next</Link>
              </div>
              <div className={styles.pages}>
                <Link to="">0</Link>
              </div>
              <div className={styles.pages}>
                <Link to="">1</Link>
              </div>
              <div className={styles.pages}>
                <Link to="">2</Link>
              </div>
              <div className={styles.pages}>
                <Link to="">3</Link>
              </div>
              <div className={styles.pages}>
                <Link to="">4</Link>
              </div>
              <div className={styles.pages}>
                <Link to="">5</Link>
              </div>
              <div className={styles.pages}>
                <Link to="">Prev</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
