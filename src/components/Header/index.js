import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const popupFeatures = [
  {
    title: "Profile",
    icon: "fas fa-info-circle",
    click: () => {},
  },
  {
    title: "Log Out",
    icon: "fas fa-sign-out-alt",
    click: () => {},
  },
];

function Header() {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <div className="header">
      <Link to="/" className="d-flex align-content-center nav-brand">
        <span className="p-2 size-2 ps-4 pe-3">
          <i className="fas fa-basketball-ball"></i>
        </span>
        <b className="home-title">Basketball Playground</b>
      </Link>
      <div
        className="size-2 position-fixed top-1 right-1 profile-icon"
        onClick={() => setShowPopup(() => !showPopup)}
      >
        <i className="far fa-user-circle"></i>
      </div>
      {showPopup && (
        <div className="profile-popup">
          {popupFeatures.map((feature) => {
            return (
              <div className="profile__popup-feature" onClick={feature.click}>
                <i className={feature.icon + " p-2"}></i>
                <span>{feature.title}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Header;
