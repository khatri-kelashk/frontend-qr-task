   import React, { useState } from 'react';
   import { useNavigate } from "react-router-dom";
    import { URLS } from "../../../constants/constants";
    import '../styles.css'; // Import your CSS file

   const Login = () => {
    const navigate = useNavigate();
       const [email, setEmail] = useState('');
       const [password, setPassword] = useState('');

       const handleSubmit = async (e) => {
         e.preventDefault();

         try {
           const response = await axios.post(
             `${API_URL}user/login`,
             {
               email,
               password,
             },
             {
               headers: {
                 "Content-Type": "application/json",
                 Authorization: "",
               },
             }
           );
           localStorage.setItem("token", response.data.token);
           navigate(URLS.DASHBOARD);
         } catch (error) {
           console.error("Error in Login:", error);
           throw error;
         }
       };

       const NavigateToRegister = () =>{
        navigate(URLS.REGISTER);
       }

       return (
           <div className="form-container">
               <div className="form-card">
                   <h2 className="form-title">Login</h2>
                   <form onSubmit={handleSubmit}>
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
                           className="form-button"
                       >
                           Login
                       </button>
                       <div>
                        <p>Don't have account? <span className='anchor' role='button' onClick={NavigateToRegister}>Click here</span> to Register</p>
                       </div>
                   </form>
               </div>
           </div>
       );
   };

   export default Login;
