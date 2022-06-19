import React from "react";
import { confirmAlert } from "react-confirm-alert";

import "./style.scss";
import playground from "../../assets/images/playground.png";
import { Link } from "react-router-dom";

function ManageYardsWidget() {
  const ITEMS_PER_PAGE = 10;
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

  const handleDisableYard = () => {};

  const handleEnableYard = () => {};

  const handleDeleteClick = () => {};

  const getYards = (page, itemsPerPage = ITEMS_PER_PAGE) => {};

  return (
    <div className="pt-4 w-100">
      <h4 className="mb-4 d-inline-block">
        <img src={playground} alt="Yard" className="width-60 pe-3" />
        Yard Management
      </h4>
      <Link to="/owner/yards/draft">
        <button className="btn btn-primary px-4 ms-5">
          <i className="fas fa-plus me-2" style={{ fontSize: "0.8rem" }}></i>
          <b>Add</b>
        </button>
      </Link>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col" style={{ width: "10%" }}>
              Actions
            </th>
            <th scope="col" style={{ width: "10%" }}>
              Reference
            </th>
            <th scope="col">Name</th>
            <th scope="col" style={{ width: "31%" }}>
              Address
            </th>
            <th scope="col" style={{ width: "12%" }}>
              Open Time
            </th>
            <th scope="col" style={{ width: "12%" }}>
              Created At
            </th>
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
                    "Are you sure to delete this yard permanently?",
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
                    "Are you sure to disable this yard?",
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
                    "Are you sure to activate this yard?",
                    handleEnableYard
                  )
                }
              ></i>
            </td>
            <td>
              <Link to="/owner/yards/1">
                <b className="trash-icon">1009</b>
              </Link>
            </td>
            <td className="text-truncate" title="Sân quận 9">
              Sân quận 9
            </td>
            <td
              className="text-truncate"
              title="Lô E2a-7, Đường D1, Đ. D1, Long Thạnh Mỹ, Thành Phố Thủ Đức, Thành
              phố Hồ Chí Minh 700000"
            >
              Lô E2a-7, Đường D1, Đ. D1, Long Thạnh Mỹ, Thành Phố Thủ Đức, Thành
              phố Hồ Chí Minh 700000
            </td>
            <td>04:00 - 22:00</td>
            <td>29/05/2022</td>
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

export default ManageYardsWidget;
