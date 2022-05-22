import React from "react";
import "./style.scss";

function DockFeature() {
  return (
    <div className="position-relative m-1">
      <article className="feature-tab text-truncate p-3 pt-2 pb-2">
        <span>Booking</span>
        <i className="fas fa-times-circle remove__feature-btn"></i>
      </article>
    </div>
  );
}

export default DockFeature;
