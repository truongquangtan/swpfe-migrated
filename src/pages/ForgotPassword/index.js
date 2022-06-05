import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./style.scss";
import {
  EMPTY,
  REQUEST_EMAIL,
  REQUEST_PASSWORD,
  REQUIRED_EMAIL,
  REQUIRED_PASSWORD,
  REQUIRED_CODE,
} from "../../constants/default";

const validation = yup.object({
  re_email: yup
    .string(REQUEST_EMAIL)
    .email("Enter a valid email")
    .required(REQUIRED_EMAIL),
  code: yup
    .string(REQUEST_PASSWORD)
    .length(6, "Code should be 6 characters length")
    .required(REQUIRED_CODE),
});

function ForgotPassword() {
  const formik = useFormik({
    initialValues: {
      re_email: EMPTY,
      code: EMPTY,
    },
    validationSchema: validation,
    onSubmit: async (values) => {
      const data = JSON.stringify(values);
      // await forgotPassword(data).catch((error) => {
      //   if (error.response.status === 400) {
      //     toast.error(error.response.data, {
      //       position: "bottom-right",
      //       autoClose: 5000,
      //       hideProgressBar: true,
      //       closeOnClick: true,
      //       pauseOnHover: true,
      //       theme: "colored",
      //     });
      //   }
      // });
    },
  });

  return (
    <div className="row align-items-center justify-content-center text-center">
      <div className="col-4 pt-5">
        <h3 className=" bold size-4 pt-5">Forgot Password</h3>
        <i className="fas fa-lock size-5 mt-4"></i>
        <form className="mt-5">
          <div className="row p-2">
            <label
              htmlFor="email"
              className="text-start"
              style={{ paddingLeft: 0 }}
            >
              Email receive code
            </label>
            <span className="col-1 lh-44 signup__icon-wrapper">
              <i className="fas fa-envelope"></i>
            </span>
            <input
              id="email"
              name="re_email"
              value={formik.values.re_email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="col-10 outline-none p-2 fg-pw__input-border"
              type="text"
              placeholder="Enter your registered mail to receive code"
              required
            />
            <span className="col-1 lh-44 fg-pw__icon-wrapper">
              <i className="fas fa-redo"></i>
            </span>
            <span className="signup__filed--error">
              {formik.touched.re_email && formik.errors.re_email
                ? formik.errors.re_email
                : ""}{" "}
            </span>
          </div>
          <div className="row p-2" title="Resend code">
            <label
              htmlFor="code"
              className="text-start"
              style={{ paddingLeft: 0 }}
            >
              Resend Code
            </label>
            <span className="col-1 lh-44 signup__icon-wrapper">
              <i className="fas fa-lock"></i>
            </span>
            <input
              id="code"
              name="code"
              value={formik.values.code}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="col-11 outline-none p-2 signup__input-border"
              type="text"
              placeholder="Enter 6-digits code"
              required
            />
            <span className="signup__filed--error">
              {formik.touched.code && formik.errors.code
                ? formik.errors.code
                : ""}{" "}
            </span>
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
              <button
                disabled={formik.isSubmitting || !formik.isValid}
                type="submit"
                className="btn btn-primary w-100 p-2"
              >
                {!formik.isSubmitting ? (
                  "Confirm"
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
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
