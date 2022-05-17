import React from "react";
import { Link } from "react-router-dom";

import "./style.scss";
import user from "../../assets/images/user.png";

function LoginPage() {
  return (
    <div className="row align-items-center justify-content-center text-center">
      <div className="col-4 pt-5">
        <h3 className=" bold size-4 pt-5">Welcome</h3>
        <img src={user} alt="user" className="width-120 mt-5" />
        <form className="mt-3">
          <div className="p-3">
            <input
              id="email-login"
              className="border-0 border-bottom w-100 border-secondary outline-none login-input"
              type="text"
              placeholder="Email"
            />
          </div>
          <div className="p-3">
            <input
              id="password-login"
              className="border-0 border-bottom w-100 border-secondary outline-none login-input"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="pl-3 pr-3 mt-2">
            <p>
              Create new account? <Link to="/signup">Sign up</Link>
            </p>
          </div>
          <div className="p-3">
            <button className="btn btn-primary w-100 p-2">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
