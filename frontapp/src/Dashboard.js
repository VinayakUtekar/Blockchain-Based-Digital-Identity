import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'


import './Dashboard.css';
function Dashboard() {
  return (
    <div className='main-container-dashboard'>



      <div className='dashboard-nav-bar'>
        <span className='dashboard-authenti-chain'>AuthentiChain</span>
        <div className='dashboard-nav-links'>
          <Link to="/profile" className='dashboard-nav-btn profile'>
            Profile
          </Link>
          <Link to="/activity" className='dashboard-nav-btn activity'>
            Activity
          </Link>
          <Link to="/login" className='dashboard-nav-btn logout'>
            Logout
          </Link>
        </div>
        <div className='dashboard-lang-icon'>
          <FontAwesomeIcon icon={faGlobe} />
        </div>
      </div>




      {/* <div className='flex-row-a'> */}


      <div class="dashboard-main-section">


        {/* sidebar */}
        <div class="dashboard-side-bar">
          {/* <div className='dashboard-dashboard'>Dashboard</div> */}
          <Link to="/dashboard" className='dashboard-dashboard'>
          Dashboard
          </Link>
          <Link to="/uploaddocuments" className='dashboard-upload-documents'>
          Upload Documents
          </Link>
          <Link to="/issueddocuments" className='dashboard-your-documents'>
          Your Documents
          </Link>
          <Link to="/searchdocuments" className='dashboard-search-documents'>
          Search Documents
          </Link>
          <Link to="/createtoken" className='dashboard-token-request'>
          Token Request
          </Link>
          <Link to="/about" className='dashboard-about'>
          About
          </Link>
        </div>



        <div class="dashboard-profile-name">
          <div className='dashboard-avatar' ></div>
          <div className='dashboard-hello-aditya'>
            <span className='dashboard-hello'>Hello, </span>
            <span className='dashboard-aditya'>Vinayak Utekar</span>
          </div>
        </div>


        <div class="dashboard-your-docs">
          <div className='dashboard-issued-overview'>

            <span className='dashboard-your-documents-a'>Your Documents</span>


            <div className='dashboard-document-row'>
              <div className='dashboard-frame'>
                <div className='dashboard-document-b'>
                </div>
                <div className='dashboard-document-1'>Aadharcard</div>
              </div>

              <div className='dashboard-frame'>
                <div className='dashboard-document-b'>
                </div>
                <div className='dashboard-document-1'>Student ID</div>
              </div>

              <div className='dashboard-frame'>
                <div className='dashboard-document-b'>
                </div>
                <div className='dashboard-document-1'>Fee Receipt</div>
              </div>
            </div>


            <button className='dashboard-redirect-your-doc'>
              <div className='dashboard-view-more-btn'>
              <Link to="/issueddocuments" className='dashboard-btn-text'>
                View All
              </Link>
              </div>
            </button>

          </div>
        </div>


        <div class="dashboard-suggested-docs">
          <div className='dashboard-recommended-overview'>
            <span className='dashboard-recommended-documents'>Recommended Documents</span>

            <div className='dashboard-flex-row-e'>

              <div className='dashboard-caret-left-solid'>
                {/* <div className='vector-6' />  */}
                L
              </div>



              <div className='dashboard-document-row'>
                <div className='dashboard-recommend-frame'>
                  <div className='dashboard-document-b'>
                  </div>
                  <div className='dashboard-document-1'>Marksheet</div>
                </div>

                <div className='dashboard-recommend-frame'>
                  <div className='dashboard-document-b'>
                  </div>
                  <div className='dashboard-document-1'>Scholarship</div>
                </div>

                <div className='dashboard-recommend-frame'>
                  <div className='dashboard-document-b'>
                  </div>
                  <div className='dashboard-document-1'>Pancard</div>
                </div>
              </div>


              <div className='dashboard-caret-right-solid'>
                {/* <div className='vector-7' /> */}
                R
              </div>

            </div>




          </div>
        </div>


      </div>









      <div className='dashboard-chatbot' />



      <div className='dashboard-footer'>
        <div className='dashboard-footer-links'>
          <a href='#' className='dashboard-privacy-policy'>Privacy Policy</a>
          <Link to="/about#aboutpage-tc-section" className='createtoken-terms-and-conditions'>Terms and conditions</Link>
          <a href='#' className='dashboard-contact-us'>Contact us</a>
        </div>
      </div>


    </div>

  );
}

export default Dashboard;
