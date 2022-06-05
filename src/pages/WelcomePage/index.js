import React from "react";
import { Link } from "react-router-dom";
import { Slide } from "react-slideshow-image";

import "./style.scss";
import yard1 from "../../assets/images/yard-1.jpg";
import yard2 from "../../assets/images/yard-2.jpg";
import yard3 from "../../assets/images/yard-3.jpg";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BookingWidget from "../../components/BookingWidget";

const slideImages = [
  { url: yard1, caption: "“One man can be a crucial ingredient on a team, but one man cannot make a team”" },
  { url: yard2, caption: "“Eat, sleep and live basketball…”" },
  { url: yard3, caption: "“Booking faster, more convenience”" },
];

function WelcomePage() {
  return (
    <div className="welcome__page-container">
      <Header />
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div className="slide-container" key={index}>
            <div style={{ backgroundImage: `url(${slideImage.url})` }}>
              <span>{slideImage.caption}</span>
            </div>
          </div>
        ))}
      </Slide>
      <BookingWidget />
      <Footer/>
    </div>
  );
}

export default WelcomePage;
