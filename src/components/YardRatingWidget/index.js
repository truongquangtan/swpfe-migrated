import { useCallback, useEffect, useState } from "react";
// import { confirmAlert } from "react-confirm-alert";
// import { Rating } from "react-simple-star-rating";

import ratingImg from "../../assets/images/rating.png";
import PostRatingModal from "../../modals/PostRatingModal";
import { getVotes } from "../../services/me.service";
import Modal, { useModal } from "../Modal";
import Pagination from "../Pagination";
import "./style.scss";

function YardRatingWidget() {
  const ITEMS_PER_PAGE = 6;
  const [votes, setVotes] = useState([])
  const [isLoading, setLoading] = useState(true);
  const [showVoteModal, setShowVoteModal] = useModal(false);
  const [voteBookingId, setVoteBookingId] = useState(null);
  const [submitPostSuccess, setSubmitPostSuccess] = useState(false);
  const [maxPage, setMaxPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const loadVotes = (page = 1, itemsPerPage = ITEMS_PER_PAGE) => {
    setLoading(true);
    getVotes({ page, itemsPerPage }).then(res => {
      setVotes(res.votes);
      setMaxPage(
        res.maxResult % ITEMS_PER_PAGE === 0 && res.maxResult !== 0
          ? res.maxResult / ITEMS_PER_PAGE
          : Math.floor(res.maxResult / ITEMS_PER_PAGE) + 1
      );
    }).finally(() => {
      setLoading(false)
    })

  }

  useEffect(() => {
    loadVotes();
  }, [])

  const handleOnClickRatingIcon = (bookingId) => {
    setVoteBookingId(bookingId);
    setShowVoteModal();
  }

  const handleSubmitPostSuccess = useCallback(() => {
    setSubmitPostSuccess(true)
  })

  useEffect(() => {
    if (submitPostSuccess) {
      setSubmitPostSuccess(false);
      setShowVoteModal();
      loadVotes(currentPage);
    }
  }, [submitPostSuccess])

  const onChangePage = (page) => {
    setCurrentPage(page);
    loadVotes(page);
  }

  // const handleRating = (rate) => {
  //   setRating(rate);
  // };

  // const onClick = () => {
  //   confirmAlert({
  //     customUI: ({ onClose }) => {
  //       return (
  //         <div className="custom-confirm">
  //           <h4 className="w-min-content d-inline-block me-5">Rating</h4>
  //           <Rating
  //             onClick={handleRating}
  //             ratingValue={rating}
  //             allowHalfIcon={true}
  //           />
  //           <p className="my-3">How do you feel about this yard?</p>
  //           <textarea
  //             className="w-100 mb-3"
  //             style={{ height: "100px", borderRadius: "5px", resize: "none" }}
  //           />
  //           <button
  //             className="btn btn-primary me-3"
  //             onClick={() => {
  //               this.handleClickDelete();
  //               onClose();
  //             }}
  //           >
  //             Confirm
  //           </button>
  //           <button onClick={onClose} className="btn btn-light">
  //             Cancel
  //           </button>
  //         </div>
  //       );
  //     },
  //     closeOnEscape: true,
  //     closeOnClickOutside: true,
  //   });
  // };

  return (
    <>
      <Modal
        isShowing={showVoteModal}
        hide={setShowVoteModal}
      >
        <PostRatingModal toogleShowModal={setShowVoteModal} bookingId={voteBookingId} handleSubmitPostSuccess={handleSubmitPostSuccess} />
      </Modal>
      <div className="w-75 ps-4 pe-4 flex-column pt-5 mt-5 overflow-x-hidden m-auto">
        <h4 className="text-center mb-5">
          <img src={ratingImg} alt="basketball" className="width-60 pe-3" />
          Rating
        </h4>
        {
          isLoading && (
            <div
              className="w-100 d-flex justify-content-center align-items-center"
              style={{ height: "50vh" }}
            >
              <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>)
        }
        <div className="overflow-auto h-75 p-3 row justify-content-around">
          {
            (!isLoading && votes.length > 0) &&
            votes.map(vote => (
              <div key={vote?.bookingId} className="col-6 px-4">
                <div className="match-container row mb-4">
                  <div className="col-3 basket__img-container d-flex justify-content-center align-items-center">
                    <div className="text-center">
                      <b>{vote?.startTime} - {vote?.endTime}</b>
                      <br />
                      <span style={{ fontSize: "0.9rem" }}>{vote?.date}</span>
                    </div>
                  </div>
                  <div className="p-3 ps-0 pe-1 col-7 d-flex align-items-center flex-column">
                    <div className="text-center">
                      <b>{vote?.yardName}</b>
                      <p>{vote?.subYardName} - {vote?.typeName}</p>
                    </div>
                    <p className="color-blur">
                      {vote?.address}
                    </p>
                  </div>
                  <div
                    className="col-2 basket__img-container d-flex justify-content-center align-items-center"
                    style={{ fontSize: "1.5rem" }}
                  >
                    <i
                      className="fas fa-user-edit trash-icon"
                      title="Rating"
                      onClick={() => {
                        handleOnClickRatingIcon(vote?.bookingId)
                      }}
                    ></i>
                  </div>
                </div>
              </div>
            ))
          }
          <Pagination maxPage={maxPage} onChangePage={onChangePage} />
        </div>
      </div>
    </>
  );
}

export default YardRatingWidget;
