import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import loginimage from '../assets/login_page.jpg';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/login', { email, password });
      console.log(response.data);
      // Handle successful login, e.g., save token, redirect
      navigate('/enter');
    } catch (error) {
      console.error('There was an error logging in!', error);
      // Handle login error
    }
  };

  return (
    <div className="containerr">
    <div className='loginn'>
     <div className="log">

       <h2>Welcome back!</h2>
       <h3>Please enter your details.</h3>

       {/* <div className="google align ">
         <FcGoogle/>&nbsp;&nbsp; Log in with Google.
       </div> */}
       
       <div className='orr' style={{marginTop: "20px", marginBottom:"20px"}}>
         <div className='line'></div>
         <div className='or'>or</div>
         <div className='line'></div>
       </div>
          <form onSubmit={handleLogin}>
            <div style={{marginTop: "20px", marginBottom:"20px"}}>
              <input
                type="email"
                className="email my-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
            </div>
            <div>
              <input
                type="password"
                className="email my-2"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
            </div>

            <div className='orr_or' style={{marginTop: "20px", marginBottom:"20px"}}>
              <div className='checkbox'><input type ="checkbox"/><h3 className='my-1 mmm' style={{fontSize:'16px'}}>&nbsp;&nbsp;Remember Me</h3></div>
              <h3 className='my-1'>Forgot Password?</h3>

            </div>

            <div>
              <button type="submit" className="but my-4">
                Log In
              </button>
            </div>
          </form>

          <div className="orr last" style={{ fontSize: '14px',marginTop: "20px", marginBottom:"20px" }}>
            Don't have an account?{' '}
            <Link to="/user-signup" className="no_underline blue-text">
              &nbsp;Sign up
            </Link>
          </div>
        </div>
      </div>

      <div className="imagee">
        <div className="img">
          <img src={loginimage} alt="bookshelf" />
        </div>
      </div>
    </div>
  );
};

export default Login;
