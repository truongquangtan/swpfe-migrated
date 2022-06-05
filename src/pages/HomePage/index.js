import React from "react";
import { Outlet } from "react-router-dom";

import "./style.scss";
import Header from "../../components/Header";

function HomePage() {
  return (
    <div>
      <Header />
      <div className="container d-flex justify-content-center features mt-5">
        <Outlet />
      </div>
    </div>
  );
}

export default HomePage;
