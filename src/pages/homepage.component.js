import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Import the CSS file

const HomePage = () => {
  return (
    <div className="home-container">
      <div className="welcome-text">
        <h1>Welcome to Our Website</h1>
      </div>
      <div className="card-container">
        <Link to="/upload-pib" className="card">
          <h2>Upload Data PIB</h2>
          <p>Click here to upload PIB data</p>
        </Link>
        <Link to="/cek-status" className="card">
          <h2>Cek Status</h2>
          <p>Click here to check status</p>
        </Link>
        <Link to="/cek-status" className="card">
          <h2>Panduan Impor - Ekspor</h2>
          <p>Click here to check status</p>
        </Link>
        <Link to="/cek-status" className="card">
          <h2>Cek Status</h2>
          <p>Click here to check status</p>
        </Link>
        <Link to="/cek-status" className="card">
          <h2>Cek Status</h2>
          <p>Click here to check status</p>
        </Link>
        
      </div>
    </div>
  );
};

export default HomePage;
