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
import { HANDLED, PENDING, REJECTED } from "../../constants/reportStatus";
import { rejectReport } from "../../services/me.service";

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
        else if (status === PENDING) return "yellow bold";
        else if (status === REJECTED) return "red bold";
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

    const rejectReportRequest = (report) => {
        rejectReport(report.reportId).then(() => {
            toast.success(
                `Reject successfully.`,
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
                        <button onClick={onClose} className="btn btn-primary">
                            Cancel
                        </button>
                    </div>
                );
            },
            closeOnEscape: true,
            closeOnClickOutside: true,
        });
    };

    const onReferenceClick = (report) => {
        confirmAlert({
            customUI: ({ onClose }) => {
                return (
                    <div className="report__details-form">
                        <div className="row mb-1 report__details-field">
                            <span className="col-3 fw-bolder">Yard:</span>
                            <span className="col-9">{report.yardName}</span>
                        </div>
                        <div className="row mb-1 report__details-field">
                            <span className="col-3 fw-bolder">Address:</span>
                            <span className="col-9">
                                {report.yardAddress}
                            </span>
                        </div>
                        <div className="row mb-1 report__details-field">
                            <span className="col-3 fw-bolder">Owner:</span>
                            <span className="col-9">
                                {report.ownerName}
                            </span>
                        </div>
                        <div className="row mb-1 report__details-field">
                            <span className="col-3 fw-bolder">Owner Email:</span>
                            <span className="col-9">
                                {report.ownerEmail}
                            </span>
                        </div>
                        <div className="row mb-1 report__details-field">
                            <span className="col-3 fw-bolder">User Reported:</span>
                            <span className="col-9">
                                {report.userName}
                            </span>
                        </div>
                        <div className="row mb-1 report__details-field">
                            <span className="col-3 fw-bolder">User Email:</span>
                            <span className="col-9">
                                {report.userEmail}
                            </span>
                        </div>
                        <div className="row mb-1 report__details-field">
                            <span className="col-3 fw-bolder">Reason:</span>
                            <span className="col-9">
                                {report.reason}
                            </span>
                        </div>
                        <div className="row mb-1 report__details-field">
                            <span className="col-3 fw-bolder">Status:</span>
                            <span className={"col-9 " + getColor(report.status)}>
                                {report.status}
                            </span>
                        </div>
                        <div className="row mb-1 report__details-field">
                            <span className="col-3 fw-bolder">Created At:</span>
                            <span className="col-9">
                                {report.createdAt}
                            </span>
                        </div>
                        <div className="row mb-1 report__details-field">
                            <span className="col-3 fw-bolder">Updated At:</span>
                            <span className="col-9">
                                {report.updatedAt}
                            </span>
                        </div>
                        <button onClick={onClose} className="btn btn-primary">
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
            <div className="mt-5 pt-4 w-100">
                <h4 className="mb-4 d-inline-block">
                    <i className="fas fa-exclamation-triangle me-3" />
                    Reports
                </h4>
                {isLoading ? (
                    <div
                        className="w-100 d-flex justify-content-center align-items-center"
                        style={{ height: "50vh" }}
                    >
                        <DisableElement />
                    </div>
                ) : (!reports || !reports.length) ? (
                    <div className="w-100 pt-5 d-flex justify-content-center align-items-center flex-column h-300">
                        <img src={empty} style={{ width: 80 }} />
                        <p className="text-center nodata-text" style={{ fontSize: "0.9rem" }}>
                            No result available
                        </p>
                    </div>
                ) : (
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col" style={{ width: "10%", textAlign: "center" }}>Action</th>
                                <th scope="col" style={{ width: "10%" }}>Reference</th>
                                <th scope="col">Yard</th>
                                <th scope="col" style={{ width: "10%" }}>Status</th>
                                <th scope="col">
                                    Created By
                                </th>
                                <th scope="col">Created At</th>
                            </tr>
                        </thead>
                        <tbody>
                            {reports.map((report) => {
                                return (
                                    <tr key={report.reportId}>
                                        <td style={{ textAlign: "center" }}>
                                            {report.status === PENDING ? (<>
                                                <i
                                                    className="trash-icon fas fa-check-circle col-4"
                                                    title="Mask as handled"
                                                    onClick={() =>
                                                        onSimpleClick(
                                                            "Enable",
                                                            `Are you sure to mask the report as resolved?`,
                                                            () => maskAsResolved(report)
                                                        )
                                                    }
                                                ></i>
                                                <span> </span>
                                                <i
                                                    className="fas fa-times trash-icon col-4"
                                                    title="Reject"
                                                    onClick={() =>
                                                        onSimpleClick(
                                                            "Enable",
                                                            `Are you sure to reject the report`,
                                                            () => rejectReportRequest(report)
                                                        )
                                                    }
                                                ></i>
                                            </>
                                            ) :
                                                <></>}
                                        </td>
                                        <td className="trash-icon" onClick={() => onReferenceClick(report)}>
                                            <b>{report.reference}</b>
                                        </td>
                                        <td>{report.yardName}</td>
                                        <td className={getColor(report.status)}>{report.status}</td>
                                        <td>{report.userName}</td>
                                        <td>{report.createdAt}</td>
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
