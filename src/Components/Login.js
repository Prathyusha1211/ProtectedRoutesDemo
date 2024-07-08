// import React, { Component } from 'react';
// import './Login.css'; // Import your CSS file for login page styling

// export class Login extends Component {
//   render() {
//     return (
//       <div className='login-container'>
//         <h2 className='login-title'>Login</h2>
//         <div className='login-form'>
//           <form>
//             <div className='form-group'>
//               <label htmlFor='username'>Username</label>
//               <input
//                 type='text'
//                 className='form-control'
//                 id='username'
//                 name='username'
//                 placeholder='Enter your username'
//               />
//             </div>
//             <div className='form-group'>
//               <label htmlFor='password'>Password</label>
//               <input
//                 type='password'
//                 className='form-control'
//                 id='password'
//                 name='password'
//                 placeholder='Enter your password'
//               />
//             </div>
//             <button type='submit' className='btn btn-primary'>
//               Login
//             </button>
//           </form>
//         </div>
//       </div>
//     );
//   }
// }


// Login.js

import React, { useState } from 'react';
import { login } from './authApi';
import './Login.css'; // Import your CSS file for login page styling

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const token = await login(username, password); // Call login function to get JWT token
      localStorage.setItem('token', token); // Store token in localStorage
      onLogin(); // Notify parent component (e.g., App) about successful login
    } catch (error) {
      setError(error.message); // Set error message if login fails
    }
  };

  return (
    <div className='login-container'>
      <h2 className='login-title'>Login</h2>
      <div className='login-form'>
        <form onSubmit={handleLogin}>
          <div className='form-group'>
            <label htmlFor='username'>Username</label>
            <input
              type='text'
              className='form-control'
              id='username'
              name='username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder='Enter your username'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              className='form-control'
              id='password'
              name='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Enter your password'
            />
          </div>
          {error && <p className='error-message'>{error}</p>}
          <button type='submit' className='btn btn-primary'>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;


