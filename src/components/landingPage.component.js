import React from 'react';

const LandingPage = () => {
  return (
    <div>
      <p style={{ fontSize: '24px' }}>Selamat Datang di Pabean!</p>
      <div style={{ marginTop: '20px', textAlign: 'right' }}>
        <span style={{ marginRight: '10px', color: 'grey', textDecoration: 'underline', cursor: 'pointer' }}>Upload Dokumen PIB</span>
        <button style={{ padding: '5px 10px', backgroundColor: 'grey', color: 'white', border: 'none', borderRadius: '25px', cursor: 'pointer' }}>Tutup</button>
      </div>
    </div>
  );
};

export default LandingPage;