import React from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

import './CreateToken.css'

function CreateToken() {
  return (
    <div className='main-container-createtoken'>


<div className='createtoken-nav-bar'>
        <span className='createtoken-authenti-chain'>AuthentiChain</span>
        <div className='createtoken-nav-links'>
          <Link to="/profile" className='createtoken-nav-btn profile'>
            Profile
          </Link>
          <Link to="/activity" className='createtoken-nav-btn activity'>
            Activity
          </Link>
          <Link to="/login" className='createtoken-nav-btn logout'>
            Logout
          </Link>
        </div>
        <div className='createtoken-lang-icon'>
          <FontAwesomeIcon icon={faGlobe} />
        </div>
      </div>




    <div className='createtoken-main-section'>
    
    
      <div class="createtoken-side-bar">
        <Link to="/dashboard" className='createtoken-dashboard'>
        Dashboard
        </Link>
        <Link to="/uploaddocuments" className='createtoken-upload-documents'>
        Upload Documents
        </Link>
        <Link to="/issueddocuments" className='createtoken-your-documents'>
        Your Documents
        </Link>
        <Link to="/searchdocuments" className='createtoken-search-documents'>
        Search Documents
        </Link>
        <Link to="/createtoken" className='createtoken-token-request'>
        Token Request
        </Link>
        <Link to="/about" className='createtoken-about'>
        About
        </Link>
      </div>
    
    
      <h1 className='createtoken-title-name'>Request Token</h1>
    
    
      <div className='frame'>
        <div className='group' />
        <div className='document'>
          <div className='clip-path-group' />
        </div>
        <span className='aadhar-card'>Aadhar Card</span>
      </div>
      <div className='frame-2'>
        <div className='group-3' />
        <div className='document-4'>
          <div className='clip-path-group-5' />
        </div>
        <span className='aadhar-card-6'>Aadhar Card</span>
      </div>
      <div className='frame-7'>
        <div className='group-8' />
        <div className='document-9'>
          <div className='clip-path-group-a' />
        </div>
        <span className='aadhar-card-b'>Aadhar Card</span>
      </div>
      <div className='frame-c'>
        <div className='group-d' />
        <div className='document-e'>
          <div className='clip-path-group-f' />
        </div>
        <span className='aadhar-card-10'>Aadhar Card</span>
      </div>
      <button className='rectangle'>
        <span className='fetch-token'>Fetch token</span>
      </button>
    </div>

    <div className='createtoken-chatbot' />



    <div className='createtoken-footer'>
      <div className='createtoken-footer-links'>
        <a href='#' className='createtoken-privacy-policy'>Privacy Policy</a>
        <Link to="/about#aboutpage-tc-section" className='createtoken-terms-and-conditions'>Terms and conditions</Link>
        <a href='#' className='createtoken-contact-us'>Contact us</a>
      </div>
    </div>

  </div>

  )
}

export default CreateToken