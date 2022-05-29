import React from "react";
import { confirmAlert } from "react-confirm-alert";

import "./style.scss";
import hourglass from "../../assets/images/hourglass.png";

function PendingPaymentsWidget() {
  const onCheckoutClick = async () => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className="custom-confirm">
            <h4>Checking Out</h4>
            <p className="mb-3">Are you sure to check out this payment?</p>
            <button
              className="btn btn-primary me-3"
              onClick={() => {
                this.handleClickDelete();
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

  const onRefClick = async () => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className="custom-confirm" style={{width: 600}}>
            <h4>Payment Details</h4>
            <div className="flex-column pt-4">
              <div className="matches-container">
                <div className="match-container row mb-2">
                  <div className="col-3 basket__img-container d-flex justify-content-center align-items-center">
                    <p className="text-center">
                      <b>4:00 - 5:00</b>
                      <br />
                      <span style={{ fontSize: "0.9rem" }}>26/05/2022</span>
                    </p>
                  </div>
                  <div className="p-3 ps-0 pe-1 col-6">
                    <p>
                      <b>Sân quận 9</b> - (3 vs 3)
                    </p>
                    <p className="color-blur">
                      Lô E2a-7, Đường D1, Đ. D1, Long Thạnh Mỹ, Thành Phố Thủ
                      Đức, Thành phố Hồ Chí Minh 700000
                    </p>
                  </div>
                  <div className="col-3 basket__img-container d-flex justify-content-center align-items-center">
                    <p>
                      <b>100.000 VND</b>
                    </p>
                  </div>
                </div>
                <div className="match-container row mb-2">
                  <div className="col-3 basket__img-container d-flex justify-content-center align-items-center">
                    <p className="text-center">
                      <b>4:00 - 5:00</b>
                      <br />
                      <span style={{ fontSize: "0.9rem" }}>26/05/2022</span>
                    </p>
                  </div>
                  <div className="p-3 ps-0 pe-1 col-6">
                    <p>
                      <b>Sân quận 9</b> - (3 vs 3)
                    </p>
                    <p className="color-blur">
                      Lô E2a-7, Đường D1, Đ. D1, Long Thạnh Mỹ, Thành Phố Thủ
                      Đức, Thành phố Hồ Chí Minh 700000
                    </p>
                  </div>
                  <div className="col-3 basket__img-container d-flex justify-content-center align-items-center">
                    <p>
                      <b>100.000 VND</b>
                    </p>
                  </div>
                </div>
                <div className="match-container row mb-2">
                  <div className="col-3 basket__img-container d-flex justify-content-center align-items-center">
                    <p className="text-center">
                      <b>4:00 - 5:00</b>
                      <br />
                      <span style={{ fontSize: "0.9rem" }}>26/05/2022</span>
                    </p>
                  </div>
                  <div className="p-3 ps-0 pe-1 col-6">
                    <p>
                      <b>Sân quận 9</b> - (3 vs 3)
                    </p>
                    <p className="color-blur">
                      Lô E2a-7, Đường D1, Đ. D1, Long Thạnh Mỹ, Thành Phố Thủ
                      Đức, Thành phố Hồ Chí Minh 700000
                    </p>
                  </div>
                  <div className="col-3 basket__img-container d-flex justify-content-center align-items-center">
                    <p>
                      <b>100.000 VND</b>
                    </p>
                  </div>
                </div>
                <div className="match-container row mb-2">
                  <div className="col-3 basket__img-container d-flex justify-content-center align-items-center">
                    <p className="text-center">
                      <b>4:00 - 5:00</b>
                      <br />
                      <span style={{ fontSize: "0.9rem" }}>26/05/2022</span>
                    </p>
                  </div>
                  <div className="p-3 ps-0 pe-1 col-6">
                    <p>
                      <b>Sân quận 9</b> - (3 vs 3)
                    </p>
                    <p className="color-blur">
                      Lô E2a-7, Đường D1, Đ. D1, Long Thạnh Mỹ, Thành Phố Thủ
                      Đức, Thành phố Hồ Chí Minh 700000
                    </p>
                  </div>
                  <div className="col-3 basket__img-container d-flex justify-content-center align-items-center">
                    <p>
                      <b>100.000 VND</b>
                    </p>
                  </div>
                </div>
              </div>
              <div className="pt-3 pb-3 row">
                <div className="col-3">Total</div>
                <div className="col-9 text-end">
                  <b>1.000.000 VND</b>
                </div>
              </div>
            </div>
            <button
              className="btn btn-primary me-3"
              onClick={() => {
                this.handleClickDelete();
                onClose();
              }}
            >
              Checkout
            </button>
            <button onClick={onClose} className="btn btn-light">
              Close
            </button>
          </div>
        );
      },
      closeOnEscape: true,
      closeOnClickOutside: true,
    });
  };

  return (
    <div className="col-6 ps-4 pe-4 flex-column pt-4">
      <h4 className="text-center mb-4">
        <img src={hourglass} alt="basketball" className="width-60 pe-3" />
        Pending Payments
      </h4>
      <div className="table-header px-3 mb-2">
        <div className="row">
          <div className="p-3 col-2 d-flex align-items-center flex-column justify-content-center">
            <p className="text-center">Reference</p>
          </div>
          <div className="col-4 basket__img-container d-flex justify-content-center align-items-center">
            <p className="text-center">Created Date</p>
          </div>
          <div className="col-3 basket__img-container d-flex justify-content-center align-items-center">
            <p className="text-center">Amount</p>
          </div>
          <div className="col-3 basket__img-container d-flex justify-content-center align-items-center">
            <p className="text-center">Pay</p>
          </div>
        </div>
      </div>
      <div className="overflow-auto px-3 pending-payments">
        <div className="match-container row mb-2">
          <div className="p-3 ps-0 pe-1 col-2 d-flex align-items-center flex-column justify-content-center">
            <p className="text-center">
              <span onClick={onRefClick} className="trash-icon">
                <b>1009</b>
              </span>
            </p>
          </div>
          <div className="col-4 basket__img-container d-flex justify-content-center align-items-center">
            <p className="text-center">27/05/2022 17:08</p>
          </div>
          <div className="col-3 basket__img-container d-flex justify-content-center align-items-center">
            <p className="text-center">100.000 VND</p>
          </div>
          <div
            className="col-3 basket__img-container d-flex justify-content-center align-items-center"
            style={{ fontSize: "1.5rem" }}
          >
            <i
              className="far fa-money-bill-alt trash-icon"
              title="Checkout"
              onClick={onCheckoutClick}
            ></i>
          </div>
        </div>
        <div className="match-container row mb-2">
          <div className="p-3 ps-0 pe-1 col-2 d-flex align-items-center flex-column justify-content-center">
            <p className="text-center">
              <span onClick={onRefClick} className="trash-icon">
                <b>1009</b>
              </span>
            </p>
          </div>
          <div className="col-4 basket__img-container d-flex justify-content-center align-items-center">
            <p className="text-center">27/05/2022 17:08</p>
          </div>
          <div className="col-3 basket__img-container d-flex justify-content-center align-items-center">
            <p className="text-center">100.000 VND</p>
          </div>
          <div
            className="col-3 basket__img-container d-flex justify-content-center align-items-center"
            style={{ fontSize: "1.5rem" }}
          >
            <i
              className="far fa-money-bill-alt trash-icon"
              title="Checkout"
              onClick={onCheckoutClick}
            ></i>
          </div>
        </div>
        <div className="match-container row mb-2">
          <div className="p-3 ps-0 pe-1 col-2 d-flex align-items-center flex-column justify-content-center">
            <p className="text-center">
              <span onClick={onRefClick} className="trash-icon">
                <b>1009</b>
              </span>
            </p>
          </div>
          <div className="col-4 basket__img-container d-flex justify-content-center align-items-center">
            <p className="text-center">27/05/2022 17:08</p>
          </div>
          <div className="col-3 basket__img-container d-flex justify-content-center align-items-center">
            <p className="text-center">100.000 VND</p>
          </div>
          <div
            className="col-3 basket__img-container d-flex justify-content-center align-items-center"
            style={{ fontSize: "1.5rem" }}
          >
            <i
              className="far fa-money-bill-alt trash-icon"
              title="Checkout"
              onClick={onCheckoutClick}
            ></i>
          </div>
        </div>
        <div className="match-container row mb-2">
          <div className="p-3 ps-0 pe-1 col-2 d-flex align-items-center flex-column justify-content-center">
            <p className="text-center">
              <span onClick={onRefClick} className="trash-icon">
                <b>1009</b>
              </span>
            </p>
          </div>
          <div className="col-4 basket__img-container d-flex justify-content-center align-items-center">
            <p className="text-center">27/05/2022 17:08</p>
          </div>
          <div className="col-3 basket__img-container d-flex justify-content-center align-items-center">
            <p className="text-center">100.000 VND</p>
          </div>
          <div
            className="col-3 basket__img-container d-flex justify-content-center align-items-center"
            style={{ fontSize: "1.5rem" }}
          >
            <i
              className="far fa-money-bill-alt trash-icon"
              title="Checkout"
              onClick={onCheckoutClick}
            ></i>
          </div>
        </div>
        <div className="match-container row mb-2">
          <div className="p-3 ps-0 pe-1 col-2 d-flex align-items-center flex-column justify-content-center">
            <p className="text-center">
              <span onClick={onRefClick} className="trash-icon">
                <b>1009</b>
              </span>
            </p>
          </div>
          <div className="col-4 basket__img-container d-flex justify-content-center align-items-center">
            <p className="text-center">27/05/2022 17:08</p>
          </div>
          <div className="col-3 basket__img-container d-flex justify-content-center align-items-center">
            <p className="text-center">100.000 VND</p>
          </div>
          <div
            className="col-3 basket__img-container d-flex justify-content-center align-items-center"
            style={{ fontSize: "1.5rem" }}
          >
            <i
              className="far fa-money-bill-alt trash-icon"
              title="Checkout"
              onClick={onCheckoutClick}
            ></i>
          </div>
        </div>
        <div className="match-container row mb-2">
          <div className="p-3 ps-0 pe-1 col-2 d-flex align-items-center flex-column justify-content-center">
            <p className="text-center">
              <span onClick={onRefClick} className="trash-icon">
                <b>1009</b>
              </span>
            </p>
          </div>
          <div className="col-4 basket__img-container d-flex justify-content-center align-items-center">
            <p className="text-center">27/05/2022 17:08</p>
          </div>
          <div className="col-3 basket__img-container d-flex justify-content-center align-items-center">
            <p className="text-center">100.000 VND</p>
          </div>
          <div
            className="col-3 basket__img-container d-flex justify-content-center align-items-center"
            style={{ fontSize: "1.5rem" }}
          >
            <i
              className="far fa-money-bill-alt trash-icon"
              title="Checkout"
              onClick={onCheckoutClick}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PendingPaymentsWidget;
