import React from "react";

import "./style.scss";
import yard from "../../assets/images/bg-wall.jpg";
import { Link } from "react-router-dom";

function BookingWidget() {
  return (
    <div className="w-100 pt-5">
      <form className="row justify-content-center w-100 m-auto">
        <div className="row p-2 col-3 justify-content-center">
          <span className="col-2 lh-44 signup__icon-wrapper booking__icon-wrapper">
            <i className="far fa-map"></i>
          </span>
          <input
            className="col-9 outline-none p-2 signup__input-border"
            type="text"
            placeholder="Province"
          />
        </div>
        <div className="row p-2 col-3 justify-content-center">
          <span className="col-2 lh-44 signup__icon-wrapper booking__icon-wrapper">
            <i className="fas fa-map-marker-alt"></i>
          </span>
          <input
            className="col-9 outline-none p-2 signup__input-border"
            type="text"
            placeholder="District"
          />
        </div>
        <div className="row p-2 col-3 justify-content-center">
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
        <div className="row p-2 col-2 justify-content-center">
          <span className="col-2 lh-44 signup__icon-wrapper booking__icon-wrapper">
            <i className="fas fa-expand-arrows-alt"></i>
          </span>
          <input
            className="col-9 outline-none p-2 signup__input-border"
            type="text"
            placeholder="Size"
          />
        </div>

        <div className="row p-2 col-2 justify-content-center">
          <button className="btn btn-primary w-75 p-2">Search</button>
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
