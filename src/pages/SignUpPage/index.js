import React from "react";
import { Link } from "react-router-dom";

import "./style.scss";

function SignUpPage() {
  return (
    <div className="row align-items-center justify-content-center text-center">
      <div className="col-4 pt-5">
        <h3 className=" bold size-4 pt-3">Register</h3>
        <form className="mt-5">
          <div className="row p-2">
            <span className="col-1 lh-44 signup__icon-wrapper">
              <i className="fas fa-envelope"></i>
            </span>
            <input
              className="col-11 outline-none p-2 signup__input-border"
              type="text"
              placeholder="Email"
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
          <div className="row p-2">
            <span className="col-1 lh-44 signup__icon-wrapper">
              <i className="fas fa-address-card"></i>
            </span>
            <input
              className="col-11 outline-none p-2 signup__input-border"
              type="text"
              placeholder="Full name"
            />
          </div>
          <div className="row p-2">
            <span className="col-1 lh-44 signup__icon-wrapper">
              <i class="fas fa-phone-alt"></i>
            </span>
            <input
              className="col-11 outline-none p-2 signup__input-border"
              type="text"
              placeholder="Phone number"
            />
          </div>
          <div className="row p-2">
            <span className="col-1 lh-42 signup__icon-wrapper">
              <i className="fas fa-image"></i>
            </span>
            <input
              className="col-11 outline-none custom-file-input p-0"
              type="file"
            />
          </div>
          <div className="pl-3 pr-3 mt-3">
            <p>
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </div>
          <div className="p-3">
            <button className="btn btn-primary w-100 p-2">Sign up</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUpPage;
