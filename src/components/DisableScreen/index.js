import React from "react";
import "./style.scss";

function DisableScreen() {
  return (
    <div className="disable-screen">
      <div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  );
}

export default DisableScreen;
