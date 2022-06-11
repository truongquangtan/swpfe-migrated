import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams, useLocation } from "react-router-dom";
import { Slide } from "react-slideshow-image";
import * as moment from "moment";
import { Rating } from "react-simple-star-rating";

import "./style.scss";
import yard1 from "../../assets/images/yard-1.jpg";
import yard2 from "../../assets/images/yard-2.jpg";
import yard3 from "../../assets/images/yard-3.jpg";
import { TIMELINE } from "../../constants/time";
import noData from "../../assets/images/no-data.jpg";
import { toast, ToastContainer } from "react-toastify";
import { encryptKey } from "../../helpers/crypto.helper";
import { TOAST_CONFIG } from "../../constants/default";
import Reviews from "../Reviews";

const yards = [
  {
    id: "c62f6d14-3114-435a-8c9a-c1c767eed9ca",
    name: "Sân Thủ Đức",
    address: "503 Lê Văn Việt, Thành phố Thủ Đức, Thành phố Hồ Chí Minh",
    openAt: 360,
    closeAt: 600,
    slotDuration: 60,
    images: [yard1, yard2, yard3],
    subYards: [
      {
        name: "Sân 1",
        type: "3 vs 3",
        slots: [
          {
            startTime: "06:00",
            endTime: "07:00",
            price: 50000,
            isSelected: false,
          },
          {
            startTime: "07:00",
            endTime: "08:00",
            price: 60000,
            isSelected: false,
          },
          {
            startTime: "08:00",
            endTime: "09:00",
            price: 60000,
            isSelected: false,
          },
          {
            startTime: "09:00",
            endTime: "10:00",
            price: 50000,
            isSelected: false,
          },
        ],
      },
      {
        name: "Sân 2",
        type: "5 vs 5",
        slots: [
          {
            startTime: "06:00",
            endTime: "07:00",
            price: 70000,
            isSelected: false,
          },
          {
            startTime: "07:00",
            endTime: "08:00",
            price: 60000,
            isSelected: false,
          },
          {
            startTime: "08:00",
            endTime: "09:00",
            price: 60000,
            isSelected: false,
          },
          {
            startTime: "09:00",
            endTime: "10:00",
            price: 70000,
            isSelected: false,
          },
        ],
      },
    ],
  },
  {
    id: "09effa30-d3d9-4d62-bb21-a795d0deba03",
    name: "Sân Quận 1",
    address: "2 Đinh Tiên Hoàng, Đa Kao, Quận 1, Thành phố Hồ Chí Minh",
    openAt: 360,
    closeAt: 600,
    slotDuration: 60,
    images: [yard2, yard1, yard3],
    subYards: [
      {
        name: "Sân 1",
        type: "3 vs 3",
        slots: [
          {
            startTime: "06:00",
            endTime: "07:00",
            price: 50000,
            isSelected: false,
          },
          {
            startTime: "07:00",
            endTime: "08:00",
            price: 60000,
            isSelected: false,
          },
          {
            startTime: "08:00",
            endTime: "09:00",
            price: 60000,
            isSelected: false,
          },
          {
            startTime: "09:00",
            endTime: "10:00",
            price: 50000,
            isSelected: false,
          },
        ],
      },
      {
        name: "Sân 2",
        type: "5 vs 5",
        slots: [
          {
            startTime: "06:00",
            endTime: "07:00",
            price: 70000,
            isSelected: false,
          },
          {
            startTime: "07:00",
            endTime: "08:00",
            price: 60000,
            isSelected: false,
          },
          {
            startTime: "08:00",
            endTime: "09:00",
            price: 60000,
            isSelected: false,
          },
          {
            startTime: "09:00",
            endTime: "10:00",
            price: 70000,
            isSelected: false,
          },
        ],
      },
      {
        name: "Sân 3",
        type: 2,
        slots: [
          {
            startTime: "06:00",
            endTime: "07:00",
            price: 70000,
            isSelected: false,
          },
          {
            startTime: "07:00",
            endTime: "08:00",
            price: 70000,
            isSelected: false,
          },
          {
            startTime: "08:00",
            endTime: "09:00",
            price: 60000,
            isSelected: false,
          },
          {
            startTime: "09:00",
            endTime: "10:00",
            price: 50000,
            isSelected: false,
          },
        ],
      },
    ],
  },
  {
    id: "970824f1-69b1-478e-9445-b3f8ca9a320c",
    name: "Sân Điện Biên Phủ",
    address: "186 Điện Biên Phủ, Quận 3, Thành phố Hồ Chí Minh",
    openAt: 360,
    closeAt: 600,
    slotDuration: 60,
    images: [yard3, yard1, yard2],
    subYards: [
      {
        name: "Sân 1",
        type: "3 vs 3",
        slots: [
          {
            startTime: "06:00",
            endTime: "07:00",
            price: 50000,
            isSelected: false,
          },
          {
            startTime: "07:00",
            endTime: "08:00",
            price: 60000,
            isSelected: false,
          },
          {
            startTime: "08:00",
            endTime: "09:00",
            price: 60000,
            isSelected: false,
          },
          {
            startTime: "09:00",
            endTime: "10:00",
            price: 50000,
            isSelected: false,
          },
        ],
      },
      {
        name: "Sân 2",
        type: "5 vs 5",
        slots: [
          {
            startTime: "06:00",
            endTime: "07:00",
            price: 70000,
            isSelected: false,
          },
          {
            startTime: "07:00",
            endTime: "08:00",
            price: 60000,
            isSelected: false,
          },
          {
            startTime: "08:00",
            endTime: "09:00",
            price: 60000,
            isSelected: false,
          },
          {
            startTime: "09:00",
            endTime: "10:00",
            price: 70000,
            isSelected: false,
          },
        ],
      },
    ],
  },
  {
    id: "b01b78ac-add8-4fbf-85a5-89666de6f3f6",
    name: "Sân Thủ Đức",
    address: "503 Lê Văn Việt, Thành phố Thủ Đức, Thành phố Hồ Chí Minh",
    openAt: 360,
    closeAt: 600,
    slotDuration: 60,
    images: [yard1, yard2, yard3],
    subYards: [
      {
        name: "Sân 1",
        type: "3 vs 3",
        slots: [
          {
            startTime: "06:00",
            endTime: "07:00",
            price: 50000,
            isSelected: false,
          },
          {
            startTime: "07:00",
            endTime: "08:00",
            price: 60000,
            isSelected: false,
          },
          {
            startTime: "08:00",
            endTime: "09:00",
            price: 60000,
            isSelected: false,
          },
          {
            startTime: "09:00",
            endTime: "10:00",
            price: 50000,
            isSelected: false,
          },
        ],
      },
      {
        name: "Sân 2",
        type: "5 vs 5",
        slots: [
          {
            startTime: "06:00",
            endTime: "07:00",
            price: 70000,
            isSelected: false,
          },
          {
            startTime: "07:00",
            endTime: "08:00",
            price: 60000,
            isSelected: false,
          },
          {
            startTime: "08:00",
            endTime: "09:00",
            price: 60000,
            isSelected: false,
          },
          {
            startTime: "09:00",
            endTime: "10:00",
            price: 70000,
            isSelected: false,
          },
        ],
      },
    ],
  },
  {
    id: "ffbf6d0d-fb81-48f1-bcd7-145aa9d262f7",
    name: "Sân Quận 1",
    address: "2 Đinh Tiên Hoàng, Đa Kao, Quận 1, Thành phố Hồ Chí Minh",
    openAt: 360,
    closeAt: 600,
    slotDuration: 60,
    images: [yard2, yard1, yard3],
    subYards: [
      {
        name: "Sân 1",
        type: "3 vs 3",
        slots: [
          {
            startTime: "06:00",
            endTime: "07:00",
            price: 50000,
            isSelected: false,
          },
          {
            startTime: "07:00",
            endTime: "08:00",
            price: 60000,
            isSelected: false,
          },
          {
            startTime: "08:00",
            endTime: "09:00",
            price: 60000,
            isSelected: false,
          },
          {
            startTime: "09:00",
            endTime: "10:00",
            price: 50000,
            isSelected: false,
          },
        ],
      },
      {
        name: "Sân 2",
        type: "5 vs 5",
        slots: [
          {
            startTime: "06:00",
            endTime: "07:00",
            price: 70000,
            isSelected: false,
          },
          {
            startTime: "07:00",
            endTime: "08:00",
            price: 60000,
            isSelected: false,
          },
          {
            startTime: "08:00",
            endTime: "09:00",
            price: 60000,
            isSelected: false,
          },
          {
            startTime: "09:00",
            endTime: "10:00",
            price: 70000,
            isSelected: false,
          },
        ],
      },
      {
        name: "Sân 3",
        type: 2,
        slots: [
          {
            startTime: "06:00",
            endTime: "07:00",
            price: 70000,
            isSelected: false,
          },
          {
            startTime: "07:00",
            endTime: "08:00",
            price: 70000,
            isSelected: false,
          },
          {
            startTime: "08:00",
            endTime: "09:00",
            price: 60000,
            isSelected: false,
          },
          {
            startTime: "09:00",
            endTime: "10:00",
            price: 50000,
            isSelected: false,
          },
        ],
      },
    ],
  },
  {
    id: "0e050a63-32d2-4298-a391-5ba2b378a43d",
    name: "Sân Điện Biên Phủ",
    address: "186 Điện Biên Phủ, Quận 3, Thành phố Hồ Chí Minh",
    openAt: 360,
    closeAt: 600,
    slotDuration: 60,
    images: [yard3, yard1, yard2],
    subYards: [
      {
        name: "Sân 1",
        type: "3 vs 3",
        slots: [
          {
            startTime: "06:00",
            endTime: "07:00",
            price: 50000,
            isSelected: false,
          },
          {
            startTime: "07:00",
            endTime: "08:00",
            price: 60000,
            isSelected: false,
          },
          {
            startTime: "08:00",
            endTime: "09:00",
            price: 60000,
            isSelected: false,
          },
          {
            startTime: "09:00",
            endTime: "10:00",
            price: 50000,
            isSelected: false,
          },
        ],
      },
      {
        name: "Sân 2",
        type: "5 vs 5",
        slots: [
          {
            startTime: "06:00",
            endTime: "07:00",
            price: 70000,
            isSelected: false,
          },
          {
            startTime: "07:00",
            endTime: "08:00",
            price: 60000,
            isSelected: false,
          },
          {
            startTime: "08:00",
            endTime: "09:00",
            price: 60000,
            isSelected: false,
          },
          {
            startTime: "09:00",
            endTime: "10:00",
            price: 70000,
            isSelected: false,
          },
        ],
      },
    ],
  },
];

