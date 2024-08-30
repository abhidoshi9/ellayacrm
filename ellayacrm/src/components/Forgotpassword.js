import React, { useEffect } from 'react';
import bgShapeImage from '../assets/img/illustrations/bg-shape-image-light.png';
import forgot from '../assets/img/illustrations/auth-forgot-password-illustration-light.png';
import { Link } from 'react-router-dom';

const Forgotpassword = () => {
    useEffect(() => {
        document.title = 'Forget Password - Ellaya CRM';  // Set your desired title here
    }, []);
    return (
        <div>
            <div className="authentication-wrapper authentication-cover">
                <div className="authentication-inner row m-0">
                    <div className="d-none d-lg-flex col-lg-8 p-0">
                        <div className="auth-cover-bg auth-cover-bg-color d-flex justify-content-center align-items-center">
                            <img
                                src={forgot}
                                alt="auth-forgot-password-cover"
                                className="my-5 auth-illustration d-lg-block d-none"
                                data-app-light-img="illustrations/auth-forgot-password-illustration-light.png"
                                data-app-dark-img="illustrations/auth-forgot-password-illustration-dark.png" />

                            <img
                                src={bgShapeImage}
                                alt="auth-forgot-password-cover"
                                className="platform-bg"
                                data-app-light-img="illustrations/bg-shape-image-light.png"
                                data-app-dark-img="illustrations/bg-shape-image-dark.png" />
                        </div>
                    </div>
              
                    <div className="d-flex col-12 col-lg-4 align-items-center authentication-bg p-sm-12 p-6">
                        <div className="w-px-400 mx-auto mt-12 mt-5">
                            <h4 className="mb-1">Forgot Password? 🔒</h4>
                            <p className="mb-6">Enter your email and we'll send you instructions to reset your password</p>
                            <form id="formAuthentication" className="mb-6" action="auth-reset-password-cover.html" method="GET">
                                <div className="mb-6">
                                    <label for="email" className="form-label">Email</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="email"
                                        name="email"
                                        placeholder="Enter your email"
                                        autofocus />
                                </div>
                                <button className="btn btn-primary d-grid w-100">Send Reset Link</button>
                            </form>
                            <div className="text-center">
                                <a href="auth-login-cover.html" className="d-flex align-items-center justify-content-center">
                                    <i className="ti ti-chevron-left scaleX-n1-rtl me-1_5"></i>
                                    <Link to={"/"}>Back to login</Link>
                                    
                                </a>
                            </div>
                        </div>
                    </div>
         
                </div>
            </div>

        </div>
    );
};

export default Forgotpassword;