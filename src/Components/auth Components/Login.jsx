// src/pages/Login.js
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
// import GoogleLoginButton from '../Pages/GoogleLoginButton';
import AuthAnimation from '../auth Components/AuthAnimation';
import { useUserAuth } from '../../Context/UserAuthContext'; 
import './auth.css'
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);
  const [animationType, setAnimationType] = useState('');
  const [animationMessage, setAnimationMessage] = useState('');
  const navigate = useNavigate();
const {login,user}=useUserAuth()
  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setError('');
    
 try {
    await login(email,password)
    setTimeout(() => navigate('/'), 2000);
    setAnimationType('success');
    setAnimationMessage('Account created successfully!');
    setShowAnimation(true);
   
    console.log("login wala user",user)
  } catch (err) {
    console.error(err);
    setError(err.message);
  } finally {
    setIsLoading(false);
  }
  };

  // const handleGoogleLogin = () => {
  //   setIsLoading(true);
  //   setError('');
    
  //   // Simulate Google login
  //   setTimeout(() => {
  //     localStorage.setItem('isAuthenticated', 'true');
  //     setAnimationType('success');
  //     setAnimationMessage('Google login successful!');
  //     setShowAnimation(true);
      
  //     // Redirect after animation
  //     setTimeout(() => {
  //       navigate('/');
  //     }, 2000);
  //   }, 1500);
  // };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h2>Welcome Back</h2>
          <p>Sign in to continue to your account</p>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          
          {error && <div className="error-message">{error}</div>}
          
          <button 
            type="submit" 
            className="auth-button"
            disabled={isLoading}
          >
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        
        <div className="divider">
          <span>OR</span>
        </div>
{/*         
        <GoogleLoginButton
          // onClick={handleGoogleLogin} 
          disabled={isLoading}
        />
         */}
        <div className="auth-footer">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </div>
      </div>
      
      {showAnimation && (
        <AuthAnimation 
          type={animationType} 
          message={animationMessage}
          onClose={() => setShowAnimation(false)}
        />
      )}
    </div>
  );
};

export default Login;