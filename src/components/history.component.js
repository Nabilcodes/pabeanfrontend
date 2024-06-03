import React, { useEffect, useState } from 'react';
import './History.css';

const UserRequests = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/user/requests') // Replace with your actual API endpoint
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setRequests(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="requests-page">
      <h1>Your Requests</h1>
      <div className="requests-container">
        {requests.map(request => (
          <div className="request-card" key={request.id}>
            <h3>{request.title}</h3>
            <p>{request.description}</p>
            <p><strong>Status:</strong> {request.status}</p>
            <p><strong>Date:</strong> {new Date(request.date).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserRequests;
