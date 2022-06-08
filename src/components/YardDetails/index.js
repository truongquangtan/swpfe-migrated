import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { confirmAlert } from "react-confirm-alert";
import { ToastContainer, toast } from "react-toastify";

import "./style.scss";
import { EMPTY, TOAST_CONFIG } from "../../constants/default";
import {
  getAllProvinces,
  getDistrictsByProvinceId,
} from "../../services/location.service";
import { END, PERIODS, START, TIMELINE } from "../../constants/time";
import { INTERNAL_SERVER_ERROR } from "../../constants/error-message";
import { decrypt, encrypt, encryptKey } from "../../helpers/crypto.helper";

function YardDetails({ yard }) {
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState(EMPTY);
  const [selectedDistrict, setSelectedDistrict] = useState(EMPTY);
  const [timeSlot, setTimeSlot] = useState({
    start: START,
    end: END,
    period: 0,
  });
  const onUpdateSubYard = async (yard) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className="custom-confirm" style={{ width: "90vw" }}>
            <h4>{yard ? yard.name : "Create New Sub Yard"}</h4>
            <div className="d-flex">
              <form className="my-3 col-3 mw-410">
                <div className="row p-2 py-1">
                  <label htmlFor="yard-name" style={{ paddingLeft: 0 }}>
                    Name
                  </label>
                  <span
                    className="col-1 lh-44 signup__icon-wrapper"
                    title="Name"
                  >
                    <i className="fas fa-address-card"></i>
                  </span>
                  <input
                    id="yard-name"
                    className="col-11 outline-none p-2 signup__input-border"
                    type="text"
                    placeholder="Name"
                  />
                </div>
                <div className="row p-2 py-1">
                  <label htmlFor="yard-name" style={{ paddingLeft: 0 }}>
                    Type
                  </label>
                  <span
                    className="col-1 lh-44 signup__icon-wrapper"
                    title="Size"
                  >
                    <i className="fas fa-expand-arrows-alt"></i>
                  </span>
                  <select
                    className="col-11 outline-none p-2 signup__input-border"
                    style={{ backgroundColor: "white" }}
                  >
                    <option value="3 vs 3">3 vs 3</option>
                    <option value="5 vs 5">5 vs 5</option>
                  </select>
                </div>
              </form>
              <div className="flex-1 ps-3">
                <div className="row p-3 overflow-y-auto pt-0 mh-550">
                  <div className="col-2 slot-create-container">
                    <div className="slot-details flex-column">
                      <p>
                        <b>4:00 - 4:30</b>
                      </p>
                      <p className="mt-2">
                        <input
                          className="w-75 text-center border-none price-input py-2"
                          type="text"
                          value="60.000"
                        />{" "}
                        VND
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
  };

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
            toast.error(INTERNAL_SERVER_ERROR, TOAST_CONFIG);
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
        toast.error(INTERNAL_SERVER_ERROR, TOAST_CONFIG);
      });
  };

  const handleDisableYard = () => {};

  const handleEnableYard = () => {};

  const handleDeleteClick = () => {};

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

  return (
    <div className="mt-5">
      <h4>{yard ? "Yard Details" : "Create Yard"}</h4>
      <div className="d-flex">
        <form className="my-3 col-3 mw-410">
          <div className="row p-2 py-1">
            <label htmlFor="yard-name" style={{ paddingLeft: 0 }}>
              Name
            </label>
            <span className="col-1 lh-44 signup__icon-wrapper" title="Name">
              <i className="fas fa-address-card"></i>
            </span>
            <input
              id="yard-name"
              className="col-11 outline-none p-2 signup__input-border"
              type="text"
              placeholder="Name"
            />
          </div>
          <div className="row p-2 py-1">
            <label htmlFor="yard-province" style={{ paddingLeft: 0 }}>
              Province
            </label>
            <span className="col-1 lh-44 signup__icon-wrapper" title="Province">
              <i className="far fa-map"></i>
            </span>
            <select
              id="yard-province"
              className="col-11 outline-none p-2 signup__input-border"
              style={{ backgroundColor: "white" }}
              onChange={(e) => setSelectedProvince(() => e.target.value)}
            >
              <option value="">Select province</option>
              {provinces.map((province) => (
                <option value={province.id}>{province.provinceName}</option>
              ))}
            </select>
          </div>
          <div className="row p-2 py-1">
            <label htmlFor="yard-district" style={{ paddingLeft: 0 }}>
              District
            </label>
            <span className="col-1 lh-44 signup__icon-wrapper" title="District">
              <i className="fas fa-map-marker-alt"></i>
            </span>
            <select
              id="yard-district"
              className="col-11 outline-none p-2 signup__input-border"
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
          <div className="row p-2 py-1">
            <label htmlFor="yard-address" style={{ paddingLeft: 0 }}>
              Address Details
            </label>
            <span className="col-1 lh-44 signup__icon-wrapper" title="Address">
              <i className="fas fa-map-pin"></i>
            </span>
            <input
              id="yard-address"
              className="col-11 outline-none p-2 signup__input-border"
              type="text"
              placeholder="Address Details"
            />
          </div>
          <div className="row p-2 py-1">
            <label htmlFor="yard-open-time" style={{ paddingLeft: 0 }}>
              Open Time
            </label>
            <span
              className="col-1 lh-44 signup__icon-wrapper"
              title="Open Time"
            >
              <i className="fas fa-clock"></i>
            </span>
            <select
              id="yard-open-time"
              className="col-11 outline-none p-2 signup__input-border"
              style={{ backgroundColor: "white" }}
            >
              {TIMELINE.filter((value) => value.value < timeSlot.end).map(
                (time) => (
                  <option value={time.value}>{time.label}</option>
                )
              )}
            </select>
          </div>
          <div className="row p-2 py-1">
            <label htmlFor="yard-close-time" style={{ paddingLeft: 0 }}>
              Close Time
            </label>
            <span
              className="col-1 lh-44 signup__icon-wrapper"
              title="Close Time"
            >
              <i className="fas fa-clock"></i>
            </span>
            <select
              id="yard-close-time"
              className="col-11 outline-none p-2 signup__input-border"
              style={{ backgroundColor: "white" }}
            >
              {TIMELINE.filter((value) => value.value > timeSlot.start).map(
                (time) => (
                  <option value={time.value}>{time.label}</option>
                )
              )}
            </select>
          </div>
          <div className="row p-2 py-1">
            <label htmlFor="yard-duration" style={{ paddingLeft: 0 }}>
              Duration
            </label>
            <span className="col-1 lh-44 signup__icon-wrapper" title="Duration">
              <i className="fas fa-hourglass-half"></i>
            </span>
            <select
              id="yard-duration"
              className="col-11 outline-none p-2 signup__input-border"
              style={{ backgroundColor: "white" }}
            >
              {PERIODS.filter(
                (value) => (timeSlot.end - timeSlot.start) % value.value === 0
              ).map((time) => (
                <option value={time.value}>{time.label}</option>
              ))}
            </select>
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
          <div className="p-3 overflow-y-auto h-300 pt-4">
            <h4 className="d-inline-block">Sub Yards</h4>
            <button
              className="btn btn-primary px-4 ms-5"
              onClick={() => onUpdateSubYard()}
            >
              <i
                className="fas fa-plus me-2"
                style={{ fontSize: "0.8rem" }}
              ></i>
              <b>Add</b>
            </button>
            <table className="table table-striped mt-3">
              <thead>
                <tr>
                  <th scope="col" style={{ width: "15%" }}>
                    Actions
                  </th>
                  <th scope="col">Reference</th>
                  <th scope="col">Name</th>
                  <th scope="col">Type</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <i
                      className="trash-icon fas fa-trash-alt col-4"
                      title="Delete"
                      onClick={() =>
                        onSimpleClick(
                          "Delete",
                          "Are you sure to delete this yard permanently?",
                          handleDeleteClick
                        )
                      }
                    ></i>
                    <i
                      className="trash-icon fas fa-ban col-4"
                      title="Deactive"
                      onClick={() =>
                        onSimpleClick(
                          "Disable",
                          "Are you sure to disable this yard?",
                          handleDisableYard
                        )
                      }
                    ></i>
                    <i
                      className="trash-icon fas fa-check-circle col-4"
                      title="Active"
                      onClick={() =>
                        onSimpleClick(
                          "Enable",
                          "Are you sure to activate this yard?",
                          handleEnableYard
                        )
                      }
                    ></i>
                  </td>
                  <td>
                    <b className="trash-icon" onClick={() => onUpdateSubYard()}>
                      1009
                    </b>
                  </td>
                  <td className="text-truncate" title="Sân quận 9">
                    Sân quận 9
                  </td>
                  <td>3 vs 3</td>
                  <td className="green bold">ACTIVE</td>
                </tr>
                <tr>
                  <td>
                    <i
                      className="trash-icon fas fa-times col-4"
                      title="Delete"
                      onClick={() => {}}
                    ></i>
                    <i
                      className="trash-icon fas fa-edit col-4"
                      title="Edit"
                      onClick={() => onUpdateSubYard()}
                    ></i>
                  </td>
                  <td>
                    <b className="fsi fwl">Draft</b>
                  </td>
                  <td className="text-truncate fsi fwl" title="Sân quận 9">
                    Sân quận 9
                  </td>
                  <td className="fsi fwl">3 vs 3</td>
                  <td className="fsi fwl">N/A</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <button className="btn btn-primary me-3 px-4" onClick={() => {}}>
        Save
      </button>
      <Link to="/admin/yards">
        <button className="btn btn-light">Back</button>
      </Link>
      <ToastContainer />
    </div>
  );
}

export default YardDetails;
