import React from "react";
import { Link, Outlet } from "react-router-dom";

import "./style.scss";
import Header from "../../components/Header";

function WelcomePage() {
  return (
    <div className="welcome__page-container">
      <Header />
      <Outlet/>
    </div>
  );
}

export default WelcomePage;
