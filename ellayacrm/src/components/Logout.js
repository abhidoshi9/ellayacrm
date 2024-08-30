import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Logout = () => {
    const history = useHistory();

    const handleLogout = async () => {
        try {
            const response = await axios.post(' http://localhost:8000/api/logout');
          
            if (response.data.success) {
                // Clear session data from local storage
                localStorage.removeItem('user_id');
                localStorage.removeItem('user_name');
                localStorage.removeItem('user_email');

                // Redirect to login page
                history.push('/');
            } else {
                alert(response.data.message);
            }
        } catch (error) {
            console.error("Logout error", error);
            alert('An error occurred during logout.');
        }
    };

    return (
        <button onClick={handleLogout}>Logout</button>
    );
};


export default Logout;
