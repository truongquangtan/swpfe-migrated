import React from "react";
import "./style.scss";

function DisableScreen() {
  return (
    <div className="disable-screen">
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}

export default DisableScreen;
