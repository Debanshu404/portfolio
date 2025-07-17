import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import './App.css';
import Login from './Components/auth Components/Login';
import Signup from './Components/auth Components/Signup';
import ProtectedRoute from './Components/auth Components/ProtectedRoute';
import { UserAuthProvider } from './Context/UserAuthContext';
import HomePage from './Components/HomePage';



function App() {
  return (
    <UserAuthProvider>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    </UserAuthProvider>
  );
}

export default App;
