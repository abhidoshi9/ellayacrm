import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import loginIllustration from '../assets/img/illustrations/auth-login-illustration-light.png';
import bgShapeImage from '../assets/img/illustrations/bg-shape-image-light.png';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();  // Hook for navigation

    // Set the document title when the component mounts
    useEffect(() => {
        document.title = 'Login - Ellaya CRM';  // Set your desired title here
    }, []);

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        // Check if email or password is empty
        if (!email || !password) {
            setError('Please enter both email and password');
            return;
        }

        try {
            const response = await axios.post('http://localhost:8000/api/login', {
                email,
                password
            });

            console.log('Login response:', response);

            if (response.status === 200) {
                const user = response.data.user;
                console.log('Login successful:', user);

                // Clear the form fields
                setEmail('');
                setPassword('');

                // Save the user data and token to localStorage if needed
                localStorage.setItem('currentUser', JSON.stringify(user));
                localStorage.setItem('token', response.data.token); // Assuming token is returned

                // Redirect to the home page (or dashboard, or any other page)
                navigate('/Homepage');  // Replace '/home' with your desired route
                setSuccess('User login successfully!');
            } else {
                setError('Invalid email or password');
            }
        } catch (err) {
            console.error('Login error:', err);  // Log the actual error for debugging
            setError('Invalid email or password');  // Display error message to user
        }
    };

    return (
        <div className="authentication-wrapper authentication-cover">
            <div className="authentication-inner row m-0">
                <div className="d-none d-lg-flex col-lg-8 p-0">
                    <div className="auth-cover-bg auth-cover-bg-color d-flex justify-content-center align-items-center">
                        <img src={loginIllustration} alt="auth-login-cover" className="my-5 auth-illustration" />
                        <img src={bgShapeImage} alt="auth-login-cover" className="platform-bg" />
                    </div>
                </div>
                <div className="d-flex col-12 col-lg-4 align-items-center authentication-bg p-sm-12 p-6">
                    <div className="w-px-400 mx-auto mt-12 pt-5">
                        <h4 className="mb-1">Welcome to Ellaya! 👋</h4>
                        <p className="mb-6">Please sign-in to your account and start the adventure</p>

                        <form className="mb-6" onSubmit={handleLogin}>
                            <div className="mb-6">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email or username"
                                    autoFocus
                                />
                            </div>
                            <div className="mb-6 form-password-toggle">
                                <label htmlFor="password" className="form-label">Password</label>
                                <div className="input-group input-group-merge">
                                    <input
                                        type="password"
                                        id="password"
                                        className="form-control"
                                        name="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                                    />
                                    <span className="input-group-text cursor-pointer"><i className="ti ti-eye-off"></i></span>
                                </div>
                            </div>
                            <div class="my-8">
                                <div class="d-flex justify-content-between">
                                    <div class="form-check mb-0 ms-2">
                                        <input class="form-check-input" type="checkbox" id="remember-me" />
                                        <label class="form-check-label" for="remember-me"> Remember Me </label>
                                    </div>
                                    <Link to={"/forgotpassword"}>Forgot Password?</Link>

                                </div>
                            </div>
                            {error && <p style={{ color: 'red' }}>{error}</p>}
                            {success && <p style={{ color: 'green' }}>{success}</p>}
                            <button className="btn btn-primary d-grid w-100" type="submit">Sign in</button>
                        </form>

                        <p className="text-center">
                            <span>New on our platform? </span>
                            <Link to="/signup">Create an account</Link>
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

export default Login;
