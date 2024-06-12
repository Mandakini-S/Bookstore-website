import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import loginimage from '../assets/login_page.jpg';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    try {
      const response = await axios.post('/api/signup', { email, password });
      console.log(response.data);
      // Handle successful signup, e.g., save token, redirect
      navigate('/login');
    } catch (error) {
      console.error('There was an error signing up!', error);
      setError('There was an error signing up!');
      
    }
  };

  return (
    <div className="flex flex-row justify-between w-full m-0">
      <div className="bg-white pl-[10%] flex items-center justify-center w-1/2">
        <div className="mt-[40%] flex flex-col h-[75vh]">
          <h2 className="text-3xl font-semibold font-poppins">Welcome!</h2>
          <h3 className="text-lg font-medium text-black mt-2 font-poppins">Please enter your details to sign up.</h3>

          <div className="flex items-center justify-between my-5">
            <div className="border-t w-full"></div>
            <div className="px-4">or</div>
            <div className="border-t w-full"></div>
          </div>

          <form onSubmit={handleSignup}>
            <div className="my-5">
              <input
                type="email"
                className="font-poppins border border-gray-400 rounded-xl h-14 w-[459px] pl-5"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
              />
            </div>
            <div>
              <input
                type="password"
                className="font-poppins border border-gray-400 rounded-xl h-14 w-[459px] pl-5"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
              />
            </div>
            <div>
              <input
                type="password"
                className="font-poppins border border-gray-400 rounded-xl h-14 w-[459px] my-5 pl-5"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm Password"
                required
              />
            </div>

            {error && <div className="text-red-500 text-sm mb-5">{error}</div>}

            <div>
              <button type="submit" className="bg-blue-600 text-white rounded-xl h-14 w-[459px] my-5 text-lg">
                Sign up
              </button>
            </div>
          </form>

          <div className="flex items-center justify-center text-sm mt-5 font-poppins">
            Already have an account?{' '}
            <Link to="/login" className="no-underline text-blue-600 ml-2">
              Log in
            </Link>
          </div>
        </div>
      </div>

      <div className="flex items-end justify-end w-1/2">
        <img src={loginimage} alt="bookshelf" className="h-full w-[86%]" />
      </div>
    </div>
  );
};

export default Signup;
