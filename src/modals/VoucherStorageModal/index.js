import { ToastContainer, toast } from "react-toastify";
import { EMPTY, TOAST_CONFIG } from "../../constants/default";

import "./style.scss";
import noData from "../../assets/images/no-data.jpg";
import voucher from "../../assets/images/voucher.png";
import voucher1 from "../../assets/images/voucher-1.png";

const VoucherStorageModal = ({ toggleModal, ownerId, onSelect }) => {
  const copyToClipBoard = (value) => {
    navigator.clipboard.writeText(value);
    toast.info("Copy to clipboard", TOAST_CONFIG);
  };

  return (
    <div
      className="p-5"
      style={{ backgroundColor: "white", width: "90vw", borderRadius: 5 }}
    >
      <h4 className="text-center mb-4 size-2">
        <img src={voucher1} alt="Transaction" className="width-60 pe-3" />
        Available Vouchers
      </h4>
      <div className="row mt-5 yard__result-container">
        <div className="voucher-wrapper col-4 p-3 pe-2" to="/home/yard/1">
          <div className="yard-result">
            <img src={voucher} alt="basketball yard" />
            <div className="yard-details p-3">
              <b className="d-block mb-2">Discount 10%</b>
              <p className="row mb-1" style={{ fontSize: "0.9rem" }}>
                <i className="fas fa-expand-arrows-alt col-1 pt-1"></i>
                <span className="ps-2 color-blur col-10">Up to 15.000 VND</span>
              </p>
              <p
                className="row mb-1"
                title="Effective date"
                style={{ fontSize: "0.9rem" }}
              >
                <i className="fas fa-clock col-1 pt-1"></i>
                <span className="ps-2 color-blur col-10">
                  27/05/2022 - 01/06/2022
                </span>
              </p>
              <p className="row mb-1">
                <i
                  className="trash-icon fas fa-copy col-1 pt-1"
                  title="Copy"
                  onClick={() => copyToClipBoard("qR8KU5x1qFKtqxS")}
                ></i>
                <span
                  className="ps-2 bold col-10 voucher-code"
                  value="qR8KU5x1qFKtqxS"
                >
                  qR8KU5x1qFKtqxS
                </span>
              </p>
              <p className="row mt-2 ps-2" title="32% already in use">
                <progress id="file" value="32" max="100">
                  {" "}
                  32%{" "}
                </progress>
              </p>
            </div>
          </div>
        </div>
        <div className="voucher-wrapper col-4 p-3 pe-2" to="/home/yard/1">
          <div className="yard-result">
            <img src={voucher} alt="basketball yard" />
            <div className="yard-details p-3">
              <b className="d-block mb-2">Discount 10.000 VND</b>
              <p className="row mb-1" style={{ fontSize: "0.9rem" }}>
                <i className="fas fa-expand-arrows-alt col-1 pt-1"></i>
                <span className="ps-2 color-blur col-10">
                  Bill at least 100.000 VND
                </span>
              </p>
              <p
                className="row mb-1"
                title="Effective date"
                style={{ fontSize: "0.9rem" }}
              >
                <i className="fas fa-clock col-1 pt-1"></i>
                <span className="ps-2 color-blur col-10">
                  27/05/2022 - 01/06/2022
                </span>
              </p>
              <p className="row mb-1">
                <i
                  className="trash-icon fas fa-copy col-1 pt-1"
                  title="Copy"
                  onClick={() => copyToClipBoard("qR8KU5x1qFKtqxS")}
                ></i>
                <span
                  className="ps-2 bold col-10 voucher-code"
                  value="qR8KU5x1qFKtqxS"
                >
                  qR8KU5x1qFKtqxS
                </span>
              </p>
              <p className="row mt-2 ps-2" title="64% already in use">
                <progress id="file" value="64" max="100">
                  {" "}
                  64%{" "}
                </progress>
              </p>
            </div>
          </div>
        </div>
        <div className="voucher-wrapper col-4 p-3 pe-2" to="/home/yard/1">
          <div className="yard-result">
            <img src={voucher} alt="basketball yard" />
            <div className="yard-details p-3">
              <b className="d-block mb-2">Discount 10.000 VND</b>
              <p className="row mb-1" style={{ fontSize: "0.9rem" }}>
                <i className="fas fa-expand-arrows-alt col-1 pt-1"></i>
                <span className="ps-2 color-blur col-10">
                  Bill at least 100.000 VND
                </span>
              </p>
              <p
                className="row mb-1"
                title="Effective date"
                style={{ fontSize: "0.9rem" }}
              >
                <i className="fas fa-clock col-1 pt-1"></i>
                <span className="ps-2 color-blur col-10">
                  27/05/2022 - 01/06/2022
                </span>
              </p>
              <p className="row mb-1">
                <i
                  className="trash-icon fas fa-copy col-1 pt-1"
                  title="Copy"
                  onClick={() => copyToClipBoard("qR8KU5x1qFKtqxS")}
                ></i>
                <span
                  className="ps-2 bold col-10 voucher-code"
                  value="qR8KU5x1qFKtqxS"
                >
                  qR8KU5x1qFKtqxS
                </span>
              </p>
              <p className="row mt-2 ps-2" title="64% already in use">
                <progress id="file" value="64" max="100">
                  {" "}
                  64%{" "}
                </progress>
              </p>
            </div>
          </div>
        </div>
        <div className="voucher-wrapper col-4 p-3 pe-2" to="/home/yard/1">
          <div className="yard-result">
            <img src={voucher} alt="basketball yard" />
            <div className="yard-details p-3">
              <b className="d-block mb-2">Discount 10%</b>
              <p className="row mb-1" style={{ fontSize: "0.9rem" }}>
                <i className="fas fa-expand-arrows-alt col-1 pt-1"></i>
                <span className="ps-2 color-blur col-10">Up to 15.000 VND</span>
              </p>
              <p
                className="row mb-1"
                title="Effective date"
                style={{ fontSize: "0.9rem" }}
              >
                <i className="fas fa-clock col-1 pt-1"></i>
                <span className="ps-2 color-blur col-10">
                  27/05/2022 - 01/06/2022
                </span>
              </p>
              <p className="row mb-1">
                <i
                  className="trash-icon fas fa-copy col-1 pt-1"
                  title="Copy"
                  onClick={() => copyToClipBoard("qR8KU5x1qFKtqxS")}
                ></i>
                <span
                  className="ps-2 bold col-10 voucher-code"
                  value="qR8KU5x1qFKtqxS"
                >
                  qR8KU5x1qFKtqxS
                </span>
              </p>
              <p className="row mt-2 ps-2" title="32% already in use">
                <progress id="file" value="32" max="100">
                  {" "}
                  32%{" "}
                </progress>
              </p>
            </div>
          </div>
        </div>
        <div className="voucher-wrapper col-4 p-3 pe-2" to="/home/yard/1">
          <div className="yard-result">
            <img src={voucher} alt="basketball yard" />
            <div className="yard-details p-3">
              <b className="d-block mb-2">Discount 10%</b>
              <p className="row mb-1" style={{ fontSize: "0.9rem" }}>
                <i className="fas fa-expand-arrows-alt col-1 pt-1"></i>
                <span className="ps-2 color-blur col-10">Up to 15.000 VND</span>
              </p>
              <p
                className="row mb-1"
                title="Effective date"
                style={{ fontSize: "0.9rem" }}
              >
                <i className="fas fa-clock col-1 pt-1"></i>
                <span className="ps-2 color-blur col-10">
                  27/05/2022 - 01/06/2022
                </span>
              </p>
              <p className="row mb-1">
                <i
                  className="trash-icon fas fa-copy col-1 pt-1"
                  title="Copy"
                  onClick={() => copyToClipBoard("qR8KU5x1qFKtqxS")}
                ></i>
                <span
                  className="ps-2 bold col-10 voucher-code"
                  value="qR8KU5x1qFKtqxS"
                >
                  qR8KU5x1qFKtqxS
                </span>
              </p>
              <p className="row mt-2 ps-2" title="32% already in use">
                <progress id="file" value="32" max="100">
                  {" "}
                  32%{" "}
                </progress>
              </p>
            </div>
          </div>
        </div>
        <div className="voucher-wrapper col-4 p-3 pe-2" to="/home/yard/1">
          <div className="yard-result">
            <img src={voucher} alt="basketball yard" />
            <div className="yard-details p-3">
              <b className="d-block mb-2">Discount 10.000 VND</b>
              <p className="row mb-1" style={{ fontSize: "0.9rem" }}>
                <i className="fas fa-expand-arrows-alt col-1 pt-1"></i>
                <span className="ps-2 color-blur col-10">
                  Bill at least 100.000 VND
                </span>
              </p>
              <p
                className="row mb-1"
                title="Effective date"
                style={{ fontSize: "0.9rem" }}
              >
                <i className="fas fa-clock col-1 pt-1"></i>
                <span className="ps-2 color-blur col-10">
                  27/05/2022 - 01/06/2022
                </span>
              </p>
              <p className="row mb-1">
                <i
                  className="trash-icon fas fa-copy col-1 pt-1"
                  title="Copy"
                  onClick={() => copyToClipBoard("qR8KU5x1qFKtqxS")}
                ></i>
                <span
                  className="ps-2 bold col-10 voucher-code"
                  value="qR8KU5x1qFKtqxS"
                >
                  qR8KU5x1qFKtqxS
                </span>
              </p>
              <p className="row mt-2 ps-2" title="64% already in use">
                <progress id="file" value="64" max="100">
                  {" "}
                  64%{" "}
                </progress>
              </p>
            </div>
          </div>
        </div>
        <div className="voucher-wrapper col-4 p-3 pe-2" to="/home/yard/1">
          <div className="yard-result">
            <img src={voucher} alt="basketball yard" />
            <div className="yard-details p-3">
              <b className="d-block mb-2">Discount 10%</b>
              <p className="row mb-1" style={{ fontSize: "0.9rem" }}>
                <i className="fas fa-expand-arrows-alt col-1 pt-1"></i>
                <span className="ps-2 color-blur col-10">Up to 15.000 VND</span>
              </p>
              <p
                className="row mb-1"
                title="Effective date"
                style={{ fontSize: "0.9rem" }}
              >
                <i className="fas fa-clock col-1 pt-1"></i>
                <span className="ps-2 color-blur col-10">
                  27/05/2022 - 01/06/2022
                </span>
              </p>
              <p className="row mb-1">
                <i
                  className="trash-icon fas fa-copy col-1 pt-1"
                  title="Copy"
                  onClick={() => copyToClipBoard("qR8KU5x1qFKtqxS")}
                ></i>
                <span
                  className="ps-2 bold col-10 voucher-code"
                  value="qR8KU5x1qFKtqxS"
                >
                  qR8KU5x1qFKtqxS
                </span>
              </p>
              <p className="row mt-2 ps-2" title="32% already in use">
                <progress id="file" value="32" max="100">
                  {" "}
                  32%{" "}
                </progress>
              </p>
            </div>
          </div>
        </div>
        <div className="voucher-wrapper col-4 p-3 pe-2" to="/home/yard/1">
          <div className="yard-result">
            <img src={voucher} alt="basketball yard" />
            <div className="yard-details p-3">
              <b className="d-block mb-2">Discount 10%</b>
              <p className="row mb-1" style={{ fontSize: "0.9rem" }}>
                <i className="fas fa-expand-arrows-alt col-1 pt-1"></i>
                <span className="ps-2 color-blur col-10">Up to 15.000 VND</span>
              </p>
              <p
                className="row mb-1"
                title="Effective date"
                style={{ fontSize: "0.9rem" }}
              >
                <i className="fas fa-clock col-1 pt-1"></i>
                <span className="ps-2 color-blur col-10">
                  27/05/2022 - 01/06/2022
                </span>
              </p>
              <p className="row mb-1">
                <i
                  className="trash-icon fas fa-copy col-1 pt-1"
                  title="Copy"
                  onClick={() => copyToClipBoard("qR8KU5x1qFKtqxS")}
                ></i>
                <span
                  className="ps-2 bold col-10 voucher-code"
                  value="qR8KU5x1qFKtqxS"
                >
                  qR8KU5x1qFKtqxS
                </span>
              </p>
              <p className="row mt-2 ps-2" title="32% already in use">
                <progress id="file" value="32" max="100">
                  {" "}
                  32%{" "}
                </progress>
              </p>
            </div>
          </div>
        </div>
        <div className="voucher-wrapper col-4 p-3 pe-2" to="/home/yard/1">
          <div className="yard-result">
            <img src={voucher} alt="basketball yard" />
            <div className="yard-details p-3">
              <b className="d-block mb-2">Discount 10.000 VND</b>
              <p className="row mb-1" style={{ fontSize: "0.9rem" }}>
                <i className="fas fa-expand-arrows-alt col-1 pt-1"></i>
                <span className="ps-2 color-blur col-10">
                  Bill at least 100.000 VND
                </span>
              </p>
              <p
                className="row mb-1"
                title="Effective date"
                style={{ fontSize: "0.9rem" }}
              >
                <i className="fas fa-clock col-1 pt-1"></i>
                <span className="ps-2 color-blur col-10">
                  27/05/2022 - 01/06/2022
                </span>
              </p>
              <p className="row mb-1">
                <i
                  className="trash-icon fas fa-copy col-1 pt-1"
                  title="Copy"
                  onClick={() => copyToClipBoard("qR8KU5x1qFKtqxS")}
                ></i>
                <span
                  className="ps-2 bold col-10 voucher-code"
                  value="qR8KU5x1qFKtqxS"
                >
                  qR8KU5x1qFKtqxS
                </span>
              </p>
              <p className="row mt-2 ps-2" title="64% already in use">
                <progress id="file" value="64" max="100">
                  {" "}
                  64%{" "}
                </progress>
              </p>
            </div>
          </div>
        </div>
        {/* <div className=" row justify-content-center align-items-center">
      <img className="nodata-img" src={noData} alt="No data availble" />
      <p className="text-center nodata-text">No yards available</p>
    </div> */}
      </div>
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
      <button className="btn btn-primary me-3 px-4">Apply</button>
      <button onClick={toggleModal} className="btn btn-light">
        Cancel
      </button>
      <ToastContainer />
    </div>
  );
};

export default VoucherStorageModal;
