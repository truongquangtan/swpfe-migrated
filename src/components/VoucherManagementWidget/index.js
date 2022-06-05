import React, { useState } from "react";
import { confirmAlert } from "react-confirm-alert";

import "./style.scss";
import coupon from "../../assets/images/coupon.png";

function VoucherManagementWidget() {
  const onSimpleClick = async (title, question, callback) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className="custom-confirm">
            <h4>{title}</h4>
            <p className="mb-3">{question}</p>
            <button
              className="btn btn-primary me-3"
              onClick={() => {
                callback();
                onClose();
              }}
            >
              Confirm
            </button>
            <button onClick={onClose} className="btn btn-light">
              Cancel
            </button>
          </div>
        );
      },
      closeOnEscape: true,
      closeOnClickOutside: true,
    });
  };

  const onUpdatePercentClick = async (voucher) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className="custom-confirm" style={{ width: "600px" }}>
            <h4>{voucher ? "Voucher Details" : "Create Voucher"}</h4>
            <div>
              <form className="my-3">
                <div className="row p-2">
                  <span
                    className="col-1 lh-44 signup__icon-wrapper"
                    title="Code"
                  >
                    <i className="fas fa-address-card"></i>
                  </span>
                  <input
                    className="col-11 outline-none p-2 signup__input-border"
                    type="text"
                    placeholder="Code"
                  />
                </div>
                <div className="row p-2">
                  <span
                    className="col-1 lh-44 signup__icon-wrapper"
                    title="Code"
                  >
                    <b>%</b>
                  </span>
                  <input
                    className="col-11 outline-none p-2 signup__input-border"
                    type="number"
                    placeholder="Amount(%)"
                    min="1"
                    max="100"
                  />
                </div>
                <div className="row p-2">
                  <span
                    className="col-1 lh-44 signup__icon-wrapper"
                    title="Code"
                  >
                    <i className="fas fa-tags"></i>
                  </span>
                  <input
                    className="col-11 outline-none p-2 signup__input-border"
                    type="number"
                    placeholder="Quantity"
                    min="1"
                  />
                </div>
                <div className="row p-2">
                  <span
                    className="col-1 lh-44 signup__icon-wrapper"
                    title="Default price/slot"
                  >
                    <i className="fas fa-money-bill-wave"></i>
                  </span>
                  <input
                    className="col-11 outline-none p-2 signup__input-border"
                    type="text"
                    placeholder="Max amount of discount"
                  />
                </div>
                <div className="row p-2">
                  <span
                    className="col-1 lh-44 signup__icon-wrapper"
                    title="Start Date"
                  >
                    <i className="far fa-clock"></i>
                  </span>
                  <input
                    className="col-11 outline-none p-2 signup__input-border"
                    type="date"
                    placeholder="Date"
                    required
                  />
                </div>
                <div className="row p-2">
                  <span
                    className="col-1 lh-44 signup__icon-wrapper"
                    title="End Date"
                  >
                    <i className="far fa-clock"></i>
                  </span>
                  <input
                    className="col-11 outline-none p-2 signup__input-border"
                    type="date"
                    placeholder="Date"
                    required
                  />
                </div>
              </form>
            </div>
            <button
              className="btn btn-primary me-3 px-4"
              onClick={() => {
                this.handleClickDelete();
                onClose();
              }}
            >
              {voucher ? "Save" : "Create"}
            </button>
            <button onClick={onClose} className="btn btn-light">
              Cancel
            </button>
          </div>
        );
      },
      closeOnEscape: true,
      closeOnClickOutside: true,
    });
  };

  const onUpdateCashClick = async (voucher) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
            <div className="custom-confirm" style={{ width: "600px" }}>
            <h4>{voucher ? "Voucher Details" : "Create Voucher"}</h4>
            <div>
              <form className="my-3">
                <div className="row p-2">
                  <span
                    className="col-1 lh-44 signup__icon-wrapper"
                    title="Code"
                  >
                    <i className="fas fa-address-card"></i>
                  </span>
                  <input
                    className="col-11 outline-none p-2 signup__input-border"
                    type="text"
                    placeholder="Code"
                  />
                </div>
                <div className="row p-2">
                  <span
                    className="col-1 lh-44 signup__icon-wrapper"
                    title="Code"
                  >
                    <b>$</b>
                  </span>
                  <input
                    className="col-11 outline-none p-2 signup__input-border"
                    type="number"
                    placeholder="Amount($)"
                    min="0"
                  />
                </div>
                <div className="row p-2">
                  <span
                    className="col-1 lh-44 signup__icon-wrapper"
                    title="Code"
                  >
                    <i className="fas fa-tags"></i>
                  </span>
                  <input
                    className="col-11 outline-none p-2 signup__input-border"
                    type="number"
                    placeholder="Quantity"
                    min="1"
                  />
                </div>
                <div className="row p-2">
                  <span
                    className="col-1 lh-44 signup__icon-wrapper"
                    title="Default price/slot"
                  >
                    <i className="fas fa-money-bill-wave"></i>
                  </span>
                  <input
                    className="col-11 outline-none p-2 signup__input-border"
                    type="text"
                    placeholder="Min cost of bill"
                  />
                </div>
                <div className="row p-2">
                  <span
                    className="col-1 lh-44 signup__icon-wrapper"
                    title="Start Date"
                  >
                    <i className="far fa-clock"></i>
                  </span>
                  <input
                    className="col-11 outline-none p-2 signup__input-border"
                    type="date"
                    placeholder="Date"
                    required
                  />
                </div>
                <div className="row p-2">
                  <span
                    className="col-1 lh-44 signup__icon-wrapper"
                    title="End Date"
                  >
                    <i className="far fa-clock"></i>
                  </span>
                  <input
                    className="col-11 outline-none p-2 signup__input-border"
                    type="date"
                    placeholder="Date"
                    required
                  />
                </div>
              </form>
            </div>
            <button
              className="btn btn-primary me-3 px-4"
              onClick={() => {
                this.handleClickDelete();
                onClose();
              }}
            >
              {voucher ? "Save" : "Create"}
            </button>
            <button onClick={onClose} className="btn btn-light">
              Cancel
            </button>
          </div>
        );
      },
      closeOnEscape: true,
      closeOnClickOutside: true,
    });
  };

  const handleDisableYard = () => {};

  const handleEnableYard = () => {};

  const handleDeleteClick = () => {};

  return (
    <div className="pt-4 w-100">
      <h4 className="mb-4 d-inline-block">
        <img src={coupon} alt="Yard" className="width-60 pe-3" />
        Voucher Management
      </h4>
      <button
        className="btn btn-primary px-4 ms-5"
        onClick={() => onUpdatePercentClick()}
      >
        <i className="fas fa-plus me-2" style={{ fontSize: "0.8rem" }}></i>
        <b>Voucher %</b>
      </button>
      <button
        className="btn btn-primary px-4 ms-3"
        onClick={() => onUpdateCashClick()}
      >
        <i className="fas fa-plus me-2" style={{ fontSize: "0.8rem" }}></i>
        <b>Voucher $</b>
      </button>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col" style={{ width: "10%" }}>
              Actions
            </th>
            <th scope="col">Reference</th>
            <th scope="col">Code</th>
            <th scope="col">Amount</th>
            <th scope="col">Quantity</th>
            <th scope="col" style={{ width: "22%" }}>
              Effective Date
            </th>
            <th scope="col">Restriction</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <i
                className="trash-icon fas fa-trash-alt col-4"
                title="Delete"
                onClick={() =>
                  onSimpleClick(
                    "Delete",
                    "Are you sure to delete this voucher permanently?",
                    handleDeleteClick
                  )
                }
              ></i>
              <i
                className="trash-icon fas fa-ban col-4"
                title="Deactive"
                onClick={() =>
                  onSimpleClick(
                    "Disable",
                    "Are you sure to disable this voucher?",
                    handleDisableYard
                  )
                }
              ></i>
              <i
                className="trash-icon fas fa-check-circle col-4"
                title="Active"
                onClick={() =>
                  onSimpleClick(
                    "Enable",
                    "Are you sure to activate this voucher?",
                    handleEnableYard
                  )
                }
              ></i>
            </td>
            <td>
              <b className="trash-icon" onClick={onUpdatePercentClick}>
                1009
              </b>
            </td>
            <td className="text-truncate" title="Sân quận 9">
              S7Dqmb2VxFFIIA4
            </td>
            <td>10%</td>
            <td>1000</td>
            <td
              className="text-truncate"
              title="Lô E2a-7, Đường D1, Đ. D1, Long Thạnh Mỹ, Thành Phố Thủ Đức, Thành
                        phố Hồ Chí Minh 700000"
            >
              27/05/2022 - 31/05/2022
            </td>
            <td>Up to 20.000 VND</td>
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

export default VoucherManagementWidget;
