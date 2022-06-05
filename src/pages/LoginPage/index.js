import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./style.scss";
import user from "../../assets/images/user.png";
import { EMPTY } from "../../constants/default";
import { REQUEST_EMAIL } from "../../constants/default";
import { REQUEST_PASSWORD } from "../../constants/default";
import { REQUIRED_EMAIL } from "../../constants/default";
import { REQUIRED_PASSWORD } from "../../constants/default";
import { loginRequest } from "../../services/auth.service";

const validation = yup.object({
  username: yup
    .string(REQUEST_EMAIL)
    .email("Enter a valid email")
    .required(REQUIRED_EMAIL),
  password: yup
    .string(REQUEST_PASSWORD)
    .min(8, "Password should be of minimum 8 characters length")
    .required(REQUIRED_PASSWORD),
});

function LoginPage() {
  const formik = useFormik({
    initialValues: {
      username: EMPTY,
      password: EMPTY,
    },
    validationSchema: validation,
    onSubmit: async (values) => {
      const data = JSON.stringify(values);
      await loginRequest(data).catch((error) => {
        if (error.response.status === 400) {
          toast.error(error.response.data, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            theme: "colored",
          });
        }
      });
    },
  });

  return (
    <div className="row align-items-center justify-content-center text-center">
      <div className="col-4 pt-5">
        <h3 className=" bold size-4 pt-5">Welcome</h3>
        <img src={user} alt="user" className="width-120 mt-4" />
        <form className="mt-5" onSubmit={formik.handleSubmit}>
          <div className="row p-2 position-relative">
            <label
              htmlFor="email"
              className="text-start"
              style={{ paddingLeft: 0 }}
            >
              Email
            </label>
            <span className="col-1 lh-44 signup__icon-wrapper">
              <i className="fas fa-envelope"></i>
            </span>
            <input
              id="email"
              name="username"
              className="col-11 outline-none p-2 signup__input-border"
              type="text"
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Email"
              required
            />

            <span className="signup__filed--error">
              {formik.touched.username && formik.errors.username
                ? formik.errors.username
                : ""}{" "}
            </span>
          </div>

          <div className="row p-2 position-relative pt-0">
            <label
              htmlFor="password"
              className="text-start"
              style={{ paddingLeft: 0 }}
            >
              Password
            </label>
            <span className="col-1 lh-44 signup__icon-wrapper">
              <i className="fas fa-lock"></i>
            </span>
            <input
              id="password"
              name="password"
              className="col-11 outline-none p-2 signup__input-border"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Password"
              required
            />
            <span className="signup__filed--error">
              {formik.touched.password && formik.errors.password
                ? formik.errors.password
                : ""}{" "}
            </span>
          </div>
          <div className="pl-3 pr-3 mt-3">
            <p>
              Create new account? <Link to="/signup">Sign up</Link>
            </p>
          </div>
          <div className="pt-3 pb-3">
            <button
              disabled={formik.isSubmitting || !formik.isValid}
              type="submit"
              className="btn btn-primary w-100 p-2"
            >
              {!formik.isSubmitting ? (
                "Login"
              ) : (
                <div className="dots-loading">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              )}
            </button>
            <ToastContainer />
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
