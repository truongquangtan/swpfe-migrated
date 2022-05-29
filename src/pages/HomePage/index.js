import React from "react";
import { Outlet } from "react-router-dom";

import "./style.scss";
import DockFeature from "../../components/DockFeature";
import Header from "../../components/Header";

function HomePage() {
  return (
    <div>
      <Header />
      <div className="container d-flex justify-content-center features">
        <Outlet />
      </div>
      {/* <div className="home-dock p-5 pt-2 pb-2 d-flex">
        <DockFeature />
        <DockFeature />
        <DockFeature />
        <DockFeature />
        <DockFeature />
      </div> */}
    </div>
  );
}

export default HomePage;
