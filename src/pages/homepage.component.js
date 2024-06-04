import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Import the CSS file

const HomePage = () => {
  return (
    <div className="home-container">
      <div className="welcome-text">
        <h1>Selamat datang di Pabean!</h1>
      </div>
      <div className="card-container">
        <Link to="/upload-pib" className="card">
          <h2>Upload Data PIB</h2>
          <p>Upload data PIB anda</p>
        </Link>
        <Link to="/cek-status" className="card">
          <h2>Cek Status</h2>
          <p>Cek status permintaan anda</p>
        </Link>
        <Link to="/alur-impor" className="card">
          <h2>Alur Proses Impor</h2>
          <p>Lihat alur proses impor secara umum</p>
        </Link>
        <Link to="/riwayat-permintaan" className="card">
          <h2>Riwayat Permintaan</h2>
          <p>Lihat riwayat permintaan anda</p>
        </Link>
        
      </div>
    </div>
  );
};

export default HomePage;
