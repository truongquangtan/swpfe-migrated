import React from "react";
import { Link } from "react-router-dom";

import "./style.scss";

import { useState } from 'react'

function SignUpPage() {


    const [signForm, setSignForm] = useState(
        {
            email: "",
            fullName: "",
            password: "",
            confirmPassword: "",
            phone: ""
        }
    )

    

    const handleInputOnchange = e => {
        setSignForm(prevState => {
            return {
                ...prevState,
                [e.target.name]: e.target.value
            }
        })
    }

    const checkValidation = e => {
        e.preventDefault() // ngan khong cho submit form 
        let isFullInput = true;
        let validation = false;
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;;
        for (const key of Object.keys(signForm)) {
            if (!isFullInput) {
                break;
            }
            isFullInput = signForm[key].length > 0;
        }

        if (!isFullInput) {
           
            alert('your input not full fill!')
            return validation

        } else if (!signForm.email.match(mailformat)) {
            
            alert('You have entered an invalid email address!')
            return validation
        }
        else if (signForm.confirmPassword != signForm.password) {
            
            alert('your password not match!')
            return validation

        } else if (!signForm.phone.match(phoneno)) {
           
            alert('phone number invalid!')
            return validation
        }
        else {
            
            alert('validation ok!')
            return validation = true

        }

    }


    







    return (
        <div className="row align-items-center justify-content-center text-center">
            <div className="col-4 pt-5">
                <h3 className=" bold size-4 pt-3">Register</h3>
                <form className="mt-5"> 
                    <div className="row p-2">
                        <span className="col-1 lh-44 signup__icon-wrapper">
                            <i className="fas fa-envelope"></i>
                        </span>
                        <input
                            value={signForm.email}
                            name="email"
                            onChange={e => handleInputOnchange(e)}
                            className="col-11 outline-none p-2 signup__input-border"
                            type="text"
                            placeholder="Email"
                            required
                        />
                       
                    </div>
                    <div className="row p-2">
                        <span className="col-1 lh-44 signup__icon-wrapper">
                            <i className="fas fa-lock"></i>
                        </span>
                        <input
                            value={signForm.password}
                            name="password"
                            onChange={e => handleInputOnchange(e)}
                            className="col-11 outline-none p-2 signup__input-border"
                            type="password"
                            placeholder="Password"
                            required
                        />
                        
                    </div>
                    <div className="row p-2">
                        <span className="col-1 lh-44 signup__icon-wrapper">
                            <i className="fas fa-lock"></i>
                        </span>
                        <input
                            value={signForm.confirmPassword}
                            name="confirmPassword"
                            onChange={e => handleInputOnchange(e)}
                            className="col-11 outline-none p-2 signup__input-border"
                            type="password"
                            placeholder="Input password again"
                            required
                        />
                       
                    </div>
                    <div className="row p-2">
                        <span className="col-1 lh-44 signup__icon-wrapper">
                            <i className="fas fa-address-card"></i>
                        </span>
                        <input
                            value={signForm.fullName}
                            name="fullName"
                            onChange={e => handleInputOnchange(e)}
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
                            value={signForm.phone}
                            name="phone"
                            onChange={e => handleInputOnchange(e)}
                            className="col-11 outline-none p-2 signup__input-border"
                            type="text"
                            placeholder="Phone number"
                        />
                        
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
                        <button
                            className="btn btn-primary w-100 p-2"
                            onClick={e => checkValidation(e)}>Sign up</button>
                    </div>
                </form>
            </div>
        </div>
    );




}

export default SignUpPage;