function Yard() {
  const { id } = useParams();
  const [yard, setYard] = useState(null);
  const [booking, setBooking] = useState([]);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  const [slideImages, setSlideImages] = useState([]);

  useEffect(() => {}, []);

  const onBooking = () => {
    if (!localStorage.getItem(encryptKey("credential"))) {
      toast.error("Login to continue booking!", TOAST_CONFIG);
      localStorage.setItem(encryptKey("returnUrl"), location.pathname);
      navigate("/auth/login");
    } else {
      toast.success("Booking successfully.", TOAST_CONFIG);
      setBooking([]);
      setTotal(0);
    }
  };

  const onSelectSlot = (slot) => {
    slot.isSelected = !slot.isSelected;
    if (slot.isSelected) {
      setBooking([...booking, 1]);
      setTotal(total + 100000);
    } else {
      setBooking(booking.slice(0, booking.length - 1));
      setTotal(total - 100000);
    }
  };

  return (
    <div className="w-100 yard-container mt-5 container pb-5">
      {!yard && (
        <div className="w-100 d-flex justify-content-center align-items-center loading-height">
          <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      )}
      {yard && (
        <>
          <div className="row flex-row">
            <div className="col-8">
              <Slide>
                {slideImages.map((slideImage, index) => (
                  <div className="each-slide" key={index}>
                    <div
                      style={{ backgroundImage: `url(${slideImage})` }}
                    ></div>
                  </div>
                ))}
              </Slide>
            </div>
            <div className="col-4 ps-4 pe-4 pt-5 flex-column">
              <div className="text-center mb-3">
                <b className="size-2 d-block">{yard.name}</b>
                <Rating ratingValue={80} allowHalfIcon={true} readonly={true} />
              </div>
              <div className="row mb-1 yard__details-field">
                <span className="col-3 fw-bolder">Address:</span>
                <span className="col-9">{yard.address}</span>
              </div>
              <div className="row mb-1 yard__details-field">
                <span className="col-3 fw-bolder">Open:</span>
                <span className="col-9">
                  {TIMELINE.find((time) => time.value === yard.openAt).label} -{" "}
                  {TIMELINE.find((time) => time.value === yard.closeAt).label}
                </span>
              </div>
            </div>
          </div>
          <div className="row justify-content-center mt-5">
            <div className="col-7 pt-4">
              <div className="text-center mb-4 row">
                <div className="row p-2 col-6 justify-content-end size-1 ps-3">
                  <label htmlFor="play-date" className="text-start">
                    Play Date
                  </label>
                  <span className="col-1 lh-44 signup__icon-wrapper booking__icon-wrapper">
                    <i className="far fa-clock"></i>
                  </span>
                  <input
                    id="play-date"
                    className="col-10 outline-none p-2 signup__input-border"
                    type="date"
                    placeholder="Date"
                    min={moment(new Date()).format("yyyy-mm-DD")}
                    required
                  />
                </div>
                <div className="row p-2 col-6 justify-content-end size-1 ps-3">
                  <label htmlFor="play-date" className="text-start">
                    Pick Yard
                  </label>
                  <span className="col-1 lh-44 signup__icon-wrapper booking__icon-wrapper">
                    <i className="fas fa-columns"></i>
                  </span>
                  <select
                    id="sub-yard"
                    className="col-10 outline-none p-2 signup__input-border"
                    style={{ backgroundColor: "white" }}
                  >
                    <option value="">Select yard</option>
                    {yard.subYards.map((sub) => (
                      <option
                        value={sub.id}
                      >{`${sub.name} - (${sub.type})`}</option>
                    ))}
                  </select>
                </div>
                <div className="col-12 d-flex align-items-center justify-content-center size-2">
                  Slots
                </div>
              </div>
              <div className="row ps-2">
                {yard.subYards[0].slots.map((slot) => (
                  <div className="col-3 slot-details-container">
                    <div
                      className={
                        slot.isSelected
                          ? "slot-details-clicked flex-column"
                          : "slot-details flex-column"
                      }
                      onClick={() => onSelectSlot(slot)}
                    >
                      <p>
                        <b>
                          {slot.startTime} - {slot.endTime}
                        </b>
                      </p>
                      <p>
                        <i>{slot.price} VND</i>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-5 ps-4 pe-4 flex-column pt-4">
              <h4 className="text-center mb-4">Booking</h4>
              <div className="matches-container">
                {!booking.length && (
                  <div className=" row justify-content-center align-items-center">
                    <img
                      className="nodata-img"
                      src={noData}
                      alt="No data availble"
                    />
                    <p className="text-center nodata-text">
                      No booking available
                    </p>
                  </div>
                )}
                {booking.map((item) => (
                  <div className="match-container row mb-2">
                    <div className="col-2 basket__img-container d-flex justify-content-center align-items-center">
                      <p>
                        <i
                          className="far fa-trash-alt trash-icon"
                          title="Remove"
                        ></i>
                      </p>
                    </div>
                    <div className="col-3 basket__img-container d-flex justify-content-center align-items-center">
                      <p className="text-center">
                        <b>4:00 - 5:00</b>
                        <br />
                        <span style={{ fontSize: "0.9rem" }}>26/05/2022</span>
                      </p>
                    </div>
                    <div className="p-3 ps-0 pe-1 col-4 d-flex justify-content-center align-items-center">
                      <p>
                        <b>Sân A</b> - (3 vs 3)
                      </p>
                    </div>
                    <div className="col-3 basket__img-container d-flex justify-content-center align-items-center">
                      <p>
                        <b>100.000 VND</b>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="pt-3 pb-3 row">
                <div className="col-3">Total</div>
                <div className="col-9 text-end">
                  <b>{total} VND</b>
                </div>
              </div>
              <div className="pt-3 pb-3 justify-content-around">
                <button
                  className="btn btn-primary p-2 w-100"
                  onClick={onBooking}
                >
                  Booking
                </button>
              </div>
            </div>
          </div>
          <Reviews />
        </>
      )}

      <ToastContainer />
    </div>
  );
}

export default Yard;
