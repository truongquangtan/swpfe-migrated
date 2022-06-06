import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import "./style.scss";
import yard from "../../assets/images/bg-wall.jpg";
import noData from "../../assets/images/no-data.jpg";
import { EMPTY } from "../../constants/default";
import { decrypt, encrypt, encryptKey } from "../../helpers/crypto.helper";
import {
  getAllProvinces,
  getDistrictsByProvinceId,
} from "../../services/location.service";
import { INTERNAL_SERVER_ERROR } from "../../constants/error-message";

function BookingWidget() {
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState(EMPTY);
  const [selectedDistrict, setSelectedDistrict] = useState(EMPTY);
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPage, setMaxPage] = useState(10);

  useEffect(() => {
    const storedProvinces = localStorage.getItem(encryptKey("provinces"));
    if (!storedProvinces) {
      return async () => {
        await getAllProvinces()
          .then((res) => {
            if (res) {
              localStorage.setItem(encryptKey("provinces"), encrypt(res));
              setProvinces(res);
            }
          })
          .catch((error) => {
            toast.error(INTERNAL_SERVER_ERROR, {
              position: "bottom-right",
              autoClose: 5000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              theme: "colored",
            });
          });
      };
    } else {
      setProvinces(decrypt(storedProvinces));
    }
  }, []);

  useEffect(() => {
    if (selectedProvince) {
      const storedDistricts = localStorage.getItem(encryptKey("districts"));
      if (storedDistricts) {
        const districtsSet = decrypt(storedDistricts);
        if (districtsSet.hasOwnProperty(selectedProvince)) {
          return setDistricts(districtsSet[selectedProvince]);
        }
      }
      fetchDistricts();
    } else {
      setDistricts([]);
    }
  }, [selectedProvince]);

  const fetchDistricts = async () => {
    const storedDistricts = localStorage.getItem(encryptKey("districts"));
    await getDistrictsByProvinceId(selectedProvince)
      .then((res) => {
        if (res) {
          if (storedDistricts) {
            localStorage.setItem(
              encryptKey("districts"),
              encrypt({
                ...decrypt(storedDistricts),
                [selectedProvince]: res,
              })
            );
          } else {
            localStorage.setItem(
              encryptKey("districts"),
              encrypt({
                [selectedProvince]: res,
              })
            );
          }
          setDistricts(res);
        }
      })
      .catch((error) => {
        toast.error(INTERNAL_SERVER_ERROR, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          theme: "colored",
        });
      });
  };

  const onChangeProvince = (e) => {
    setSelectedProvince(() => e.target.value);
  };

  const onChangePage = (isPlus) => {
    if (isPlus && currentPage < maxPage) {
      setCurrentPage(() => currentPage + 1);
    } else if (!isPlus && currentPage > 1) {
      setCurrentPage(() => currentPage - 1);
    }
  };

  const onInputPage = (e) => {
    if (e.which === 13) {
      onBlurPage(e);
      e.target.blur();
    }
  };

  const onBlurPage = (e) => {
    const value = e.target.value;
    if (value <= 0) {
      setCurrentPage(1);
    } else if (value > maxPage) {
      setCurrentPage(maxPage);
    }
  };

  return (
    <div>
      <h1 className="booking-title p-4 text-center">BOOKING NOW!</h1>
      <div className="w-100 p-5">
        <form className="row justify-content-center w-100">
          <div className="row p-2 col-3 justify-content-center px-0">
            <label htmlFor="province">Province</label>
            <span className="col-2 lh-44 signup__icon-wrapper booking__icon-wrapper">
              <i className="far fa-map"></i>
            </span>
            <select
              id="yard-close-time"
              className="col-9 outline-none p-2 signup__input-border"
              style={{ backgroundColor: "white" }}
              onChange={(e) => onChangeProvince(e)}
            >
              <option value="">Select province</option>
              {provinces.map((province) => (
                <option value={province.id}>{province.provinceName}</option>
              ))}
            </select>
          </div>
          <div className="row p-2 col-3 justify-content-center px-0">
            <label htmlFor="district">District</label>
            <span className="col-2 lh-44 signup__icon-wrapper booking__icon-wrapper">
              <i className="fas fa-map-marker-alt"></i>
            </span>
            <select
              id="yard-close-time"
              className="col-9 outline-none p-2 signup__input-border"
              style={{ backgroundColor: "white" }}
              onChange={(e) => {
                setSelectedDistrict(e.target.value);
              }}
            >
              <option value="">Select district</option>
              {districts.map((district) => (
                <option value={district.id}>{district.districtName}</option>
              ))}
            </select>
          </div>
          <div className="d-flex flex-column p-2 col-1 justify-content-end ps-4">
            <button
              className="btn btn-primary w-100 p-2"
              style={{ height: "40px" }}
            >
              <i className="fas fa-search"></i>
            </button>
          </div>
        </form>
        <div className="row mt-5 yard__result-container">
          <div className="yard__result-wrapper col-3 p-3 pe-2">
            <Link className="yard-result" to="/yard/1">
              <img src={yard} alt="basketball yard" />
              <div className="yard-details p-3">
                <b className="d-block mb-2">SÂN QUẬN 9</b>
                <p className="row mb-1">
                  <i className="fas fa-clock col-1 pt-1"></i>
                  <span className="ps-2 color-blur col-10">04:00 - 22:00</span>
                </p>
                <p className="row mb-1">
                  <i className="fas fa-map-marker-alt col-1 pt-1"></i>
                  <span className="ps-2 color-blur col-10">
                    45F 160 Street, District 9, Ho Chi Minh City
                  </span>
                </p>
              </div>
            </Link>
          </div>
          <div className="yard__result-wrapper col-3 p-3 pe-2">
            <Link className="yard-result" to="/yard/1">
              <img src={yard} alt="basketball yard" />
              <div className="yard-details p-3">
                <b className="d-block mb-2">SÂN QUẬN 9</b>
                <p className="row mb-1">
                  <i className="fas fa-clock col-1 pt-1"></i>
                  <span className="ps-2 color-blur col-10">04:00 - 22:00</span>
                </p>
                <p className="row mb-1">
                  <i className="fas fa-map-marker-alt col-1 pt-1"></i>
                  <span className="ps-2 color-blur col-10">
                    45F 160 Street, District 9, Ho Chi Minh City
                  </span>
                </p>
              </div>
            </Link>
          </div>
          <div className="yard__result-wrapper col-3 p-3 pe-2">
            <Link className="yard-result" to="/yard/1">
              <img src={yard} alt="basketball yard" />
              <div className="yard-details p-3">
                <b className="d-block mb-2">SÂN QUẬN 9</b>
                <p className="row mb-1">
                  <i className="fas fa-clock col-1 pt-1"></i>
                  <span className="ps-2 color-blur col-10">04:00 - 22:00</span>
                </p>
                <p className="row mb-1">
                  <i className="fas fa-map-marker-alt col-1 pt-1"></i>
                  <span className="ps-2 color-blur col-10">
                    45F 160 Street, District 9, Ho Chi Minh City
                  </span>
                </p>
              </div>
            </Link>
          </div>
          <div className="yard__result-wrapper col-3 p-3 pe-2">
            <Link className="yard-result" to="/yard/1">
              <img src={yard} alt="basketball yard" />
              <div className="yard-details p-3">
                <b className="d-block mb-2">SÂN QUẬN 9</b>
                <p className="row mb-1">
                  <i className="fas fa-clock col-1 pt-1"></i>
                  <span className="ps-2 color-blur col-10">04:00 - 22:00</span>
                </p>
                <p className="row mb-1">
                  <i className="fas fa-map-marker-alt col-1 pt-1"></i>
                  <span className="ps-2 color-blur col-10">
                    45F 160 Street, District 9, Ho Chi Minh City
                  </span>
                </p>
              </div>
            </Link>
          </div>
          <div className="yard__result-wrapper col-3 p-3 pe-2">
            <Link className="yard-result" to="/yard/1">
              <img src={yard} alt="basketball yard" />
              <div className="yard-details p-3">
                <b className="d-block mb-2">SÂN QUẬN 9</b>
                <p className="row mb-1">
                  <i className="fas fa-clock col-1 pt-1"></i>
                  <span className="ps-2 color-blur col-10">04:00 - 22:00</span>
                </p>
                <p className="row mb-1">
                  <i className="fas fa-map-marker-alt col-1 pt-1"></i>
                  <span className="ps-2 color-blur col-10">
                    45F 160 Street, District 9, Ho Chi Minh City
                  </span>
                </p>
              </div>
            </Link>
          </div>
          <div className="yard__result-wrapper col-3 p-3 pe-2">
            <Link className="yard-result" to="/yard/1">
              <img src={yard} alt="basketball yard" />
              <div className="yard-details p-3">
                <b className="d-block mb-2">SÂN QUẬN 9</b>
                <p className="row mb-1">
                  <i className="fas fa-clock col-1 pt-1"></i>
                  <span className="ps-2 color-blur col-10">04:00 - 22:00</span>
                </p>
                <p className="row mb-1">
                  <i className="fas fa-map-marker-alt col-1 pt-1"></i>
                  <span className="ps-2 color-blur col-10">
                    45F 160 Street, District 9, Ho Chi Minh City
                  </span>
                </p>
              </div>
            </Link>
          </div>
          <div className="yard__result-wrapper col-3 p-3 pe-2">
            <Link className="yard-result" to="/yard/1">
              <img src={yard} alt="basketball yard" />
              <div className="yard-details p-3">
                <b className="d-block mb-2">SÂN QUẬN 9</b>
                <p className="row mb-1">
                  <i className="fas fa-clock col-1 pt-1"></i>
                  <span className="ps-2 color-blur col-10">04:00 - 22:00</span>
                </p>
                <p className="row mb-1">
                  <i className="fas fa-map-marker-alt col-1 pt-1"></i>
                  <span className="ps-2 color-blur col-10">
                    45F 160 Street, District 9, Ho Chi Minh City
                  </span>
                </p>
              </div>
            </Link>
          </div>
          <div className="yard__result-wrapper col-3 p-3 pe-2">
            <Link className="yard-result" to="/yard/1">
              <img src={yard} alt="basketball yard" />
              <div className="yard-details p-3">
                <b className="d-block mb-2">SÂN QUẬN 9</b>
                <p className="row mb-1">
                  <i className="fas fa-clock col-1 pt-1"></i>
                  <span className="ps-2 color-blur col-10">04:00 - 22:00</span>
                </p>
                <p className="row mb-1">
                  <i className="fas fa-map-marker-alt col-1 pt-1"></i>
                  <span className="ps-2 color-blur col-10">
                    45F 160 Street, District 9, Ho Chi Minh City
                  </span>
                </p>
              </div>
            </Link>
          </div>
          {/* <div className=" row justify-content-center align-items-center">
          <img className="nodata-img" src={noData} alt="No data availble" />
          <p className="text-center nodata-text">No yards available</p>
        </div> */}
        </div>
        <div className="yard-pagination mt-4">
          <div>
            <span
              className="pagination-arrow"
              onClick={() => onChangePage(false)}
            >
              <i className="fas fa-arrow-left"></i>
            </span>
            <span className="pagination-statistic">
              <input
                type="text"
                value={currentPage}
                onChange={(e) => setCurrentPage(e.target.value)}
                onBlur={(e) => onBlurPage(e)}
                onKeyUp={(e) => onInputPage(e)}
              />
              / {maxPage}
            </span>
            <span
              className="pagination-arrow"
              onClick={() => onChangePage(true)}
            >
              <i className="fas fa-arrow-right"></i>
            </span>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default BookingWidget;
