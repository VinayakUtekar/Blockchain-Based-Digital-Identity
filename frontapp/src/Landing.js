import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

import './Landing.css';
// import { faGlobe } from '@fortawesome/pro-solid-svg-icons';

// const Landing = () => {  
export function Landing() {
  return (
    <div className='main-container-landing'>

      <div className='landing-nav-bar'>
        <span className='landing-authenti-chain'>AuthentiChain</span>
        <div className='landing-nav-links'>
          
                    <Link to="/login" className='landing-nav-btn login'>
            Login
          </Link>
          <Link to="/signup" className='landing-nav-btn signup'>
            Signup
          </Link>
          <Link to="/about" className='landing-nav-btn about'>
            About
          </Link>
        </div>
        <div className='landing-lang-icon'>
          <FontAwesomeIcon icon={faGlobe} />
        </div>
      </div>


      <div className="landing-main-section">
        <span className='landing-seamless-security'>
          Seamless security, shareable tokens: discover the power of our
          blockchain.
        </span>
        <span className='landing-identity-management'>
          Forget juggling passwords and paper trails! Welcome to the future of
          identity management, empowering you with privacy and verifiable
          credentials.
        </span>
        <div className='landing-oldschool-button'>
          <button className='landing-button'>
            <span className='landing-sign-up'>Let’s take a tour !</span>
          </button>
        </div>
      </div>

      <div className='landing-chatbot' >

      </div>


      <div className='landing-footer'>
        <div className='landing-footer-links'>
          <a href='#'className='landing-privacy-policy'>Privacy Policy</a>
          <Link to="/about#aboutpage-tc-section" className='createtoken-terms-and-conditions'>Terms and conditions</Link>
          <a href='#'className='landing-contact-us'>Contact us</a>
        </div>
      </div>

      <div className='blocks-graph' >

      </div>

    </div>


  );
}

export default Landing;