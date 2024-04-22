import React from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

import './SearchDocuments.css'

function SearchDocuments() {
  return (
    <div className='main-container-searchdocuments'>




      <div className='searchdocuments-nav-bar'>
        <span className='searchdocuments-authenti-chain'>AuthentiChain</span>
        <div className='searchdocuments-nav-links'>
          <Link to="/profile" className='searchdocuments-nav-btn profile'>
            Profile
          </Link>
          <Link to="/activity" className='searchdocuments-nav-btn activity'>
            Activity
          </Link>
          <Link to="/login" className='searchdocuments-nav-btn logout'>
            Logout
          </Link>
        </div>
        <div className='searchdocuments-lang-icon'>
          <FontAwesomeIcon icon={faGlobe} />
        </div>
      </div>



    <div className='searchdocuments-main-section'>


      <div class="searchdocuments-side-bar">
        <Link to="/dashboard" className='searchdocuments-dashboard'>
        Dashboard
        </Link>
        <Link to="/uploaddocuments" className='searchdocuments-upload-documents'>
        Upload Documents
        </Link>
        <Link to="/issueddocuments" className='searchdocuments-your-documents'>
        Your Documents
        </Link>
        <Link to="/searchdocuments" className='searchdocuments-search-documents'>
        Search Documents
        </Link>
        <Link to="/createtoken" className='searchdocuments-token-request'>
        Token Request
        </Link>
        <Link to="/about" className='searchdocuments-about'>
        About
        </Link>
      </div>

      <h1 className='searchdocuments-title-name'>Search Documents</h1>



      <div className='searchdocuments-recommended-docs'>
        <input type="text" className='rectangle' placeholder='Search your document'/>
      </div>


      {/* <div className='vector-2' />
      <div className='document'>
        <div className='clip-path-group' />
      </div>
      <div className='document-3'>
        <div className='clip-path-group-4' />
      </div>
      <div className='document-5'>
        <div className='clip-path-group-6' />
      </div>
      <div className='document-7'>
        <div className='clip-path-group-8' />
      </div>
      <div className='document-9'>
        <div className='clip-path-group-a' />
      </div>
      <span className='document-b'>Document 1</span>
      <span className='document-c'>Document 2</span>
      <span className='document-d'>Document 3</span>
      <span className='document-e'>Document 4</span>
      <span className='document-5-f'>Document 5</span> */}




    </div>



    <div className='searchdocuments-chatbot' />



    <div className='searchdocuments-footer'>
      <div className='searchdocuments-footer-links'>
        <a href='#' className='searchdocuments-privacy-policy'>Privacy Policy</a>
        <Link to="/about#aboutpage-tc-section" className='createtoken-terms-and-conditions'>Terms and conditions</Link>
        <a href='#' className='searchdocuments-contact-us'>Contact us</a>
      </div>
    </div>




    
  </div>

  );
}

export default SearchDocuments;