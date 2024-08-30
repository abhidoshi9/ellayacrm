import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import registerIllustration from '../assets/img/illustrations/auth-register-illustration-light.png';
import bgShapeImage from '../assets/img/illustrations/bg-shape-image-light.png';

const Signup = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        termsChecked: false
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();  // Hook for navigation

    // Set the document title when the component mounts
    useEffect(() => {
        document.title = 'Sign Up - Ellaya CRM';  // Set your desired title here
    }, []);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        // Validate form data
        if (!formData.email || !formData.password || !formData.name) {
            setError('Please fill in all required fields');
            return;
        }

        // if (!formData.termsChecked) {
        //     setError('You must agree to the terms and conditions');
        //     return;
        // }

        try {
            const response = await axios.post('http://localhost:8000/api/register', {
                name: formData.name,
                email: formData.email,
                password: formData.password
            });

            console.log('Signup response:', response);

            if (response.status === 201) { // Assuming 201 is returned on successful creation
                setSuccess('User registered successfully!');
                console.log('Signup successful:', formData);

                // Clear the form
                setFormData({
                    name: '',
                    email: '',
                    password: '',
                    termsChecked: false
                });

                // Redirect to login page
                navigate('/');  // Replace with your desired route
            } else {
                setError('Email already registered');
            }
        } catch (err) {
            setError('Email already registered');
            console.error('Signup error:', err);
        }
    };

    return (
        <div className="authentication-wrapper authentication-cover">
            <div className="authentication-inner row m-0">
                <div className="d-none d-lg-flex col-lg-8 p-0">
                    <div className="auth-cover-bg auth-cover-bg-color d-flex justify-content-center align-items-center">
                        <img
                            src={registerIllustration}
                            alt="auth-register-cover"
                            className="my-5 auth-illustration"
                        />
                        <img
                            src={bgShapeImage}
                            alt="auth-register-cover"
                            className="platform-bg"
                        />
                    </div>
                </div>

                <div className="d-flex col-12 col-lg-4 align-items-center authentication-bg p-sm-12 p-6">
                    <div className="w-px-400 mx-auto mt-12 pt-5">
                        <h4 className="mb-1">Adventure starts here 🚀</h4>
                        <p className="mb-6">Make your app management easy and fun!</p>

                        <form className="mb-6" onSubmit={handleSignup}>
                            <div className="mb-6">
                                <label htmlFor="username" className="form-label">Username</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter your username"
                                    autoFocus
                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input
                                    type="email" // Changed to type email
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div className="mb-6 form-password-toggle">
                                <label className="form-label" htmlFor="password">Password</label>
                                <div className="input-group input-group-merge">
                                    <input
                                        type="password"
                                        id="password"
                                        className="form-control"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                                        aria-describedby="password"
                                    />
                                    <span className="input-group-text cursor-pointer"><i className="ti ti-eye-off"></i></span>
                                </div>
                            </div>
                            <div className="mb-6">
                                <div className="form-check mb-0 ms-2">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="termsChecked"
                                        name="termsChecked"
                                        checked={formData.termsChecked}
                                        onChange={handleChange}
                                    />
                                    <label className="form-check-label" htmlFor="termsChecked">
                                        I agree to <Link to="#">privacy policy & terms</Link>
                                    </label>
                                </div>
                            </div>
                            {error && <p style={{ color: 'red' }}>{error}</p>}
                            {success && <p style={{ color: 'green' }}>{success}</p>}
                            <button className="btn btn-primary d-grid w-100" type="submit">Sign up</button>
                        </form>

                        <p className="text-center">
                            <span>Already have an account? </span>
                            <Link to="/">Sign in instead</Link>
                        </p>

                        <div className="divider my-6">
                            <div className="divider-text">or</div>
                        </div>

                        <div className="d-flex justify-content-center">
                            <a href="#" className="btn btn-sm btn-icon rounded-pill btn-text-facebook me-1_5">
                                <i className="tf-icons ti ti-brand-facebook-filled"></i>
                            </a>
                            <a href="#" className="btn btn-sm btn-icon rounded-pill btn-text-twitter me-1_5">
                                <i className="tf-icons ti ti-brand-twitter-filled"></i>
                            </a>
                            <a href="#" className="btn btn-sm btn-icon rounded-pill btn-text-github me-1_5">
                                <i className="tf-icons ti ti-brand-github-filled"></i>
                            </a>
                            <a href="#" className="btn btn-sm btn-icon rounded-pill btn-text-google-plus">
                                <i className="tf-icons ti ti-brand-google-filled"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
