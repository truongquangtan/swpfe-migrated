import { confirmAlert } from "react-confirm-alert";
import { toast, ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import * as _ from "lodash";

import "./style.scss";
import { TOAST_CONFIG } from "../../constants/default";
import empty from "../../assets/images/empty.png";
import Pagination from "../Pagination";
import DisableElement from "../DisableElement";
import { getReports, markReportAsResolved } from "../../services/me.service";
import { HANDLED, NOT_HANDLED } from "../../constants/reportStatus";

function ManageReportsWidget() {
    const ITEMS_PER_PAGE = 10;
    const [reports, setReports] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [maxPage, setMaxPage] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        getAllReports();
    }, []);

    const getAllReports = (page = 1, itemsPerPage = ITEMS_PER_PAGE) => {
        setIsLoading(true);
        getReports({ page, itemsPerPage })
            .then((res) => {
                setReports(res.yardReportModels)
                setMaxPage(
                    res.maxResult % ITEMS_PER_PAGE === 0 && res.maxResult !== 0
                        ? res.maxResult / ITEMS_PER_PAGE
                        : Math.floor(res.maxResult / ITEMS_PER_PAGE) + 1
                );
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    const onChangePage = (page) => {
        getAllReports(page);
        setCurrentPage(page);
    };

    const getColor = (status) => {
        if (status === HANDLED) return "green bold";
        else if (status === NOT_HANDLED) return "red bold";
    };

    const maskAsResolved = (report) => {
        markReportAsResolved(report.reportId).then(() => {
            toast.success(
                `Mask as resolved successfully.`,
                TOAST_CONFIG
            );
            getAllReports(currentPage);
        });
    };

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

    return (
        <>
            <div className="mt-4 w-100">
                <h3 className="text-center mb-4">
                    Yard Reports
                </h3>
                {isLoading ? (
                    <div
                        className="w-100 d-flex justify-content-center align-items-center"
                        style={{ height: "50vh" }}
                    >
                        <DisableElement />
                    </div>
                ) : !reports.length ? (
                    <div className="w-100 pt-5 d-flex justify-content-center align-items-center flex-column h-300">
                        <img src={empty} style={{ width: 80 }} />
                        <p className="text-center nodata-text" style={{ fontSize: "0.9rem" }}>
                            No result available
                        </p>
                    </div>
                ) : (
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col" style={{ width: "10%" }}>
                                    User Reported
                                </th>
                                <th scope="col">Yard Name</th>
                                <th scope="col" style={{ width: "10%" }}>
                                    Address
                                </th>
                                <th scope="col">Reason</th>
                                <th scope="col">Owner Email</th>
                                <th scope="col" style={{ width: "12%" }}>Status</th>
                                <th scope="col">Created At</th>
                                <th scope="col">Updated At</th>
                                <th scope="col" style={{width: "3%"}}></th>
                            </tr>
                        </thead>
                        <tbody>
                            {reports.map((report) => {
                                return (
                                    <tr key={report.reportId}>
                                        <td>{report.userName}</td>
                                        <td>{report.yardName}</td>
                                        <td
                                            className="text-truncate"
                                            title={report.yardAddress}
                                        >
                                            {report.yardAddress}
                                        </td>
                                        <td>{report.reason}</td>
                                        <td>{report.ownerEmail}</td>
                                        <td className={getColor(report.status)}>{report.status}</td>
                                        <td>{report.createdAt}</td>
                                        <td>{report.updatedAt}</td>
                                        <td>
                                            {report.status === NOT_HANDLED ? (
                                                <i
                                                className="trash-icon fas fa-check-circle col-4"
                                                title="Active"
                                                onClick={() =>
                                                    onSimpleClick(
                                                        "Enable",
                                                        `Are you sure to mask the report as resolved?`,
                                                        () => maskAsResolved(report)
                                                    )
                                                }
                                            ></i>
                                            ) : <></>}
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                )}
                <Pagination maxPage={maxPage} onChangePage={onChangePage} />
            </div>
            <ToastContainer />
        </>
    );
}

export default ManageReportsWidget;
