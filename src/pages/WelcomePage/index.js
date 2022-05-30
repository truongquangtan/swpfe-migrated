import React from "react";
import { Link } from "react-router-dom";
import { Slide } from "react-slideshow-image";

import "./style.scss";
import yard1 from "../../assets/images/yard-1.jpg";
import yard2 from "../../assets/images/yard-2.jpg";
import yard3 from "../../assets/images/yard-3.jpg";

const slideImages = [yard1, yard2, yard3];

function WelcomePage() {
  return (
    <div className="row welcome__page-container">
      <div className="col-4 d-flex align-items-center flex-column justify-content-center">
        <h1 className="size-5 text-center font-weight-bold bold lp-3">
          Basketball Playground
        </h1>
        <Link to="/login">
          <button className="btn btn-primary mt-5 plr-2 booking-btn">
            Get Started
          </button>
        </Link>
      </div>
      <div className="col-8">
        <Slide>
          {slideImages.map((slideImage, index) => (
            <div className="slide-container" key={index}>
              <div style={{ backgroundImage: `url(${slideImage})` }}></div>
            </div>
          ))}
        </Slide>
      </div>
    </div>
  );
}

export default WelcomePage;
