import { useFormik } from "formik";
import { useCallback } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { TOAST_CONFIG } from '../../constants/default';
import { encryptKey } from '../../helpers/crypto.helper';
import { changePasswordRequest } from '../../services/me.service';
import { useNavigate } from "react-router-dom";

const ProfileUpdatePasswordModal = ({ toggleModal }) => {
    const navigate = useNavigate();

    const handleChangePasswordRequest = useCallback(async (values) => {
        try {
            const response = await changePasswordRequest(values);
            localStorage.removeItem(encryptKey("credential"))
            localStorage.setItem(encryptKey("temporaryToken"), response.token);
            navigate("/auth/reset-password")
        } catch (error) {
            toast.error(error?.response?.data?.message, { ...TOAST_CONFIG, containerId: "update-password-modal" })
        }
    }, []);

    const formik = useFormik({
        initialValues: { password: "" },
        validateOnMount: true,
        validateOnChange: true,
        onSubmit: async (values) => {
            formik.setSubmitting(true)
            await handleChangePasswordRequest(values)
            formik.setSubmitting(false)
        }
    })

    return (

        <div
            className="rounded border border-3 custom-confirm"
            style={{ width: 500 }}
        >
            <form className="my-3" onSubmit={formik.handleSubmit}>
                <div className="row p-1">
                    <label
                        htmlFor="old-password"
                        className="text-start"
                        style={{ paddingLeft: 0 }}
                    >
                        Your Password
                    </label>
                    <span className="col-1 lh-44 signup__icon-wrapper">
                        <i className="fas fa-user-lock"></i>
                    </span>
                    <input
                        className="col-11 outline-none p-2 signup__input-border"
                        type="password"
                        placeholder="Enter your password..."
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                    />
                </div>
                <div className="mt-3 d-flex justify-content-center">
                    <button disabled={!formik.isValid | formik.isSubmitting} type="submit" className="btn btn-primary px-4">
                        Confirm
                    </button>
                    <div className="btn btn-light mx-4 cancel" onClick={toggleModal}>
                        Cancel
                    </div>
                </div>
            </form>
            <ToastContainer containerId="update-password-modal"/>
        </div>
    )
}

export default ProfileUpdatePasswordModal