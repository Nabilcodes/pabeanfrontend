import React, { useState } from 'react';
import './CheckStatusForm.css';

const CheckStatusForm = () => {
  const [status, setStatus] = useState('');
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate checking status, replace with actual logic
    setStatus(`Status for ${inputValue}: Pending`); // Replace 'Pending' with actual status
    setInputValue('');
  };

  return (
    <div className="check-status-container">
      <form onSubmit={handleSubmit} className="status-form">
        <input
          type="text"
          placeholder="Enter ID or code"
          value={inputValue}
          onChange={handleInputChange}
          className="status-input"
        />
        <button type="submit" className="status-button">
          Cek Status
        </button>
      </form>
      <div className="status-result">
        {status && <p>{status}</p>}
      </div>
    </div>
  );
};

export default CheckStatusForm;
