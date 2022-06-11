import React, { useState } from "react";
import { confirmAlert } from "react-confirm-alert";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import "./style.scss";
import userGroup from "../../assets/images/user-group.png";
import { INTERNAL_SERVER_ERROR } from "../../constants/error-message";
import { registerOwner } from "../../services/auth.service";
import {
  EMPTY,
  PHONE_PATTERN,
  REQUEST_EMAIL,
  REQUIRED_EMAIL,
} from "../../constants/default";

const validation = yup.object().shape({
  email: yup
    .string(REQUEST_EMAIL)
    .required(REQUIRED_EMAIL)
    .email("Enter a valid email"),
  fullName: yup.string("Enter your fullname").required("Fullname is required"),
  phone: yup
    .string("Enter your phone")
    .matches(PHONE_PATTERN, "Phone number is not valid"),
});
function ManageUsersWidget() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validation),
  });
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    // cho nay ___ de goi API
  };

  const onSimpleClick = async (title, question, callback) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className="custom-confirm">
            <h4>{title}</h4>
            <p className="mb-3">{question}</p>
            <button
              className="btn btn-primary me-3"
              onClick={() => {
                callback();
                onClose();
              }}
            >
              Confirm
            </button>
            <button onClick={onClose} className="btn btn-light">
              Cancel
            </button>
          </div>
        );
      },
      closeOnEscape: true,
      closeOnClickOutside: true,
    });
  };

  const handleDisableUser = () => {};

  const handleEnableUser = () => {};

  const onInviteClick = async () => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className="custom-confirm" style={{ width: 600 }}>
            <h4>Add Owner</h4>
            <form className="my-3" onSubmit={handleSubmit(onSubmit)}>
              <div className="row p-2">
                <label
                  htmlFor="add-owner-email"
                  className="text-start"
                  style={{ paddingLeft: 0 }}
                >
                  Email*
                </label>
                <span className="col-1 lh-44 signup__icon-wrapper">
                  <i className="fas fa-envelope"></i>
                </span>
                <input
                  {...register("email")}
                  className="col-11 outline-none p-2 signup__input-border"
                  type="text"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="row p-2">
                <label
                  htmlFor="add-owner-fullname"
                  className="text-start"
                  style={{ paddingLeft: 0 }}
                >
                  Fullname*
                </label>
                <span className="col-1 lh-44 signup__icon-wrapper">
                  <i className="fas fa-address-card"></i>
                </span>
                <input
                  {...register("fullName")}
                  className="col-11 outline-none p-2 signup__input-border"
                  type="text"
                  placeholder="Full name"
                />
              </div>
              <div className="row p-2">
                <label
                  htmlFor="add-owner-phone"
                  className="text-start"
                  style={{ paddingLeft: 0 }}
                >
                  Phone
                </label>
                <span className="col-1 lh-44 signup__icon-wrapper">
                  <i className="fas fa-phone-alt"></i>
                </span>
                <input
                  {...register("phone")}
                  className="col-11 outline-none p-2 signup__input-border"
                  type="text"
                  placeholder="Phone number"
                />
              </div>
            </form>
            <button
              className="btn btn-primary me-3 px-4"
              onClick={() => {
                this.handleClickDelete();
                onClose();
              }}
            >
              Save
            </button>
            <button onClick={onClose} className="btn btn-light">
              Cancel
            </button>
          </div>
        );
      },
      closeOnEscape: true,
      closeOnClickOutside: true,
    });
  };

  const onEditClick = async () => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className="custom-confirm" style={{ width: 600 }}>
            <h4>User Details</h4>
            <form className="my-3">
              <div className="row p-2">
                <span className="col-1 lh-44 signup__icon-wrapper">
                  <i className="fas fa-envelope"></i>
                </span>
                <input
                  className="col-11 outline-none p-2 signup__input-border"
                  type="text"
                  placeholder="Email"
                  readOnly
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
                  <i className="fas fa-phone-alt"></i>
                </span>
                <input
                  className="col-11 outline-none p-2 signup__input-border"
                  type="text"
                  placeholder="Phone number"
                />
              </div>
            </form>
            <button
              className="btn btn-primary me-3 px-4"
              onClick={() => {
                this.handleClickDelete();
                onClose();
              }}
            >
              Save
            </button>
            <button onClick={onClose} className="btn btn-light">
              Cancel
            </button>
          </div>
        );
      },
      closeOnEscape: true,
      closeOnClickOutside: true,
    });
  };

  return (
    <div className="pt-4 w-100">
      <div>
        <h4 className="mb-4 d-inline-block">
          <img src={userGroup} alt="User" className="width-60 pe-3" />
          Users
        </h4>
        <button className="btn btn-primary px-4 ms-5" onClick={onInviteClick}>
          <i
            className="fas fa-user-plus me-2"
            style={{ fontSize: "0.8rem" }}
          ></i>
          <b>Add Owner</b>
        </button>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col" style={{ width: "10%" }}>
              Actions
            </th>
            <th scope="col">Display Name</th>
            <th scope="col" style={{ width: "20%" }}>
              Email
            </th>
            <th scope="col">Phone</th>
            <th scope="col">Role</th>
            <th scope="col">Status</th>
            <th scope="col">Created At</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <i
                className="trash-icon fas fa-edit col-4"
                title="Edit"
                onClick={onEditClick}
              ></i>
              <i
                className="trash-icon fas fa-ban col-4"
                title="Deactive"
                onClick={() =>
                  onSimpleClick(
                    "Disable",
                    "Are you sure to disable this user?",
                    handleDisableUser
                  )
                }
              ></i>
              <i
                className="trash-icon fas fa-check-circle col-4"
                title="Active"
                onClick={() =>
                  onSimpleClick(
                    "Enable",
                    "Are you sure to activate this user?",
                    handleEnableUser
                  )
                }
              ></i>
            </td>
            <td>Pham Ha Giang</td>
            <td className="text-truncate" title="gianggiangph@gmail.com">
              gianggiangph@gmail.com
            </td>
            <td>012346789</td>
            <td>Admin</td>
            <td className="green bold">ACTIVE</td>
            <td>29/05/2022 11:26</td>
          </tr>
          <tr>
            <td>
              <i
                className="trash-icon fas fa-edit col-4"
                title="Edit"
                onClick={onEditClick}
              ></i>
              <i
                className="trash-icon fas fa-ban col-4"
                title="Deactive"
                onClick={() =>
                  onSimpleClick(
                    "Disable",
                    "Are you sure to disable this user?",
                    handleDisableUser
                  )
                }
              ></i>
              <i
                className="trash-icon fas fa-check-circle col-4"
                title="Active"
                onClick={() =>
                  onSimpleClick(
                    "Enable",
                    "Are you sure to activate this user?",
                    handleEnableUser
                  )
                }
              ></i>
            </td>
            <td>Pham Ha Giang</td>
            <td className="text-truncate" title="gianggiangph@gmail.com">
              gianggiangph@gmail.com
            </td>
            <td>012346789</td>
            <td>Admin</td>
            <td className="red bold">UNACTIVE</td>
            <td>29/05/2022 11:26</td>
          </tr>
        </tbody>
      </table>
      <div className="yard-pagination mt-4">
        <div>
          <span className="pagination-arrow">
            <i className="fas fa-arrow-left"></i>
          </span>
          <span className="pagination-statistic">
            <input type="text" value={1} />/ 10
          </span>
          <span className="pagination-arrow">
            <i className="fas fa-arrow-right"></i>
          </span>
        </div>
      </div>
    </div>
  );
}

export default ManageUsersWidget;
