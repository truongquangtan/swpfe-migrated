import React from "react";
import { NavLink } from "react-router-dom";

import "./style.scss";
import { USER, ADMIN, OWNER } from "../../constants/roles";

const features = [
  {
    title: "Booking",
    icon: "far fa-calendar-alt",
    allowedRoles: [USER, ADMIN, OWNER],
    path: "booking",
  },
];

function DashboardFeatures() {
  return (
    <div className="row pt-12">
      {features.map((feature) => {
        return (
          <NavLink key={feature.title} to={feature.path} className="col-2">
            <div className="feature-container d-flex align-items-center justify-content-center flex-column pt-3 m-auto">
              <i className="far fa-calendar-alt size-2 mb-2"></i>
              <p>{feature.title}</p>
            </div>
          </NavLink>
        );
      })}
    </div>
  );
}

export default DashboardFeatures;
