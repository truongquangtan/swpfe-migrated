import { EMPTY, TOAST_CONFIG } from "../../constants/default";
import "./style.scss";

import { useFormik } from "formik";
import * as yup from "yup";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { decrypt, encryptKey } from "../../helpers/crypto.helper";
import ProfileUpdatePasswordModal from "../../modals/ProfileUpdatePasswordModal";
import { updateProfile } from "../../services/me.service";
import Modal, { useModal } from "../Modal";
import { PHONE_PATTERN } from "../../constants/regex";

const _URL = window.URL || window.webkitURL;

function ProfileAccount() {
  const [showUpdatePasswordModal, setShowUpdatePasswordModal] = useModal(false);
  const navigate = useNavigate();

  const [currentUser] = useState(() => {
    const credentials = localStorage.getItem(encryptKey("credential"));
    if (credentials) {
      return decrypt(credentials);
    }
    return null;
  });

  const [avatarImage, setAvatarImage] = useState(() => {
    const credentials = localStorage.getItem(encryptKey("credential"));
    if (credentials) {
      return {
        file: null,
        url: decrypt(credentials)?.avatar,
        preview: null,
      };
    }
    return {
      file: null,
      url: null,
      preview: null,
    };
  });

  const handleUploadAvatarOnChange = useCallback((file) => {
    setAvatarImage((previousAvatar) => {
      if (previousAvatar.preview) {
        URL.revokeObjectURL(previousAvatar.preview);
      }
      return {
        ...previousAvatar,
        file: file,
        preview: URL.createObjectURL(file),
      };
    });
  }, []);

  const handleUpdateProfile = useCallback(
    async (values) => {
      try {
        const data = { phone: values.phone, fullName: values.fullName };
        await updateProfile(avatarImage.file, JSON.stringify(data));
        localStorage.removeItem(encryptKey("credential"));
        navigate("/auth/login");
      } catch (error) {
        console.log(error.response.data.message);
        toast.error(error.response.data.message, {
          ...TOAST_CONFIG,
          containerId: "toast-profile-account",
        });
      }
    },
    [avatarImage]
  );

  const validation = yup.object({
    fullName: yup
      .string("Enter your full name")
      .required("Full name is required")
      .trim("Full name cannot include leading and trailing spaces")
      .strict(true),
    phone: yup
      .string("Enter your phone")
      .required("Phone is required")
      .matches(PHONE_PATTERN, "Phone number is not valid"),
  });

  const formik = useFormik({
    initialValues: {
      email: currentUser?.email ? currentUser.email : EMPTY,
      fullName: currentUser?.fullName ? currentUser.fullName : EMPTY,
      phone: currentUser?.phone ? currentUser.phone : EMPTY,
    },
    validateOnMount: true,
    validateOnChange: true,
    validationSchema: validation,
    onSubmit: handleUpdateProfile,
  });

  return (
    <div className="profile-wrapper w-100">
      <Modal
        isShowing={showUpdatePasswordModal}
        hide={setShowUpdatePasswordModal}
      >
        <ProfileUpdatePasswordModal toggleModal={setShowUpdatePasswordModal} />
      </Modal>
      <div className="d-flex">
        <div className="col-3">
          <div className="profile-avatar-wrapper">
            <img
              className="mb-2 profile-avatar__img color-blur rounded-circle"
              src={avatarImage.preview || avatarImage.url}
            />
            <label className="profile-avatar__upload-lable">
              <input
                className="profile-avatar__upload-input"
                type="file"
                onChange={(e) => {
                  handleUploadAvatarOnChange(e.target.files[0]);
                }}
              />
              <div className="profile-avatar__upload-button">Upload</div>
            </label>
          </div>
        </div>

        <div className="flex-grow-1">
          <div className="profile-info-wrapper">
            <h4 className="text-center">PROFILE USER</h4>
            <div>
              <form id="update-profile-form" onSubmit={formik.handleSubmit}>
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
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    readOnly
                  />
                </div>
                <div className="row p-1">
                  <label
                    htmlFor="fullname"
                    className="text-start"
                    style={{ paddingLeft: 0 }}
                  >
                    Full Name
                  </label>
                  <span className="col-1 lh-44 signup__icon-wrapper">
                    <i className="fas fa-address-card"></i>
                  </span>
                  <input
                    className="col-11 outline-none p-2 signup__input-border"
                    type="text"
                    name="fullName"
                    value={formik.values.fullName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Full name"
                  />
                  <span className="profile__filed--error">
                    {formik.touched.fullName && formik.errors.fullName
                      ? formik.errors.fullName
                      : EMPTY}
                    {""}
                  </span>
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
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Phone number"
                  />
                  <span className="profile__filed--error">
                    {formik.touched.phone && formik.errors.phone
                      ? formik.errors.phone
                      : EMPTY}{" "}
                  </span>
                </div>
                <div className="d-flex justify-content-end">
                  <button
                    className="rounded-pill border border-2"
                    onClick={(e) => {
                      e.preventDefault();
                      setShowUpdatePasswordModal();
                    }}
                  >
                    Change Password
                  </button>
                </div>
                <div className="mt-3">
                  <div className="d-flex">
                    <button
                      disabled={!formik.isValid || formik.isSubmitting}
                      type="submit"
                      className="btn btn-primary px-4"
                    >
                      Save
                    </button>
                    <div className="btn btn-light mx-4 cancel">Cancel</div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer containerId="toast-profile-account" />
    </div>
  );
}

export default ProfileAccount;
