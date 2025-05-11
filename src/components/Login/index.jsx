   import React, { useState } from 'react';

   const Login = () => {
       const [email, setEmail] = useState('');
       const [password, setPassword] = useState('');

       const handleSubmit = (e) => {
           e.preventDefault();
           console.log('Email:', email);
           console.log('Password:', password);
           // Add authentication logic here
       };

       return (
           <div className="flex items-center justify-center min-h-screen bg-gray-100">
               <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                   <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                   <form onSubmit={handleSubmit}>
                       <div className="mb-4">
                           <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                           <input
                               type="email"
                               id="email"
                               value={email}
                               onChange={(e) => setEmail(e.target.value)}
                               required
                               className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                           />
                       </div>
                       <div className="mb-6">
                           <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                           <input
                               type="password"
                               id="password"
                               value={password}
                               onChange={(e) => setPassword(e.target.value)}
                               required
                               className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                           />
                       </div>
                       <button
                           type="submit"
                           className="w-full bg-blue-500 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                       >
                           Login
                       </button>
                   </form>
               </div>
           </div>
       );
   };

   export default Login;
