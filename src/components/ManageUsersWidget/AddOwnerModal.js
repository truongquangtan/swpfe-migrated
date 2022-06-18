import { useFormik } from "formik";
import { toast } from "react-toastify";
import * as yup from "yup";
import { TOAST_CONFIG } from "../../constants/default";
import { PHONE_PATTERN } from "../../constants/regex";
import { addOwner } from "../../services/admin.service";

const validation = yup.object({
  email: yup
    .string("Enter owner email")
    .email("Enter owner email")
    .required("Email owner is required"),
  fullName: yup
    .string("Owner fullname")
    .min(1, "Fullname must not missing.")
    .required("Fullname owner is required"),
  phone: yup
    .string("Owner phone contact")
    .matches(PHONE_PATTERN, "Phone is not vaild"),
});

const AddOwnerModal = ({ toggleModal }) => {
  const sendRequestAddOwner = async (values, resetForm) => {
    try {
      await addOwner(JSON.stringify(values));
      toast.success("Add owner successfully.", TOAST_CONFIG);
      toggleModal();
    } catch (error) {
      toast.error(error.response.data.message, TOAST_CONFIG);
    }
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      fullName: "",
      phone: "",
    },
    validateOnMount: true,
    validationSchema: validation,
    onSubmit: async (values, { resetForm }) =>
      sendRequestAddOwner(values, resetForm),
  });

  return (
    <div className="custom-confirm" style={{ width: 600 }}>
      <h4>Add Owner</h4>
      <form className="my-3">
        <div className="row p-2">
          <label
            htmlFor="signup-email"
            className="text-start"
            style={{ paddingLeft: 0 }}
          >
            Email*
          </label>
          <span className="col-1 lh-44 signup__icon-wrapper">
            <i className="fas fa-envelope"></i>
          </span>
          <input
            className="col-11 outline-none p-2 signup__input-border"
            type="text"
            placeholder="Email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <span className="signup__filed--error">
            {formik.touched.email && formik.errors.email
              ? formik.errors.email
              : ""}{" "}
          </span>
        </div>
        <div className="row p-2">
          <label
            htmlFor="signup-fullname"
            className="text-start"
            style={{ paddingLeft: 0 }}
          >
            Fullname*
          </label>
          <span className="col-1 lh-44 signup__icon-wrapper">
            <i className="fas fa-address-card"></i>
          </span>
          <input
            className="col-11 outline-none p-2 signup__input-border"
            type="text"
            value={formik.values.fullName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="fullName"
            placeholder="Full name"
          />
          <span className="signup__filed--error">
            {formik.touched.fullName && formik.errors.fullName
              ? formik.errors.fullName
              : ""}{" "}
          </span>
        </div>
        <div className="row p-2">
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
            className="col-11 outline-none p-2 signup__input-border"
            type="text"
            name="phone"
            placeholder="Phone number"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <span className="signup__filed--error">
            {formik.touched.phone && formik.errors.phone
              ? formik.errors.phone
              : ""}{" "}
          </span>
        </div>
        <div className="mt-3">
          <button
            type="submit"
            onClick={formik.handleSubmit}
            disabled={!formik.isValid}
            className="btn btn-primary px-4"
          >
            Save
          </button>
          <div className="btn btn-light mx-4" onClick={toggleModal}>
            Cancel
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddOwnerModal;
