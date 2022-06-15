import { useState } from "react";
import { confirmAlert } from "react-confirm-alert";
import { Rating } from "react-simple-star-rating";

import "./style.scss";
import ratingImg from "../../assets/images/rating.png";

function YardRatingWidget() {
  const [rating, setRating] = useState(0);

  const handleRating = (rate) => {
    setRating(rate);
  };

  const onClick = () => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className="custom-confirm">
            <h4 className="w-min-content d-inline-block me-5">Rating</h4>
            <Rating
              onClick={handleRating}
              ratingValue={rating}
              allowHalfIcon={true}
            />
            <p className="my-3">How do you feel about this yard?</p>
            <textarea
              className="w-100 mb-3"
              style={{ height: "100px", borderRadius: "5px", resize: "none" }}
            />
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
    <div className="w-75 ps-4 pe-4 flex-column pt-5 mt-5 overflow-x-hidden m-auto">
      <h4 className="text-center mb-5">
        <img src={ratingImg} alt="basketball" className="width-60 pe-3" />
        Rating
      </h4>
      <div className="overflow-auto h-75 p-3 row justify-content-around">
        <div className="match-container row mb-4 col-5">
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
              className="fas fa-user-edit trash-icon"
              title="Rating"
              onClick={onClick}
            ></i>
          </div>
        </div>
        <div className="match-container row mb-4 col-5">
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
              className="fas fa-user-edit trash-icon"
              title="Rating"
              onClick={onClick}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default YardRatingWidget;
