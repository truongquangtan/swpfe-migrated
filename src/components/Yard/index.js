import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams, useLocation } from "react-router-dom";
import { Slide } from "react-slideshow-image";
import * as moment from "moment";
import { Rating } from "react-simple-star-rating";
import * as _ from "lodash";

import "./style.scss";
import yard1 from "../../assets/images/yard-1.jpg";
import yard2 from "../../assets/images/yard-2.jpg";
import yard3 from "../../assets/images/yard-3.jpg";
import { TIMELINE } from "../../constants/time";
import noData from "../../assets/images/no-data.jpg";
import { toast, ToastContainer } from "react-toastify";
import { decrypt, encryptKey } from "../../helpers/crypto.helper";
import { TOAST_CONFIG } from "../../constants/default";
import Reviews from "../Reviews";
import {
  bookingYard,
  getSlots,
  getYardById,
} from "../../services/yard.service";
import empty from "../../assets/images/empty.png";

function Yard() {
  const { id } = useParams();
  const [yard, setYard] = useState(null);
  const [booking, setBooking] = useState([]);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  const [slideImages, setSlideImages] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedSubYard, setSelectedSubYard] = useState(null);
  const [isLoadingSlots, setIsLoadingSlots] = useState(false);
  const [slots, setSlots] = useState([]);
  const [isAppliedVoucher, setIsAppliedVoucher] = useState(false);
  const [isLoadingVoucher, setIsLoadingVoucher] = useState(false);
  const [voucherCode, setVoucherCode] = useState("");
  const [isBooking, setIsBooking] = useState(false);

  useEffect(() => {
    getYardById(id).then((res) => {
      setYard(res.data);
      setSlideImages(
        res.data.images.length ? res.data.images : [yard1, yard2, yard3]
      );
    });
  }, []);

  useEffect(() => {
    if (selectedDate && selectedSubYard) {
      setIsLoadingSlots(true);
      getSlots(selectedSubYard, selectedDate)
        .then((res) => {
          if (res) {
            res.data.forEach((slot) => {
              slot.isSelected = _.find(booking, { id: slot.id }) ? true : false;
            });
            setSlots(res.data);
          }
        })
        .finally(() => {
          setIsLoadingSlots(false);
        });
    } else {
      if (isLoadingSlots) {
        setIsLoadingSlots(false);
      }
    }
  }, [selectedDate, selectedSubYard]);

  const onBooking = () => {
    const credential = localStorage.getItem(encryptKey("credential"));
    if (!credential) {
      toast.error("Login to continue booking!", TOAST_CONFIG);
      localStorage.setItem(encryptKey("returnUrl"), location.pathname);
      navigate("/auth/login");
    } else {
      setIsBooking(true);
      bookingYard(
        yard.id,
        {
          voucherId: voucherCode || null,
          bookingList: booking,
        },
        decrypt(credential).token
      )
        .then((res) => {
          if (res) {
            setIsLoadingSlots(true);
            getSlots(selectedSubYard, selectedDate)
              .then((res) => {
                if (res) {
                  setSlots(res.data);
                }
              })
              .finally(() => {
                setIsLoadingSlots(false);
              });
            setBooking([]);
            setTotal(0);
            toast.success("Booking successfully.", TOAST_CONFIG);
          }
        })
        .catch((error) => {
          toast.error(error.response.data.message, TOAST_CONFIG);
        })
        .finally(() => {
          setIsBooking(false);
        });
    }
  };

  const onSelectSlot = (slot) => {
    if (!isAppliedVoucher && !slot.isBooked) {
      slot.isSelected = !slot.isSelected;
      if (slot.isSelected) {
        const subYard = _.find(yard.subYards, { id: slot.refSubYard });
        const newBooking = {
          ..._.omit(slot, ["isBooked", "isSelected", "id"]),
          date: moment(selectedDate).format("DD/MM/yyyy"),
          yardName: subYard.name,
          yardType: subYard.typeYard,
          slotId: slot.id,
        };
        setBooking([newBooking, ...booking]);
        setTotal(total + slot.price);
      } else {
        const newBookingList = booking.filter(
          (item) => item.slotId !== slot.id
        );
        setBooking(newBookingList);
        setTotal(total - slot.price);
      }
    }
  };

  const handleOnClickVoucher = () => {
    if (isAppliedVoucher) {
    } else {
    }
    setIsAppliedVoucher(!isAppliedVoucher);
  };

  return (
    <div className="w-100 yard-container mt-5 container pb-5">
      {!yard && (
        <div className="w-100 d-flex justify-content-center align-items-center loading-height">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
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
              <div className="text-center mb-4">
                <b className="size-2 d-block mb-2">{yard.name}</b>
                <Rating ratingValue={80} allowHalfIcon={true} readonly={true} />
              </div>
              <div className="row mb-1 yard__details-field">
                <span className="col-3 fw-bolder">Address:</span>
                <span className="col-9">{yard.address}</span>
              </div>
              <div className="row mb-1 yard__details-field">
                <span className="col-3 fw-bolder">Open:</span>
                <span className="col-9">
                  {yard.openAt} - {yard.closeAt}
                </span>
              </div>
            </div>
          </div>
          <div className="row justify-content-center my-5">
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
                    value={selectedDate}
                    onChange={(e) => {
                      setSelectedDate(e.target.value);
                    }}
                    min={moment(new Date()).format("yyyy-mm-DD")}
                    required
                    disabled={isAppliedVoucher}
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
                    onChange={(e) => {
                      setSelectedSubYard(e.target.value);
                    }}
                    disabled={isAppliedVoucher}
                  >
                    <option value="">Select yard</option>
                    {yard.subYards.map((sub) => (
                      <option
                        value={sub.id}
                      >{`${sub.name} - (${sub.typeYard})`}</option>
                    ))}
                  </select>
                </div>
                <div className="col-12 d-flex align-items-center justify-content-center size-2">
                  Slots
                </div>
              </div>
              <div
                className={
                  !isAppliedVoucher ? "row ps-2" : "row ps-2 div-disabled"
                }
              >
                {slots &&
                  slots.map((slot) => (
                    <div className="col-3 slot-details-container">
                      <div
                        className={
                          slot.isBooked
                            ? "slot-details flex-column booked-slot"
                            : slot.isSelected
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
                {isLoadingSlots && !slots.length && (
                  <div className="w-100 d-flex justify-content-center pt-5">
                    <div className="spinner-border" role="status">
                      <span className="sr-only">Loading...</span>
                    </div>
                  </div>
                )}
                {(!selectedDate || !selectedSubYard) && (
                  <div className="w-100 pt-5 d-flex justify-content-center align-items-center flex-column">
                    <i className="fas fa-hand-pointer size-3"></i>
                    <p className="text-center nodata-text">
                      Please select date and sub yard
                    </p>
                  </div>
                )}
                {selectedDate &&
                  selectedSubYard &&
                  !isLoadingSlots &&
                  !slots.length && (
                    <div className="w-100 pt-5 d-flex justify-content-center align-items-center flex-column">
                      <img src={empty} style={{ width: 100 }} />
                      <p className="text-center nodata-text">
                        No result available
                      </p>
                    </div>
                  )}
              </div>
            </div>
            <div className="col-5 ps-4 pe-4 flex-column pt-4">
              <h4 className="text-center mb-3">Booking</h4>
              <div className="row p-2 mb-4">
                <label
                  htmlFor="voucher"
                  className="text-start"
                  style={{ paddingLeft: 0 }}
                >
                  Voucher Code
                </label>
                <span className="col-1 lh-44 signup__icon-wrapper">
                  <i className="fas fa-money-check-alt"></i>
                </span>
                <input
                  id="voucher"
                  name="voucher"
                  className="col-9 outline-none p-2 fg-pw__input-border"
                  type="text"
                  placeholder="Enter voucher code"
                  value={voucherCode}
                  onChange={(e) => {
                    setVoucherCode(e.target.value);
                  }}
                  disabled={!booking.length}
                />
                <button
                  id="voucher-btn"
                  className="col-2 lh-44 fg-pw__icon-wrapper"
                  disabled={!voucherCode}
                  onClick={handleOnClickVoucher}
                >
                  {isAppliedVoucher ? "Remove" : "Apply"}
                </button>
              </div>
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
                    <div className="col-1 basket__img-container d-flex justify-content-center align-items-center ps-3">
                      <p>
                        <i
                          className="far fa-trash-alt trash-icon"
                          title="Remove"
                        ></i>
                      </p>
                    </div>
                    <div className="col-4 basket__img-container d-flex justify-content-center align-items-center">
                      <p className="text-center">
                        <b>
                          {item.startTime} - {item.endTime}
                        </b>
                        <br />
                        <span style={{ fontSize: "0.9rem" }}>{item.date}</span>
                      </p>
                    </div>
                    <div className="p-3 ps-0 pe-1 col-4 d-flex justify-content-center align-items-center">
                      <p>
                        <b>{item.yardName}</b> - ({item.yardType})
                      </p>
                    </div>
                    <div className="col-3 basket__img-container d-flex justify-content-center align-items-center">
                      <p>
                        <b>{item.price} VND</b>
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
                  disabled={!booking.length || isLoadingVoucher || isBooking}
                >
                  {isBooking ? (
                    <div className="dots-loading">
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                  ) : (
                    "Booking"
                  )}
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