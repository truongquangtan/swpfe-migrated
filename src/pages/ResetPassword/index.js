import React from "react";
import { Link } from "react-router-dom";

import "./style.scss";

function ResetPassword() {
  return (
    <div className="row align-items-center justify-content-center text-center">
      <div className="col-4 pt-5">
        <h3 className=" bold size-4 pt-5">Reset Password</h3>
        <i className="fas fa-lock size-5 mt-4"></i>
        <form className="mt-5">
          <div className="row p-2">
            <span className="col-1 lh-44 signup__icon-wrapper">
              <i className="fas fa-lock"></i>
            </span>
            <input
              className="col-11 outline-none p-2 signup__input-border"
              type="password"
              placeholder="Password"
              required
            />
          </div>
          <div className="row p-2">
            <span className="col-1 lh-44 signup__icon-wrapper">
              <i className="fas fa-lock"></i>
            </span>
            <input
              className="col-11 outline-none p-2 signup__input-border"
              type="password"
              placeholder="Input password again"
              required
            />
          </div>
          <div className="pl-3 pr-3 mt-3">
            <p className="link">
              <Link to="/login">
                <i class="fas fa-long-arrow-alt-left"></i> Back to login
              </Link>
            </p>
          </div>
          <div className="pt-3 pb-3">
            <button className="btn btn-primary w-100 p-2">Confirm</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;
