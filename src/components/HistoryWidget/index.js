import React from "react";
import { confirmAlert } from "react-confirm-alert";

import "./style.scss";
import transaction from "../../assets/images/transaction.png";

function HistoryWidget() {
  const onRefClick = async () => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className="custom-confirm" style={{width: 600}}>
            <h4>Match Details</h4>
            <div className="my-4">
              <div className="row mb-1 yard__details-field">
                <span className="col-3 fw-bolder">Name:</span>
                <span className="col-9">Sân quận 9</span>
              </div>
              <div className="row mb-1 yard__details-field">
                <span className="col-3 fw-bolder">Size:</span>
                <span className="col-9">3 vs 3</span>
              </div>
              <div className="row mb-1 yard__details-field">
                <span className="col-3 fw-bolder">Address:</span>
                <span className="col-9">
                  Lô E2a-7, Đường D1, Đ. D1, Long Thạnh Mỹ, Thành Phố Thủ Đức, Thành
                  phố Hồ Chí Minh 700000
                </span>
              </div>
              <div className="row mb-1 yard__details-field">
                <span className="col-3 fw-bolder">Time:</span>
                <span className="col-9">4:00 - 5:30</span>
              </div>
              <div className="row mb-1 yard__details-field">
                <span className="col-3 fw-bolder">Price:</span>
                <span className="col-9">150.000 VND</span>
              </div>
            </div>
            <button
              className="btn btn-primary me-3"
              onClick={() => {
                onClose();
              }}
            >
              Close
            </button>
          </div>
        );
      },
      closeOnEscape: true,
      closeOnClickOutside: true,
    });
  };
  return (
    <div className="pt-4 w-100">
      <h4 className="text-center mb-4">
        <img src={transaction} alt="Transaction" className="width-60 pe-3" />
        History
      </h4>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Reference</th>
            <th scope="col">Total Amount (VND)</th>
            <th scope="col">Payment Method</th>
            <th scope="col">Created At</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <b className="trash-icon" onClick={onRefClick}>1009</b>
            </td>
            <td>150.000</td>
            <td>Momo</td>
            <td>29/05/2022 11:26</td>
            <td className="bold green">PAID</td>
          </tr>
          <tr>
            <td>
              <b className="trash-icon" onClick={onRefClick}>1009</b>
            </td>
            <td>150.000</td>
            <td>Momo</td>
            <td>29/05/2022 11:26</td>
            <td className="bold red">CANCELED</td>
          </tr>
        </tbody>
      </table>
      <div className="yard-pagination mt-4">
        <div>
          <span className="pagination-arrow">
            <i className="fas fa-arrow-left"></i>
          </span>
          <span className="pagination-statistic">
            <input type="text" value={1} />/ 10
          </span>
          <span className="pagination-arrow">
            <i className="fas fa-arrow-right"></i>
          </span>
        </div>
      </div>
    </div>
  );
}

export default HistoryWidget;
