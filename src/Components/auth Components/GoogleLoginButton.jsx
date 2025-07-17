// src/components/GoogleLoginButton.js
import React from 'react';
import { FcGoogle } from 'react-icons/fc';

const GoogleLoginButton = ({ onClick, disabled, text = "Login with Google" }) => {
  return (
    <button 
      className={`google-login-button ${disabled ? 'disabled' : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      <FcGoogle className="google-icon" />
      {text}
    </button>
  );
};

export default GoogleLoginButton;