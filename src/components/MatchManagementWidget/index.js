import { useState } from "react";
import * as moment from "moment";

import "./style.scss";
import empty from "../../assets/images/empty.png";

function MatchManagementWidget() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedSubYard, setSelectedSubYard] = useState(null);

  return (
    <div className="pt-4 mt-5 w-100 row justify-content-center">
      <div className="col-7">
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
              //   disabled={voucherCode}
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
              //   disabled={voucherCode}
            >
              <option value="" disabled selected>
                Select yard
              </option>
              {/* {yard.subYards.map((sub) => (
                <option
                  key={sub.id}
                  value={sub.id}
                >{`${sub.name} - (${sub.typeYard})`}</option>
              ))} */}
            </select>
          </div>
          <div className="col-12 d-flex align-items-center justify-content-center size-2">
            Slots
          </div>
        </div>
        <div
        // className={!voucherCode ? "row ps-2" : "row ps-2 div-disabled"}
        >
          {/* {slots &&
            slots.map((slot) => (
              <div key={slot.id} className="col-3 slot-details-container">
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
              <DisableElement />
            </div>
          )} */}
          {/* {(!selectedDate || !selectedSubYard) && !slots.length && ( */}
          <div className="w-100 pt-5 d-flex justify-content-center align-items-center flex-column">
            <i className="fas fa-hand-pointer size-3"></i>
            <p className="text-center nodata-text">
              Please select date and sub yard
            </p>
          </div>
          {/* )} */}
          {/* {selectedDate && selectedSubYard && !isLoadingSlots && !slots.length && ( */}
          {/* <div className="w-100 pt-5 d-flex justify-content-center align-items-center flex-column">
            <img src={empty} style={{ width: 100 }} />
            <p className="text-center nodata-text">No result available</p>
          </div> */}
          {/* )} */}
        </div>
      </div>
      <div className="col-5 ps-4 pe-4 flex-column">
        <h4 className="text-center mb-3">Booking Information</h4>
        <div
        // className="matches-container"
        >
          {/* {!booking.length && (
            <div className=" row justify-content-center align-items-center">
              <img className="nodata-img" src={noData} alt="No data availble" />
              <p className="text-center nodata-text">No booking available</p>
            </div>
          )}
          {booking.map((item, index) => (
            <div key={index} className="match-container row mb-2">
              <div className="col-1 basket__img-container d-flex justify-content-center align-items-center ps-3">
                <p>
                  <i
                    className="far fa-trash-alt trash-icon"
                    title="Remove"
                    onClick={() => {
                      setBooking(
                        booking.filter((b) => b.slotId !== item.slotId)
                      );
                    }}
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
              <div className="col-3 basket__img-container d-flex justify-content-center align-items-center  text-center">
                <p>
                  <b>{item.price} VND</b>
                  <br />
                  {!!item.originalPrice && voucherCode && (
                    <span
                      className="original-price"
                      style={{ fontSize: "0.9rem" }}
                    >
                      {item.originalPrice} VND
                    </span>
                  )}
                </p>
              </div>
            </div>
          ))} */}
        </div>
        <div className="pt-3 pb-3 row">
          {/* <div className="col-3">Total</div>
          <div className="col-9 text-end">
            <b>{total} VND</b>
            <br />
            {!!originalTotal && voucherCode && (
              <span className="original-price" style={{ fontSize: "0.9rem" }}>
                {originalTotal} VND
              </span>
            )}
          </div> */}
        </div>
        {/* <div className="pt-3 pb-3 justify-content-around">
          <button className="btn btn-primary p-2 w-100"> */}
        {/* {isBooking ? (
              <div className="dots-loading">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            ) : ( */}
        {/* "Book" */}
        {/* )} */}
        {/* </button>
        </div> */}
      </div>
    </div>
  );
}

export default MatchManagementWidget;
