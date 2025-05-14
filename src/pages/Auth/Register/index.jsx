import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { URLS, API_URL } from "../../../constants/constants";
import { getEmptyHeadersForHttpReq } from "../../../constants/token";
import '../styles.css'; // Import your CSS file

const Register = () => {
    const navigate = useNavigate();
    const [user_name, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
        const response = await axios.post(
            `${API_URL}user/register`,
            {
            user_name,
            email,
            password,
            },
            {
            ...getEmptyHeadersForHttpReq(),
            }
        );
        console.log("response-->",response);
        
        // localStorage.setItem('token', response.data.token);
        navigate(URLS.LOGIN);

        } catch (error) {
        console.error('Error in Registration:', error)
        throw error
        }
    };

    const NavigateToLogin = () => {
        navigate(URLS.LOGIN);
    };

       return (
           <div className="form-container">
               <div className="form-card">
                   <h2 className="form-title">Register</h2>
                   <form onSubmit={handleSubmit}>
                       <div className="form-group">
                           <label htmlFor="user_name" className="form-label">User Name</label>
                           <input
                               type="user_name"
                               id="user_name"
                               value={user_name}
                               onChange={(e) => setUserName(e.target.value)}
                               required
                               className="form-input"
                           />
                       </div>
                       <div className="form-group">
                           <label htmlFor="email" className="form-label">Email</label>
                           <input
                               type="email"
                               id="email"
                               value={email}
                               onChange={(e) => setEmail(e.target.value)}
                               required
                               className="form-input"
                           />
                       </div>
                       <div className="form-group mb-6">
                           <label htmlFor="password" className="form-label">Password</label>
                           <input
                               type="password"
                               id="password"
                               value={password}
                               onChange={(e) => setPassword(e.target.value)}
                               required
                               className="form-input"
                           />
                       </div>
                       <button
                           type="submit"
                           className="form-button mr-12"
                       >
                           Register
                       </button>
                       <div>
                        <p>Already have account? <span className='anchor' role='button' onClick={NavigateToLogin}>Click here</span> to Login</p>
                       </div>
                   </form>
               </div>
           </div>
       );
   };

   export default Register;
