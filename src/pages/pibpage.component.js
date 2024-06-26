import React from 'react';
import { useNavigate } from 'react-router-dom';
import ImportDeclarationForm from '../components/pib.component';
import './PibPage.css';

const PibPage = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/home-page');
  };

  return (
    <div className="pib-page">
      <button className="back-button" onClick={handleBackClick}>
        &#8592; Back to Homepage
      </button>
      <h1>Form Upload PIB</h1>
      <ImportDeclarationForm />
    </div>
  );
};

export default PibPage;
