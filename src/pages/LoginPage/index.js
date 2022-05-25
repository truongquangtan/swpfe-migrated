import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from 'formik';
import * as yup from 'yup';

import "./style.scss";
import user from "../../assets/images/user.png";

const validation = yup.object({
    username: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup
        .string('Enter your password')
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required')
});

function LoginPage() {

    const formik = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        validationSchema: validation,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <div className="row align-items-center justify-content-center text-center">
            <div className="col-4 pt-5">
                <h3 className=" bold size-4 pt-5">Welcome</h3>
                <img src={user} alt="user" className="width-120 mt-4" />
                <form className="mt-5" onSubmit={formik.handleSubmit}>
                    <div className={(formik.touched.username && formik.errors.username) ? 'border-danger' : 'border-secondary'}>
                        <div 
                            className={`row signup__filed-group ${formik.touched.username && formik.errors.username ? 'border-danger' : 'border-secondary'}`}
                        >
                                <span className={`col-1 lh-44 signup__icon-wrapper ${formik.touched.username && formik.errors.username ? 'border-danger' : 'border-secondary'}`}>
                                <i className="fas fa-envelope"></i>
                            </span>
                            <input
                                name='username'
                                className={`col-11 outline-none p-2 signup__input-border`}
                                type="text"
                                value={formik.values.username}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                placeholder="Enter email..."
                            />
                        </div>
                        <p className="signup__filed--error">{(formik.touched.username && formik.errors.username) ? formik.errors.username : '   '}</p>
                    </div>

                    <div className={(formik.touched.password && formik.errors.password) ? 'border-danger' : 'border-secondary'}>
                        <div 
                            className={`row signup__filed-group ${formik.touched.password && formik.errors.password ? 'border-danger' : 'border-secondary'}`}
                        >
                                <span className={`col-1 lh-44 signup__icon-wrapper ${formik.touched.password && formik.errors.password ? 'border-danger' : 'border-secondary'}`}>
                                <i className="fas fa-lock"></i>
                            </span>
                            <input
                                name='password'
                                className={`col-11 outline-none p-2 signup__input-border`}
                                type="text"
                                placeholder="Enter password..."
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>
                        <p className="signup__filed--error">{(formik.touched.password && formik.errors.password) ? formik.errors.password : ' '}</p>
                    </div>
                    <div className="pl-3 pr-3 mt-3">
                        <p>
                            Create new account? <Link to="/signup">Sign up</Link>
                        </p>
                    </div>
                    <div className="pt-3 pb-3">
                        <button type="submit" className="btn btn-primary w-100 p-2">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
