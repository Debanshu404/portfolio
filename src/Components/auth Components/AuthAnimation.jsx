// src/components/AuthAnimation.js
import React, { useEffect } from 'react';
import { FaCheck, FaTimes, FaExclamationTriangle } from 'react-icons/fa';

const AuthAnimation = ({ type, message, onClose }) => {
  // Auto-close after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 2000);
    
    return () => clearTimeout(timer);
  }, [onClose]);

  // Get animation details based on type
  const getAnimationDetails = () => {
    switch(type) {
      case 'success':
        return {
          icon: <FaCheck />,
          className: 'success',
          title: 'Success!'
        };
      case 'error':
        return {
          icon: <FaTimes />,
          className: 'error',
          title: 'Error!'
        };
      case 'warning':
        return {
          icon: <FaExclamationTriangle />,
          className: 'warning',
          title: 'Notice!'
        };
      default:
        return {
          icon: <FaCheck />,
          className: 'success',
          title: 'Success!'
        };
    }
  };

  const { icon, className, title } = getAnimationDetails();

  return (
    <div className={`auth-animation ${className}`}>
      <div className="animation-content">
        <div className="animation-icon">
          {icon}
        </div>
        <div className="animation-text">
          <h3>{title}</h3>
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
};

export default AuthAnimation;