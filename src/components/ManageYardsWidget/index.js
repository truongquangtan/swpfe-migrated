import React from "react";
import { confirmAlert } from "react-confirm-alert";

import "./style.scss";
import playground from "../../assets/images/playground.png"

function ManageYardsWidget() {
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

    const onUpdateClick = async (yard) => {
        confirmAlert({
            customUI: ({ onClose }) => {
                return (
                    <div className="custom-confirm" style={{ width: "90vw" }}>
                        <h4>Yard Details</h4>
                        <div className="d-flex">
                            <form className="my-3 col-3 mw-410">
                                <div className="row p-2">
                                    <span className="col-1 lh-44 signup__icon-wrapper" title="Name">
                                        <i className="fas fa-address-card"></i>
                                    </span>
                                    <input
                                        className="col-11 outline-none p-2 signup__input-border"
                                        type="text"
                                        placeholder="Name"
                                    />
                                </div>
                                <div className="row p-2">
                                    <span className="col-1 lh-44 signup__icon-wrapper" title="Province">
                                        <i className="far fa-map"></i>
                                    </span>
                                    <input
                                        className="col-11 outline-none p-2 signup__input-border"
                                        type="text"
                                        placeholder="Province"
                                    />
                                </div>
                                <div className="row p-2">
                                    <span className="col-1 lh-44 signup__icon-wrapper" title="District">
                                        <i className="fas fa-map-marker-alt"></i>
                                    </span>
                                    <input
                                        className="col-11 outline-none p-2 signup__input-border"
                                        type="text"
                                        placeholder="District"
                                    />
                                </div>
                                <div className="row p-2">
                                    <span className="col-1 lh-44 signup__icon-wrapper" title="Address">
                                        <i className="fas fa-map-pin"></i>
                                    </span>
                                    <input
                                        className="col-11 outline-none p-2 signup__input-border"
                                        type="text"
                                        placeholder="Address"
                                    />
                                </div>
                                <div className="row p-2">
                                    <span className="col-1 lh-44 signup__icon-wrapper" title="Size">
                                        <i class="fas fa-expand-arrows-alt"></i>
                                    </span>
                                    <select className="col-11 outline-none p-2 signup__input-border" style={{ backgroundColor: "white" }}>
                                        <option value="3 vs 3">3 vs 3</option>
                                        <option value="5 vs 5">5 vs 5</option>
                                    </select>
                                </div>
                                <div className="row p-2">
                                    <span className="col-1 lh-44 signup__icon-wrapper" title="Open Time">
                                        <i className="fas fa-clock"></i>
                                    </span>
                                    <input type="time" name="appt" className="col-11 outline-none p-2 signup__input-border"
                                        min="09:00" max="18:00" required placeholder="Open time" />
                                </div>
                                <div className="row p-2">
                                    <span className="col-1 lh-44 signup__icon-wrapper" title="Close Time">
                                        <i className="fas fa-clock"></i>
                                    </span>
                                    <input type="time" name="appt" className="col-11 outline-none p-2 signup__input-border"
                                        min="09:00" max="18:00" required placeholder="Close time" />
                                </div>
                                <div className="row p-2">
                                    <span className="col-1 lh-44 signup__icon-wrapper" title="Duration">
                                        <i className="fas fa-hourglass-half"></i>
                                    </span>
                                    <input type="time" name="appt" className="col-11 outline-none p-2 signup__input-border"
                                        min="09:00" max="18:00" required placeholder="Duration" />
                                </div>
                                <div className="row p-2">
                                    <span className="col-1 lh-44 signup__icon-wrapper" title="Default price/slot">
                                        <i className="fas fa-money-bill-wave"></i>
                                    </span>
                                    <input
                                        className="col-11 outline-none p-2 signup__input-border"
                                        type="text"
                                        placeholder="Default price/slot"
                                    />
                                </div>
                            </form>
                            <div className="flex-1 ps-3">
                                <div className="row h-50">
                                    <div className="col-4 p-3">
                                        <div className="upload__img-wrapper mb-2 color-blur">
                                            Intro image
                                        </div>
                                        <input
                                            className="outline-none custom-bg-input p-0 w-100"
                                            type="file"
                                        />
                                    </div>
                                    <div className="col-4 p-3">
                                        <div className="upload__img-wrapper mb-2 color-blur">
                                            Intro image
                                        </div>
                                        <input
                                            className="outline-none custom-bg-input p-0 w-100"
                                            type="file"
                                        />
                                    </div>
                                    <div className="col-4 p-3">
                                        <div className="upload__img-wrapper mb-2 color-blur">
                                            Intro image
                                        </div>
                                        <input
                                            className="outline-none custom-bg-input p-0 w-100"
                                            type="file"
                                        />
                                    </div>
                                </div>
                                <div className="row p-3 overflow-y-auto h-300">
                                    <div className="col-2 slot-create-container">
                                        <div className="slot-details flex-column">
                                            <p>
                                                <b>4:00 - 4:30</b>
                                            </p>
                                            <p className="mt-2">
                                                <input className="w-75 text-center border-none price-input py-2" type="text" value="60.000" /> VND
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-2 slot-create-container">
                                        <div className="slot-details flex-column">
                                            <p>
                                                <b>4:00 - 4:30</b>
                                            </p>
                                            <p className="mt-2">
                                                <input className="w-75 text-center border-none price-input py-2" type="text" value="60.000" /> VND
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-2 slot-create-container">
                                        <div className="slot-details flex-column">
                                            <p>
                                                <b>4:00 - 4:30</b>
                                            </p>
                                            <p className="mt-2">
                                                <input className="w-75 text-center border-none price-input py-2" type="text" value="60.000" /> VND
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-2 slot-create-container">
                                        <div className="slot-details flex-column">
                                            <p>
                                                <b>4:00 - 4:30</b>
                                            </p>
                                            <p className="mt-2">
                                                <input className="w-75 text-center border-none price-input py-2" type="text" value="60.000" /> VND
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-2 slot-create-container">
                                        <div className="slot-details flex-column">
                                            <p>
                                                <b>4:00 - 4:30</b>
                                            </p>
                                            <p className="mt-2">
                                                <input className="w-75 text-center border-none price-input py-2" type="text" value="60.000" /> VND
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-2 slot-create-container">
                                        <div className="slot-details flex-column">
                                            <p>
                                                <b>4:00 - 4:30</b>
                                            </p>
                                            <p className="mt-2">
                                                <input className="w-75 text-center border-none price-input py-2" type="text" value="60.000" /> VND
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-2 slot-create-container">
                                        <div className="slot-details flex-column">
                                            <p>
                                                <b>4:00 - 4:30</b>
                                            </p>
                                            <p className="mt-2">
                                                <input className="w-75 text-center border-none price-input py-2" type="text" value="60.000" /> VND
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-2 slot-create-container">
                                        <div className="slot-details flex-column">
                                            <p>
                                                <b>4:00 - 4:30</b>
                                            </p>
                                            <p className="mt-2">
                                                <input className="w-75 text-center border-none price-input py-2" type="text" value="60.000" /> VND
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-2 slot-create-container">
                                        <div className="slot-details flex-column">
                                            <p>
                                                <b>4:00 - 4:30</b>
                                            </p>
                                            <p className="mt-2">
                                                <input className="w-75 text-center border-none price-input py-2" type="text" value="60.000" /> VND
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-2 slot-create-container">
                                        <div className="slot-details flex-column">
                                            <p>
                                                <b>4:00 - 4:30</b>
                                            </p>
                                            <p className="mt-2">
                                                <input className="w-75 text-center border-none price-input py-2" type="text" value="60.000" /> VND
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-2 slot-create-container">
                                        <div className="slot-details flex-column">
                                            <p>
                                                <b>4:00 - 4:30</b>
                                            </p>
                                            <p className="mt-2">
                                                <input className="w-75 text-center border-none price-input py-2" type="text" value="60.000" /> VND
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-2 slot-create-container">
                                        <div className="slot-details flex-column">
                                            <p>
                                                <b>4:00 - 4:30</b>
                                            </p>
                                            <p className="mt-2">
                                                <input className="w-75 text-center border-none price-input py-2" type="text" value="60.000" /> VND
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-2 slot-create-container">
                                        <div className="slot-details flex-column">
                                            <p>
                                                <b>4:00 - 4:30</b>
                                            </p>
                                            <p className="mt-2">
                                                <input className="w-75 text-center border-none price-input py-2" type="text" value="60.000" /> VND
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-2 slot-create-container">
                                        <div className="slot-details flex-column">
                                            <p>
                                                <b>4:00 - 4:30</b>
                                            </p>
                                            <p className="mt-2">
                                                <input className="w-75 text-center border-none price-input py-2" type="text" value="60.000" /> VND
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-2 slot-create-container">
                                        <div className="slot-details flex-column">
                                            <p>
                                                <b>4:00 - 4:30</b>
                                            </p>
                                            <p className="mt-2">
                                                <input className="w-75 text-center border-none price-input py-2" type="text" value="60.000" /> VND
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-2 slot-create-container">
                                        <div className="slot-details flex-column">
                                            <p>
                                                <b>4:00 - 4:30</b>
                                            </p>
                                            <p className="mt-2">
                                                <input className="w-75 text-center border-none price-input py-2" type="text" value="60.000" /> VND
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-2 slot-create-container">
                                        <div className="slot-details flex-column">
                                            <p>
                                                <b>4:00 - 4:30</b>
                                            </p>
                                            <p className="mt-2">
                                                <input className="w-75 text-center border-none price-input py-2" type="text" value="60.000" /> VND
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-2 slot-create-container">
                                        <div className="slot-details flex-column">
                                            <p>
                                                <b>4:00 - 4:30</b>
                                            </p>
                                            <p className="mt-2">
                                                <input className="w-75 text-center border-none price-input py-2" type="text" value="60.000" /> VND
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-2 slot-create-container">
                                        <div className="slot-details flex-column">
                                            <p>
                                                <b>4:00 - 4:30</b>
                                            </p>
                                            <p className="mt-2">
                                                <input className="w-75 text-center border-none price-input py-2" type="text" value="60.000" /> VND
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-2 slot-create-container">
                                        <div className="slot-details flex-column">
                                            <p>
                                                <b>4:00 - 4:30</b>
                                            </p>
                                            <p className="mt-2">
                                                <input className="w-75 text-center border-none price-input py-2" type="text" value="60.000" /> VND
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-2 slot-create-container">
                                        <div className="slot-details flex-column">
                                            <p>
                                                <b>4:00 - 4:30</b>
                                            </p>
                                            <p className="mt-2">
                                                <input className="w-75 text-center border-none price-input py-2" type="text" value="60.000" /> VND
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-2 slot-create-container">
                                        <div className="slot-details flex-column">
                                            <p>
                                                <b>4:00 - 4:30</b>
                                            </p>
                                            <p className="mt-2">
                                                <input className="w-75 text-center border-none price-input py-2" type="text" value="60.000" /> VND
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-2 slot-create-container">
                                        <div className="slot-details flex-column">
                                            <p>
                                                <b>4:00 - 4:30</b>
                                            </p>
                                            <p className="mt-2">
                                                <input className="w-75 text-center border-none price-input py-2" type="text" value="60.000" /> VND
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-2 slot-create-container">
                                        <div className="slot-details flex-column">
                                            <p>
                                                <b>4:00 - 4:30</b>
                                            </p>
                                            <p className="mt-2">
                                                <input className="w-75 text-center border-none price-input py-2" type="text" value="60.000" /> VND
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-2 slot-create-container">
                                        <div className="slot-details flex-column">
                                            <p>
                                                <b>4:00 - 4:30</b>
                                            </p>
                                            <p className="mt-2">
                                                <input className="w-75 text-center border-none price-input py-2" type="text" value="60.000" /> VND
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-2 slot-create-container">
                                        <div className="slot-details flex-column">
                                            <p>
                                                <b>4:00 - 4:30</b>
                                            </p>
                                            <p className="mt-2">
                                                <input className="w-75 text-center border-none price-input py-2" type="text" value="60.000" /> VND
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-2 slot-create-container">
                                        <div className="slot-details flex-column">
                                            <p>
                                                <b>4:00 - 4:30</b>
                                            </p>
                                            <p className="mt-2">
                                                <input className="w-75 text-center border-none price-input py-2" type="text" value="60.000" /> VND
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button
                            className="btn btn-primary me-3 px-4"
                            onClick={() => {
                                this.handleClickDelete();
                                onClose();
                            }}
                        >
                            {yard ? "Save" : "Create"}
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
    }

    const handleDisableYard = () => { }

    const handleEnableYard = () => { }

    const handleDeleteClick = () => { }

    return <div className="pt-4 w-100">
        <h4 className="mb-4 d-inline-block">
            <img src={playground} alt="Transaction" className="width-60 pe-3" />
            Yard Management
        </h4>
        <button className="btn btn-primary px-4 ms-5" onClick={() => onUpdateClick()}>
            <i class="fas fa-plus me-2" style={{ fontSize: "0.8rem" }}></i>
            <b>Add</b>
        </button>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col" style={{ width: "10%" }}>Actions</th>
                    <th scope="col">Reference</th>
                    <th scope="col">Name</th>
                    <th scope="col">Type</th>
                    <th scope="col" style={{ width: "22%" }}>Address</th>
                    <th scope="col">Created By</th>
                    <th scope="col">Created At</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <i className="trash-icon fas fa-trash-alt col-4" title="Delete" onClick={() => onSimpleClick("Delete", "Are you sure to delete this yard permanently?", handleDeleteClick)}></i>
                        <i className="trash-icon fas fa-ban col-4" title="Deactive" onClick={() => onSimpleClick("Disable", "Are you sure to disable this yard?", handleDisableYard)}></i>
                        <i className="trash-icon fas fa-check-circle col-4" title="Active" onClick={() => onSimpleClick("Enable", "Are you sure to activate this yard?", handleEnableYard)}></i>
                    </td>
                    <td><b className="trash-icon" onClick={onUpdateClick}>1009</b></td>
                    <td className="text-truncate" title="Sân quận 9">Sân quận 9</td>
                    <td>3 vs 3</td>
                    <td className="text-truncate" title="Lô E2a-7, Đường D1, Đ. D1, Long Thạnh Mỹ, Thành Phố Thủ Đức, Thành
                        phố Hồ Chí Minh 700000">
                        Lô E2a-7, Đường D1, Đ. D1, Long Thạnh Mỹ, Thành Phố Thủ Đức, Thành
                        phố Hồ Chí Minh 700000
                    </td>
                    <td>Admin</td>
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
    </div>;
}

export default ManageYardsWidget;