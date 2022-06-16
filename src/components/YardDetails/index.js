import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { confirmAlert } from "react-confirm-alert";
import { ToastContainer, toast } from "react-toastify";
import * as _ from "lodash";

import "./style.scss";
import { EMPTY, TOAST_CONFIG } from "../../constants/default";
import {
  getAllProvinces,
  getDistrictsByProvinceId,
} from "../../services/location.service";
import {
  END,
  MIN_PERIOD,
  PERIODS,
  START,
  TIMELINE,
} from "../../constants/time";
import { INTERNAL_SERVER_ERROR } from "../../constants/error-message";
import { decrypt, encrypt, encryptKey } from "../../helpers/crypto.helper";

const _URL = window.URL || window.webkitURL;

function YardDetails({ yard }) {
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState(EMPTY);
  const [selectedDistrict, setSelectedDistrict] = useState(EMPTY);
  const [isLoadingProvinces, setIsLoadingProvinces] = useState(false);
  const [isLoadingDistricts, setIsLoadingDistricts] = useState(false);
  const [timeSlot, setTimeSlot] = useState({
    start: START,
    end: END,
    period: MIN_PERIOD,
  });
  const [yardPictures, setYardPictures] = useState([EMPTY, EMPTY, EMPTY]);
  const [basicData, setBasicData] = useState({});
  const [subYards, setSubYards] = useState([]);
  const [defaultPrice, setDefaultPrice] = useState(0);
  const [defaultSlots, setDefaultSlots] = useState([]);
  const [isAppliedDefaultPrice, setIsAppliedDefaultPrice] = useState(false);

  useEffect(() => {
    const slots = [];
    let start = Number(timeSlot.start),
      end = Number(timeSlot.end),
      period = Number(timeSlot.period);

    while (start < end) {
      slots.push({
        startTime: start,
        endTime: start + period,
        price: isAppliedDefaultPrice ? defaultPrice : 0,
      });
      start += period;
    }

    setDefaultSlots(slots);
  }, [timeSlot]);

  const onUpdateSubYard = (yard) => {
    const slots = yard ? yard.slots : _.cloneDeep(defaultSlots);
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className="custom-confirm" style={{ width: "90vw" }}>
            <h4>{yard ? yard.name : "Create New Sub Yard"}</h4>
            <div className="d-flex">
              <form className="my-3 col-3 mw-410">
                <div className="row p-2 py-1">
                  <label htmlFor="name" style={{ paddingLeft: 0 }}>
                    Name
                  </label>
                  <span
                    className="col-1 lh-44 signup__icon-wrapper"
                    title="Name"
                  >
                    <i className="fas fa-address-card"></i>
                  </span>
                  <input
                    id="name"
                    name="name"
                    className="col-11 outline-none p-2 signup__input-border"
                    type="text"
                    placeholder="Name"
                  />
                </div>
                <div className="row p-2 py-1">
                  <label htmlFor="type" style={{ paddingLeft: 0 }}>
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
                    name="type"
                  >
                    <option value="3 vs 3">3 vs 3</option>
                    <option value="5 vs 5">5 vs 5</option>
                  </select>
                </div>
              </form>
              <div className="flex-1 ps-3">
                <div className="row p-3 overflow-y-auto pt-0 mh-550">
                  {slots.map((slot) => {
                    <div className="col-2 slot-create-container">
                      <div className="slot-details flex-column">
                        <p>
                          <b>4:00 - 4:30</b>
                        </p>
                        <p className="mt-2">
                          <input
                            className="w-75 text-center border-none price-input py-2"
                            type="text"
                            value={slot.price}
                          />{" "}
                          VND
                        </p>
                      </div>
                    </div>;
                  })}
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
    setIsLoadingProvinces(true);
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
          })
          .finally(() => {
            setIsLoadingProvinces(false);
          });
      };
    } else {
      setProvinces(decrypt(storedProvinces));
      setIsLoadingProvinces(false);
    }
  }, []);

  useEffect(() => {
    setIsLoadingDistricts(true);
    if (selectedProvince) {
      const storedDistricts = localStorage.getItem(encryptKey("districts"));
      if (storedDistricts) {
        const districtsSet = decrypt(storedDistricts);
        if (districtsSet.hasOwnProperty(selectedProvince)) {
          setIsLoadingDistricts(false);
          return setDistricts(districtsSet[selectedProvince]);
        }
      }
      fetchDistricts();
    } else {
      setDistricts([]);
      setIsLoadingDistricts(false);
    }
  }, [selectedProvince]);

  const fetchDistricts = () => {
    const storedDistricts = localStorage.getItem(encryptKey("districts"));
    getDistrictsByProvinceId(selectedProvince)
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
      })
      .finally(() => {
        setIsLoadingDistricts(false);
      });
  };

  const handleDisableYard = () => {};

  const handleEnableYard = () => {};

  const handleDeleteClick = () => {};

  const onSimpleClick = (title, question, callback) => {
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
            <label htmlFor="name" style={{ paddingLeft: 0 }}>
              Name
            </label>
            <span className="col-1 lh-44 signup__icon-wrapper" title="Name">
              <i className="fas fa-address-card"></i>
            </span>
            <input
              id="name"
              className="col-11 outline-none p-2 signup__input-border"
              type="text"
              placeholder="Name"
              name="name"
              value={basicData.name}
              onChange={(e) =>
                setBasicData({ ...basicData, [e.target.name]: e.target.value })
              }
            />
          </div>
          <div className="row p-2 py-1">
            <label htmlFor="provinceId" style={{ paddingLeft: 0 }}>
              Province
            </label>
            <span className="col-1 lh-44 signup__icon-wrapper" title="Province">
              <i className="far fa-map"></i>
            </span>
            <select
              id="provinceId"
              className="col-11 outline-none p-2 signup__input-border"
              style={{ backgroundColor: "white" }}
              onChange={(e) => setSelectedProvince(() => e.target.value)}
              disabled={isLoadingProvinces}
              name="provinceId"
            >
              <option value="" key="NO_PROVINCE">
                {isLoadingProvinces ? "Loading..." : "Select province"}
              </option>
              {provinces.map((province) => (
                <option value={province.id}>{province.provinceName}</option>
              ))}
            </select>
          </div>
          <div className="row p-2 py-1">
            <label htmlFor="districtId" style={{ paddingLeft: 0 }}>
              District
            </label>
            <span className="col-1 lh-44 signup__icon-wrapper" title="District">
              <i className="fas fa-map-marker-alt"></i>
            </span>
            <select
              id="districtId"
              className="col-11 outline-none p-2 signup__input-border"
              style={{ backgroundColor: "white" }}
              onChange={(e) => {
                setSelectedDistrict(e.target.value);
              }}
              disabled={isLoadingDistricts || !selectedProvince}
              name="districtId"
            >
              <option value="" key="NO_DISTRICT">
                {isLoadingDistricts ? "Loading..." : "Select district"}
              </option>
              {districts.map((district) => (
                <option value={district.id}>{district.districtName}</option>
              ))}
            </select>
          </div>
          <div className="row p-2 py-1">
            <label htmlFor="address" style={{ paddingLeft: 0 }}>
              Address Details
            </label>
            <span className="col-1 lh-44 signup__icon-wrapper" title="Address">
              <i className="fas fa-map-pin"></i>
            </span>
            <input
              id="address"
              name="address"
              className="col-11 outline-none p-2 signup__input-border"
              type="text"
              placeholder="Address details"
              onChange={(e) =>
                setBasicData({ ...basicData, [e.target.name]: e.target.value })
              }
            />
          </div>
          <div className="row p-2 py-1">
            <label htmlFor="open" style={{ paddingLeft: 0 }}>
              Open Time
            </label>
            <span
              className="col-1 lh-44 signup__icon-wrapper"
              title="Open Time"
            >
              <i className="fas fa-clock"></i>
            </span>
            <select
              id="open"
              name="open"
              className="col-11 outline-none p-2 signup__input-border"
              style={{ backgroundColor: "white" }}
              onChange={(e) => {
                setTimeSlot({ ...timeSlot, start: e.target.value });
              }}
              value={timeSlot.start}
            >
              {TIMELINE.filter((value) => value.value < timeSlot.end).map(
                (time) => (
                  <option value={time.value}>{time.label}</option>
                )
              )}
            </select>
          </div>
          <div className="row p-2 py-1">
            <label htmlFor="close" style={{ paddingLeft: 0 }}>
              Close Time
            </label>
            <span
              className="col-1 lh-44 signup__icon-wrapper"
              title="Close Time"
            >
              <i className="fas fa-clock"></i>
            </span>
            <select
              id="close"
              name="close"
              className="col-11 outline-none p-2 signup__input-border"
              style={{ backgroundColor: "white" }}
              onChange={(e) => {
                setTimeSlot({ ...timeSlot, end: e.target.value });
              }}
              value={timeSlot.end}
            >
              {TIMELINE.filter((value) => value.value > timeSlot.start).map(
                (time) => (
                  <option value={time.value}>{time.label}</option>
                )
              )}
            </select>
          </div>
          <div className="row p-2 py-1">
            <label htmlFor="duration" style={{ paddingLeft: 0 }}>
              Duration
            </label>
            <span className="col-1 lh-44 signup__icon-wrapper" title="Duration">
              <i className="fas fa-hourglass-half"></i>
            </span>
            <select
              id="duration"
              name="duration"
              className="col-11 outline-none p-2 signup__input-border"
              style={{ backgroundColor: "white" }}
              onChange={(e) => {
                setTimeSlot({ ...timeSlot, period: e.target.value });
              }}
              value={timeSlot.period}
            >
              {PERIODS.filter(
                (value) => (timeSlot.end - timeSlot.start) % value.value === 0
              ).map((time) => (
                <option value={time.value}>{time.label}</option>
              ))}
            </select>
          </div>
          <div className="row p-2 py-1">
            <label htmlFor="defaultPrice" style={{ paddingLeft: 0 }}>
              Default Price
            </label>
            <span className="col-1 lh-44 signup__icon-wrapper" title="Name">
              <i className="fas fa-dollar-sign"></i>
            </span>
            <input
              id="defaultPrice"
              name="defaultPrice"
              className="col-9 outline-none p-2 fg-pw__input-border"
              type="number"
              placeholder="Default price"
              min={0}
            />
            <button className="col-2 fg-pw__icon-wrapper">Apply</button>
          </div>
        </form>
        <div className="flex-1 ps-4">
          <div className="row h-50">
            <div className="col-4 p-1">
              <div
                className="upload__img-wrapper mb-2 color-blur"
                style={{
                  backgroundImage: `url(${yardPictures[0]["src"]})`,
                  backgroundSize: "cover",
                }}
              >
                {!yardPictures[0] && "Intro image"}
              </div>
              <input
                className="outline-none custom-bg-input p-0 w-100"
                type="file"
                onChange={(e) => {
                  const cloned = _.cloneDeep(yardPictures);
                  const file = e.target.files[0];
                  cloned[0] = { file, src: _URL.createObjectURL(file) };
                  setYardPictures(cloned);
                }}
              />
            </div>
            <div className="col-4 p-1">
              <div
                className="upload__img-wrapper mb-2 color-blur"
                style={{
                  backgroundImage: `url(${yardPictures[1]["src"]})`,
                  backgroundSize: "cover",
                }}
              >
                {!yardPictures[1] && "Intro image"}
              </div>
              <input
                className="outline-none custom-bg-input p-0 w-100"
                type="file"
                onChange={(e) => {
                  const cloned = _.cloneDeep(yardPictures);
                  const file = e.target.files[0];
                  cloned[1] = { file, src: _URL.createObjectURL(file) };
                  setYardPictures(cloned);
                }}
              />
            </div>
            <div className="col-4 p-1">
              <div
                className="upload__img-wrapper mb-2 color-blur"
                style={{
                  backgroundImage: `url(${yardPictures[2]["src"]})`,
                  backgroundSize: "cover",
                }}
              >
                {!yardPictures[2] && "Intro image"}
              </div>
              <input
                className="outline-none custom-bg-input p-0 w-100"
                type="file"
                onChange={(e) => {
                  const cloned = _.cloneDeep(yardPictures);
                  const file = e.target.files[0];
                  cloned[2] = { file, src: _URL.createObjectURL(file) };
                  setYardPictures(cloned);
                }}
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
      <Link to="/owner/yards">
        <button className="btn btn-light">Back</button>
      </Link>
      <ToastContainer />
    </div>
  );
}

export default YardDetails;
