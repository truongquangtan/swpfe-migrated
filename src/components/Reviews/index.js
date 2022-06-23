import { Rating } from "react-simple-star-rating";

import "./style.scss";
import reviewer from "../../assets/images/reviewer.jpg";
import { memo, useEffect, useState } from "react";
import { getAllRatingOfYard } from "../../services/yard.service";

function Reviews({ yardId }) {
  const [ratings, setRatings] = useState([]);
  const [loadingRatings, setLoadingRatings] = useState(true);

  useEffect(() => {
    try {
      const getAllRating = async () => {
        const ratings = await getAllRatingOfYard(yardId);
        setRatings(ratings)
      }
      if (yardId) {
        getAllRating();
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingRatings(false)
    }
  }, []);

  return (

    <div>
      <h2 className="mb-3">Reviews</h2>
      <div className="reviews-container">
        {
          ratings.map(rating => (
            <div key={rating.voteId} className="review">
              <div className="reviewer-img">
                <img src={rating.accountAvatar ? rating.accountAvatar : reviewer} />
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

          ))
        }
      </div>
    </div>
  );
}

export default memo(Reviews);
