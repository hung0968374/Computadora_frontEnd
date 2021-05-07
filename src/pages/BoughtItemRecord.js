import React, { useEffect, useState } from "react";
import Header from "../components/sharedComponents/Header";
import "./cssFolder/boughtItemRecord.css";
import * as API from "../api/index";
import { useHistory } from "react-router";
export default function BoughtItemRecord() {
  const history = useHistory();
  const [userInvoices, setUserInvoices] = useState([]);
  useEffect(() => {
    const fetchAllInvoices = async () => {
      try {
        const response = await API.getInvoicesByParticularUser();
        setUserInvoices(response.data.invoices);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchAllInvoices();
  }, []);
  console.log("user invoice", userInvoices);
  return (
    <div className="page_container">
      <Header />
      <div className="content_container">
        <h2>Lịch sử mua hàng</h2>
        <div className="table_area">
          <table className="table_default">
            <tr>
              <th>Đơn hàng của tôi</th>
              <th>Thời gian mua</th>
              <th className="product">Sản phẩm</th>
              <th>Tổng tiền</th>
              <th>Trạng thái</th>
            </tr>
            {userInvoices &&
              userInvoices.map((invoice, index) => {
                const DATE_OPTIONS = {
                  hour: "numeric",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  weekday: "long",
                  minute: "numeric",
                };
                const reFormatDate = new Date(
                  invoice.createdAt
                ).toLocaleDateString("vi", DATE_OPTIONS);
                return (
                  <tr key={index}>
                    <td>{invoice._id}</td>
                    <td>{reFormatDate}</td>
                    <td className="tdOfItems">
                      {invoice.invoiceItems.map((item, index) => {
                        return (
                          <li
                            onClick={() => {
                              history.push(`/laptop/${item.id}`);
                            }}
                            key={index}
                          >
                            <span>{item.productName}</span>
                            <span>x{item.quantity}</span>
                          </li>
                        );
                      })}
                    </td>
                    <td className="billCharge">{invoice.billCharge}₫</td>
                    <td className="invoiceStt">Chờ xác nhận</td>
                  </tr>
                );
              })}
          </table>
        </div>
        <div className="totalInvoicesValue">
          Tổng tiền đã giao dịch: <span>0₫</span>
        </div>
        {userInvoices.length === 0 ? (
          <div className="invoiceNotExisting">
            <span>Đơn hàng của bạn trống</span>
          </div>
        ) : null}
      </div>
    </div>
  );
}
