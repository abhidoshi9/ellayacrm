import React from 'react';
import { Link } from 'react-router-dom';
import bgShapeImage from '../assets/img/illustrations/bg-shape-image-light.png';
import reset from '../assets/img/illustrations/auth-reset-password-illustration-light.png';


const Resetpassword = () => {
    return (
        <>
            <div className="authentication-wrapper authentication-cover">
            
                <div className="authentication-inner row m-0">
                   
                    <div className="d-none d-lg-flex col-lg-8 p-0">
                        <div className="auth-cover-bg auth-cover-bg-color d-flex justify-content-center align-items-center">
                            <img
                                src={reset}
                                alt="auth-reset-password-cover"
                                className="my-5 auth-illustration"
                                data-app-light-img="illustrations/auth-reset-password-illustration-light.png"
                                data-app-dark-img="illustrations/auth-reset-password-illustration-dark.png" />

                            <img
                                src={bgShapeImage}
                                alt="auth-reset-password-cover"
                                className="platform-bg"
                                data-app-light-img="illustrations/bg-shape-image-light.png"
                                data-app-dark-img="illustrations/bg-shape-image-dark.png" />
                        </div>
                    </div>
                 

                  
                    <div className="d-flex col-12 col-lg-4 align-items-center authentication-bg p-6 p-sm-12">
                        <div className="w-px-400 mx-auto mt-12 pt-5">
                            <h4 className="mb-1">Reset Password 🔒</h4>
                            <p className="mb-6">
                                <span className="fw-medium">Your new password must be different from previously used passwords</span>
                            </p>
                            <form id="formAuthentication" className="mb-6" action="auth-login-cover.html" method="GET">
                                <div className="mb-6 form-password-toggle">
                                    <label className="form-label" for="password">New Password</label>
                                    <div className="input-group input-group-merge">
                                        <input
                                            type="password"
                                            id="password"
                                            className="form-control"
                                            name="password"
                                            placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                                            aria-describedby="password" />
                                        <span className="input-group-text cursor-pointer"><i className="ti ti-eye-off"></i></span>
                                    </div>
                                </div>
                                <div className="mb-6 form-password-toggle">
                                    <label className="form-label" for="confirm-password">Confirm Password</label>
                                    <div className="input-group input-group-merge">
                                        <input
                                            type="password"
                                            id="confirm-password"
                                            className="form-control"
                                            name="confirm-password"
                                            placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                                            aria-describedby="password" />
                                        <span className="input-group-text cursor-pointer"><i className="ti ti-eye-off"></i></span>
                                    </div>
                                </div>
                                <button className="btn btn-primary d-grid w-100 mb-6">Set new password</button>
                                <div className="text-center">
                                    <a href="auth-login-cover.html">
                                        <i className="ti ti-chevron-left scaleX-n1-rtl me-1_5"></i>
                                        <Link to={"/"}>Back to login</Link>
                                        
                                    </a>
                                </div>
                            </form>
                        </div>
                    </div>
                   
                </div>
            </div>
        </>
    );
};

export default Resetpassword;