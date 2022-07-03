import { Rating } from "react-simple-star-rating";
import { memo, useEffect, useState } from "react";

import "./style.scss";
import reviewer from "../../assets/images/reviewer.png";
import { getAllRatingOfYard } from "../../services/yard.service";
import DisableElement from "../DisableElement";

function Reviews({ yardId }) {
  const [ratings, setRatings] = useState([]);
  const [loadingRatings, setLoadingRatings] = useState(false);

  useEffect(() => {
    if (yardId) {
      setLoadingRatings(true);
      getAllRatingOfYard(yardId)
        .then((res) => {
          setRatings(res.votes);
        })
        .finally(() => {
          setLoadingRatings(false);
        });
    }
  }, []);

  return (
    <div>
      <h2 className="mb-3">{!!ratings.length && "Reviews"}</h2>
      <div className="reviews-container">
        {loadingRatings && (
          <div className="w-100 d-flex justify-content-center align-items-center">
            <DisableElement />
          </div>
        )}
        {!loadingRatings &&
          ratings.map((rating) => (
            <div key={rating.voteId} className="review">
              <div className="reviewer-img">
                <img
                  src={rating.accountAvatar ? rating.accountAvatar : reviewer}
                />
              </div>
              <div className="review-content">
                <p>
                  {rating.accountFullName}
                  <Rating
                    ratingValue={rating.score}
                    allowHalfIcon={true}
                    readonly={true}
                    style={{ fontSize: "0.5rem" }}
                  />
                </p>
                <p className="review-time">{rating.postedAt}</p>
                <p>{rating.comment}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default memo(Reviews);
