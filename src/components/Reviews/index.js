import { Rating } from "react-simple-star-rating";

import "./style.scss";
import reviewer from "../../assets/images/reviewer.jpg";

function Reviews() {
  return (
    <div>
      <h2 className="mb-3">Reviews</h2>
      <div className="reviews-container">
        <div className="review">
          <div className="reviewer-img">
            <img src={reviewer} />
          </div>
          <div className="review-content">
            <p>
              Pham Ha Giang
              <Rating
                ratingValue={80}
                allowHalfIcon={true}
                readonly={true}
                style={{ fontSize: "0.5rem" }}
              />
            </p>
            <p className="review-time">2022-03-30 21:01</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        <div className="review">
          <div className="reviewer-img">
            <img src={reviewer} />
          </div>
          <div className="review-content">
            <p>
              Pham Ha Giang
              <Rating
                ratingValue={80}
                allowHalfIcon={true}
                readonly={true}
                style={{ fontSize: "0.5rem" }}
              />
            </p>
            <p className="review-time">2022-03-30 21:01</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
