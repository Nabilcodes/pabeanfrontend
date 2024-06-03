import React from 'react';
import CheckStatusForm from '../components/CheckStatusForm.component';

const StatusPage = () => {
  return (
    <div className="status-page-container">
      <h1>Status Page</h1>
      <p>Check the status of your request below:</p>
      <CheckStatusForm />
    </div>
  );
};

export default StatusPage;
