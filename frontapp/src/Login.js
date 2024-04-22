import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

import './Login.css'; // Make sure to create a corresponding CSS file

const Login = () => {

  return (

    <div className='main-container-login'>

      <div className='login-nav-bar'>
        <span className='login-authenti-chain'>AuthentiChain</span>
        <div className='login-nav-links'>
          <Link to="/login" className='login-nav-btn login'>
            Login
          </Link>
          <Link to="/signup" className='login-nav-btn signip'>
            Signup
          </Link>
          <Link to="/about" className='login-nav-btn about'>
            About
          </Link>
        </div>
        <div className='login-lang-icon'>
          <FontAwesomeIcon icon={faGlobe} />
        </div>
      </div>

      <div className='login-form'>
        <span className='login-1'>Login</span>
        <form className='login-fields'>
            <input type="text" className='login-username' placeholder='Username' id='userLoginUsername'  />
            <input type="password" className='login-password' placeholder='Password' id='userLoginPassword' />
        </form>
        <Link to="/dashboard">
          <button className='login-submit'>
            <div className='login-button'>
              <span className='login-get-it'>Submit</span>
            </div>
          </button>
        </Link>
        

        <div className='login-flex-row-a'>
          <Link to="/signup" className='login-forgot-password'>
            Forgot Password
          </Link>

          <Link to="/signup" className='login-create-new-account'>
            Create a new account
          </Link>
        </div>

      </div>

      <div className='login-footer'>
        <div className='login-footer-links'>
          <a href='#' className='login-privacy-policy'>Privacy Policy</a>
          <Link to="/about#aboutpage-tc-section" className='createtoken-terms-and-conditions'>Terms and conditions</Link>
          <a href='#' className='login-contact-us'>Contact us</a>
        </div>
      </div>
    </div>

  );
};

export default Login;
