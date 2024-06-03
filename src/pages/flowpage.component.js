import React from 'react';
import './FlowPage.css';
import { useNavigate } from 'react-router-dom';
import captureImage from '../assets/img/Capture.PNG';

const FlowPage = () => {

  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/home-page');
  };

  return (
    <div className="flow-page">
      <button className="back-button" onClick={handleBackClick}>
        &#8592; Back to Homepage
      </button>
      <h1>Alur Proses Import</h1>
      <img src={captureImage} alt="Alur Proses Import" className="flow-image" />
    </div>
  );
};

export default FlowPage;
