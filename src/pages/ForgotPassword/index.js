import React from "react";
import { Link } from "react-router-dom";

import "./style.scss";

function ForgotPassword() {
  return (
    <div className="row align-items-center justify-content-center text-center">
      <div className="col-4 pt-5">
        <h3 className=" bold size-4 pt-5">Forgot Password</h3>
        <i className="fas fa-lock size-5 mt-4"></i>
        <form className="mt-5">
          <div className="row p-2">
            <span className="col-1 lh-44 signup__icon-wrapper">
              <i className="fas fa-envelope"></i>
            </span>
            <input
              className="col-10 outline-none p-2 fg-pw__input-border"
              type="text"
              placeholder="Enter your registered mail to receive code"
              required
            />
            <span className="col-1 lh-44 fg-pw__icon-wrapper">
              <i className="fas fa-redo"></i>
            </span>
          </div>
          <div className="row p-2" title="Resend code">
            <span className="col-1 lh-44 signup__icon-wrapper">
              <i className="fas fa-lock"></i>
            </span>
            <input
              className="col-11 outline-none p-2 signup__input-border"
              type="text"
              placeholder="Enter 6-digits code"
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
            <Link to="/reset-password">
              <button className="btn btn-primary w-100 p-2">Confirm</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
