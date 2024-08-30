import React, { useState } from 'react';
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import "../assets/vendor/css/rtl/core.css";
import "../assets/vendor/css/pages/page-auth.css";
import "../assets/vendor/css/pages/cards-advance.css";
import "../assets/vendor/css/rtl/theme-default.css";
import "../assets/vendor/fonts/fontawesome.css";
import "../assets/vendor/fonts/tabler-icons.css";
import "../assets/vendor/fonts/flag-icons.css";
import Login from '../components/Login';
import Signup from '../components/Signup';
import Resetpassword from '../components/Resetpassword';
import Forgotpassword from '../components/Forgotpassword';
import Analytics from '../components/dashboard/Analytics';
// import Crm from '../components/dashboard/Crm';

const Routers = () => {
    // Example state for authentication
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Function to handle login (can be replaced with actual authentication logic)
    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    return (
        <>
            <BrowserRouter>
                <Routes>
                    {/* Public Routes */}
                    <Route path="/" element={<Login onLogin={handleLogin} />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/resetpassword" element={<Resetpassword />} />
                    <Route path="/forgotpassword" element={<Forgotpassword />} />
                    
                    {/* Protected Routes */}
                    <Route
                        path="/dashboard/*"
                        element={
                            isLoggedIn ? (
                                <>
                                    <Route path="analytics" element={<Analytics />} />
                                    {/* <Route path="crm" element={<Crm />} /> */}
                                </>
                            ) : (
                                <Navigate to="/" replace />
                            )
                        }
                    />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default Routers;
