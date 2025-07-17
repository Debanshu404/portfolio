// src/pages/Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserAuth } from '../Context/UserAuthContext'; 

const Home = () => {
  const navigate = useNavigate();
  const { user } = useUserAuth();

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className="home-container">
      <div className="home-card">
        <h1>Welcome {user.displayName} to Your Dashboard</h1>
        <p>Email: {user.email}</p>
        <p>
          Phone: {user.phoneNumber ? user.phoneNumber : 'Not Provided'}
        </p>
        {user.photoURL ? (
          <img src={user.photoURL} alt="User avatar" className="user-photo" />
        ) : (
          <p>Photo: Not Available</p>
        )}
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Home;
