import React, { useEffect, useState } from "react";
import { confirmAlert } from "react-confirm-alert";

import "./style.scss";
import coupon from "../../assets/images/coupon.png";
import SearchBar from "../SearchBar";
import { getAllVouchers } from "../../services/voucher.service";
import Modal, { useModal } from "../Modal";
import VoucherDetaillModal from "../../modals/VoucherPercentDetailsModal/VoucherDetaillModal";
import VoucherPercentDetaillModal from "../../modals/VoucherPercentDetailsModal/VoucherDetaillModal";
import VOUCHER_TYPE from "../../constants/voucher";

function VoucherManagementWidget() {
  const [vouchers, setVouchers] = useState([]);
  const [toggleCreateVoucherModal, setToggleCreateVoucherModal] = useModal(false);
  const [voucherTypeCreate, setVoucherTypeCreate] = useState();
  const [reloadListVoucher, setReloadListVoucher] = useState(false);
  const handleToggleVoucherModal = () => {
    setToggleCreateVoucherModal(state => !state);
  }

  useEffect(() => {
    const fetchVouchers = async () => {
      try {
        const response = await getAllVouchers();
        const { vouchers } = response;
        setVouchers(vouchers);
      } catch (error) {
        console.log(error);
      }
    }
    fetchVouchers();
  }, [])

  useEffect(() => {
    if (reloadListVoucher) {
      const fetchVouchers = async () => {
        try {
          const response = await getAllVouchers();
          const { vouchers } = response;
          setVouchers(vouchers);
        } catch (error) {
          console.log(error);
        }
      }
      fetchVouchers();
      setReloadListVoucher(false)
    }
  }, [reloadListVoucher])

  const reloadListVoucherState = () => {
    setReloadListVoucher(true)
  }

  const onSimpleClick = (title, question, callback) => {
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

  const onUpdatePercentClick = (voucher) => {
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

  const onUpdateCashClick = (voucher) => {
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

  const handleDisableYard = () => { };

  const handleEnableYard = () => { };

  const handleDeleteClick = () => { };
  console.log(toggleCreateVoucherModal);

  return (
    <div className="pt-5 mt-5 w-100">
      <h4 className="mb-4 d-inline-block">
        <img src={coupon} alt="Yard" className="width-60 pe-3" />
        Voucher Management
      </h4>
      <button
        className="btn btn-primary px-4 ms-5"
        onClick={() => {
          setVoucherTypeCreate(VOUCHER_TYPE.PERCENT)
          handleToggleVoucherModal();
        }}
      >
        <i className="fas fa-plus me-2" style={{ fontSize: "0.8rem" }}></i>
        <b>Voucher %</b>
      </button>
      <button
        className="btn btn-primary px-4 ms-3"
      >
        <i className="fas fa-plus me-2" style={{ fontSize: "0.8rem" }}></i>
        <b>Voucher $</b>
      </button>
      <SearchBar />
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col" style={{ width: "10%" }}>
              Actions
            </th>
            <th scope="col" style={{ width: "10%" }}>Reference</th>
            <th scope="col">Title</th>
            <th scope="col">Code</th>
            <th scope="col" style={{ width: "8%" }}>Amount</th>
            <th scope="col" style={{ width: "6%" }}>Quantity</th>
            <th scope="col" style={{ width: "22%" }}>
              Effective Date
            </th>
            <th scope="col" style={{ width: "6%" }}>Status</th>
          </tr>
        </thead>
        <tbody>
          {vouchers.map(voucher => (
            <tr key={voucher.id}>
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
                <b className="trash-icon" onClick={onUpdatePercentClick}>{voucher.reference}</b>
              </td>
              <td>
                <p onClick={onUpdatePercentClick}>{voucher.title}</p>
              </td>
              <td className="text-truncate">{voucher.voucherCode}</td>
              <td>
                <span>{`${voucher.discount}${voucher.type === VOUCHER_TYPE.CASH ? " VND" : "%"}`}</span>
              </td>
              <td>{voucher.maxQuantity}</td>
              <td
                className="text-truncate"

              >
                {`${voucher.startDate} - ${voucher.endDate}`}
              </td>
              <td className={`bold text-uppercase ${voucher.status === 'active' ? "green" : voucher.status === 'inactive' ? "red" : "yellow"}`}>{voucher.status}</td>
            </tr>
          ))}
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
      <Modal isShowing={toggleCreateVoucherModal} hide={handleToggleVoucherModal}>
        {(voucherTypeCreate && voucherTypeCreate === VOUCHER_TYPE.PERCENT) && <VoucherPercentDetaillModal reloadListVoucherState={reloadListVoucherState} voucherTypeCreate={voucherTypeCreate} toggleModal={handleToggleVoucherModal} />}
      </Modal>
    </div>
  );
}

export default VoucherManagementWidget;
