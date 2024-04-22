import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

import './UploadDocuments.css'

function UploadDocuments() {
  const [inputType, setInputType] = useState('text');

  const handleNewFolderClick = () => {
    setInputType('text');
  };

  const handleUploadFileClick = () => {
    setInputType('file');
  };

  return (
    <div className='main-container-uploaddocuments'>

      <div className='uploaddocuments-nav-bar'>
        <span className='uploaddocuments-authenti-chain'>AuthentiChain</span>
        <div className='uploaddocuments-nav-links'>
          <Link to="/profile" className='uploaddocuments-nav-btn profile'>
            Profile
          </Link>
          <Link to="/activity" className='uploaddocuments-nav-btn activity'>
            Activity
          </Link>
          <Link to="/login" className='uploaddocuments-nav-btn logout'>
            Logout
          </Link>
        </div>
        <div className='uploaddocuments-lang-icon'>
          <FontAwesomeIcon icon={faGlobe} />
        </div>
      </div>



      <div className='uploaddocuments-main-section'>


        <div class="uploaddocuments-side-bar">
          {/* <div className='dashboard-dashboard'>Dashboard</div> */}
          <Link to="/dashboard" className='uploaddocuments-dashboard'>
            Dashboard
          </Link>
          <Link to="/uploaddocuments" className='uploaddocuments-upload-documents'>
            Upload Documents
          </Link>
          <Link to="/issueddocuments" className='uploaddocuments-your-documents'>
            Your Documents
          </Link>
          <Link to="/searchdocuments" className='uploaddocuments-search-documents'>
            Search Documents
          </Link>
          <Link to="/createtoken" className='uploaddocuments-token-request'>
            Token Request
          </Link>
          <Link to="/about" className='uploaddocuments-about'>
            About
          </Link>
        </div>


        <h1 className='uploaddocuments-title-name'>Upload Documents</h1>

        <div className='uploaddocuments-upload-bar'>
          <div className='upload-option'>
            <div className='new-folder-btn'>
              {/* <div className='new-folder'>New Folder</div> */}
              <button onClick={handleNewFolderClick} className='new-folder'>New Folder</button>
            </div>

            <div className='new-file-btn'>
              {/* <div className='upload-file'>Upload File</div> */}
              <button onClick={handleUploadFileClick} className='upload-file'>Upload File</button>
            </div>
          </div>


          {/* <div className='doc-upload-column'> */}
          <div className='doc-upload-column'>

            <form className='uploaddocuments-searchform'>
              <InputWithButton inputType={inputType} />
            </form>
              {/* <select value={myCar} onChange={handleChange}> */}
              {/* <select className='input-type-option'>
                <option value="Ford">Adharcard</option>
                <option value="Volvo">Pancard</option>
                <option value="Fiat">Student ID</option>
                <option value="Fiat">Marksheet</option>
                <option value="Fiat">Fee Receipt</option>
                <option value="Fiat">Library Card</option>
                <option value="Fiat">Other</option>
              </select> */}

            {/* <input type="button" className='browse' value="Browse" /> */}
          </div>

        </div>


      {/* folder and files */}
        {/* <div className='uploaddocuments-uploaded-folders'>
        <div className='rectangle'>
          v
          <div className='rectangle-5' />
        </div>
        <div className='vector-6' />
        <div className='vector-7' />
        <div className='document'>
          <div className='clip-path-group' />
        </div>
        <div className='document-8'>
          <div className='clip-path-group-9' />
        </div>
        <span className='mark-sheets'>Marksheets</span>
        <span className='offer-letters'>Offer Letters</span>
        <div className='document-a'>
          <div className='clip-path-group-b' />
        </div>
        <div className='document-c'>
          <div className='clip-path-group-d' />
        </div>
        <div className='document-e'>
          <div className='clip-path-group-f' />
        </div>
        <div className='document-10'>
          <div className='clip-path-group-11' />
        </div>
        </div> */}


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


function InputWithButton({ inputType }) {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleCreateOrBrowseClick = () => {
    if (inputType === 'text') {
      // Handle create action
      console.log('Creating folder with name:', inputValue);
    } else if (inputType === 'file') {
      // Handle browse action
      console.log('Uploading file:', inputValue);
    }
    setInputValue('');
  };

  return (
    // <div className='type-and-button'>
    //   {inputType === 'text' ? (
    //     <input type="text" value={inputValue} onChange={handleChange} />
    //   ) : (
    //     <select value={inputValue} onChange={handleChange}>
    //       <option value="Adharcard">Adharcard</option>
    //       <option value="Pancard">Pancard</option>
    //       <option value="Student ID">Student ID</option>
    //       <option value="Marksheet">Marksheet</option>
    //       <option value="Fee Receipt">Fee Receipt</option>
    //       <option value="Library Card">Library Card</option>
    //       <option value="Other">Other</option>
    //     </select>
    //   )}
    //   <button onClick={handleCreateOrBrowseClick}>
    //     {inputType === 'text' ? 'Create' : 'Browse'}
    //   </button>
    // </div>

      <div className="type-and-button">
        {inputType === 'text' ? (
          <input type="text" value={inputValue} onChange={handleChange} className="input-type-text" placeholder='Enter file name' />
        ) : (
            <select value={inputValue} onChange={handleChange} className="input-type-option">
              <option value="Adharcard">Adharcard</option>
              <option value="Pancard">Pancard</option>
              <option value="Student ID">Student ID</option>
              <option value="Marksheet">Marksheet</option>
              <option value="Fee Receipt">Fee Receipt</option>
              <option value="Library Card">Library Card</option>
              <option value="Other">Other</option>
            {/* Render file options if needed */}
          </select>
        )}
        <button onClick={handleCreateOrBrowseClick} className={inputType === 'text' ? 'create' : 'browse'}>
          {inputType === 'text' ? 'Create' : 'Browse'}
        </button>
      </div>












  );
}

export default UploadDocuments;
