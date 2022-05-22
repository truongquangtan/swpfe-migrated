import React from "react";

import "./style.scss";
import DashboardFeatures from "../../components/DashboardFeatures";
import DockFeature from "../../components/DockFeature";
import Header from "../../components/Header";

function HomePage() {
  return (
    <div>
      <Header />
      <DashboardFeatures />
      <div className="home-dock p-5 pt-2 pb-2 d-flex">
        <DockFeature />
        <DockFeature />
        <DockFeature />
        <DockFeature />
        <DockFeature />
      </div>
    </div>
  );
}

export default HomePage;
