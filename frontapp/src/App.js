import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './Landing';
import Login from './Login';
import SignUp from './SignUp';
import Dashboard from './Dashboard';
import UploadDocuments from './UploadDocuments';
import IssuedDocuments from './IssuedDocuments';
import SearchDocuments from './SearchDocuments';
import CreateToken from './CreateToken';
import About from './About';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/uploaddocuments" element={<UploadDocuments />} />
        <Route path="/issueddocuments" element={<IssuedDocuments />} />
        <Route path="/searchdocuments" element={<SearchDocuments />} />
        <Route path="/createtoken" element={<CreateToken />} />
        <Route path="/about" element={<About />} />
        <Route path="/about"  component={About} element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
