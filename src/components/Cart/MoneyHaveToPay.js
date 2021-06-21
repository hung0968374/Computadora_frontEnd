import React, { useEffect, useState } from "react";
import "./MoneyHaveToPay.css";
import { useDispatch, useSelector } from "react-redux";
import { reNewCart } from "../../redux/AddToCart/AddtoCartSlice";

export default function MoneyHaveToPay() {
  const [telephone, setTelephone] = useState("");
  const [shipAddress, setShipAddress] = useState("");
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const inventory = JSON.parse(localStorage.getItem("inventory"));
  const [totalMoney, setTotalMoney] = useState(0);

  var total = 0;

  //function
  function convertMoney() {
    return total.toFixed(6).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  for (const item of inventory) {
    let price = item.price;
    var test = parseFloat(price);
    var tmp = test * parseInt(item.quantity);
    total += tmp;
  }

  useEffect(() => {
    setTotalMoney(convertMoney());
    console.log(totalMoney);
  }, [inventory]);

  const handlePayButton = () => {
    console.log("telephone", telephone);
    console.log("shipAddress", shipAddress);
    if (shipAddress === "") {
      alert("Bạn chưa điền thông tin giao hàng");
    }
    if (telephone === "") {
      alert("Bạn chưa điền số điện thoại xác nhận");
    }
    if (shipAddress !== "" && telephone !== "") {
      alert(
        "Đơn hàng của bạn đã được xử lý, Chúng tôi sẽ liên hệ tới bạn trong thời gian gần nhất "
      );
      dispatch(reNewCart());
    }
  };

  return (
    <div className="money_wrapper">
      <div className="split-wrapper">
        <div className="input_ship">
          <p> Địa chỉ giao Hàng</p>
          <textarea
            name=""
            minLength="6"
            className="textArea_"
            id=""
            cols="32"
            rows="6"
            placeholder="Xin mời bạn nhập lại địa chỉ giao hàng"
            onChange={(e) => setShipAddress(e.target.value)}
          ></textarea>
        </div>
        <div>
          <div className="input_phoneNumber">
            <p className="telephone_tag">Số điện thoại</p>
            <input
              type="text"
              minLength="8"
              placeholder="Nhập số điện thoại"
              onChange={(e) => setTelephone(e.target.value)}
            />
          </div>
          <div className="input_phoneNumber">
            <p>Họ và tên</p>
            <input
              type="text"
              placeholder="Nhập họ và tên"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="totalMoney">
        <p>Tổng Tiền</p>
        <strong>{`${totalMoney}đ`}</strong>
      </div>
      <button onClick={handlePayButton}> Thanh toán</button>
    </div>
  );
}
