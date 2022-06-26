import React from "react";
import "./style.scss";
import * as _ from "lodash";
import { EMPTY } from "../../constants/default";

import { useState } from "react";
import { confirmAlert } from "react-confirm-alert";
const _URL = window.URL || window.webkitURL;

function ProfileAccount() {
  const [profilePictures, setProfilePictures] = useState([
    { file: null, src: EMPTY },
  ]);

  const changePassword = () => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div
            className="rounded border border-3 custom-confirm"
            style={{ width: 500 }}
          >
            <form className="my-3">
              <div className="row p-1">
                <label
                  htmlFor="old-password"
                  className="text-start"
                  style={{ paddingLeft: 0 }}
                >
                  Old Password
                </label>
                <span className="col-1 lh-44 signup__icon-wrapper">
                  <i className="fas fa-user-lock"></i>
                </span>
                <input
                  className="col-11 outline-none p-2 signup__input-border"
                  type="text"
                  placeholder="Enter old password"
                  name="oldPassword"
                />
              </div>
              <div className="mt-3 d-flex justify-content-center">
                <button type="submit" className="btn btn-primary px-4">
                  Save
                </button>
                <div className="btn btn-light mx-4 cancel" onClick={onClose}>
                  Cancel
                </div>
              </div>
            </form>
          </div>
        );
      },
      closeOnEscape: true,
      closeOnClickOutside: true,
    });
  };

  return (
    <div className="big">
      <div className="d-flex big-father justify-content-between">
        <div className="col-3">
          <div>
            <div className="p-1 info-avatar">
              <div
                className="upload__img-wrapper mb-2 color-blur rounded-circle"
                style={{
                  backgroundImage: `url(${profilePictures[0]["src"]})`,
                  backgroundSize: "cover",
                  height: 350,
                }}
              >
                {!profilePictures[0] && "Intro image"}
              </div>
              <input
                className="outline-none custom-bg-input p-0 w-100"
                type="file"
                onChange={(e) => {
                  const cloned = _.cloneDeep(profilePictures);
                  const file = e.target.files[0];
                  cloned[0] = { file, src: _URL.createObjectURL(file) };
                  setProfilePictures(cloned);
                }}
              />
            </div>
            <div className="pt-4"></div>
          </div>
        </div>

        <div className="col-9 text-center info-text ">
          <div>
            <h4>PROFILE USER</h4>
          </div>
          <div className="custom-confirm" style={{ width: 1000 }}>
            <form>
              <div className="row p-1">
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
                  className="col-11 outline-none p-2 signup__input-border"
                  type="text"
                  placeholder="Email"
                  name="email"
                  readOnly
                />
              </div>
              <div className="row p-1">
                <label
                  htmlFor="fullname"
                  className="text-start"
                  style={{ paddingLeft: 0 }}
                >
                  Fullname
                </label>
                <span className="col-1 lh-44 signup__icon-wrapper">
                  <i className="fas fa-address-card"></i>
                </span>
                <input
                  className="col-11 outline-none p-2 signup__input-border"
                  type="text"
                  name="fullName"
                  placeholder="Full name"
                />
              </div>
              <div className="row p-1">
                <label
                  htmlFor="phone"
                  className="text-start"
                  style={{ paddingLeft: 0 }}
                >
                  Phone
                </label>
                <span className="col-1 lh-44 signup__icon-wrapper">
                  <i className="fas fa-phone-alt"></i>
                </span>
                <input
                  className="col-11 outline-none p-2 signup__input-border"
                  type="text"
                  name="phone"
                  placeholder="Phone number"
                />
              </div>
              <div className="d-flex justify-content-end">
                <button
                  className="rounded-pill border border-2"
                  onClick={changePassword()}
                >
                  Change Password
                </button>
              </div>
              <div className="mt-3">
                <div className="d-flex">
                  <button type="submit" className="btn btn-primary px-4">
                    Confirm
                  </button>
                  <div className="btn btn-light mx-4 cancel">Cancel</div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileAccount;
