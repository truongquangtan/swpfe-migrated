import { useEffect } from "react";
import { confirmAlert } from "react-confirm-alert";
import * as moment from "moment";

import "./style.scss";
import playground from "../../assets/images/playground.png";
import { Link } from "react-router-dom";
import { searchOwnerYard } from "../../services/yard.service";
import { useState } from "react";
import Pagination from "../Pagination";
import { toast } from "react-toastify";
import { INTERNAL_SERVER_ERROR } from "../../constants/error-message";
import { TOAST_CONFIG } from "../../constants/default";

function ManageYardsWidget() {
  const ITEMS_PER_PAGE = 10;
  const [yards, setYards] = useState([]);
  const [maxPage, setMaxPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
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

  const onChangePage = (page) => {
    getYards(page);
  };

  const getYards = (page, itemsPerPage = ITEMS_PER_PAGE) => {
    setIsLoading(true);
    searchOwnerYard({ page, itemsPerPage })
      .then((res) => {
        setYards(res.listYard);
        setMaxPage(
          res.maxResult % ITEMS_PER_PAGE === 0 && res.maxResult !== 0
            ? res.maxResult / ITEMS_PER_PAGE
            : Math.floor(res.maxResult / ITEMS_PER_PAGE) + 1
        );
      })
      .catch((error) => {
        toast.error(INTERNAL_SERVER_ERROR, TOAST_CONFIG);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getYards(1, ITEMS_PER_PAGE);
  }, []);

  return (
    <div className="pt-5 mt-5 w-100">
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
      {isLoading && (
        <div className="w-100 d-flex justify-content-center pt-5 h-300 align-items-center">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}
      {!isLoading && !!yards.length && (
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col" style={{ width: "9%" }}>
                Actions
              </th>
              <th scope="col" style={{ width: "10%" }}>
                Reference
              </th>
              <th scope="col">Name</th>
              <th scope="col" style={{ width: "22%" }}>
                Address
              </th>
              <th scope="col" style={{ width: "12%" }}>
                Open Time
              </th>
              <th scope="col" style={{ width: "12%" }}>
                Created At
              </th>
              <th scope="col" style={{ width: "12%" }}>
                Created At
              </th>
            </tr>
          </thead>
          <tbody>
            {yards.map((yard) => (
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
                  {yard.isActive ? (
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
                  ) : (
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
                  )}
                </td>
                <td>
                  <Link to={`/owner/yards/${yard.id}`}>
                    <b className="trash-icon">{yard.reference}</b>
                  </Link>
                </td>
                <td className="text-truncate" title={yard.name}>
                  {yard.name}
                </td>
                <td className="text-truncate" title={yard.address}>
                  {yard.address}
                </td>
                <td>
                  {yard.openAt} - {yard.closeAt}
                </td>
                <td className={yard.isActive ? "green bold" : "red bold"}>
                  {yard.isActive ? "ACTIVE" : "INACTIVE"}
                </td>
                <td>{moment(yard.createdAt).format("DD/MM/yyyy")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <Pagination maxPage={maxPage} onChangePage={onChangePage} />
    </div>
  );
}

export default ManageYardsWidget;
