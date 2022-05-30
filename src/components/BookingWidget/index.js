import React from "react";
import { Link } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";

import "./style.scss";
import yard from "../../assets/images/bg-wall.jpg";
import noData from "../../assets/images/no-data.jpg";

function BookingWidget() {
  const onCartClick = async () => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className="custom-confirm" style={{width: 600}}>
            <h4>Your Cart</h4>
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
    <div className="w-100 pt-5">
      <form className="row justify-content-center w-100">
        <div className="cart-container py-3">
          <i className="fas fa-shopping-basket size-2 trash-icon" onClick={onCartClick}></i>
          <span className="cart-quantity">3</span>
        </div>
        <div className="row p-2 col-3 justify-content-center px-0">
          <span className="col-2 lh-44 signup__icon-wrapper booking__icon-wrapper">
            <i className="far fa-map"></i>
          </span>
          <input
            className="col-9 outline-none p-2 signup__input-border"
            type="text"
            placeholder="Province"
          />
        </div>
        <div className="row p-2 col-3 justify-content-center px-0">
          <span className="col-2 lh-44 signup__icon-wrapper booking__icon-wrapper">
            <i className="fas fa-map-marker-alt"></i>
          </span>
          <input
            className="col-9 outline-none p-2 signup__input-border"
            type="text"
            placeholder="District"
          />
        </div>
        <div className="row p-2 col-3 justify-content-center px-0">
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
        <div className="row p-2 col-2 justify-content-center px-3">
          <span className="col-2 lh-44 signup__icon-wrapper booking__icon-wrapper">
            <i className="fas fa-expand-arrows-alt"></i>
          </span>
          <select
            className="col-9 outline-none p-2 signup__input-border"
            style={{ backgroundColor: "white" }}
          >
            <option value="3 vs 3">3 vs 3</option>
            <option value="5 vs 5">5 vs 5</option>
          </select>
        </div>
        <div className="row p-2 col-1 justify-content-center ps-4">
          <button className="btn btn-primary w-100 p-2">
            <i class="fas fa-search"></i>
          </button>
        </div>
      </form>
      <div className="row mt-5 yard__result-container">
        <Link className="yard__result-wrapper col-4 p-3 pe-2" to="/home/yard/1">
          <div className="yard-result">
            <img src={yard} alt="basketball yard" />
            <div className="yard-details p-3">
              <b className="d-block mb-2">Sân quận 9</b>
              <p className="row mb-1">
                <i className="fas fa-expand-arrows-alt col-1 pt-1"></i>
                <span className="ps-2 color-blur col-10">3 : 3</span>
              </p>
              <p className="row mb-1">
                <i className="fas fa-map-marker-alt col-1 pt-1"></i>
                <span className="ps-2 color-blur col-10">
                  45F 160 Street, District 9, Ho Chi Minh City
                </span>
              </p>
            </div>
          </div>
        </Link>
        <Link className="yard__result-wrapper col-4 p-3 pe-2" to="/home/yard/1">
          <div className="yard-result">
            <img src={yard} alt="basketball yard" />
            <div className="yard-details p-3">
              <b className="d-block mb-2">Sân quận 9</b>
              <p className="row mb-1">
                <i className="fas fa-expand-arrows-alt col-1 pt-1"></i>
                <span className="ps-2 color-blur col-10">3 : 3</span>
              </p>
              <p className="row mb-1">
                <i className="fas fa-map-marker-alt col-1 pt-1"></i>
                <span className="ps-2 color-blur col-10">
                  45F 160 Street, District 9, Ho Chi Minh City
                </span>
              </p>
            </div>
          </div>
        </Link>
        <Link className="yard__result-wrapper col-4 p-3 pe-2" to="/home/yard/1">
          <div className="yard-result">
            <img src={yard} alt="basketball yard" />
            <div className="yard-details p-3">
              <b className="d-block mb-2">Sân quận 9</b>
              <p className="row mb-1">
                <i className="fas fa-expand-arrows-alt col-1 pt-1"></i>
                <span className="ps-2 color-blur col-10">3 : 3</span>
              </p>
              <p className="row mb-1">
                <i className="fas fa-map-marker-alt col-1 pt-1"></i>
                <span className="ps-2 color-blur col-10">
                  45F 160 Street, District 9, Ho Chi Minh City
                </span>
              </p>
            </div>
          </div>
        </Link>
        <Link className="yard__result-wrapper col-4 p-3 pe-2" to="/home/yard/1">
          <div className="yard-result">
            <img src={yard} alt="basketball yard" />
            <div className="yard-details p-3">
              <b className="d-block mb-2">Sân quận 9</b>
              <p className="row mb-1">
                <i className="fas fa-expand-arrows-alt col-1 pt-1"></i>
                <span className="ps-2 color-blur col-10">3 : 3</span>
              </p>
              <p className="row mb-1">
                <i className="fas fa-map-marker-alt col-1 pt-1"></i>
                <span className="ps-2 color-blur col-10">
                  45F 160 Street, District 9, Ho Chi Minh City
                </span>
              </p>
            </div>
          </div>
        </Link>
        <Link className="yard__result-wrapper col-4 p-3 pe-2" to="/home/yard/1">
          <div className="yard-result">
            <img src={yard} alt="basketball yard" />
            <div className="yard-details p-3">
              <b className="d-block mb-2">Sân quận 9</b>
              <p className="row mb-1">
                <i className="fas fa-expand-arrows-alt col-1 pt-1"></i>
                <span className="ps-2 color-blur col-10">3 : 3</span>
              </p>
              <p className="row mb-1">
                <i className="fas fa-map-marker-alt col-1 pt-1"></i>
                <span className="ps-2 color-blur col-10">
                  45F 160 Street, District 9, Ho Chi Minh City
                </span>
              </p>
            </div>
          </div>
        </Link>
        <Link className="yard__result-wrapper col-4 p-3 pe-2" to="/home/yard/1">
          <div className="yard-result">
            <img src={yard} alt="basketball yard" />
            <div className="yard-details p-3">
              <b className="d-block mb-2">Sân quận 9</b>
              <p className="row mb-1">
                <i className="fas fa-expand-arrows-alt col-1 pt-1"></i>
                <span className="ps-2 color-blur col-10">3 : 3</span>
              </p>
              <p className="row mb-1">
                <i className="fas fa-map-marker-alt col-1 pt-1"></i>
                <span className="ps-2 color-blur col-10">
                  45F 160 Street, District 9, Ho Chi Minh City
                </span>
              </p>
            </div>
          </div>
        </Link>
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
    </div>
  );
}

export default BookingWidget;
