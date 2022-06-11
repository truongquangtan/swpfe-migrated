import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./style.scss";

import {
  EMPTY,
  REQUEST_PASSWORD,
  REQUIRED_PASSWORD,
} from "../../constants/default";
import { updatePassword } from "../../services/auth.service";

const validation = yup.object({
  re_password: yup
    .string(REQUEST_PASSWORD)
    .min(8, "Re-Password should be of minimum 8 characters length")
    .required(REQUIRED_PASSWORD),
  confirm_re_password: yup
    .string(REQUEST_PASSWORD)
    .min(8, "Confirm Re-Password should be of minimum 8 characters length")
    .oneOf([yup.ref("re_password"), null], "Confirm password not matches")
    .required(REQUIRED_PASSWORD),
});

function ResetPassword() {
  const formik = useFormik({
    initialValues: {
      re_password: EMPTY,
      confirm_re_password: EMPTY,
    },
    validationSchema: validation,
    onSubmit: async (values) => {
      const data = JSON.stringify({
        password: values.confirm_re_password,
      });
      let restPaswwordAccount = localStorage.getItem("restPaswwordAccount");
      if (restPaswwordAccount) {
        restPaswwordAccount = JSON.parse(restPaswwordAccount);
        const response = await updatePassword(
          JSON.stringify({ password: values.confirm_re_password }),
          restPaswwordAccount.token
        );
        console.log(response);

        try {
          const setjson = JSON.stringify();
          localStorage.setItem("key", setjson);

          console.log(data);
        } catch (error) {
          console.log(error);
        }
      }
    },
  });

  return (
    <div className="row align-items-center justify-content-center text-center">
      <div className="col-4 pt-5">
        <h3 className=" bold size-4 pt-5">Reset Password</h3>
        <i className="fas fa-lock size-5 mt-4"></i>
        <form className="mt-5" onSubmit={formik.handleSubmit}>
          <div className="row p-2">
            <label
              htmlFor="rePassword"
              className="text-start"
              style={{ paddingLeft: 0 }}
            >
              Re-password
            </label>
            <span className="col-1 lh-44 signup__icon-wrapper">
              <i className="fas fa-lock"></i>
            </span>
            <input
              id="password"
              name="re_password"
              value={formik.values.re_password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="col-11 outline-none p-2 signup__input-border"
              type="password"
              placeholder="Password"
              required
            />
            <span className="signup__filed--error">
              {formik.touched.re_password && formik.errors.re_password
                ? formik.errors.re_password
                : ""}{" "}
            </span>
          </div>
          <div className="row p-2">
            <label
              htmlFor="confirmRePassword"
              className="text-start"
              style={{ paddingLeft: 0 }}
            >
              Confirm Re-Password
            </label>
            <span className="col-1 lh-44 signup__icon-wrapper">
              <i className="fas fa-lock"></i>
            </span>
            <input
              id="confirmRePassword "
              name="confirm_re_password"
              value={formik.values.confirm_re_password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="col-11 outline-none p-2 signup__input-border"
              type="password"
              placeholder="Input password again"
              required
            />
            <span className="signup__filed--error">
              {formik.touched.confirm_re_password &&
              formik.errors.confirm_re_password
                ? formik.errors.confirm_re_password
                : ""}{" "}
            </span>
          </div>
          <div className="pl-3 pr-3 mt-3">
            <p className="link">
              <Link to="/auth/login">
                <i className="fas fa-long-arrow-alt-left"></i> Back to login
              </Link>
            </p>
          </div>
          <div className="pt-3 pb-3">
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
          </div>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;
