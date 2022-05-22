import React from "react";
import "./style.scss";

function Header() {
  return (
    <div>
      <div className="d-flex align-content-center">
        <span className="p-2 size-2 ps-4 pe-3">
          <i className="fas fa-basketball-ball"></i>
        </span>
        <b className="home-title">Basketball Playground</b>
      </div>
      <div className="size-2 position-fixed top-1 right-1 profile-icon">
        <i className="far fa-user-circle"></i>
      </div>
    </div>
  );
}

export default Header;
