import React from "react";
import { confirmAlert } from "react-confirm-alert";
import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import empty from "../../assets/images/empty.png";

import "./style.scss";
import transaction from "../../assets/images/transaction.png";

import { getBookingHistory } from "../../services/me.service";
import Pagination from "../Pagination";
import { SUCCESS, FAILED, CANCELED } from "../../constants/bookingStatus";
import { EMPTY } from "../../constants/default";
import { decrypt, encryptKey } from "../../helpers/crypto.helper";
import { OWNER, USER } from "../../constants/roles";

function HistoryWidget() {
  const ITEMS_PER_PAGE = 10;
  const [historyBookingModels, setHistoryBookingModels] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [maxPage, setMaxPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getHistoryBooking();
  }, []);

  const getHistoryBooking = (page = 1, itemsPerPage = ITEMS_PER_PAGE) => {
    setIsLoading(true);
    const credential = localStorage.getItem(encryptKey("credential"));
    if (credential) {
      const role = decrypt(credential).role;
      getBookingHistory({ page, itemsPerPage }, role === USER ? "me" : "owners")
        .then((res) => {
          setHistoryBookingModels(res.data);
          setMaxPage(
            res.maxResult % ITEMS_PER_PAGE === 0 && res.maxResult !== 0
              ? res.maxResult / ITEMS_PER_PAGE
              : Math.floor(res.maxResult / ITEMS_PER_PAGE) + 1
          );
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };
  const onChangePage = (page) => {
    getHistoryBooking(page);
    setCurrentPage(page);
  };

  const getColor = (status) => {
    if (status === SUCCESS) return "green bold";
    else if (status === FAILED) return "red bold";
    else if (status === CANCELED) return "yellow bold";
  };

  return (
    <div className="pt-5 mt-5 w-100 px-5">
      <h4 className="text-center mb-4">
        <img src={transaction} alt="Transaction" className="width-60 pe-3" />
        Booking History
      </h4>
      {isLoading ? (
        <div
          className="w-100 d-flex justify-content-center align-items-center"
          style={{ height: "50vh" }}
        >
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : !historyBookingModels.length ? (
        <div className="w-100 pt-5 d-flex justify-content-center align-items-center flex-column h-300">
          <img src={empty} style={{ width: 80 }} />
          <p className="text-center nodata-text" style={{ fontSize: "0.9rem" }}>
            No result available
          </p>
        </div>
      ) : (
        <>
          <table className="table">
            <thead>
              <tr>
                <th scope="col" style={{ width: "15%" }}>
                  Yard
                </th>
                <th scope="col" style={{ width: "10%" }}>
                  Sub-yard
                </th>
                <th scope="col" style={{ width: "5%" }}>
                  Type
                </th>
                <th scope="col" style={{ width: "10%" }}>
                  Address
                </th>
                <th scope="col" style={{ width: "8%" }}>
                  Price
                </th>
                <th scope="col" style={{ width: "8%" }}>
                  Status
                </th>
                <th scope="col" style={{ width: "15%" }}>
                  Note
                </th>
                <th scope="col" style={{ width: "8%" }}>
                  Created By
                </th>
                <th scope="col" style={{ width: "15%" }}>
                  Created At
                </th>
              </tr>
            </thead>
            <tbody>
              <>
                {historyBookingModels.map((historyBooking) => (
                  <tr>
                    <td>{historyBooking.bigYardName}</td>
                    <td>{historyBooking.subYardName}</td>
                    <td>{historyBooking.type}</td>
                    <td
                      className="text-truncate"
                      title={historyBooking.address}
                    >
                      {historyBooking.address}
                    </td>
                    <td>{historyBooking.price} VND</td>
                    <td className={getColor(historyBooking.bookingStatus)}>
                      {historyBooking.bookingStatus}
                    </td>
                    <td className="text-truncate" title={historyBooking.note}>
                      {historyBooking.note || "N/A"}
                    </td>
                    <td>{historyBooking.createdBy}</td>
                    <td>{historyBooking.createdAt}</td>
                  </tr>
                ))}
              </>
            </tbody>
          </table>
        </>
      )}
      <Pagination maxPage={maxPage} onChangePage={onChangePage} />
      <ToastContainer />
    </div>
  );
}

export default HistoryWidget;
