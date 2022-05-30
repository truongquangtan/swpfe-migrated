import { confirmAlert } from "react-confirm-alert";

import "./style.scss";
import cashback from "../../assets/images/cashback.png";

function ReturnPaymentsWidget() {
  const onClick = async () => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className="custom-confirm">
            <h4>Return Cash</h4>
            <p className="mb-3">
              Are you sure to return cashback for this match?
            </p>
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

  return (
    <div className="col-6 ps-4 pe-4 flex-column pt-4">
      <h4 className="text-center mb-4">
        <img src={cashback} alt="basketball" className="width-60 pe-3" />
        Returning Payments
      </h4>
      <div className="overflow-auto h-75 p-3">
        <div className="match-container row mb-2">
          <div className="col-3 basket__img-container d-flex justify-content-center align-items-center">
            <p className="text-center">
              <b>4:00 - 5:00</b>
              <br />
              <span style={{ fontSize: "0.9rem" }}>26/05/2022</span>
            </p>
          </div>
          <div className="p-3 ps-0 pe-1 col-7 d-flex align-items-center flex-column">
            <p className="text-center">
              <b>Sân quận 9</b> - (3 vs 3)
            </p>
            <p className="color-blur">
              Lô E2a-7, Đường D1, Đ. D1, Long Thạnh Mỹ, Thành Phố Thủ Đức, Thành
              phố Hồ Chí Minh 700000
            </p>
          </div>
          <div
            className="col-2 basket__img-container d-flex justify-content-center align-items-center"
            style={{ fontSize: "1.5rem" }}
          >
            <i
              class="far fa-money-bill-alt trash-icon"
              title="Cancel booking"
              onClick={onClick}
            ></i>
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
          <div className="p-3 ps-0 pe-1 col-7 d-flex align-items-center flex-column">
            <p className="text-center">
              <b>Sân quận 9</b> - (3 vs 3)
            </p>
            <p className="color-blur">
              Lô E2a-7, Đường D1, Đ. D1, Long Thạnh Mỹ, Thành Phố Thủ Đức, Thành
              phố Hồ Chí Minh 700000
            </p>
          </div>
          <div
            className="col-2 basket__img-container d-flex justify-content-center align-items-center"
            style={{ fontSize: "1.5rem" }}
          >
            <i
              class="far fa-money-bill-alt trash-icon"
              title="Cancel booking"
              onClick={onClick}
            ></i>
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
          <div className="p-3 ps-0 pe-1 col-7 d-flex align-items-center flex-column">
            <p className="text-center">
              <b>Sân quận 9</b> - (3 vs 3)
            </p>
            <p className="color-blur">
              Lô E2a-7, Đường D1, Đ. D1, Long Thạnh Mỹ, Thành Phố Thủ Đức, Thành
              phố Hồ Chí Minh 700000
            </p>
          </div>
          <div
            className="col-2 basket__img-container d-flex justify-content-center align-items-center"
            style={{ fontSize: "1.5rem" }}
          >
            <i
              class="far fa-money-bill-alt trash-icon"
              title="Cancel booking"
              onClick={onClick}
            ></i>
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
          <div className="p-3 ps-0 pe-1 col-7 d-flex align-items-center flex-column">
            <p className="text-center">
              <b>Sân quận 9</b> - (3 vs 3)
            </p>
            <p className="color-blur">
              Lô E2a-7, Đường D1, Đ. D1, Long Thạnh Mỹ, Thành Phố Thủ Đức, Thành
              phố Hồ Chí Minh 700000
            </p>
          </div>
          <div
            className="col-2 basket__img-container d-flex justify-content-center align-items-center"
            style={{ fontSize: "1.5rem" }}
          >
            <i
              class="far fa-money-bill-alt trash-icon"
              title="Cancel booking"
              onClick={onClick}
            ></i>
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
          <div className="p-3 ps-0 pe-1 col-7 d-flex align-items-center flex-column">
            <p className="text-center">
              <b>Sân quận 9</b> - (3 vs 3)
            </p>
            <p className="color-blur">
              Lô E2a-7, Đường D1, Đ. D1, Long Thạnh Mỹ, Thành Phố Thủ Đức, Thành
              phố Hồ Chí Minh 700000
            </p>
          </div>
          <div
            className="col-2 basket__img-container d-flex justify-content-center align-items-center"
            style={{ fontSize: "1.5rem" }}
          >
            <i
              class="far fa-money-bill-alt trash-icon"
              title="Cancel booking"
              onClick={onClick}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReturnPaymentsWidget;
