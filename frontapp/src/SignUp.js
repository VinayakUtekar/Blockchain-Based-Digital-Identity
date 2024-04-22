import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

import './SignUp.css';

const SignUp = () => {
  return (

    <div className='main-container-signup'>
      <div className='signup-nav-bar'>
        <span className='signup-authenti-chain'>AuthentiChain</span>
        <div className='signup-nav-links'>
          <Link to="/login" className='signup-nav-btn login'>
            Login
          </Link>
          <Link to="/signup" className='signup-nav-btn signip'>
            Signup
          </Link>
          <Link to="/about" className='signup-nav-btn about'>
            About
          </Link>
        </div>
        <div className='signup-lang-icon'>
          <FontAwesomeIcon icon={faGlobe} />
        </div>
      </div>

      <div className='signup-form'>
        <span className='sign-up-1'>Sign up</span>

        <form className='signup-login-fields'>
          <input type="text" className='signup-username' placeholder='Username' id='userLoginUsername' />

          <div className="signup-radio">
            <label>
              <input type="radio" value="Male" />
              Male
            </label>
            <label>
              <input type="radio" value="Female" />
              Female
            </label>
            <label>
              <input type="radio" value="Prefer not to say" />
              Prefer not to say
            </label>
          </div>


          <label className='signup-DOB' htmlFor="userSignupDOB">DOB:
            <input type="date" className='signup-dob'  id='userSignupDOB' />
          </label>

          <input type="email" className='signup-email' placeholder='Email ID' id='userSignUpEmail' />

          <input type="tel" className='signup-contact' placeholder='Contact Number' id='userSignUpContact' />

          <input type="password" className='signup-password' placeholder='Password' id='userSignUpPassword' />
          <input type="password" className='signup-confirm-password' placeholder='Confirm Password' id='userSignUpConfirmPassword' />

          <Link to="/login">
            <button className='signup-submit'>
              <div className='signup-button'>
                <span className='signup-get-it'>Submit</span>
              </div>
            </button>
          </Link>

        </form>

      </div>


      <div className='signup-redirect-link'>
        <span className='signup-already-have-account'>
          Already have an account? Login&nbsp; 
        </span>
        <Link to="/login" className='signup-login-redirect'>
             here
          </Link>
      </div>


      <div className='signup-footer'>
        <div className='signup-footer-links'>
          <a href='#' className='signup-privacy-policy'>Privacy Policy</a>
          <Link to="/about#aboutpage-tc-section" className='createtoken-terms-and-conditions'>Terms and conditions</Link>
          <a href='#' className='signup-contact-us'>Contact us</a>
        </div>
      </div>
    </div>
  );
};


export default SignUp;
