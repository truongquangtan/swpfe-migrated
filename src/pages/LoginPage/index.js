import React from "react";
import { Link } from "react-router-dom";

import "./style.scss";
import user from "../../assets/images/user.png";

function LoginPage() {
  return (
    <div className="row align-items-center justify-content-center text-center">
      <div className="col-4 pt-5">
        <h3 className=" bold size-4 pt-5">Welcome</h3>
        <img src={user} alt="user" className="width-120 mt-4" />
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
          <div className="pl-3 pr-3 mt-3">
            <p>
              Create new account? <Link to="/signup">Sign up</Link>
            </p>
          </div>
          <div className="pt-3 pb-3">
            <button className="btn btn-primary w-100 p-2">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
