import React from "react";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

import "./style.scss";
import basketball from "../../assets/images/basketball-2.png";
import player1 from "../../assets/images/player-1.gif";
import player2 from "../../assets/images/player-2.gif";

function IncomingMatchesWidget() {
  const onClick = async () => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className="custom-confirm">
            <h4>Cancel Booking</h4>
            <p className="mb-3">Are you sure to cancel booking this match?</p>
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
      <img src={player1} alt="Player" className="incoming-player-1" />
      <img src={player2} alt="Player" className="incoming-player-2" />
      <h4 className="text-center mb-4">
        <img src={basketball} alt="basketball" className="width-60 pe-3" />
        Incoming Matches
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
              class="far fa-trash-alt trash-icon"
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
              class="far fa-trash-alt trash-icon"
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
              class="far fa-trash-alt trash-icon"
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
              class="far fa-trash-alt trash-icon"
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
              class="far fa-trash-alt trash-icon"
              title="Cancel booking"
              onClick={onClick}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IncomingMatchesWidget;
