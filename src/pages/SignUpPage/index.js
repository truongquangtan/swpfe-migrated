import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { signUpResquest } from "../../services/API/accountServices";

import "./style.scss";
import { EMPTY } from "../../constants/default";
import { PHONE_PATTERN } from "../../constants/regex";
import { REQUEST_EMAIL } from "../../constants/default";
import { REQUEST_PASSWORD } from "../../constants/default";
import { REQUIRED_EMAIL } from "../../constants/default";
import { REQUIRED_PASSWORD } from "../../constants/default";

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
      const response = await signUpResquest(data);
      console.log(response);
    },
  });

  return (
    <div className="row align-items-center justify-content-center text-center">
      <div className="col-4 pt-5">
        <h3 className=" bold size-4 pt-3">Register</h3>
        <form className="mt-5" onSubmit={formik.handleSubmit}>
          <div className="row p-2 position-relative">
            <span className="col-1 lh-44 signup__icon-wrapper">
              <i className="fas fa-envelope"></i>
            </span>
            <input
              onBlur={formik.handleBlur}
              value={formik.values.email}
              name="email"
              onChange={formik.handleChange}
              className="col-11 outline-none p-2 signup__input-border"
              type="text"
              placeholder="Email"
              required
            />
            {formik.errors.email && formik.touched.email ? (
              <span className="signup_tooltip--error">
                {formik.errors.email}
              </span>
            ) : null}
          </div>
          <div className="row p-2 position-relative">
            <span className="col-1 lh-44 signup__icon-wrapper">
              <i className="fas fa-lock"></i>
            </span>
            <input
              onBlur={formik.handleBlur}
              value={formik.values.password}
              name="password"
              onChange={formik.handleChange}
              className="col-11 outline-none p-2 signup__input-border"
              type="password"
              placeholder="Password"
              required
            />
            {formik.errors.password && formik.touched.password ? (
              <span className="signup_tooltip--error">
                {formik.errors.password}
              </span>
            ) : null}
          </div>
          <div className="row p-2 position-relative">
            <span className="col-1 lh-44 signup__icon-wrapper">
              <i className="fas fa-lock"></i>
            </span>
            <input
              onBlur={formik.handleBlur}
              value={formik.values.confirmPassword}
              name="confirmPassword"
              onChange={formik.handleChange}
              className="col-11 outline-none p-2 signup__input-border"
              type="password"
              placeholder="Input password again"
              required
            />
            {formik.errors.confirmPassword && formik.touched.confirmPassword ? (
              <span className="signup_tooltip--error">
                {formik.errors.confirmPassword}
              </span>
            ) : null}
          </div>
          <div className="row p-2 position-relative">
            <span className="col-1 lh-44 signup__icon-wrapper">
              <i className="fas fa-address-card"></i>
            </span>
            <input
              onBlur={formik.handleBlur}
              value={formik.values.fullName}
              name="fullName"
              onChange={formik.handleChange}
              className="col-11 outline-none p-2 signup__input-border"
              type="text"
              placeholder="Full name"
            />
            {formik.errors.fullName && formik.touched.fullName ? (
              <span className="signup_tooltip--error">
                {formik.errors.fullName}
              </span>
            ) : null}
          </div>
          <div className="row p-2 position-relative">
            <span className="col-1 lh-44 signup__icon-wrapper">
              <i className="fas fa-phone-alt"></i>
            </span>
            <input
              onBlur={formik.handleBlur}
              value={formik.values.phone}
              name="phone"
              onChange={formik.handleChange}
              className="col-11 outline-none p-2 signup__input-border"
              type="text"
              placeholder="Phone number"
            />
            {formik.errors.phone && formik.touched.phone ? (
              <span className="signup_tooltip--error">
                {formik.errors.phone}
              </span>
            ) : null}
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
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUpPage;
