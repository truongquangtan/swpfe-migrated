import { useCallback, useEffect, useState } from "react";
// import { confirmAlert } from "react-confirm-alert";
// import { Rating } from "react-simple-star-rating";

import ratingImg from "../../assets/images/rating.png";
import PostRatingModal from "../../modals/PostRatingModal";
import { getVote } from "../../services/me.service";
import CircleDashedLoading from "../CircleDashedLoading";
import Modal, { useModal } from "../Modal";
import "./style.scss";

function YardRatingWidget() {

  const [votes, setVotes] = useState([])
  const [isLoading, setLoading] = useState(true);
  const [showVoteModal, setShowVoteModal] = useModal(false);
  const [voteBookingId, setVoteBookingId] = useState(null);
  const [submitPostSuccess, setSubmitPostSuccess] = useState(false);

  useEffect(() => {
    const loadVotes = async () => {
      try {
        const vote = await getVote()
        setVotes(vote);
      } catch (error) {
        setVotes([])
      } finally {
        setLoading(false)
      }
    }
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
      setVotes(previousVotes => previousVotes?.filter(vote => vote?.bookingId != voteBookingId))
      setSubmitPostSuccess(false);
      setShowVoteModal()
    }

  }, [submitPostSuccess])



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
          isLoading && <div className="d-flex justify-content-center"> <CircleDashedLoading /> </div>
        }
        <div className="overflow-auto h-75 p-3 row justify-content-around">
          {
            (!isLoading && votes.length > 0) &&
            votes.map(vote => (
              <div key={vote?.bookingId} className="col-6 p-3">
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
        
        </div>
      </div>
    </>
  );
}

export default YardRatingWidget;
