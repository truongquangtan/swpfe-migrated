import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./style.scss";
import { EMPTY } from "../../constants/default";
import { PHONE_PATTERN } from "../../constants/regex";
import { REQUEST_EMAIL } from "../../constants/default";
import { REQUEST_PASSWORD } from "../../constants/default";
import { REQUIRED_EMAIL } from "../../constants/default";
import { REQUIRED_PASSWORD } from "../../constants/default";
import { registerUser } from "../../services/auth.service";

const validation = yup.object({
  email: yup
    .string(REQUEST_EMAIL)
    .email("Enter a valid email")
    .required(REQUIRED_EMAIL),
  password: yup
    .string(REQUEST_PASSWORD)
    .min(8, "Password should be of minimum 8 characters length")
    .required(REQUIRED_PASSWORD),
  confirmPassword: yup
    .string("Enter your confirm password")
    .required("Confirm password is required")
    .oneOf([yup.ref("password"), null], "Confirm password not matches"),
  fullName: yup
    .string("Enter your full name")
    .required("full name is required"),
  phone: yup
    .string("Enter your email")
    .required("full name is required")
    .matches(PHONE_PATTERN, "Phone number is not valid"),
});

function SignUpPage() {
  const formik = useFormik({
    initialValues: {
      email: EMPTY,
      password: EMPTY,
      confirmPassword: EMPTY,
      fullName: EMPTY,
      phone: EMPTY,
    },
    validationSchema: validation,
    onSubmit: async (values) => {
      const data = JSON.stringify(values);
      await registerUser(data).catch((error) => {
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
        <h3 className=" bold size-4 pt-3">Register</h3>
        <form className="mt-5" onSubmit={formik.handleSubmit}>
          <div className="row p-2 position-relative">
            <label
              htmlFor="signup-email"
              className="text-start"
              style={{ paddingLeft: 0 }}
            >
              Email
            </label>
            <span className="col-1 lh-44 signup__icon-wrapper">
              <i className="fas fa-envelope"></i>
            </span>
            <input
              id="signup-email"
              onBlur={formik.handleBlur}
              value={formik.values.email}
              name="email"
              onChange={formik.handleChange}
              className="col-11 outline-none p-2 signup__input-border"
              type="text"
              placeholder="Email"
              required
            />
            <span className="signup__filed--error">
              {formik.touched.email && formik.errors.email
                ? formik.errors.email
                : ""}{" "}
            </span>
          </div>
          <div className="row p-2 position-relative pt-0">
            <label
              htmlFor="signup-password"
              className="text-start"
              style={{ paddingLeft: 0 }}
            >
              Password
            </label>
            <span className="col-1 lh-44 signup__icon-wrapper">
              <i className="fas fa-lock"></i>
            </span>
            <input
              id="signup-password"
              onBlur={formik.handleBlur}
              value={formik.values.password}
              name="password"
              onChange={formik.handleChange}
              className="col-11 outline-none p-2 signup__input-border"
              type="password"
              placeholder="Password"
              required
            />
            <span className="signup__filed--error">
              {formik.touched.password && formik.errors.password
                ? formik.errors.password
                : ""}{" "}
            </span>
          </div>
          <div className="row p-2 position-relative pt-0">
            <label
              htmlFor="signup-password-confirm"
              className="text-start"
              style={{ paddingLeft: 0 }}
            >
              Confirm Password
            </label>
            <span className="col-1 lh-44 signup__icon-wrapper">
              <i className="fas fa-lock"></i>
            </span>
            <input
              id="signup-password-confirm"
              onBlur={formik.handleBlur}
              value={formik.values.confirmPassword}
              name="confirmPassword"
              onChange={formik.handleChange}
              className="col-11 outline-none p-2 signup__input-border"
              type="password"
              placeholder="Input password again"
              required
            />
            <span className="signup__filed--error">
              {formik.touched.confirmPassword && formik.errors.confirmPassword
                ? formik.errors.confirmPassword
                : ""}{" "}
            </span>
          </div>
          <div className="row p-2 position-relative pt-0">
            <label
              htmlFor="signup-fullname"
              className="text-start"
              style={{ paddingLeft: 0 }}
            >
              Fullname
            </label>
            <span className="col-1 lh-44 signup__icon-wrapper">
              <i className="fas fa-address-card"></i>
            </span>
            <input
              id="signup-fullname"
              onBlur={formik.handleBlur}
              value={formik.values.fullName}
              name="fullName"
              onChange={formik.handleChange}
              className="col-11 outline-none p-2 signup__input-border"
              type="text"
              placeholder="Full name"
            />
            <span className="signup__filed--error">
              {formik.touched.fullName && formik.errors.fullName
                ? formik.errors.fullName
                : ""}{" "}
            </span>
          </div>
          <div className="row p-2 position-relative pt-0">
            <label
              htmlFor="signup-phone"
              className="text-start"
              style={{ paddingLeft: 0 }}
            >
              Phone
            </label>
            <span className="col-1 lh-44 signup__icon-wrapper">
              <i className="fas fa-phone-alt"></i>
            </span>
            <input
              id="signup-phone"
              onBlur={formik.handleBlur}
              value={formik.values.phone}
              name="phone"
              onChange={formik.handleChange}
              className="col-11 outline-none p-2 signup__input-border"
              type="text"
              placeholder="Phone number"
            />
            <span className="signup__filed--error">
              {formik.touched.phone && formik.errors.phone
                ? formik.errors.phone
                : ""}{" "}
            </span>
          </div>
          {/* <div className="row p-2">
            <span className="col-1 lh-42 signup__icon-wrapper">
              <i className="fas fa-image"></i>
            </span>
            <input
              className="col-11 outline-none custom-file-input p-0"
              type="file"
            />
          </div> */}
          <div className="pl-3 pr-3 mt-3">
            <p>
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </div>
          <div className="pt-3 pb-3">
            <button type="submit" className="btn btn-primary w-100 p-2">
              {!formik.isSubmitting ? (
                "Sign Up"
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

export default SignUpPage;
