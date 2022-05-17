import React from "react";

import "./style.scss";
import basketball from "../../assets/images/bg-wall.jpg";
import { Link } from "react-router-dom";

function WelcomePage() {
  return (
    <div className="row welcome__page-container">
      <div className="col-4 d-flex align-items-center flex-column justify-content-center">
        <h1 className="size-5 text-center font-weight-bold bold lp-3">
          Basketball Playground
        </h1>
        <Link to="/login">
          <button className="btn btn-primary mt-5 plr-2 booking-btn">
            Booking Now!
          </button>
        </Link>
      </div>
      <div className="col-8">
        <img className="w-100" src={basketball} alt="Background" />
      </div>
    </div>
  );
}

export default WelcomePage;
