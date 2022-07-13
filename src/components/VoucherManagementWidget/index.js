import React, { useEffect, useState } from "react";
import { confirmAlert } from "react-confirm-alert";

import "./style.scss";
import coupon from "../../assets/images/coupon.png";
import SearchBar from "../SearchBar";
import { getAllVouchers, saveVoucherChanges } from "../../services/voucher.service";
import Modal, { useModal } from "../Modal";
import { VOUCHER_STATUS, VOUCHER_TYPE } from "../../constants/voucher";
import VoucherDetailsModal from "../../modals/VoucherDetailsModal";
import { toast } from "react-toastify";
import { TOAST_CONFIG } from "../../constants/default";

function VoucherManagementWidget() {
  const [vouchers, setVouchers] = useState([]);
  const [voucherSelected, setVoucherSelected] = useState();
  const [voucherTypeCreate, setVoucherTypeCreate] = useState();
  const [toggleCreateVoucherModal, setToggleCreateVoucherModal] = useModal(false);
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
        toast.error("Server internal error!", TOAST_CONFIG)
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
          toast.error("Server internal error!", TOAST_CONFIG)
        }
      }
      fetchVouchers();
      setReloadListVoucher(false)
    }
  }, [reloadListVoucher])

  const reloadListVoucherState = () => {
    setReloadListVoucher(true)
  }

  const onSimpleClick = (title, question, voucher, callback) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className="custom-confirm">
            <h4>{title}</h4>
            <p className="mb-3">{question}</p>
            <button
              className="btn btn-primary me-3"
              onClick={async () => {
                await callback(voucher);
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

  const showVoucherDetailsModal = (voucher) => {
    setVoucherTypeCreate(undefined)
    setVoucherSelected(voucher)
    handleToggleVoucherModal()
  }

  const handleDisableVoucher = async (voucher) => {
    const voucherValues = {
      ...voucher,
      "isActive": false,
      "status": VOUCHER_STATUS.INACTIVE
    }

    try{
      const response = await saveVoucherChanges(voucherValues);
      toast.success(response.message, TOAST_CONFIG)
      setReloadListVoucher(true)
    }catch(error){
      toast.error("Disable voucher failed!", TOAST_CONFIG)
    }
  };

  const handleEnableVoucher = async (voucher) => {
    const voucherValues = {
      ...voucher,
      "isActive": true,
      "status": VOUCHER_STATUS.ACTIVE
    }

    try{
      const response = await saveVoucherChanges(voucherValues);
      toast.success(response.message, TOAST_CONFIG)
      setReloadListVoucher(true)
    }catch(error){
      toast.error("Enable voucher failed!", TOAST_CONFIG)
    }
   };

  const handleDeleteVoucher = async (voucher) => {
    const voucherValues = {
      ...voucher,
      "isActive": false,
      "status": VOUCHER_STATUS.DELETED
    }

    try{
      const response = await saveVoucherChanges(voucherValues);
      toast.success(response.message, TOAST_CONFIG)
      setReloadListVoucher(true)
    }catch(error){
      toast.error("Deleted voucher failed!", TOAST_CONFIG)
    }
   };

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
          setVoucherSelected(undefined);
          handleToggleVoucherModal();
        }}
      >
        <i className="fas fa-plus me-2" style={{ fontSize: "0.8rem" }}></i>
        <b>Voucher %</b>
      </button>
      <button
        className="btn btn-primary px-4 ms-3"
        onClick={() => {
          setVoucherTypeCreate(VOUCHER_TYPE.CASH)
          setVoucherSelected(undefined);
          handleToggleVoucherModal();
        }}
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
                      voucher,
                      handleDeleteVoucher
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
                      voucher,
                      handleDisableVoucher
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
                      voucher,
                      handleEnableVoucher
                    )
                  }
                ></i>
              </td>

              <td>
                <b className="trash-icon" onClick={() => showVoucherDetailsModal(voucher)}>{voucher.reference}</b>
              </td>
              <td>
                <p onClick={() => showVoucherDetailsModal(voucher)}>{voucher.title}</p>
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
        <VoucherDetailsModal
         reloadListVoucherState={reloadListVoucherState} 
         voucherTypeCreate={voucherTypeCreate} 
         toggleModal={handleToggleVoucherModal} 
         voucher={voucherSelected}
        />
      </Modal>
    </div>
  );
}

export default VoucherManagementWidget;
