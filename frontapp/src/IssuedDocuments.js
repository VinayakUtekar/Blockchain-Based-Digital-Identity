import React from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

import './IssuedDocuments.css'

function IssuedDocuments() {
  return (
    <div className='main-container-issueddocuments'>



    {/* <div className='nav-bar'>
      <span className='authenti-chain'>AuthentiChain</span>
      <div className='lang-icon'>
        <div className='vector' />
      </div>
      <div className='nav-links'>
        <span className='logout'>Logout</span>
        <span className='activity'>Activity</span>
        <span className='profile'>Profile</span>
      </div>
    </div> */}

      <div className='issueddocuments-nav-bar'>
        <span className='issueddocuments-authenti-chain'>AuthentiChain</span>
        <div className='issueddocuments-nav-links'>
          <Link to="/profile" className='issueddocuments-nav-btn profile'>
            Profile
          </Link>
          <Link to="/activity" className='issueddocuments-nav-btn activity'>
            Activity
          </Link>
          <Link to="/login" className='issueddocuments-nav-btn logout'>
            Logout
          </Link>
        </div>
        <div className='issueddocuments-lang-icon'>
          <FontAwesomeIcon icon={faGlobe} />
        </div>
      </div>


    <div className='issueddocuments-main-section'>





      <div class="issueddocuments-side-bar">
        {/* <div className='dashboard-dashboard'>Dashboard</div> */}
        <Link to="/dashboard" className='issueddocuments-dashboard'>
        Dashboard
        </Link>
        <Link to="/uploaddocuments" className='issueddocuments-upload-documents'>
        Upload Documents
        </Link>
        <Link to="/issueddocuments" className='issueddocuments-your-documents'>
        Your Documents
        </Link>
        <Link to="/searchdocuments" className='issueddocuments-search-documents'>
        Search Documents
        </Link>
        <Link to="/createtoken" className='issueddocuments-token-request'>
        Token Request
        </Link>
        <Link to="/about" className='issueddocuments-about'>
        About
        </Link>
      </div>





      {/* <h1 className='issued-documents'>Issued Documents</h1> */}
      <h1 className='issueddocuments-title-name'>Issued Documents</h1>
      {/* <h1 className='uploaddocuments-title-name'>Upload Documents</h1> */}
      





      <div className='issueddocuments-issued-docs'>dscdc</div>

      
      {/* <div className='rectangle'>
        <div className='rectangle-1' />
      </div>
      <div className='frame'>
        <div className='flex-row-cf'>
          <div className='group' />
          <div className='vector-2' />
        </div>
        <div className='document'>
          <div className='clip-path-group' />
        </div>
        <span className='aadhar-card'>Aadhar Card</span>
      </div>
      <div className='frame-3'>
        <div className='flex-row-da'>
          <div className='group-4' />
          <div className='vector-5' />
        </div>
        <div className='document-6'>
          <div className='clip-path-group-7' />
        </div>
        <span className='aadhar-card-8'>Aadhar Card</span>
      </div>
      <div className='frame-9'>
        <div className='flex-row-e'>
          <div className='group-a' />
          <div className='vector-b' />
        </div>
        <div className='document-c'>
          <div className='clip-path-group-d' />
        </div>
        <span className='aadhar-card-e'>Aadhar Card</span>
      </div>
      <div className='frame-f'>
        <div className='flex-row-ba'>
          <div className='group-10' />
          <div className='vector-11' />
        </div>
        <div className='document-12'>
          <div className='clip-path-group-13' />
        </div>
        <span className='aadhar-card-14'>Aadhar Card</span>
      </div>
      <div className='frame-15'>
        <div className='flex-row-db'>
          <div className='group-16' />
          <div className='vector-17' />
        </div>
        <div className='document-18'>
          <div className='clip-path-group-19' />
        </div>
        <span className='aadhar-card-1a'>Aadhar Card</span>
      </div>
      <div className='frame-1b'>
        <div className='flex-row-caf'>
          <div className='group-1c' />
          <div className='vector-1d' />
        </div>
        <div className='document-1e'>
          <div className='clip-path-group-1f' />
        </div>
        <span className='aadhar-card-20'>Aadhar Card</span>
      </div>*/}
      
    </div>

    <div className='uploaddocuments-chatbot' />



    <div className='uploaddocuments-footer'>
      <div className='uploaddocuments-footer-links'>
        <a href='#' className='uploaddocuments-privacy-policy'>Privacy Policy</a>
        <Link to="/about#aboutpage-tc-section" className='createtoken-terms-and-conditions'>Terms and conditions</Link>
        <a href='#' className='uploaddocuments-contact-us'>Contact us</a>
      </div>
    </div>











  </div>

  );
}
export default IssuedDocuments;
