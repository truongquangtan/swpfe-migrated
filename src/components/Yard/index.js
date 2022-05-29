import React, { useState } from "react";
import { Slide } from "react-slideshow-image";

import yard from "../../assets/images/basketball-court-1.jpeg";
import "./style.scss";

function Yard() {
  const [slideImages, setSlideImages] = useState([
    {
      url: yard,
    },
    {
      url: yard,
    },
    {
      url: yard,
    },
  ]);

  return (
    <div className="w-100 yard-container mt-4">
      <div className="row flex-row">
        <div className="col-8">
          <Slide>
            {slideImages.map((slideImage, index) => (
              <div className="each-slide" key={index}>
                <div
                  style={{ backgroundImage: `url(${slideImage.url})` }}
                ></div>
              </div>
            ))}
          </Slide>
        </div>
        <div className="col-4 ps-4 pe-4 pt-5 flex-column">
          <b className="size-2 mb-3 d-block text-center">Sân quận 9</b>
          <div className="row mb-1 yard__details-field">
            <span className="col-3 fw-bolder">Size:</span>
            <span className="col-9">3 vs 3</span>
          </div>
          <div className="row mb-1 yard__details-field">
            <span className="col-3 fw-bolder">Address:</span>
            <span className="col-9">
              Lô E2a-7, Đường D1, Đ. D1, Long Thạnh Mỹ, Thành Phố Thủ Đức, Thành
              phố Hồ Chí Minh 700000
            </span>
          </div>
          <div className="row mb-1 yard__details-field">
            <span className="col-3 fw-bolder">Open:</span>
            <span className="col-9">4:00 - 22:00</span>
          </div>
        </div>
      </div>
      <div className="row justify-content-center mt-5">
        <div className="col-7 pt-4">
          <div className="text-center mb-4 row">
            <div className="col-7 d-flex align-items-center justify-content-center size-2">
              Slots
            </div>
            <div className="row p-2 col-5 justify-content-end size-1">
              <span className="col-1 lh-44 signup__icon-wrapper booking__icon-wrapper">
                <i className="far fa-clock"></i>
              </span>
              <input
                className="col-9 outline-none p-2 signup__input-border"
                type="date"
                placeholder="Date"
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="col-2 slot-details-container">
              <div className="slot-details flex-column">
                <p>
                  <b>4:00 - 4:30</b>
                </p>
                <p>
                  <i>60.000 VND</i>
                </p>
              </div>
            </div>
            <div className="col-2 slot-details-container">
              <div className="slot-details flex-column">
                <p>
                  <b>4:00 - 4:30</b>
                </p>
                <p>
                  <i>60.000 VND</i>
                </p>
              </div>
            </div>
            <div className="col-2 slot-details-container">
              <div className="slot-details flex-column">
                <p>
                  <b>4:00 - 4:30</b>
                </p>
                <p>
                  <i>60.000 VND</i>
                </p>
              </div>
            </div>
            <div className="col-2 slot-details-container">
              <div className="slot-details flex-column">
                <p>
                  <b>4:00 - 4:30</b>
                </p>
                <p>
                  <i>60.000 VND</i>
                </p>
              </div>
            </div>
            <div className="col-2 slot-details-container">
              <div className="slot-details flex-column">
                <p>
                  <b>4:00 - 4:30</b>
                </p>
                <p>
                  <i>60.000 VND</i>
                </p>
              </div>
            </div>
            <div className="col-2 slot-details-container">
              <div className="slot-details flex-column">
                <p>
                  <b>4:00 - 4:30</b>
                </p>
                <p>
                  <i>60.000 VND</i>
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-2 slot-details-container">
              <div className="slot-details flex-column">
                <p>
                  <b>4:00 - 4:30</b>
                </p>
                <p>
                  <i>60.000 VND</i>
                </p>
              </div>
            </div>
            <div className="col-2 slot-details-container">
              <div className="slot-details flex-column">
                <p>
                  <b>4:00 - 4:30</b>
                </p>
                <p>
                  <i>60.000 VND</i>
                </p>
              </div>
            </div>
            <div className="col-2 slot-details-container">
              <div className="slot-details flex-column">
                <p>
                  <b>4:00 - 4:30</b>
                </p>
                <p>
                  <i>60.000 VND</i>
                </p>
              </div>
            </div>
            <div className="col-2 slot-details-container">
              <div className="slot-details flex-column">
                <p>
                  <b>4:00 - 4:30</b>
                </p>
                <p>
                  <i>60.000 VND</i>
                </p>
              </div>
            </div>
            <div className="col-2 slot-details-container">
              <div className="slot-details flex-column">
                <p>
                  <b>4:00 - 4:30</b>
                </p>
                <p>
                  <i>60.000 VND</i>
                </p>
              </div>
            </div>
            <div className="col-2 slot-details-container">
              <div className="slot-details flex-column">
                <p>
                  <b>4:00 - 4:30</b>
                </p>
                <p>
                  <i>60.000 VND</i>
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-2 slot-details-container">
              <div className="slot-details flex-column">
                <p>
                  <b>4:00 - 4:30</b>
                </p>
                <p>
                  <i>60.000 VND</i>
                </p>
              </div>
            </div>
            <div className="col-2 slot-details-container">
              <div className="slot-details flex-column">
                <p>
                  <b>4:00 - 4:30</b>
                </p>
                <p>
                  <i>60.000 VND</i>
                </p>
              </div>
            </div>
            <div className="col-2 slot-details-container">
              <div className="slot-details flex-column">
                <p>
                  <b>4:00 - 4:30</b>
                </p>
                <p>
                  <i>60.000 VND</i>
                </p>
              </div>
            </div>
            <div className="col-2 slot-details-container">
              <div className="slot-details flex-column">
                <p>
                  <b>4:00 - 4:30</b>
                </p>
                <p>
                  <i>60.000 VND</i>
                </p>
              </div>
            </div>
            <div className="col-2 slot-details-container">
              <div className="slot-details flex-column">
                <p>
                  <b>4:00 - 4:30</b>
                </p>
                <p>
                  <i>60.000 VND</i>
                </p>
              </div>
            </div>
            <div className="col-2 slot-details-container">
              <div className="slot-details flex-column">
                <p>
                  <b>4:00 - 4:30</b>
                </p>
                <p>
                  <i>60.000 VND</i>
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-2 slot-details-container">
              <div className="slot-details flex-column">
                <p>
                  <b>4:00 - 4:30</b>
                </p>
                <p>
                  <i>60.000 VND</i>
                </p>
              </div>
            </div>
            <div className="col-2 slot-details-container">
              <div className="slot-details flex-column">
                <p>
                  <b>4:00 - 4:30</b>
                </p>
                <p>
                  <i>60.000 VND</i>
                </p>
              </div>
            </div>
            <div className="col-2 slot-details-container">
              <div className="slot-details flex-column">
                <p>
                  <b>4:00 - 4:30</b>
                </p>
                <p>
                  <i>60.000 VND</i>
                </p>
              </div>
            </div>
            <div className="col-2 slot-details-container">
              <div className="slot-details flex-column">
                <p>
                  <b>4:00 - 4:30</b>
                </p>
                <p>
                  <i>60.000 VND</i>
                </p>
              </div>
            </div>
            <div className="col-2 slot-details-container">
              <div className="slot-details flex-column">
                <p>
                  <b>4:00 - 4:30</b>
                </p>
                <p>
                  <i>60.000 VND</i>
                </p>
              </div>
            </div>
            <div className="col-2 slot-details-container">
              <div className="slot-details flex-column">
                <p>
                  <b>4:00 - 4:30</b>
                </p>
                <p>
                  <i>60.000 VND</i>
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-2 slot-details-container">
              <div className="slot-details flex-column">
                <p>
                  <b>4:00 - 4:30</b>
                </p>
                <p>
                  <i>60.000 VND</i>
                </p>
              </div>
            </div>
            <div className="col-2 slot-details-container">
              <div className="slot-details flex-column">
                <p>
                  <b>4:00 - 4:30</b>
                </p>
                <p>
                  <i>60.000 VND</i>
                </p>
              </div>
            </div>
            <div className="col-2 slot-details-container">
              <div className="slot-details flex-column">
                <p>
                  <b>4:00 - 4:30</b>
                </p>
                <p>
                  <i>60.000 VND</i>
                </p>
              </div>
            </div>
            <div className="col-2 slot-details-container">
              <div className="slot-details flex-column">
                <p>
                  <b>4:00 - 4:30</b>
                </p>
                <p>
                  <i>60.000 VND</i>
                </p>
              </div>
            </div>
            <div className="col-2 slot-details-container">
              <div className="slot-details flex-column">
                <p>
                  <b>4:00 - 4:30</b>
                </p>
                <p>
                  <i>60.000 VND</i>
                </p>
              </div>
            </div>
            <div className="col-2 slot-details-container">
              <div className="slot-details flex-column">
                <p>
                  <b>4:00 - 4:30</b>
                </p>
                <p>
                  <i>60.000 VND</i>
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-2 slot-details-container">
              <div className="slot-details flex-column">
                <p>
                  <b>4:00 - 4:30</b>
                </p>
                <p>
                  <i>60.000 VND</i>
                </p>
              </div>
            </div>
            <div className="col-2 slot-details-container">
              <div className="slot-details flex-column">
                <p>
                  <b>4:00 - 4:30</b>
                </p>
                <p>
                  <i>60.000 VND</i>
                </p>
              </div>
            </div>
            <div className="col-2 slot-details-container">
              <div className="slot-details flex-column">
                <p>
                  <b>4:00 - 4:30</b>
                </p>
                <p>
                  <i>60.000 VND</i>
                </p>
              </div>
            </div>
            <div className="col-2 slot-details-container">
              <div className="slot-details flex-column">
                <p>
                  <b>4:00 - 4:30</b>
                </p>
                <p>
                  <i>60.000 VND</i>
                </p>
              </div>
            </div>
            <div className="col-2 slot-details-container">
              <div className="slot-details flex-column">
                <p>
                  <b>4:00 - 4:30</b>
                </p>
                <p>
                  <i>60.000 VND</i>
                </p>
              </div>
            </div>
            <div className="col-2 slot-details-container">
              <div className="slot-details flex-column">
                <p>
                  <b>4:00 - 4:30</b>
                </p>
                <p>
                  <i>60.000 VND</i>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-5 ps-4 pe-4 flex-column pt-4">
          <h4 className="text-center mb-4">Matches</h4>
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
                  Lô E2a-7, Đường D1, Đ. D1, Long Thạnh Mỹ, Thành Phố Thủ Đức,
                  Thành phố Hồ Chí Minh 700000
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
                  Lô E2a-7, Đường D1, Đ. D1, Long Thạnh Mỹ, Thành Phố Thủ Đức,
                  Thành phố Hồ Chí Minh 700000
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
                  Lô E2a-7, Đường D1, Đ. D1, Long Thạnh Mỹ, Thành Phố Thủ Đức,
                  Thành phố Hồ Chí Minh 700000
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
                  Lô E2a-7, Đường D1, Đ. D1, Long Thạnh Mỹ, Thành Phố Thủ Đức,
                  Thành phố Hồ Chí Minh 700000
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
          <div className="pt-3 pb-3">
            <button className="btn btn-primary w-100 p-2">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Yard;
