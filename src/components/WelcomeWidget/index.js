import { Slide } from "react-slideshow-image";

import Footer from "../../components/Footer";
import BookingWidget from "../../components/BookingWidget";
import yard1 from "../../assets/images/yard-1.jpg";
import yard2 from "../../assets/images/yard-2.jpg";
import yard3 from "../../assets/images/yard-3.jpg";
import DashboardFeatures from "../DashboardFeatures";

const slideImages = [
  {
    url: yard1,
    caption:
      "“One man can be a crucial ingredient on a team, but one man cannot make a team”",
  },
  { url: yard2, caption: "“Eat, sleep and live basketball…”" },
  { url: yard3, caption: "“Booking faster, more convenience”" },
];

function WelcomeWidget() {
  return (
    <>
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div className="slide-container" key={index}>
            <div style={{ backgroundImage: `url(${slideImage.url})` }}>
              <span>{slideImage.caption}</span>
            </div>
          </div>
        ))}
      </Slide>
      <DashboardFeatures role="user"/>
      <BookingWidget />
      <Footer />
    </>
  );
}

export default WelcomeWidget;