import React from 'react';
import UserRequests from '../components/history.component';
import './HistoryPage.css';

const UserRequestsPage = () => {
  return (
    <div className="user-requests-page">
      <h1>User Requests</h1>
      <UserRequests />
    </div>
  );
};

export default UserRequestsPage;
