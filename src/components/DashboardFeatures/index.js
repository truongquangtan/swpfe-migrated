import React from "react";
import { NavLink } from "react-router-dom";

import "./style.scss";
import { USER, ADMIN, OWNER } from "../../constants/roles";
import congratulation from "../../assets/images/fire-cracker.png";

const features = [
  {
    title: "Booking",
    icon: "far fa-calendar-alt",
    allowedRoles: [USER, ADMIN, OWNER],
    path: "/booking",
  },
  {
    title: "Incoming Matches",
    icon: "far fa-calendar-check",
    allowedRoles: [USER, ADMIN, OWNER],
    path: "/incoming-matches",
  },
  {
    title: "Transaction History",
    icon: "fas fa-history",
    allowedRoles: [USER, ADMIN, OWNER],
    path: "/transaction-history",
  },
  {
    title: "Users",
    icon: "far fa-user",
    allowedRoles: [OWNER],
    path: "/users",
  },
  {
    title: "Manage Yards",
    icon: "fas fa-columns",
    allowedRoles: [ADMIN, OWNER],
    path: "/yards",
  },
  {
    title: "Vouchers",
    icon: "fas fa-money-bill",
    allowedRoles: [USER, ADMIN, OWNER],
    path: "/vouchers",
  },
  {
    title: "Voucher Management",
    icon: "fas fa-wallet",
    allowedRoles: [OWNER],
    path: "/voucher-management",
  },
  {
    title: "Match Management",
    icon: "fas fa-basketball-ball",
    allowedRoles: [ADMIN, OWNER],
    path: "/match-management",
  },
  {
    title: "Rating",
    icon: "far fa-star",
    allowedRoles: [USER],
    path: "/rating",
  },
];

function DashboardFeatures({ role }) {
  return (
    <div className="row py-5 w-100 height-mincontent">
      <h2 className="mb-5 text-center mt-5">
        Welcome to Basketball Playground{" "}
        <img src={congratulation} alt="congratulation" width="40" />
      </h2>
      <div className="row justify-content-around">
        {features
          .filter((feature) => feature.allowedRoles.includes(role))
          .map((feature) => {
            return (
              <div className="col-2 mb-5">
                <NavLink
                  key={feature.title}
                  to={feature.path}
                  className="feature-container d-flex align-items-center justify-content-center flex-column m-auto"
                >
                  <i className={"size-2 mb-3 " + feature.icon}></i>
                  <p>{feature.title}</p>
                </NavLink>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default DashboardFeatures;
