// src/components/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUserAuth } from '../../Context/UserAuthContext'; 
const ProtectedRoute = ({ children }) => {
  const {Loading,user}=useUserAuth()
  // In a real app, you would check for an auth token
//  console.log(Loading)
    if (Loading) {
      // console.log(Loading)
    return <div>Loading...</div>; // or a spinner
  }

  if (!user) {
    // Redirect to login page if not authenticated
    return <Navigate to="/login" replace />;
  }
  
  return children;
};

export default ProtectedRoute;