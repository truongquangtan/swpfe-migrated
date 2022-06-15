import { useState, useEffect } from "react";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

import "./style.scss";
import basketball from "../../assets/images/basketball-2.png";
import player1 from "../../assets/images/player-1.gif";
import player2 from "../../assets/images/player-2.gif";
import { getMyIncomingMatches } from "../../services/me.service";
import Pagination from "../Pagination";

function IncomingMatchesWidget() {
  const ITEMS_PER_PAGE = 5;
  const [isLoading, setIsLoading] = useState(false);
  const [matches, setMatches] = useState([]);
  const [maxPage, setMaxPage] = useState(1);

  useEffect(() => {
    getIncomingMatches();
  }, []);

  const getIncomingMatches = (page = 1, itemsPerPage = ITEMS_PER_PAGE) => {
    setIsLoading(true);
    getMyIncomingMatches({ page, itemsPerPage })
      .then((res) => {
        setMatches(res.data);
        setMaxPage(
          res.maxResult % ITEMS_PER_PAGE === 0 && res.maxResult !== 0
            ? res.maxResult / ITEMS_PER_PAGE
            : Math.floor(res.maxResult / ITEMS_PER_PAGE) + 1
        );
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const onCancelBooking = (bookingId) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className="custom-confirm">
            <h4>Cancel Booking</h4>
            <p className="mb-3">
              Give us your reason why you cancel this booking
            </p>
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

  const onChangePage = (page) => {
    getIncomingMatches(page);
  };

  return (
    <div className="col-6 ps-4 pe-4 flex-column pt-4 m-auto mt-5">
      <img src={player1} alt="Player" className="incoming-player-1" />
      <img src={player2} alt="Player" className="incoming-player-2" />
      <h4 className="text-center mb-4">
        <img src={basketball} alt="basketball" className="width-60 pe-3" />
        Incoming Matches
      </h4>
      <div className="overflow-auto h-75 p-3">
        {isLoading ? (
          <div
            className="w-100 d-flex justify-content-center align-items-center"
            style={{ height: "50vh" }}
          >
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        ) : (
          <>
            {matches.map((match) => (
              <div className="match-container row mb-2">
                <div className="col-3 basket__img-container d-flex justify-content-center align-items-center">
                  <p className="text-center">
                    <b>
                      {match.startTime} - {match.endTime}
                    </b>
                    <br />
                    <span style={{ fontSize: "0.9rem" }}>{match.date}</span>
                  </p>
                </div>
                <div className="p-3 ps-0 pe-1 col-7 d-flex align-items-center flex-column">
                  <p className="text-center">
                    <b>{match.bigYardName}</b>
                    <p>
                      {match.subYardName} - ({match.type})
                    </p>
                  </p>
                  <p className="color-blur">{match.bigYardAddress}</p>
                </div>
                <div
                  className="col-2 basket__img-container d-flex justify-content-center align-items-center"
                  style={{ fontSize: "1.5rem" }}
                >
                  <i
                    className="far fa-trash-alt trash-icon"
                    title="Cancel booking"
                    onClick={() => onCancelBooking(match.bookingId)}
                  ></i>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
      <Pagination maxPage={maxPage} onChangePage={onChangePage} />
    </div>
  );
}

export default IncomingMatchesWidget;
